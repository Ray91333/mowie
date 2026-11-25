/*
 * Mówię — бесплатный ИИ-собеседник для вкладки «Rozmowa».
 * Cloudflare Worker: принимает сообщения с сайта и пересылает их в Gemini API.
 * Ключ Gemini хранится в Cloudflare как секрет GEMINI_KEY и в браузер не попадает.
 * Инструкция по установке: AI_SETUP.md
 */

// Сайты, которым разрешено обращаться к этому Worker
const ALLOWED_ORIGINS = [
  "https://ray91333.github.io",
  "http://localhost:8766",
  "http://127.0.0.1:8766",
];

// Сколько сообщений в сутки можно отправить с одного IP-адреса (примерный лимит)
const DAILY_LIMIT = 80;
// Сколько сообщений в минуту можно отправить с одного IP-адреса
const MINUTE_LIMIT = 8;

// Модель по умолчанию. Можно поменять без правки кода: переменная MODEL в настройках Worker.
const DEFAULT_MODEL = "gemini-flash-latest";

const hits = new Map(); // ip -> {day, n, min, m}

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function reply(status, body, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...cors(origin) },
  });
}

function overLimit(ip) {
  const now = Date.now();
  const day = new Date(now).toISOString().slice(0, 10);
  const min = Math.floor(now / 60000);
  let h = hits.get(ip);
  if (!h || h.day !== day) h = { day, n: 0, min, m: 0 };
  if (h.min !== min) { h.min = min; h.m = 0; }
  if (h.n >= DAILY_LIMIT) return "daily_limit";
  if (h.m >= MINUTE_LIMIT) return "minute_limit";
  h.n++; h.m++;
  hits.set(ip, h);
  if (hits.size > 5000) hits.clear();
  return null;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (!ALLOWED_ORIGINS.includes(origin)) {
      return new Response("Forbidden", { status: 403 });
    }
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (request.method !== "POST") return reply(405, { error: "method" }, origin);
    if (!env.GEMINI_KEY) return reply(500, { error: "no_key" }, origin);

    let body;
    try {
      const raw = await request.text();
      if (raw.length > 60000) return reply(413, { error: "too_large" }, origin);
      body = JSON.parse(raw);
    } catch (e) {
      return reply(400, { error: "bad_json" }, origin);
    }

    const system = String(body.system || "").slice(0, 16000);
    const msgs = Array.isArray(body.messages) ? body.messages.slice(-30) : [];
    const contents = msgs
      .filter((m) => m && typeof m.content === "string" && m.content.trim())
      .map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content.slice(0, 4000) }],
      }));
    if (!contents.length || contents[contents.length - 1].role !== "user") {
      return reply(400, { error: "bad_messages" }, origin);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const lim = overLimit(ip);
    if (lim) return reply(429, { error: lim }, origin);

    const model = env.MODEL || DEFAULT_MODEL;
    const gen = { temperature: 0.7, maxOutputTokens: 2048 };
    if (body.json) gen.responseMimeType = "application/json";

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: { "content-type": "application/json", "x-goog-api-key": env.GEMINI_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents,
          generationConfig: gen,
        }),
      }
    );

    if (r.status === 429) return reply(429, { error: "busy" }, origin);
    if (!r.ok) {
      const detail = (await r.text()).slice(0, 300);
      return reply(502, { error: "upstream", status: r.status, detail }, origin);
    }
    const data = await r.json();
    const parts = data?.candidates?.[0]?.content?.parts || [];
    const text = parts.filter((p) => !p.thought).map((p) => p.text || "").join("").trim();
    if (!text) return reply(502, { error: "empty" }, origin);
    return reply(200, { text }, origin);
  },
};
