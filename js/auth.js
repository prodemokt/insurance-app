// Authentication and session management

class Auth {
  constructor() {
    this.currentUser = null;
    this.sessionKey = 'currentSession';
    this.init();
  }

  init() {
    // Check if user is already logged in
    const session = localStorage.getItem(this.sessionKey);
    if (session) {
      this.currentUser = JSON.parse(session);
    }
  }

  async login(username, password) {
    // Simulate API delay
    await simulateDelay(1000);

    const dealers = JSON.parse(localStorage.getItem('dealers')) || [];
    const dealer = dealers.find(d => d.username === username && d.password === password);

    if (dealer) {
      // Create session
      const session = {
        id: dealer.id,
        username: dealer.username,
        name: dealer.name,
        email: dealer.email,
        phone: dealer.phone,
        branch: dealer.branch,
        loginTime: new Date().toISOString()
      };

      this.currentUser = session;
      localStorage.setItem(this.sessionKey, JSON.stringify(session));

      return { success: true, user: session };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem(this.sessionKey);
  }

  isAuthenticated() {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }

  // Session timeout check (optional - 30 minutes)
  checkSessionTimeout() {
    if (this.currentUser && this.currentUser.loginTime) {
      const loginTime = new Date(this.currentUser.loginTime);
      const now = new Date();
      const diffMinutes = (now - loginTime) / (1000 * 60);

      if (diffMinutes > 30) {
        this.logout();
        alert('Session expired. Please login again.');
        window.location.href = 'index.html';
        return false;
      }
    }
    return true;
  }
}

// Create global auth instance
const auth = new Auth();

// Auto-redirect if not authenticated (for protected pages)
function protectPage() {
  if (window.location.pathname.includes('dashboard.html') ||
      window.location.pathname.includes('create-policy.html') ||
      window.location.pathname.includes('view-policies.html')) {
    auth.requireAuth();
  }
}

// Run protection on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', protectPage);
} else {
  protectPage();
}