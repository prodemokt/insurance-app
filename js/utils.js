// Utility functions

// Simulate API delay
function simulateDelay(ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Show loading spinner
function showLoading(elementId = 'loadingSpinner') {
  const spinner = document.getElementById(elementId);
  if (spinner) {
    spinner.style.display = 'flex';
  }
}

// Hide loading spinner
function hideLoading(elementId = 'loadingSpinner') {
  const spinner = document.getElementById(elementId);
  if (spinner) {
    spinner.style.display = 'none';
  }
}

// Show toast notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Validation functions
const validators = {
  required: (value) => {
    return value && value.trim() !== '';
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  phone: (value) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value.replace(/\s/g, ''));
  },

  number: (value) => {
    return !isNaN(value) && value > 0;
  },

  minValue: (value, min) => {
    return parseFloat(value) >= min;
  },

  maxValue: (value, max) => {
    return parseFloat(value) <= max;
  },

  futureDate: (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  },

  pastDate: (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    return selectedDate <= today;
  },

  minAge: (dob, minAge) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= minAge;
  },

  vehicleNumber: (value) => {
    // Indian vehicle number format: AA00AA0000
    const vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/;
    return vehicleRegex.test(value.replace(/\s/g, ''));
  }
};

// Validate form field
function validateField(field, rules) {
  const value = field.value;
  const errors = [];

  for (const rule of rules) {
    switch (rule.type) {
      case 'required':
        if (!validators.required(value)) {
          errors.push(rule.message || 'This field is required');
        }
        break;
      case 'email':
        if (value && !validators.email(value)) {
          errors.push(rule.message || 'Invalid email format');
        }
        break;
      case 'phone':
        if (value && !validators.phone(value)) {
          errors.push(rule.message || 'Phone number must be 10 digits');
        }
        break;
      case 'number':
        if (value && !validators.number(value)) {
          errors.push(rule.message || 'Must be a valid number');
        }
        break;
      case 'minValue':
        if (value && !validators.minValue(value, rule.min)) {
          errors.push(rule.message || `Minimum value is ${rule.min}`);
        }
        break;
      case 'maxValue':
        if (value && !validators.maxValue(value, rule.max)) {
          errors.push(rule.message || `Maximum value is ${rule.max}`);
        }
        break;
      case 'futureDate':
        if (value && !validators.futureDate(value)) {
          errors.push(rule.message || 'Date must be today or in the future');
        }
        break;
      case 'pastDate':
        if (value && !validators.pastDate(value)) {
          errors.push(rule.message || 'Date must be in the past');
        }
        break;
      case 'minAge':
        if (value && !validators.minAge(value, rule.age)) {
          errors.push(rule.message || `Minimum age is ${rule.age} years`);
        }
        break;
      case 'vehicleNumber':
        if (value && !validators.vehicleNumber(value)) {
          errors.push(rule.message || 'Invalid vehicle number format (e.g., MH01AB1234)');
        }
        break;
    }
  }

  return errors;
}

// Show field error
function showFieldError(field, errors) {
  const errorDiv = field.parentElement.querySelector('.field-error');
  if (errorDiv && errors.length > 0) {
    errorDiv.textContent = errors[0];
    errorDiv.style.display = 'block';
    field.classList.add('error');
  }
}

// Clear field error
function clearFieldError(field) {
  const errorDiv = field.parentElement.querySelector('.field-error');
  if (errorDiv) {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
    field.classList.remove('error');
  }
}

// Generate policy number
function generatePolicyNumber() {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 900) + 100;
  return `POL-${year}-${random}`;
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Get policies for current dealer
function getDealerPolicies() {
  const user = auth.getCurrentUser();
  if (!user) return [];

  const allPolicies = JSON.parse(localStorage.getItem('policies')) || [];
  return allPolicies.filter(p => p.dealerId === user.id);
}

// Get all policies (admin view)
function getAllPolicies() {
  return JSON.parse(localStorage.getItem('policies')) || [];
}

// Save policy
async function savePolicy(policyData) {
  // Simulate API delay
  await simulateDelay(1500);

  // Simulate random error (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Failed to save policy. Please try again.');
  }

  const policies = JSON.parse(localStorage.getItem('policies')) || [];
  policies.push(policyData);
  localStorage.setItem('policies', JSON.stringify(policies));

  return { success: true, policyNumber: policyData.policyNumber };
}

// Get policy stats
function getPolicyStats() {
  const policies = getDealerPolicies();

  return {
    total: policies.length,
    active: policies.filter(p => p.status === 'Active').length,
    pending: policies.filter(p => p.status === 'Pending').length,
    expired: policies.filter(p => p.status === 'Expired').length
  };
}

// Copy to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!', 'success');
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('Copied to clipboard!', 'success');
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
  document.body.removeChild(textArea);
}

// Export data as JSON
function exportData(data, filename) {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
