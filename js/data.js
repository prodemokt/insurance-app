// Pre-loaded test data for the Vehicle Insurance Platform

const TEST_DATA = {
  dealers: [
    {
      id: 'D001',
      username: 'dealer1',
      password: 'password123',
      name: 'John Smith',
      email: 'john.smith@insurance.com',
      phone: '9876543210',
      branch: 'Mumbai Central'
    },
    {
      id: 'D002',
      username: 'dealer2',
      password: 'test@456',
      name: 'Sarah Johnson',
      email: 'sarah.j@insurance.com',
      phone: '9876543211',
      branch: 'Delhi North'
    },
    {
      id: 'D003',
      username: 'admin',
      password: 'admin123',
      name: 'Admin User',
      email: 'admin@insurance.com',
      phone: '9876543212',
      branch: 'Head Office'
    },
    {
      id: 'D004',
      username: 'testuser',
      password: 'test123',
      name: 'Test Kumar',
      email: 'test.kumar@insurance.com',
      phone: '9876543213',
      branch: 'Bangalore South'
    },
    {
      id: 'D005',
      username: 'demo',
      password: 'demo123',
      name: 'Demo Agent',
      email: 'demo@insurance.com',
      phone: '9876543214',
      branch: 'Chennai East'
    }
  ],

  samplePolicies: [
    {
      policyNumber: 'POL-2025-001',
      dealerId: 'D001',
      policyholderName: 'Rajesh Kumar',
      email: 'rajesh.k@email.com',
      phone: '9123456789',
      dob: '1985-03-15',
      address: '123 MG Road, Mumbai, Maharashtra',
      vehicleType: 'car',
      vehicleNumber: 'MH01AB1234',
      vehicleMake: 'Maruti Suzuki',
      vehicleModel: 'Swift',
      manufactureYear: '2020',
      coverageType: 'comprehensive',
      sumAssured: 500000,
      premium: 15000,
      paymentFrequency: 'yearly',
      policyStartDate: '2025-01-01',
      addOns: ['roadside-assistance', 'zero-depreciation'],
      state: 'Maharashtra',
      status: 'Active',
      createdAt: '2025-01-01T10:00:00Z'
    },
    {
      policyNumber: 'POL-2025-002',
      dealerId: 'D001',
      policyholderName: 'Priya Sharma',
      email: 'priya.s@email.com',
      phone: '9123456790',
      dob: '1990-07-22',
      address: '456 Park Street, Mumbai, Maharashtra',
      vehicleType: 'bike',
      vehicleNumber: 'MH02CD5678',
      vehicleMake: 'Honda',
      vehicleModel: 'Activa',
      manufactureYear: '2023',
      coverageType: 'third-party',
      sumAssured: 100000,
      premium: 2000,
      paymentFrequency: 'yearly',
      policyStartDate: '2024-12-15',
      addOns: [],
      state: 'Maharashtra',
      status: 'Active',
      createdAt: '2024-12-15T14:30:00Z'
    },
    {
      policyNumber: 'POL-2024-128',
      dealerId: 'D001',
      policyholderName: 'Amit Patel',
      email: 'amit.p@email.com',
      phone: '9123456791',
      dob: '1982-11-10',
      address: '789 Brigade Road, Mumbai, Maharashtra',
      vehicleType: 'car',
      vehicleNumber: 'MH03EF9012',
      vehicleMake: 'Hyundai',
      vehicleModel: 'Creta',
      manufactureYear: '2019',
      coverageType: 'comprehensive',
      sumAssured: 800000,
      premium: 22000,
      paymentFrequency: 'yearly',
      policyStartDate: '2024-06-01',
      addOns: ['roadside-assistance', 'zero-depreciation', 'engine-protection'],
      state: 'Maharashtra',
      status: 'Expired',
      createdAt: '2024-06-01T09:15:00Z'
    },
    {
      policyNumber: 'POL-2025-003',
      dealerId: 'D002',
      policyholderName: 'Sunita Reddy',
      email: 'sunita.r@email.com',
      phone: '9123456792',
      dob: '1988-05-18',
      address: '321 Connaught Place, Delhi',
      vehicleType: 'car',
      vehicleNumber: 'DL05GH3456',
      vehicleMake: 'Tata',
      vehicleModel: 'Nexon',
      manufactureYear: '2022',
      coverageType: 'comprehensive',
      sumAssured: 600000,
      premium: 18000,
      paymentFrequency: 'monthly',
      policyStartDate: '2025-01-15',
      addOns: ['roadside-assistance'],
      state: 'Delhi',
      status: 'Active',
      createdAt: '2025-01-15T11:20:00Z'
    },
    {
      policyNumber: 'POL-2025-004',
      dealerId: 'D002',
      policyholderName: 'Vikram Singh',
      email: 'vikram.s@email.com',
      phone: '9123456793',
      dob: '1975-09-25',
      address: '654 Rajpath, Delhi',
      vehicleType: 'commercial',
      vehicleNumber: 'DL06IJ7890',
      vehicleMake: 'Mahindra',
      vehicleModel: 'Bolero Pickup',
      manufactureYear: '2021',
      coverageType: 'third-party',
      sumAssured: 300000,
      premium: 12000,
      paymentFrequency: 'quarterly',
      policyStartDate: '2025-02-01',
      addOns: [],
      state: 'Delhi',
      status: 'Pending',
      createdAt: '2025-02-01T16:45:00Z'
    },
    {
      policyNumber: 'POL-2024-095',
      dealerId: 'D003',
      policyholderName: 'Meera Iyer',
      email: 'meera.i@email.com',
      phone: '9123456794',
      dob: '1992-12-08',
      address: '987 Anna Salai, Chennai',
      vehicleType: 'bike',
      vehicleNumber: 'TN07KL2345',
      vehicleMake: 'Royal Enfield',
      vehicleModel: 'Classic 350',
      manufactureYear: '2023',
      coverageType: 'comprehensive',
      sumAssured: 200000,
      premium: 5000,
      paymentFrequency: 'yearly',
      policyStartDate: '2024-03-20',
      addOns: ['roadside-assistance'],
      state: 'Tamil Nadu',
      status: 'Cancelled',
      createdAt: '2024-03-20T13:00:00Z'
    },
    {
      policyNumber: 'POL-2025-005',
      dealerId: 'D004',
      policyholderName: 'Arjun Mehta',
      email: 'arjun.m@email.com',
      phone: '9123456795',
      dob: '1987-04-30',
      address: '147 MG Road, Bangalore, Karnataka',
      vehicleType: 'car',
      vehicleNumber: 'KA08MN6789',
      vehicleMake: 'Honda',
      vehicleModel: 'City',
      manufactureYear: '2024',
      coverageType: 'comprehensive',
      sumAssured: 700000,
      premium: 20000,
      paymentFrequency: 'yearly',
      policyStartDate: '2025-01-10',
      addOns: ['roadside-assistance', 'zero-depreciation', 'engine-protection'],
      state: 'Karnataka',
      status: 'Active',
      createdAt: '2025-01-10T10:30:00Z'
    },
    {
      policyNumber: 'POL-2025-006',
      dealerId: 'D005',
      policyholderName: 'Kavya Nair',
      email: 'kavya.n@email.com',
      phone: '9123456796',
      dob: '1995-06-12',
      address: '258 Mount Road, Chennai, Tamil Nadu',
      vehicleType: 'bike',
      vehicleNumber: 'TN09OP4567',
      vehicleMake: 'TVS',
      vehicleModel: 'Apache RTR 160',
      manufactureYear: '2024',
      coverageType: 'comprehensive',
      sumAssured: 150000,
      premium: 3500,
      paymentFrequency: 'yearly',
      policyStartDate: '2025-02-05',
      addOns: [],
      state: 'Tamil Nadu',
      status: 'Active',
      createdAt: '2025-02-05T15:20:00Z'
    }
  ],

  vehicleMakes: {
    car: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Honda', 'Mahindra', 'Toyota', 'Kia', 'MG'],
    bike: ['Honda', 'TVS', 'Bajaj', 'Royal Enfield', 'Hero', 'Yamaha', 'KTM'],
    commercial: ['Tata', 'Mahindra', 'Ashok Leyland', 'Eicher', 'Force Motors']
  },

  states: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ]
};

// Initialize localStorage with sample data if not exists
function initializeData() {
  if (!localStorage.getItem('dealers')) {
    localStorage.setItem('dealers', JSON.stringify(TEST_DATA.dealers));
  }

  if (!localStorage.getItem('policies')) {
    localStorage.setItem('policies', JSON.stringify(TEST_DATA.samplePolicies));
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEST_DATA;
}
