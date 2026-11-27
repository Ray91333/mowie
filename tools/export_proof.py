"""Exports all Polish texts of the course into proofread/*.md batches to check in Gemini.
Run from the project folder:  python tools/export_proof.py
Needs Microsoft Edge or Google Chrome (runs headless)."""
import html, http.server, pathlib, re, shutil, subprocess, threading, functools

root = pathlib.Path(__file__).resolve().parent.parent
subprocess.run(["python", str(root / "build.py")], check=True)

BROWSERS = [r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
            r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"]
browser = next((b for b in BROWSERS if pathlib.Path(b).exists()), None) or shutil.which("msedge") or shutil.which("chrome")
if not browser:
    raise SystemExit("Нужен Edge или Chrome")

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root))
http.server.SimpleHTTPRequestHandler.log_message = lambda *a: None
srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
url = f"http://127.0.0.1:{srv.server_address[1]}/tools/export_proof.html"
import tempfile
prof = tempfile.mkdtemp(prefix="mowie-export-")
dom = subprocess.run([browser, "--headless=new", "--disable-gpu", "--no-first-run", f"--user-data-dir={prof}", "--virtual-time-budget=20000", "--dump-dom", url],
                     capture_output=True, text=True, encoding="utf-8", timeout=120).stdout
srv.shutdown()
m = re.search(r'<pre id="out">(.*?)</pre>', dom, re.S)
text = html.unescape(m.group(1)) if m else ""
shutil.rmtree(prof, ignore_errors=True)
if not text or text.startswith(("WAIT", "ERROR")):
    print("DOM length:", len(dom))
    raise SystemExit("Экспорт не удался: " + text[:300])
lessons = text.split("\n@@SPLIT@@\n")

PROMPT = """Ты — опытный преподаватель польского языка как иностранного и носитель языка.
Ниже материалы уроков курса польского для русскоязычных (уровень A1–A2). Польский текст и русский перевод написаны не носителем.

Проверь ВСЕ польские фразы: грамматику, окончания, падежи, вид глагола, орфографию (ą, ę, ó, ł, ż, ź, ś, ć, ń), пунктуацию,
естественность (так ли реально говорят поляки), соответствие уровню A1–A2. Также проверь, верен ли русский перевод и пояснения.
В заданиях правильный ответ отмечен как [[ответ]] или «правильный ответ: …» — проверь, что он действительно правильный и единственно возможный.
Транскрипции русскими буквами в квадратных скобках проверяй только на грубые ошибки.

Выведи ТОЛЬКО найденные проблемы, по одной на строку, строго в формате:
L<номер урока> ||| <как сейчас, дословно> ||| <как должно быть> ||| <почему, коротко по-русски>

Если в уроке ошибок нет, напиши: L<номер> ||| OK
Не пересказывай материал и не хвали, только список.
"""

out = root / "proofread"
out.mkdir(exist_ok=True)
for f in out.glob("batch_*.md"):
    f.unlink()
SIZE = 5
starts = list(range(0, len(lessons), SIZE))
if len(lessons) - starts[-1] < 3 and len(starts) > 1:
    starts.pop()
for j, i in enumerate(starts):
    end = starts[j + 1] if j + 1 < len(starts) else len(lessons)
    part = lessons[i:end]
    a, b = i + 1, end
    (out / f"batch_{a:02d}-{b:02d}.md").write_text(
        PROMPT + f"\n========== УРОКИ {a}–{b} ==========\n" + "\n".join(part).strip() + "\n", encoding="utf-8")

# word grammar (genders, plurals, verb forms) used by the dictionary and auto-generated exercises
WPROMPT = """Ты — опытный преподаватель польского языка и носитель языка.
Ниже словарь грамматики слов для курса польского (A1–A2).
Существительные: слово|род (m — мужской, ż — женский, n — средний, pl — только мн. ч.)|форма мн. ч. (— значит не употребляется).
Глаголы: инфинитив|формы ja, ty (для совершенного вида — будущее время)|видовая пара (dk X — совершенный вид X; ndk X — несовершенный X).
Прилагательные: просто список в мужском роде.

Проверь каждую строку: род, форму множественного числа, формы ja/ty, видовую пару.
Выведи ТОЛЬКО ошибочные строки, по одной на строку, строго в формате:
<строка как сейчас> ||| <исправленная строка> ||| <почему, коротко по-русски>
Если ошибок нет, напиши: OK
"""
nouns_src = (root / "src" / "data" / "y_nouns.js").read_text(encoding="utf-8")
nouns = [l.strip() for b in re.findall(r"NG\(`([^`]*)`\)", nouns_src, re.S) for l in b.split("\n") if "|" in l]
verbs_src = (root / "src" / "data" / "y_verbs.js").read_text(encoding="utf-8")
blocks = re.findall(r"(VG|AG)\(`([^`]*)`\)", verbs_src, re.S)
verbs = [l.strip() for k, b in blocks if k == "VG" for l in b.split("\n") if "|" in l]
adjs = " ".join(" ".join(b.split()) for k, b in blocks if k == "AG")
half = (len(nouns) + 1) // 2
(out / "words_1_nouns_a.md").write_text(WPROMPT + "\n== СУЩЕСТВИТЕЛЬНЫЕ (часть 1) ==\n" + "\n".join(nouns[:half]) + "\n", encoding="utf-8")
(out / "words_2_nouns_b.md").write_text(WPROMPT + "\n== СУЩЕСТВИТЕЛЬНЫЕ (часть 2) ==\n" + "\n".join(nouns[half:]) + "\n", encoding="utf-8")
(out / "words_3_verbs_adj.md").write_text(WPROMPT + "\n== ГЛАГОЛЫ ==\n" + "\n".join(verbs) + "\n\n== ПРИЛАГАТЕЛЬНЫЕ ==\n" + adjs + "\n", encoding="utf-8")
print(f"OK: {len(lessons)} уроков, {len(nouns)} сущ., {len(verbs)} глаг. → папка proofread/")
for f in sorted(out.glob("*.md")):
    print(f"  {f.name}: {len(f.read_text(encoding='utf-8'))//1000} тыс. знаков")
