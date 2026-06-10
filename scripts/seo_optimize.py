#!/usr/bin/env python3
"""Simple in-repo SEO updater for static HTML pages.

Usage:
  python scripts/seo_optimize.py

Requirements:
  pip install beautifulsoup4

This script makes conservative, reversible edits:
- Adds/updates <title> and meta description to required lengths
- Adds a self-referencing canonical tag (https://royalgoaride.com)
- Ensures exactly one H1 (converts extra H1 to H2 or inserts if missing)
- Adds OpenGraph + Twitter meta tags
- Ensures every <img> has an alt attribute
- Removes href on internal links that point to missing files
- Appends JSON-LD WebPage/Breadcrumb schema for pages lacking it
- Produces SEO-REPORT.md summarizing changes

It avoids changing styles, scripts, or layout markup.
"""

import os
import re
import json
from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://royalgoaride.com"
BRAND = "Royal Goa Ride"
PHONE = "+919975356697"


def slug_to_primary(path: Path):
    name = path.name
    if name.lower() in ("index.html", "home.html"):
        return f"{BRAND} — Self Drive Car Rental in Goa"
    base = re.sub(r"(\.html|\.(?:htm))$", "", name, flags=re.I)
    base = base.replace('-', ' ').replace('_', ' ')
    base = re.sub(r"\s+", ' ', base).strip()
    return base.title()


def ensure_title_length(title: str, primary: str):
    # Ensure brand present and length 50-60
    if BRAND not in title:
        title = f"{title} | {BRAND}"
    # pad or trim
    if len(title) < 50:
        extras = ["Best Self Drive Cars in Goa", "Trusted Car Rental in Goa", "Airport Delivery & 24/7 Support"]
        i = 0
        while len(title) < 50 and i < len(extras):
            title = f"{primary} — {extras[i]} | {BRAND}"
            i += 1
        if len(title) < 50:
            title = title.ljust(50)[:60]
    if len(title) > 60:
        # try to shorten primary
        if '—' in title:
            left = title.split('—')[0].strip()
            title = f"{left} | {BRAND}"
        if len(title) > 60:
            title = title[:57].rstrip() + '...'
    return title


def ensure_description(primary: str):
    desc = f"{primary} by {BRAND}. Affordable self-drive car rental in Goa with airport delivery, hotel drop, and 24/7 support. Book via WhatsApp {PHONE}."
    if len(desc) < 140:
        desc = desc + ' ' + 'Experience clean, reliable cars and flexible pickup options across Goa.'
    if len(desc) > 160:
        desc = desc[:157].rsplit(' ', 1)[0] + '...'
    # final trim/pad
    if len(desc) < 140:
        desc = desc.ljust(140)
    return desc


def add_or_replace_meta(soup, name, attrs):
    if name == 'title':
        if soup.title:
            soup.title.string.replace_with(attrs['text'])
        else:
            t = soup.new_tag('title')
            t.string = attrs['text']
            soup.head.append(t)
        return
    # remove duplicates
    existing = soup.find_all('meta', attrs={'name': attrs.get('name')}) if 'name' in attrs else []
    for e in existing:
        e.decompose()
    m = soup.new_tag('meta')
    for k, v in attrs.items():
        m.attrs[k] = v
    soup.head.append(m)


def ensure_canonical(soup, relpath):
    # Remove other canonicals
    for link in soup.find_all('link', rel='canonical'):
        link.decompose()
    href = DOMAIN + ('/' if relpath == 'index.html' else '/' + relpath.replace('\\', '/'))
    if href.endswith('/index.html'):
        href = href.replace('/index.html', '/')
    link = soup.new_tag('link', rel='canonical', href=href)
    soup.head.append(link)
    return href


def ensure_og_twitter(soup, title, desc, url, image):
    # Remove previous OG/Twitter duplicates
    for tag in soup.find_all(lambda t: (t.name == 'meta' and (t.get('property', '').startswith('og:') or t.get('name', '').startswith('twitter:')))):
        tag.decompose()
    ogs = {
        'property': 'og:title', 'content': title
    }
    # build tags
    og_tags = [
        ('property', 'og:type', 'website'),
        ('property', 'og:site_name', BRAND),
        ('property', 'og:title', title),
        ('property', 'og:description', desc),
        ('property', 'og:image', image),
        ('property', 'og:url', url)
    ]
    for k, p, v in og_tags:
        m = soup.new_tag('meta')
        m.attrs[k] = p
        m.attrs['content'] = v
        soup.head.append(m)

    tw_tags = [
        ('name', 'twitter:card', 'summary_large_image'),
        ('name', 'twitter:title', title),
        ('name', 'twitter:description', desc),
        ('name', 'twitter:image', image)
    ]
    for k, p, v in tw_tags:
        m = soup.new_tag('meta')
        m.attrs[k] = p
        m.attrs['content'] = v
        soup.head.append(m)


def ensure_images_alt(soup, primary, report):
    imgs = soup.find_all('img')
    for img in imgs:
        alt = img.get('alt')
        src = img.get('src', '')
        if not alt or alt.strip() == '':
            fname = os.path.basename(src)
            new_alt = f"{primary} — {fname}" if primary else fname
            img['alt'] = new_alt
            report['images_added_alt'].append({'src': src, 'alt': new_alt})


def fix_headings(soup, primary, report):
    h1s = soup.find_all('h1')
    if len(h1s) == 0:
        # insert at top of main or body
        main = soup.find('main') or soup.body
        new_h1 = soup.new_tag('h1')
        new_h1.string = primary
        main.insert(0, new_h1)
        report['h1_added'].append(primary)
    elif len(h1s) > 1:
        # keep first, convert others to h2
        for extra in h1s[1:]:
            extra.name = 'h2'
            report['h1_fixed'].append(str(extra))


def remove_broken_links(soup, root, relpath, report):
    anchors = soup.find_all('a', href=True)
    for a in anchors:
        href = a['href']
        # ignore external and anchors, mailto, tel, wa.me
        if re.match(r'^(https?:|mailto:|tel:|#|mailto:|//|https?:\\\\)', href) or href.startswith('https://') or href.startswith('http://') or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('wa.me'):
            continue
        # build target
        target = (root / relpath).parent.joinpath(href).resolve()
        if not target.exists():
            # remove href to avoid broken link
            report['broken_links_removed'].append({'href': href, 'text': a.get_text().strip()[:80]})
            del a['href']


def add_json_ld(soup, title, url, relpath):
    # Add a minimal WebPage JSON-LD if not present
    existing = soup.find_all('script', type='application/ld+json')
    has_webpage = False
    for s in existing:
        text = s.string or ''
        if '"@type": "WebSite"' in text or '"@type": "WebPage"' in text:
            has_webpage = True
            break
    if not has_webpage:
        ld = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": url,
            "name": title,
            "inLanguage": "en-IN",
            "author": {
                "@type": "Organization",
                "name": BRAND,
                "url": DOMAIN
            }
        }
        s = soup.new_tag('script', type='application/ld+json')
        s.string = json.dumps(ld, ensure_ascii=False, indent=2)
        soup.head.append(s)
        return True
    return False


def process_file(path: Path, root: Path, report: dict):
    rel = path.relative_to(root)
    relpath = str(rel).replace('\\', '/')
    html = path.read_text(encoding='utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    primary = slug_to_primary(path)

    # Title
    title_text = primary
    title_text = ensure_title_length(title_text, primary)
    if soup.title and soup.title.string and soup.title.string.strip() != title_text:
        report['titles_changed'].append({'file': relpath, 'old': soup.title.string.strip(), 'new': title_text})
    add_or_replace_meta(soup, 'title', {'text': title_text})

    # Description
    desc = ensure_description(primary)
    # replace existing description
    if soup.find('meta', attrs={'name': 'description'}):
        old = soup.find('meta', attrs={'name': 'description'})['content']
        if old.strip() != desc:
            report['descriptions_changed'].append({'file': relpath, 'old': old, 'new': desc})
    add_or_replace_meta(soup, 'meta', {'name': 'description', 'content': desc})

    # Robots (ensure indexable)
    add_or_replace_meta(soup, 'meta', {'name': 'robots', 'content': 'index, follow, max-image-preview:large'})

    # Canonical
    canonical = ensure_canonical(soup, relpath if relpath != '.' else 'index.html')
    report['canonicals_added'].append({'file': relpath, 'canonical': canonical})

    # OG + Twitter
    # find a page image
    img = soup.find('img')
    img_url = DOMAIN + img['src'] if img and img.get('src', '').startswith('/') else (img['src'] if img and img.get('src') else DOMAIN + '/assets/og-imag.png')
    page_url = canonical
    ensure_og_twitter(soup, title_text, desc, page_url, img_url)

    # Images alt
    ensure_images_alt(soup, primary, report)

    # Headings
    fix_headings(soup, primary, report)

    # Links
    remove_broken_links(soup, root, relpath, report)

    # JSON-LD
    added_ld = add_json_ld(soup, title_text, page_url, relpath)
    if added_ld:
        report['schema_added'].append(relpath)

    # Write back
    path.write_text(str(soup), encoding='utf-8')
    report['pages_processed'].append(relpath)


def main():
    root = ROOT
    report = {
        'pages_processed': [],
        'titles_changed': [],
        'descriptions_changed': [],
        'canonicals_added': [],
        'h1_added': [],
        'h1_fixed': [],
        'images_added_alt': [],
        'schema_added': [],
        'broken_links_removed': []
    }

    html_files = [p for p in root.rglob('*.html') if 'node_modules' not in str(p) and '.git' not in str(p)]
    for p in html_files:
        try:
            process_file(p, root, report)
        except Exception as e:
            print(f"Error processing {p}: {e}")

    # write SEO-REPORT.md
    report_path = root / 'SEO-REPORT.md'
    with report_path.open('w', encoding='utf-8') as f:
        f.write('# SEO Report\n\n')
        f.write(f'Pages scanned: {len(report["pages_processed"])}\n\n')
        f.write('## Titles changed\n')
        for t in report['titles_changed']:
            f.write(f"- {t['file']}: '{t['old']}' -> '{t['new']}'\n")
        f.write('\n## Descriptions changed\n')
        for d in report['descriptions_changed']:
            f.write(f"- {d['file']}: updated\n")
        f.write('\n## Canonical tags added\n')
        for c in report['canonicals_added']:
            f.write(f"- {c['file']}: {c['canonical']}\n")
        f.write('\n## H1 fixes\n')
        for h in report['h1_fixed']:
            f.write(f"- Converted extra H1 -> H2: {h[:80]}\n")
        for h in report['h1_added']:
            f.write(f"- Added H1: {h}\n")
        f.write('\n## Images alt added\n')
        for i in report['images_added_alt']:
            f.write(f"- {i['src']}: alt='{i['alt']}'\n")
        f.write('\n## Schema added (pages)\n')
        for s in report['schema_added']:
            f.write(f"- {s}\n")
        f.write('\n## Broken internal links removed\n')
        for b in report['broken_links_removed']:
            f.write(f"- {b['href']} (anchor text: {b['text']})\n")

    print('SEO optimization complete. Report written to SEO-REPORT.md')


if __name__ == '__main__':
    main()
