# Vehicle Insurance Platform - Testing Demo

A lightweight, modern vehicle insurance dealer portal designed for testing automation tools. Features realistic form validation, simulated API delays, and comprehensive data management.

## 🚀 Features

### Authentication
- Secure login with validation
- Session management
- Protected routes
- 5 pre-configured test accounts

### Dashboard
- Real-time policy statistics
- Recent policies overview
- Quick action shortcuts
- User profile display

### Policy Management
- **Create Policy**: Comprehensive form with 15+ input types
- **View Policies**: Search, filter, sort, and export
- **Policy Details**: Detailed view in modal
- **Data Export**: JSON export functionality

### Form Field Types
- Text inputs
- Email validation
- Phone number validation
- Number inputs with range validation
- Date pickers with constraints
- Dropdowns (static and dynamic)
- Radio buttons
- Checkboxes
- Conditional fields
- Textarea

### Realistic Behaviors
- Simulated API delays (300ms - 1500ms)
- Loading spinners
- Toast notifications
- Form validation with error messages
- 5% random error simulation
- Dynamic field population

## 📦 Installation & Setup

### Local Development

1. **Clone or Download** this repository

2. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   open index.html

   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Start Testing**
   - Visit `data.html` for all test credentials
   - Login with any test account
   - Explore the features

### GitHub Pages Deployment

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vehicle Insurance Platform"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

3. **Access Your Site**
   - Your site will be available at:
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🔐 Test Credentials

| Username | Password | Role | Branch |
|----------|----------|------|--------|
| dealer1 | password123 | Primary Dealer | Mumbai Central |
| dealer2 | test@456 | Secondary Dealer | Delhi North |
| admin | admin123 | Admin User | Head Office |
| testuser | test123 | Test Account | Bangalore South |
| demo | demo123 | Demo Account | Chennai East |

**Quick Access**: Visit `/data.html` for complete credentials and documentation

## 📁 File Structure

```
vehicle-insurance-platform/
├── index.html              # Login page
├── dashboard.html          # Dashboard with stats
├── create-policy.html      # Policy creation form
├── view-policies.html      # Policy management table
├── data.html              # Test data & documentation
├── css/
│   └── styles.css         # Modern flat design
├── js/
│   ├── auth.js           # Authentication & session
│   ├── data.js           # Pre-loaded test data
│   ├── utils.js          # Helper functions
│   ├── create-policy.js  # Policy form logic
│   └── view-policies.js  # Policy list logic
└── README.md             # This file
```

## 🧪 Test Scenarios

### Basic Flow
1. Login with `dealer1` / `password123`
2. View dashboard statistics
3. Create a new policy
4. View all policies
5. Search and filter
6. Export data
7. Logout

### Validation Testing
- Invalid login credentials
- Empty required fields
- Invalid email format (test@test)
- Phone number < 10 digits
- DOB under 18 years old
- Invalid vehicle number format
- Sum assured below minimum
- Past policy start date

### Dynamic Behavior
- Vehicle make changes based on vehicle type
- Add-ons appear/hide based on coverage type
- Search with debounce delay
- Column sorting (ascending/descending)
- Multiple filters simultaneously

### Performance Testing
- Login delay: 1000ms
- Policy creation: 1500ms
- Policy list load: 800ms
- Search debounce: 300ms
- Random 5% error rate

## 🎨 Design

- Modern flat design
- Professional color palette
- ERP-style layout with sidebar
- Responsive (mobile-friendly)
- Consistent typography
- Loading states
- Toast notifications

## 💾 Data Storage

All data is stored in browser `localStorage`:
- `dealers`: All dealer accounts
- `policies`: All insurance policies
- `currentSession`: Active user session

**Note**: Data persists across sessions. Clear localStorage to reset.

## 🔧 Technical Details

- **Frontend**: Plain HTML, CSS, JavaScript (ES6+)
- **No Dependencies**: Zero external libraries
- **No Build Process**: Works out of the box
- **GitHub Pages Ready**: Static files only
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

## 📊 Pre-loaded Data

- **5 Dealers**: Different roles and branches
- **8 Sample Policies**: Various statuses (Active, Pending, Expired, Cancelled)
- **Multiple Vehicle Types**: Car, Bike, Commercial
- **Different Coverage Types**: Third-party, Comprehensive

## 🎯 Testing Tool Compatibility

This platform is designed to test:
- Form automation
- Data validation
- Navigation flows
- Search and filter operations
- CRUD operations
- Session management
- Loading states
- Error handling
- Responsive design
- Data export

## 📝 API Simulation

All operations simulate realistic API behavior:

```javascript
// Login - 1000ms delay
await simulateDelay(1000);

// Create Policy - 1500ms delay + 5% error rate
await simulateDelay(1500);
if (Math.random() < 0.05) throw new Error();

// Load Policies - 800ms delay
await simulateDelay(800);

// Search - 300ms debounce
await simulateDelay(300);
```

## 🚨 Known Limitations

1. **Data Persistence**: Uses localStorage (no backend)
2. **User Isolation**: All dealers share same policy pool (filtered by dealerId)
3. **No Real Authentication**: Simple credential matching
4. **Session Timeout**: 30 minutes (simulated)
5. **Mobile Navigation**: Sidebar hidden on mobile (can be improved)

## 🤝 Contributing

This is a testing platform. Feel free to:
- Add more test scenarios
- Enhance validations
- Add new form fields
- Improve UX/UI
- Add more pre-loaded data

## 📄 License

Free to use for testing and demonstration purposes.

## 📞 Support

For issues or questions:
1. Check `/data.html` for complete documentation
2. Review test credentials and scenarios
3. Verify browser console for errors
4. Clear localStorage and refresh

## 🎓 Learning Resources

This project demonstrates:
- Modern HTML5 forms
- CSS Grid and Flexbox
- ES6+ JavaScript
- LocalStorage API
- Form validation
- Event handling
- Async/await patterns
- Modal dialogs
- Responsive design
- UX best practices

---

**Ready to Test?** Visit `index.html` or `data.html` to get started! 🚀
