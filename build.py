"""Builds mowie.html from src/app.html + src/data/*.js (lessons and word topics)."""
import pathlib, re
root = pathlib.Path(__file__).parent
app = (root / "src" / "app.html").read_text(encoding="utf-8")
parts = []
for f in sorted((root / "src" / "data").glob("*.js")):
    js = f.read_text(encoding="utf-8")
    if "</script" in js.lower():
        raise SystemExit(f"{f.name}: contains </script>")
    parts.append(f"<script>/* {f.name} */\n{js}\n</script>")
out = app.replace("<!--DATA-->", "\n".join(parts))
(root / "mowie.html").write_text(out, encoding="utf-8")
print(f"built mowie.html: {len(out)//1024} KB, {len(parts)} data files")

# --- standalone website: docs/index.html (GitHub Pages serves the docs folder) + icon (for Netlify Drop, GitHub Pages, any static hosting)
import shutil
site = root / "docs"; site.mkdir(exist_ok=True)
(site / ".nojekyll").write_text("", encoding="utf-8")
extra = ('<link rel="icon" type="image/svg+xml" href="logo.svg">\n'
         '<meta name="description" content="Польский с нуля до A2: 46 уроков, грамматика, задания как в учебнике и словарь на 1000+ слов.">\n'
         '<meta property="og:title" content="Mówię — польский с нуля">\n'
         '<meta property="og:description" content="46 уроков, грамматика и словарь. Бесплатно в браузере.">\n')
html = out.replace("<title>", extra + "<title>", 1)
(site / "index.html").write_text(html, encoding="utf-8")
shutil.copy(root / "brand" / "logo.svg", site / "logo.svg")
print("built docs/index.html")

# illustrations: img/*.webp next to mowie.html, copied into the website
if (root / "img").exists():
    shutil.copytree(root / "img", site / "img", dirs_exist_ok=True)
    print("copied img/ ->", len(list((site / "img").glob("*.webp"))), "pictures")
