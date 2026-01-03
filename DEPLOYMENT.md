# Deploying to GitHub Pages

This guide will help you deploy helloworlds.io to GitHub Pages for free hosting.

## Quick Setup

### 1. Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: helloworlds.io with lineage visualization"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/helloworlds.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 3. Access Your Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/helloworlds/
```

## Custom Domain (Optional)

Want to use `helloworlds.io` or your own domain?

### 1. Purchase Domain
Buy your domain from providers like:
- Namecheap
- Google Domains
- Cloudflare

### 2. Configure DNS
Add these DNS records at your domain provider:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     YOUR_USERNAME.github.io
```

### 3. Add Custom Domain to GitHub

1. In your repository Settings → Pages
2. Enter your custom domain (e.g., `helloworlds.io`)
3. Click Save
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS"

### 4. Create CNAME File

Create a file named `CNAME` in your repository root with your domain:

```
helloworlds.io
```

Commit and push:
```bash
echo "helloworlds.io" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild your site in a few minutes!

## Troubleshooting

### Site Not Loading
- Check that GitHub Pages is enabled in Settings
- Verify the branch and folder are correct
- Wait a few minutes for deployment

### 404 Error
- Make sure `index.html` exists in the root directory
- Check that all file paths are relative (not absolute)

### Lineage Page Not Working
- Verify `lineage.html`, `lineage-styles.css`, and `lineage.js` are in root
- Check browser console for JavaScript errors
- Ensure D3.js CDN is accessible

### Custom Domain Not Working
- Verify DNS records are correct
- Wait up to 24 hours for DNS propagation
- Check that CNAME file exists with correct domain

## Performance Optimization

### Enable CDN Caching
GitHub Pages automatically uses Fastly CDN for fast global delivery.

### Minimize Files (Optional)
For better performance, you can minify CSS and JavaScript:

```bash
# Install tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css
cleancss -o lineage-styles.min.css lineage-styles.css

# Minify JavaScript
uglifyjs script.js -o script.min.js
uglifyjs lineage.js -o lineage.min.js

# Update HTML to use .min files
```

## Analytics (Optional)

Add Google Analytics to track visitors:

1. Create Google Analytics account
2. Get your tracking ID
3. Add before `</head>` in both HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Forum](https://github.community/c/github-pages/37)
- Open an issue in this repository

Happy deploying! 🚀
