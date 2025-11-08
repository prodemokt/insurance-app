# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Open the Application
```bash
# Option A: Use Python (Recommended)
python -m http.server 8000
# Then visit: http://localhost:8000

# Option B: Just open index.html in your browser
open index.html
```

### Step 2: Login
Use any of these test credentials:

**Quick Test:**
- Username: `dealer1`
- Password: `password123`

**More Options:** See `/data.html` for all 5 test accounts

### Step 3: Explore

1. **Dashboard** - View policy statistics
2. **Create Policy** - Fill out comprehensive form with validation
3. **View Policies** - Search, filter, sort, and export
4. **Test Data** - See all credentials and documentation

---

## 📋 What Can You Test?

### ✅ Form Elements
- Text inputs
- Email validation
- Phone number (10 digits)
- Date pickers
- Dropdowns (static & dynamic)
- Radio buttons
- Checkboxes
- Conditional fields

### ✅ Validations
- Required fields
- Email format
- Age restrictions (18+)
- Date constraints
- Number ranges
- Vehicle number format

### ✅ Features
- Login/Logout
- Session management
- CRUD operations
- Search & filter
- Sorting
- Data export
- Loading states
- Toast notifications
- Error handling

### ✅ Realistic Behaviors
- API delays (300ms - 1500ms)
- Random 5% error rate
- Form validation messages
- Dynamic field updates

---

## 🎯 Test Scenarios

### Scenario 1: Happy Path (2 minutes)
```
1. Login: dealer1 / password123
2. View Dashboard → Check stats
3. Create Policy → Fill form → Submit
4. View Policies → Find new policy
5. Export Data
6. Logout
```

### Scenario 2: Validation Testing (3 minutes)
```
1. Login with wrong password ❌
2. Login correctly ✅
3. Create Policy:
   - Leave name empty ❌
   - Enter invalid email ❌
   - Enter 9-digit phone ❌
   - Enter DOB for 17-year-old ❌
   - Fix all errors ✅
   - Submit successfully ✅
```

### Scenario 3: Dynamic Behavior (2 minutes)
```
1. Create Policy:
   - Select "Car" → See car makes
   - Select "Bike" → See bike makes
   - Select "Third Party" → No add-ons
   - Select "Comprehensive" → Add-ons appear
2. View Policies:
   - Search by name
   - Filter by status
   - Sort by premium
```

---

## 📊 Pre-loaded Data

- **5 dealers** with different roles
- **8 sample policies** with various statuses
- All data in `localStorage`

**Reset Data:**
```javascript
localStorage.clear();
location.reload();
```

---

## 🔗 Important Pages

| Page | URL | Purpose |
|------|-----|---------|
| Login | `/index.html` | Main entry point |
| Test Data | `/data.html` | All credentials & docs |
| Dashboard | `/dashboard.html` | After login |
| Create | `/create-policy.html` | New policy form |
| View | `/view-policies.html` | Policy management |

---

## 💡 Tips

1. **Open `/data.html` first** - Contains all test info
2. **Use browser DevTools** - Check console for logs
3. **Watch loading spinners** - Shows simulated delays
4. **Try invalid inputs** - Test validation thoroughly
5. **Filter + Search** - Combine multiple operations

---

## 🐛 Troubleshooting

**Problem:** Can't login
- **Solution:** Use credentials from `/data.html`

**Problem:** Form not submitting
- **Solution:** Check for red error messages under fields

**Problem:** No policies showing
- **Solution:** Each dealer sees only their own policies

**Problem:** Data disappeared
- **Solution:** Using private/incognito mode? Data is per-session

---

## 📱 Mobile Testing

The platform is responsive! Test on:
- Desktop (1920x1080)
- Tablet (768px)
- Mobile (375px)

---

## 🎓 For Automation Testing

This platform is perfect for testing:
- Selenium
- Cypress
- Playwright
- Puppeteer
- TestCafe
- And any other automation tool!

**Sample Selectors:**
```javascript
// Login
document.getElementById('username')
document.getElementById('password')

// Create Policy
document.getElementById('policyholderName')
document.getElementById('email')
document.querySelector('input[name="coverageType"]')

// View Policies
document.getElementById('searchInput')
document.getElementById('statusFilter')
```

---

## 📞 Need Help?

1. Check `/data.html` - Complete documentation
2. See `README.md` - Full project details
3. See `DEPLOYMENT.md` - Deployment instructions

---

**Ready to Test?** Just open `index.html` and start exploring! 🎉
