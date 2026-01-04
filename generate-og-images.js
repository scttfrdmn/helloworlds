#!/usr/bin/env node
/**
 * Generate Open Graph images using Puppeteer
 */

const fs = require('fs');
const path = require('path');

async function generateImages() {
    let puppeteer;

    try {
        puppeteer = require('puppeteer');
    } catch (err) {
        console.log('❌ Puppeteer not installed. Installing now...');
        const { execSync } = require('child_process');
        execSync('npm install puppeteer', { stdio: 'inherit' });
        puppeteer = require('puppeteer');
    }

    console.log('🚀 Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });

    const images = [
        ['og-preview-main.html', 'og-image.png'],
        ['og-preview-lineage.html', 'og-image-lineage.png'],
        ['og-preview-origins.html', 'og-image-origins.png'],
    ];

    for (const [htmlFile, pngFile] of images) {
        const htmlPath = path.resolve(__dirname, htmlFile);
        const pngPath = path.resolve(__dirname, pngFile);

        console.log(`📸 Capturing ${htmlFile}...`);
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

        // Wait for fonts to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        await page.screenshot({ path: pngPath });

        // Get file size
        const stats = fs.statSync(pngPath);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`   ✅ Saved ${pngFile} (${sizeKB} KB)`);
    }

    await browser.close();
    console.log('\n✨ All OG images generated successfully!');
}

generateImages().catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
});
