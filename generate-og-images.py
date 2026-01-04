#!/usr/bin/env python3
"""Generate Open Graph images using Playwright"""

import os
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("❌ Playwright not installed. Installing now...")
    os.system("pip3 install playwright")
    os.system("playwright install chromium")
    from playwright.sync_api import sync_playwright

def generate_og_images():
    """Generate all three OG preview images"""

    cwd = Path(__file__).parent.absolute()

    with sync_playwright() as p:
        print("🚀 Launching browser...")
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1200, 'height': 630})

        images = [
            ('og-preview-main.html', 'og-image.png'),
            ('og-preview-lineage.html', 'og-image-lineage.png'),
            ('og-preview-origins.html', 'og-image-origins.png'),
        ]

        for html_file, png_file in images:
            html_path = cwd / html_file
            png_path = cwd / png_file

            print(f"📸 Capturing {html_file}...")
            page.goto(f'file://{html_path}')

            # Wait for fonts to load
            page.wait_for_timeout(1000)

            # Take screenshot
            page.screenshot(path=str(png_path))

            # Get file size
            size_kb = png_path.stat().st_size / 1024
            print(f"   ✅ Saved {png_file} ({size_kb:.1f} KB)")

        browser.close()
        print("\n✨ All OG images generated successfully!")

if __name__ == '__main__':
    generate_og_images()
