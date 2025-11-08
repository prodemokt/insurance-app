// Create Policy Page Logic

// Load user info
function loadUserInfo() {
  const user = auth.getCurrentUser();
  if (!user) return;

  document.getElementById('userName').textContent = user.name;
  document.getElementById('userBranch').textContent = user.branch;

  const initial = user.name.charAt(0).toUpperCase();
  document.getElementById('userAvatar').textContent = initial;
}

// Logout handler
function handleLogout() {
  if (confirm('Are you sure you want to logout?')) {
    auth.logout();
    showToast('Logged out successfully', 'success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  }
}

// Generate and set policy number
function setPolicyNumber() {
  document.getElementById('policyNumber').value = generatePolicyNumber();
}

// Populate states dropdown
function populateStates() {
  const stateSelect = document.getElementById('state');
  TEST_DATA.states.forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}

// Handle vehicle type change - populate makes
document.getElementById('vehicleType').addEventListener('change', function() {
  const vehicleType = this.value;
  const makeSelect = document.getElementById('vehicleMake');

  makeSelect.innerHTML = '<option value="">Select Make</option>';
  makeSelect.disabled = !vehicleType;

  if (vehicleType && TEST_DATA.vehicleMakes[vehicleType]) {
    TEST_DATA.vehicleMakes[vehicleType].forEach(make => {
      const option = document.createElement('option');
      option.value = make;
      option.textContent = make;
      makeSelect.appendChild(option);
    });
  }
});

// Handle coverage type change - show/hide add-ons
document.querySelectorAll('input[name="coverageType"]').forEach(radio => {
  radio.addEventListener('change', function() {
    const addOnsSection = document.getElementById('addOnsSection');
    if (this.value === 'comprehensive') {
      addOnsSection.classList.add('show');
    } else {
      addOnsSection.classList.remove('show');
      // Uncheck all add-ons
      document.querySelectorAll('input[name="addOns"]').forEach(cb => cb.checked = false);
    }
  });
});

// Form submission
document.getElementById('policyForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Validate all fields
  let isValid = true;

  // Clear all previous errors
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    clearFieldError(field);
  });

  // Validate policyholder name
  const name = document.getElementById('policyholderName');
  const nameErrors = validateField(name, [{ type: 'required' }]);
  if (nameErrors.length > 0) {
    showFieldError(name, nameErrors);
    isValid = false;
  }

  // Validate email
  const email = document.getElementById('email');
  const emailErrors = validateField(email, [
    { type: 'required' },
    { type: 'email' }
  ]);
  if (emailErrors.length > 0) {
    showFieldError(email, emailErrors);
    isValid = false;
  }

  // Validate phone
  const phone = document.getElementById('phone');
  const phoneErrors = validateField(phone, [
    { type: 'required' },
    { type: 'phone' }
  ]);
  if (phoneErrors.length > 0) {
    showFieldError(phone, phoneErrors);
    isValid = false;
  }

  // Validate DOB (minimum age 18)
  const dob = document.getElementById('dob');
  const dobErrors = validateField(dob, [
    { type: 'required' },
    { type: 'pastDate' },
    { type: 'minAge', age: 18, message: 'Policyholder must be at least 18 years old' }
  ]);
  if (dobErrors.length > 0) {
    showFieldError(dob, dobErrors);
    isValid = false;
  }

  // Validate address
  const address = document.getElementById('address');
  const addressErrors = validateField(address, [{ type: 'required' }]);
  if (addressErrors.length > 0) {
    showFieldError(address, addressErrors);
    isValid = false;
  }

  // Validate state
  const state = document.getElementById('state');
  const stateErrors = validateField(state, [{ type: 'required' }]);
  if (stateErrors.length > 0) {
    showFieldError(state, stateErrors);
    isValid = false;
  }

  // Validate vehicle type
  const vehicleType = document.getElementById('vehicleType');
  const vehicleTypeErrors = validateField(vehicleType, [{ type: 'required' }]);
  if (vehicleTypeErrors.length > 0) {
    showFieldError(vehicleType, vehicleTypeErrors);
    isValid = false;
  }

  // Validate vehicle make
  const vehicleMake = document.getElementById('vehicleMake');
  const vehicleMakeErrors = validateField(vehicleMake, [{ type: 'required' }]);
  if (vehicleMakeErrors.length > 0) {
    showFieldError(vehicleMake, vehicleMakeErrors);
    isValid = false;
  }

  // Validate vehicle model
  const vehicleModel = document.getElementById('vehicleModel');
  const vehicleModelErrors = validateField(vehicleModel, [{ type: 'required' }]);
  if (vehicleModelErrors.length > 0) {
    showFieldError(vehicleModel, vehicleModelErrors);
    isValid = false;
  }

  // Validate vehicle number
  const vehicleNumber = document.getElementById('vehicleNumber');
  const vehicleNumberErrors = validateField(vehicleNumber, [
    { type: 'required' },
    { type: 'vehicleNumber' }
  ]);
  if (vehicleNumberErrors.length > 0) {
    showFieldError(vehicleNumber, vehicleNumberErrors);
    isValid = false;
  }

  // Validate manufacture year
  const manufactureYear = document.getElementById('manufactureYear');
  const yearErrors = validateField(manufactureYear, [
    { type: 'required' },
    { type: 'minValue', min: 1990, message: 'Year must be 1990 or later' },
    { type: 'maxValue', max: 2025, message: 'Year cannot be in the future' }
  ]);
  if (yearErrors.length > 0) {
    showFieldError(manufactureYear, yearErrors);
    isValid = false;
  }

  // Validate coverage type
  const coverageType = document.querySelector('input[name="coverageType"]:checked');
  if (!coverageType) {
    showToast('Please select a coverage type', 'error');
    isValid = false;
  }

  // Validate sum assured
  const sumAssured = document.getElementById('sumAssured');
  const sumErrors = validateField(sumAssured, [
    { type: 'required' },
    { type: 'minValue', min: 50000, message: 'Minimum sum assured is ₹50,000' }
  ]);
  if (sumErrors.length > 0) {
    showFieldError(sumAssured, sumErrors);
    isValid = false;
  }

  // Validate premium
  const premium = document.getElementById('premium');
  const premiumErrors = validateField(premium, [
    { type: 'required' },
    { type: 'minValue', min: 1000, message: 'Minimum premium is ₹1,000' }
  ]);
  if (premiumErrors.length > 0) {
    showFieldError(premium, premiumErrors);
    isValid = false;
  }

  // Validate payment frequency
  const paymentFrequency = document.querySelector('input[name="paymentFrequency"]:checked');
  if (!paymentFrequency) {
    showToast('Please select a payment frequency', 'error');
    isValid = false;
  }

  // Validate policy start date
  const policyStartDate = document.getElementById('policyStartDate');
  const dateErrors = validateField(policyStartDate, [
    { type: 'required' },
    { type: 'futureDate' }
  ]);
  if (dateErrors.length > 0) {
    showFieldError(policyStartDate, dateErrors);
    isValid = false;
  }

  if (!isValid) {
    showToast('Please fix all errors before submitting', 'error');
    return;
  }

  // Get add-ons if comprehensive
  const addOns = [];
  if (coverageType.value === 'comprehensive') {
    document.querySelectorAll('input[name="addOns"]:checked').forEach(cb => {
      addOns.push(cb.value);
    });
  }

  // Create policy object
  const user = auth.getCurrentUser();
  const policyData = {
    policyNumber: document.getElementById('policyNumber').value,
    dealerId: user.id,
    policyholderName: name.value,
    email: email.value,
    phone: phone.value,
    dob: dob.value,
    address: address.value,
    state: state.value,
    vehicleType: vehicleType.value,
    vehicleMake: vehicleMake.value,
    vehicleModel: vehicleModel.value,
    vehicleNumber: vehicleNumber.value.toUpperCase(),
    manufactureYear: manufactureYear.value,
    coverageType: coverageType.value,
    addOns: addOns,
    sumAssured: parseInt(sumAssured.value),
    premium: parseInt(premium.value),
    paymentFrequency: paymentFrequency.value,
    policyStartDate: policyStartDate.value,
    status: 'Pending',
    createdAt: new Date().toISOString()
  };

  // Save policy
  try {
    showLoading();
    const result = await savePolicy(policyData);
    hideLoading();

    if (result.success) {
      showToast(`Policy ${result.policyNumber} created successfully!`, 'success');
      setTimeout(() => {
        window.location.href = 'view-policies.html';
      }, 1500);
    }
  } catch (error) {
    hideLoading();
    showToast(error.message || 'Failed to create policy. Please try again.', 'error');
  }
});

// Reset form handler
document.getElementById('policyForm').addEventListener('reset', () => {
  setPolicyNumber();
  document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
    clearFieldError(field);
  });
  document.getElementById('addOnsSection').classList.remove('show');
});

// Initialize
loadUserInfo();
setPolicyNumber();
populateStates();

// Set minimum date for policy start (today)
const today = new Date().toISOString().split('T')[0];
document.getElementById('policyStartDate').min = today;

// Set maximum date for DOB (18 years ago)
const maxDOB = new Date();
maxDOB.setFullYear(maxDOB.getFullYear() - 18);
document.getElementById('dob').max = maxDOB.toISOString().split('T')[0];
