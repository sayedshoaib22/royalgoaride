import re
from pathlib import Path
root = Path(r'c:/Users/ss386/royalgoaride-1')
html_files = list(root.rglob('*.html'))
link_re = re.compile(r'''(?:href|src)=["']([^"']+)["']''', re.I)
problems = []
for html in html_files:
    text = html.read_text(encoding='utf-8', errors='ignore')
    for href in link_re.findall(text):
        if href.startswith(('http://','https://','mailto:','tel:','javascript:','#','data:')):
            continue
        path = href.split('#',1)[0].split('?',1)[0]
        if not path:
            continue
        if path.startswith('/'):
            target = (root / path.lstrip('/')).resolve()
        else:
            target = (html.parent / path).resolve()
        if not target.exists():
            problems.append((str(html.relative_to(root)), href))
print('BROKEN_LINKS', len(problems))
for item in problems[:20]:
    print(item[0], '->', item[1])
