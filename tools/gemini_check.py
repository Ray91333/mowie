"""Sends proofread/*.md batches to the Gemini API and saves the answers to proofread/answers/.
The key is read from %USERPROFILE%\\.gemini_key (never printed, never committed).
Run:  python tools/gemini_check.py            — all files without an answer yet
      python tools/gemini_check.py batch_01   — only files whose name starts with this
      python tools/gemini_check.py --ask "вопрос"  — one question (for double-checking a remark)"""
import json, pathlib, sys, time, urllib.request, urllib.error

root = pathlib.Path(__file__).resolve().parent.parent
key_file = pathlib.Path.home() / ".gemini_key"
if not key_file.exists():
    raise SystemExit("Нет файла с ключом: " + str(key_file))
KEY = key_file.read_text(encoding="utf-8-sig").strip()
if len(KEY) < 30 or " " in KEY:
    raise SystemExit("Файл с ключом есть, но ключ выглядит странно (слишком короткий или с пробелами).")

API = "https://generativelanguage.googleapis.com/v1beta"
import os
# Pro has no free quota (limit: 0); Lite is too weak for proofreading. Override: set GEMINI_MODEL=...
MODELS = [os.environ["GEMINI_MODEL"]] if os.environ.get("GEMINI_MODEL") else ["gemini-flash-latest", "gemini-pro-latest"]


def call(model, text, tries=6):
    body = json.dumps({"contents": [{"role": "user", "parts": [{"text": text}]}],
                       "generationConfig": {"temperature": 0.2, "maxOutputTokens": 32768}}).encode("utf-8")
    for i in range(tries):
        req = urllib.request.Request(f"{API}/models/{model}:generateContent", data=body,
                                     headers={"content-type": "application/json", "x-goog-api-key": KEY})
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                d = json.load(r)
            parts = d.get("candidates", [{}])[0].get("content", {}).get("parts", [])
            return "".join(p.get("text", "") for p in parts if not p.get("thought")).strip()
        except urllib.error.HTTPError as e:
            msg = e.read().decode("utf-8", "replace")[:300]
            if e.code in (429, 500, 503) and "limit: 0" not in msg and i < tries - 1:
                wait = 30 * (i + 1)
                print(f"    {e.code}: {'занято' if e.code != 429 else 'лимит'}, жду {wait} с…", flush=True)
                time.sleep(wait)
                continue
            raise RuntimeError(f"HTTP {e.code}: {msg}")
        except (TimeoutError, urllib.error.URLError, ConnectionError) as e:
            if i < tries - 1:
                print(f"    сеть/таймаут ({type(e).__name__}), повтор…", flush=True)
                time.sleep(20)
                continue
            raise RuntimeError(f"сеть: {e}")
    raise RuntimeError("не удалось")


def pick_model():
    for m in MODELS:
        try:
            call(m, "Odpowiedz jednym słowem: tak.", tries=8)
            return m
        except RuntimeError as e:
            print(f"  {m}: недоступна ({str(e)[:80]})")
    raise SystemExit("Ни одна модель не ответила. Проверьте ключ.")


model = pick_model()
print("Модель:", model)

if len(sys.argv) > 2 and sys.argv[1] == "--ask":
    print(call(model, sys.argv[2]))
    sys.exit()

src = root / "proofread"
out = src / "answers"
out.mkdir(exist_ok=True)
only = sys.argv[1] if len(sys.argv) > 1 else ""
files = [f for f in sorted(src.glob("*.md")) if f.name[0].isascii() and f.name.startswith(only)]
for f in files:
    dst = out / (f.stem + ".txt")
    if dst.exists() and not only:
        print("  уже есть:", dst.name)
        continue
    print("→", f.name)
    try:
        ans = call(model, f.read_text(encoding="utf-8"))
    except RuntimeError as e:
        print("   ошибка:", str(e)[:200])
        continue
    dst.write_text(f"# model: {model}\n" + ans + "\n", encoding="utf-8")
    print(f"   готово: {len(ans.splitlines())} строк")
    time.sleep(5)
print("Ответы в папке proofread/answers")
