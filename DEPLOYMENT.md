# Deployment Guide - Vehicle Insurance Platform

## Quick Start (Local Testing)

### Option 1: Direct Browser Open
```bash
# Navigate to project directory
cd vehicle-insurance-platform

# Open index.html in your default browser
open index.html
# OR on Windows: start index.html
# OR on Linux: xdg-open index.html
```

**Note**: Some features may not work correctly with `file://` protocol. Use a local server instead (Option 2 or 3).

### Option 2: Python HTTP Server
```bash
# Navigate to project directory
cd vehicle-insurance-platform

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Visit: `http://localhost:8000`

### Option 3: Node.js HTTP Server
```bash
# Install http-server globally (one-time)
npm install -g http-server

# Navigate to project directory
cd vehicle-insurance-platform

# Start server
http-server -p 8000
```

Visit: `http://localhost:8000`

### Option 4: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

```bash
# Initialize git repository
cd vehicle-insurance-platform
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Vehicle Insurance Testing Platform"

# Create main branch
git branch -M main
```

### Step 2: Push to GitHub

```bash
# Add remote repository (replace with your details)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll to "Pages" section (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

### Step 4: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example**:
- Username: `johndoe`
- Repo: `insurance-test-platform`
- URL: `https://johndoe.github.io/insurance-test-platform/`

---

## Netlify Deployment (Alternative)

### Option 1: Drag & Drop

1. Visit [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `vehicle-insurance-platform` folder
3. Your site will be deployed instantly
4. Get a URL like: `https://random-name-12345.netlify.app`

### Option 2: GitHub Integration

1. Push code to GitHub (follow steps above)
2. Visit [https://app.netlify.com](https://app.netlify.com)
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or `/`)
6. Click "Deploy site"

---

## Vercel Deployment (Alternative)

### Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd vehicle-insurance-platform

# Deploy
vercel

# Follow prompts (just press Enter for defaults)
```

### Using Vercel Dashboard

1. Visit [https://vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

---

## Testing After Deployment

### 1. Verify Pages Load

- [ ] Login page (`/index.html` or `/`)
- [ ] Data page (`/data.html`)
- [ ] Dashboard (after login)
- [ ] Create Policy (after login)
- [ ] View Policies (after login)

### 2. Test Functionality

```
Test Credential: dealer1 / password123
```

1. Login successfully
2. View dashboard stats
3. Create a new policy
4. View policies table
5. Search and filter
6. Export data
7. Logout

### 3. Check Console for Errors

Open browser DevTools (F12) and check Console tab for any errors.

---

## Custom Domain (Optional)

### GitHub Pages

1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Create a `CNAME` file in repository root with your domain
4. Configure DNS at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

### Netlify

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel

1. Go to Project settings → Domains
2. Click "Add"
3. Enter your domain
4. Follow DNS configuration instructions

---

## Environment-Specific Configuration

This platform requires **no environment variables** or configuration. Everything works out of the box!

### Data Storage

- Uses browser `localStorage`
- No backend required
- No database needed
- Data persists per user/browser

### Reset Data

To reset all data:
```javascript
// Open browser console and run:
localStorage.clear();
location.reload();
```

---

## Troubleshooting

### Issue: Blank Page

**Solution**: Make sure you're using a web server (not `file://` protocol)

### Issue: 404 on GitHub Pages

**Solution**:
- Wait 2-3 minutes after enabling Pages
- Check repository is public
- Verify branch and folder settings

### Issue: Styles Not Loading

**Solution**:
- Check all file paths are relative
- Verify all CSS/JS files are committed
- Clear browser cache

### Issue: Login Not Working

**Solution**:
- Check browser console for errors
- Verify `data.js` is loaded
- Clear localStorage and refresh

---

## Performance Optimization

### For Production Use

1. **Minify CSS/JS** (optional)
   ```bash
   # Install terser
   npm install -g terser

   # Minify JavaScript
   terser js/utils.js -o js/utils.min.js
   ```

2. **Enable Caching**
   - GitHub Pages: Automatic
   - Netlify: Automatic
   - Vercel: Automatic

3. **Add Service Worker** (optional)
   - For offline functionality
   - Faster subsequent loads

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

Add before closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Security Notes

### For Testing Platform

- ✅ No real user data
- ✅ No backend to secure
- ✅ No API keys exposed
- ✅ Client-side only

### If Adapting for Production

- ⚠️ Add real authentication
- ⚠️ Use HTTPS backend
- ⚠️ Validate on server-side
- ⚠️ Encrypt sensitive data
- ⚠️ Add CSRF protection

---

## Maintenance

### Updating Pre-loaded Data

Edit `js/data.js` and update the `TEST_DATA` object.

### Adding New Features

1. Edit HTML files for UI
2. Update CSS in `css/styles.css`
3. Add logic in respective JS files
4. Test locally
5. Commit and push

### Version Control

```bash
# Create a new version
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0
```

---

## Support & Resources

- **Documentation**: `/data.html`
- **Test Credentials**: See `/data.html` or README.md
- **File Structure**: See README.md
- **GitHub Pages Docs**: https://pages.github.com
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs

---

**Ready to Deploy?** Choose your platform and follow the steps above! 🚀
