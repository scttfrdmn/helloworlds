#!/usr/bin/env node
/**
 * Generate favicon PNG files at multiple sizes
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generateFavicons() {
    console.log('🚀 Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    const htmlPath = path.resolve(__dirname, 'favicon-template.html');

    // Generate different sizes
    const sizes = [
        [16, 'favicon-16x16.png'],
        [32, 'favicon-32x32.png'],
        [180, 'apple-touch-icon.png'],
        [192, 'android-chrome-192x192.png'],
        [512, 'android-chrome-512x512.png'],
    ];

    for (const [size, filename] of sizes) {
        console.log(`📸 Generating ${filename} (${size}x${size})...`);

        await page.setViewport({ width: size, height: size });
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

        // Wait for fonts
        await new Promise(resolve => setTimeout(resolve, 500));

        const pngPath = path.resolve(__dirname, filename);
        await page.screenshot({ path: pngPath });

        const stats = fs.statSync(pngPath);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`   ✅ Saved ${filename} (${sizeKB} KB)`);
    }

    await browser.close();
    console.log('\n✨ All favicon sizes generated!');
}

generateFavicons().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
