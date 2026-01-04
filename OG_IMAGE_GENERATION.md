# Open Graph Image Generation Guide

This folder contains HTML templates for generating Open Graph (OG) social media preview images.

## Required Images

1. `og-image.png` - Main gallery page (1200x630px)
2. `og-image-lineage.png` - Lineage page (1200x630px)
3. `og-image-origins.png` - Origins page (1200x630px)

## Method 1: Browser Screenshot (Easiest)

### Using Chrome/Edge DevTools:

1. Open the HTML file in Chrome/Edge:
   - `og-preview-main.html` → `og-image.png`
   - `og-preview-lineage.html` → `og-image-lineage.png`
   - `og-preview-origins.html` → `og-image-origins.png`

2. Open DevTools (F12 or Cmd+Option+I)

3. Toggle device toolbar (Cmd+Shift+M or Ctrl+Shift+M)

4. Set custom dimensions: **1200 x 630**

5. Take screenshot:
   - Open DevTools menu (⋮)
   - "Capture screenshot" or "Capture full size screenshot"

6. Save as the corresponding PNG filename

### Using Firefox:

1. Open the HTML file in Firefox
2. Press Shift+F2 (or F12, then click Console)
3. Type: `screenshot --fullpage filename.png`
4. Resize browser window to 1200x630 first, or use screenshot tool

## Method 2: Command Line (Automated)

### Using Puppeteer (Node.js):

```bash
npm install puppeteer

node -e "
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 630 });

  await page.goto('file://' + __dirname + '/og-preview-main.html');
  await page.screenshot({ path: 'og-image.png' });

  await page.goto('file://' + __dirname + '/og-preview-lineage.html');
  await page.screenshot({ path: 'og-image-lineage.png' });

  await page.goto('file://' + __dirname + '/og-preview-origins.html');
  await page.screenshot({ path: 'og-image-origins.png' });

  await browser.close();
  console.log('✅ All OG images generated!');
})();
"
```

### Using Playwright (Python):

```bash
pip install playwright
playwright install chromium

python -c "
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1200, 'height': 630})

    page.goto('file://$(pwd)/og-preview-main.html')
    page.screenshot(path='og-image.png')

    page.goto('file://$(pwd)/og-preview-lineage.html')
    page.screenshot(path='og-image-lineage.png')

    page.goto('file://$(pwd)/og-preview-origins.html')
    page.screenshot(path='og-image-origins.png')

    browser.close()
    print('✅ All OG images generated!')
"
```

## Method 3: Online Tools

1. **HTML to Image Services:**
   - https://htmlcsstoimage.com/
   - https://html2canvas.hertzen.com/
   - Upload the HTML file and set dimensions to 1200x630

2. **Screenshot APIs:**
   - https://screenshotapi.net/
   - https://urlbox.io/
   - https://apiflash.com/

## Verification

After generating the images:

1. Check dimensions: Should be exactly **1200x630 pixels**
2. Check file size: Should be under 8MB (ideally under 300KB for fast loading)
3. Test on social media:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Design Notes

- **Main page**: Features logo, tagline, and key stats (131 languages, 1949-2026)
- **Lineage page**: Shows animated network nodes representing language eras with color legend
- **Origins page**: Highlights Brian Kernighan quote with 1972, Bell Labs metadata

All designs use:
- Dark gradient background (#0a0a0f → #1a1a24)
- Gold accent color (#ffd700)
- Site fonts: Playfair Display, DM Sans, JetBrains Mono
- Consistent branding with main site

## Tips

- Use high-quality screenshots (2x or 3x scale if possible, then resize)
- Ensure fonts are loaded before screenshot (add delay if needed)
- Use PNG format for best quality
- Test how images appear in both light and dark mode previews
