#!/usr/bin/env python3
"""Repair common root-relative internal links removed by the SEO script.

This script will look for <a> tags missing an href and attempt to restore
common site links based on anchor text heuristics. It's conservative and
only applies well-known mappings.
"""

from pathlib import Path
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]

MAP = {
    'cars': '/cars.html',
    'view all cars': '/cars.html',
    'bikes': '/bikes.html',
    'contact': '/contact.html',
    'contact us': '/contact.html',
    'faq': '/faq.html',
    'faqs': '/faq.html',
    'terms': '/terms.html',
    'terms of service': '/terms.html',
    'privacy': '/privacy.html',
    'privacy policy': '/privacy.html',
    'refund policy': '/refund-policy.html',
    'book now': '/booking.html',
    'booking': '/booking.html',
    'blog': '/blog/',
    'all articles': '/blog/'
}


def repair_file(path: Path):
    html = path.read_text(encoding='utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    changed = False
    for a in soup.find_all('a'):
        if not a.has_attr('href') or not a['href'].strip():
            text = (a.get_text() or '').strip().lower()
            for k, v in MAP.items():
                if k in text:
                    a['href'] = v
                    changed = True
                    break
    if changed:
        path.write_text(str(soup), encoding='utf-8')
        print(f'Repaired links in {path}')


def main():
    files = [p for p in ROOT.rglob('*.html')]
    for f in files:
        repair_file(f)


if __name__ == '__main__':
    main()
