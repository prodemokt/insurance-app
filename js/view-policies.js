// View Policies Page Logic

let allPolicies = [];
let filteredPolicies = [];
let currentSort = { field: 'createdAt', direction: 'desc' };

// Mobile menu toggle
function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.mobile-overlay');
  sidebar.classList.toggle('mobile-open');
  overlay.classList.toggle('show');
}

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

// Load policies
async function loadPolicies() {
  showLoading();
  await simulateDelay(800);

  allPolicies = getDealerPolicies();
  filteredPolicies = [...allPolicies];

  hideLoading();
  renderPolicies();
}

// Filter policies
function filterPolicies() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const statusFilter = document.getElementById('statusFilter').value;
  const vehicleTypeFilter = document.getElementById('vehicleTypeFilter').value;

  filteredPolicies = allPolicies.filter(policy => {
    const matchesSearch = !searchTerm ||
      policy.policyNumber.toLowerCase().includes(searchTerm) ||
      policy.policyholderName.toLowerCase().includes(searchTerm) ||
      policy.email.toLowerCase().includes(searchTerm) ||
      policy.vehicleNumber.toLowerCase().includes(searchTerm);

    const matchesStatus = !statusFilter || policy.status === statusFilter;
    const matchesVehicleType = !vehicleTypeFilter || policy.vehicleType === vehicleTypeFilter;

    return matchesSearch && matchesStatus && matchesVehicleType;
  });

  renderPolicies();
}

// Sort policies
function sortPolicies(field) {
  if (currentSort.field === field) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.field = field;
    currentSort.direction = 'asc';
  }

  filteredPolicies.sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];

    // Handle numeric values
    if (field === 'premium') {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    }

    // Handle dates
    if (field === 'createdAt' || field === 'policyStartDate') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (aValue < bValue) return currentSort.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return currentSort.direction === 'asc' ? 1 : -1;
    return 0;
  });

  renderPolicies();
}

// Render policies table
function renderPolicies() {
  const tbody = document.getElementById('policiesTableBody');
  const emptyState = document.getElementById('emptyState');

  if (filteredPolicies.length === 0) {
    tbody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  tbody.innerHTML = filteredPolicies.map(policy => `
    <tr>
      <td><strong>${policy.policyNumber}</strong></td>
      <td>${policy.policyholderName}</td>
      <td style="text-transform: capitalize;">${policy.vehicleType}</td>
      <td>${policy.vehicleNumber}</td>
      <td style="text-transform: capitalize;">${policy.coverageType.replace('-', ' ')}</td>
      <td>${formatCurrency(policy.premium)}</td>
      <td>
        <span class="badge badge-${policy.status.toLowerCase()}">${policy.status}</span>
      </td>
      <td>${formatDate(policy.createdAt)}</td>
      <td>
        <button onclick="viewPolicyDetails('${policy.policyNumber}')" class="btn btn-primary" style="padding: 6px 12px; font-size: 12px;">
          View
        </button>
      </td>
    </tr>
  `).join('');
}

// View policy details
function viewPolicyDetails(policyNumber) {
  const policy = allPolicies.find(p => p.policyNumber === policyNumber);
  if (!policy) return;

  const modal = document.getElementById('policyModal');
  const content = document.getElementById('policyDetailsContent');

  content.innerHTML = `
    <div style="line-height: 1.8;">
      <h4 style="margin-bottom: 20px; color: var(--primary);">${policy.policyNumber}</h4>

      <div style="margin-bottom: 20px;">
        <h5 style="font-size: 14px; color: var(--text-light); margin-bottom: 10px;">POLICYHOLDER DETAILS</h5>
        <p><strong>Name:</strong> ${policy.policyholderName}</p>
        <p><strong>Email:</strong> ${policy.email}</p>
        <p><strong>Phone:</strong> ${policy.phone}</p>
        <p><strong>Date of Birth:</strong> ${formatDate(policy.dob)}</p>
        <p><strong>Address:</strong> ${policy.address}</p>
        <p><strong>State:</strong> ${policy.state}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h5 style="font-size: 14px; color: var(--text-light); margin-bottom: 10px;">VEHICLE DETAILS</h5>
        <p><strong>Type:</strong> <span style="text-transform: capitalize;">${policy.vehicleType}</span></p>
        <p><strong>Make:</strong> ${policy.vehicleMake}</p>
        <p><strong>Model:</strong> ${policy.vehicleModel}</p>
        <p><strong>Registration Number:</strong> ${policy.vehicleNumber}</p>
        <p><strong>Year of Manufacture:</strong> ${policy.manufactureYear}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h5 style="font-size: 14px; color: var(--text-light); margin-bottom: 10px;">COVERAGE DETAILS</h5>
        <p><strong>Coverage Type:</strong> <span style="text-transform: capitalize;">${policy.coverageType.replace('-', ' ')}</span></p>
        <p><strong>Sum Assured:</strong> ${formatCurrency(policy.sumAssured)}</p>
        <p><strong>Premium:</strong> ${formatCurrency(policy.premium)}</p>
        <p><strong>Payment Frequency:</strong> <span style="text-transform: capitalize;">${policy.paymentFrequency}</span></p>
        <p><strong>Policy Start Date:</strong> ${formatDate(policy.policyStartDate)}</p>
        ${policy.addOns && policy.addOns.length > 0 ? `
          <p><strong>Add-ons:</strong></p>
          <ul style="margin-left: 20px;">
            ${policy.addOns.map(addon => `<li style="text-transform: capitalize;">${addon.replace('-', ' ')}</li>`).join('')}
          </ul>
        ` : ''}
      </div>

      <div>
        <h5 style="font-size: 14px; color: var(--text-light); margin-bottom: 10px;">POLICY STATUS</h5>
        <p><strong>Status:</strong> <span class="badge badge-${policy.status.toLowerCase()}">${policy.status}</span></p>
        <p><strong>Created:</strong> ${formatDate(policy.createdAt)}</p>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

// Close policy modal
function closePolicyModal() {
  document.getElementById('policyModal').style.display = 'none';
}

// Export data
document.getElementById('exportBtn').addEventListener('click', () => {
  const dataToExport = filteredPolicies.map(policy => ({
    ...policy,
    premiumFormatted: formatCurrency(policy.premium),
    sumAssuredFormatted: formatCurrency(policy.sumAssured)
  }));

  exportData(dataToExport, `policies-export-${new Date().toISOString().split('T')[0]}.json`);
  showToast('Policies exported successfully!', 'success');
});

// Search input handler
document.getElementById('searchInput').addEventListener('input', async () => {
  await simulateDelay(300);
  filterPolicies();
});

// Filter handlers
document.getElementById('statusFilter').addEventListener('change', filterPolicies);
document.getElementById('vehicleTypeFilter').addEventListener('change', filterPolicies);

// Sort handlers
document.querySelectorAll('.sortable').forEach(th => {
  th.addEventListener('click', () => {
    const field = th.getAttribute('data-sort');
    sortPolicies(field);
  });
});

// Close modal on background click
document.getElementById('policyModal').addEventListener('click', (e) => {
  if (e.target.id === 'policyModal') {
    closePolicyModal();
  }
});

// Initialize
loadUserInfo();
loadPolicies();
