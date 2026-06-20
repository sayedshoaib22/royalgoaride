import os, glob, re
from html import escape

root = os.path.dirname(__file__)
files = sorted(glob.glob(os.path.join(root, '*.html')))
for path in files:
    name = os.path.basename(path)
    url = 'https://royalgoaride.com/' if name == 'index.html' else 'https://royalgoaride.com/' + name
    text = open(path, 'r', encoding='utf-8').read()
    original = text
    title_match = re.search(r'<title>(.*?)</title>', text, re.S | re.I)
    title = title_match.group(1).strip() if title_match else 'Royal Goa Ride'
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', text, re.S | re.I)
    desc = desc_match.group(1).strip() if desc_match else 'Royal Goa Ride offers premium car rental in Goa with airport pickup, hotel delivery and 24/7 WhatsApp support.'
    # Build standard tags
    standard_tags = []
    standard_tags.append('<meta name="robots" content="index, follow, max-image-preview:large" />')
    standard_tags.append('<meta name="theme-color" content="#C9A84C" />')
    standard_tags.append('<link rel="icon" href="/assets/logo.webp" type="image/webp" />')
    standard_tags.append('<link rel="apple-touch-icon" href="/assets/logo.webp" />')
    standard_tags.append('<link rel="manifest" href="/manifest.json" />')
    standard_tags.append('<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />')
    standard_tags.append('<link rel="preconnect" href="https://fonts.googleapis.com" />')
    standard_tags.append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />')
    standard_tags.append('<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />')
    standard_tags.append('<link rel="dns-prefetch" href="https://wa.me" />')
    og_tags = [
        '<meta property="og:type" content="website" />',
        '<meta property="og:site_name" content="Royal Goa Ride" />',
        f'<meta property="og:title" content="{escape(title)}" />',
        f'<meta property="og:description" content="{escape(desc)}" />',
        '<meta property="og:image" content="https://royalgoaride.com/assets/og-imag.webp" />',
        f'<meta property="og:url" content="{url}" />'
    ]
    twitter_tags = [
        '<meta name="twitter:card" content="summary_large_image" />',
        f'<meta name="twitter:title" content="{escape(title)}" />',
        f'<meta name="twitter:description" content="{escape(desc)}" />',
        '<meta name="twitter:image" content="https://royalgoaride.com/assets/og-imag.webp" />'
    ]
    # Helpers
    def ensure_tag(tag, pattern):
        nonlocal text
        if not re.search(pattern, text, re.S | re.I):
            insertions.append(tag)
    insertions = []
    # Ensure standard tags exist
    for tag in standard_tags:
        name_attr = re.search(r'name=["\']([^"\']+)["\']', tag)
        if name_attr and re.search(r'<meta[^>]*name=["\']' + re.escape(name_attr.group(1)) + r'["\']', text, re.I):
            continue
        if 'rel="icon"' in tag and 'rel="icon"' in text: continue
        if 'rel="apple-touch-icon"' in tag and 'rel="apple-touch-icon"' in text: continue
        if 'rel="manifest"' in tag and 'rel="manifest"' in text: continue
        if 'rel="sitemap"' in tag and 'rel="sitemap"' in text: continue
        if 'rel="preconnect"' in tag and tag in text: continue
        if 'rel="dns-prefetch"' in tag and tag in text: continue
        insertions.append(tag)
    for tag in og_tags:
        key = re.search(r'property="([^"]+)"', tag).group(1)
        if re.search(r'<meta[^>]*property=["\']' + re.escape(key) + r'["\']', text, re.I):
            # replace existing
            if key in ('og:title','og:description','og:url'):
                text = re.sub(r'(<meta[^>]*property=["\']' + re.escape(key) + r'["\'][^>]*content=["\'])([^"\']*)(["\'][^>]*>)', r'\1' + escape(title if key=='og:title' else desc if key=='og:description' else url) + r'\3', text, flags=re.I)
        else:
            insertions.append(tag)
    for tag in twitter_tags:
        name = re.search(r'name="([^"]+)"', tag).group(1)
        if re.search(r'<meta[^>]*name=["\']' + re.escape(name) + r'["\']', text, re.I):
            text = re.sub(r'(<meta[^>]*name=["\']' + re.escape(name) + r'["\'][^>]*content=["\'])([^"\']*)(["\'][^>]*>)', r'\1' + escape(title if name=='twitter:title' else desc if name=='twitter:description' else 'https://royalgoaride.com/assets/og-imag.webp') + r'\3', text, flags=re.I)
        else:
            insertions.append(tag)
    # Canonical
    if 'rel="canonical"' not in text:
        insertions.append(f'<link rel="canonical" href="{url}" />')
    # Ensure favicon and icons if missing
    if 'rel="apple-touch-icon"' not in text:
        insertions.append('<link rel="apple-touch-icon" href="/assets/logo.webp" />')
    # Add breadcrumb and webpage schema if missing
    if 'FAQPage' not in text:
        # Only add WebPage and Breadcrumb if not present
        pass
    # Insert collected tags after viewport meta or after charset
    if insertions:
        if '<meta name="viewport"' in text:
            text = re.sub(r'(<meta[^>]*name=["\']viewport["\'][^>]*>)(\s*)', r'\1\2' + '\n    '.join(insertions) + '\n', text, count=1, flags=re.I)
        elif '<meta charset' in text:
            text = re.sub(r'(<meta[^>]*charset["\'][^>]*>)(\s*)', r'\1\2' + '\n    '.join(insertions) + '\n', text, count=1, flags=re.I)
    # Add WebPage schema if missing
    if '<script type="application/ld+json">' not in text or '"@type":"WebPage"' not in text:
        webpage = '{"@context":"https://schema.org","@type":"WebPage","@id":"' + url + '#webpage","url":"' + url + '","name":"' + escape(title) + '","description":"' + escape(desc) + '","inLanguage":"en-US"}'
        insert_block = '\n  <script type="application/ld+json">\n  ' + webpage + '\n  </script>\n'
        if '</head>' in text:
            text = text.replace('</head>', insert_block + '</head>')
    # Add BreadcrumbList if missing
    if 'BreadcrumbList' not in text:
        crumb_name = title.replace(' | Royal Goa Ride', '').replace(' — Royal Goa Ride', '')
        item_list = '[{"@type":"ListItem","position":1,"name":"Home","item":"https://royalgoaride.com/"}]'
        if name != 'index.html':
            item_list = '[{"@type":"ListItem","position":1,"name":"Home","item":"https://royalgoaride.com/"},{"@type":"ListItem","position":2,"name":"' + escape(crumb_name) + '","item":"' + url + '"}]'
        breadcrumb = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":' + item_list + '}'
        block = '\n  <script type="application/ld+json">\n  ' + breadcrumb + '\n  </script>\n'
        if '</head>' in text:
            text = text.replace('</head>', block + '</head>')
    if text != original:
        open(path, 'w', encoding='utf-8').write(text)
        print('updated', name)
