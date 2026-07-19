from pathlib import Path
root = Path(r'c:/Users/ss386/royalgoaride-1')
changed = []
for path in root.rglob('*.html'):
    text = path.read_text(encoding='utf-8', errors='ignore')
    new_text = text.replace('src="main.js"', 'src="script.js"').replace('src="../main.js"', 'src="../script.js"')
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        changed.append(str(path.relative_to(root)))
print('CHANGED', len(changed))
for item in changed:
    print(item)
