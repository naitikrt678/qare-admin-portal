import { Appointment, Doctor, User } from '../types';

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    serialNumber: 1,
    requestId: 'QARE2024001',
    category: 'Cardiology',
    area: 'Apollo Hospital, Ranchi',
    time: '10:30 AM',
    date: '15/03/2025',
    status: 'pending',
    description: 'Patient experiencing chest pain and shortness of breath',
    geolocation: {
      lat: 23.3441,
      lng: 85.3096,
      address: 'Apollo Hospital, Ranchi, Jharkhand'
    },
    additionalNotes: 'Patient has history of hypertension',
    landmarks: 'Near Main Market',
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=Patient+Image'
  },
  {
    id: '2',
    serialNumber: 2,
    requestId: 'QARE2024002',
    category: 'Dermatology',
    area: 'City Hospital, Dhanbad',
    time: '02:15 PM',
    date: '15/03/2025',
    status: 'completed' as const,
    description: 'Patient with skin rash and itching',
    geolocation: {
      lat: 23.7957,
      lng: 86.4304,
      address: 'City Hospital, Dhanbad, Jharkhand'
    },
    additionalNotes: 'Allergic reaction suspected',
    urgency: 'medium',
    image: 'https://via.placeholder.com/300x200?text=Skin+Condition'
  },
  {
    id: '3',
    serialNumber: 3,
    requestId: 'QARE2024003',
    category: 'Emergency Medicine',
    area: 'Tata Main Hospital, Jamshedpur',
    time: '08:45 AM',
    date: '16/03/2025',
    status: 'in-process',
    description: 'Patient with severe abdominal pain and vomiting',
    geolocation: {
      lat: 22.8046,
      lng: 86.2029,
      address: 'Tata Main Hospital, Jamshedpur, Jharkhand'
    },
    landmarks: 'Near Tata Steel Plant',
    urgency: 'critical',
    image: 'https://via.placeholder.com/300x200?text=Emergency+Case'
  },
  {
    id: '4',
    serialNumber: 4,
    requestId: 'QARE2024004',
    category: 'Orthopedics',
    area: 'District Hospital, Bokaro',
    time: '06:20 PM',
    date: '16/03/2025',
    status: 'pending',
    description: 'Patient with fractured leg after road accident',
    geolocation: {
      lat: 23.6693,
      lng: 86.1511,
      address: 'District Hospital, Bokaro, Jharkhand'
    },
    additionalNotes: 'Patient requires immediate attention',
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=X-Ray+Image'
  },
  {
    id: '5',
    serialNumber: 5,
    requestId: 'QARE2024005',
    category: 'Pediatrics',
    area: 'Children Hospital, Hazaribagh',
    time: '11:00 AM',
    date: '17/03/2025',
    status: 'completed' as const,
    description: 'Child with high fever and cough',
    geolocation: {
      lat: 23.9929,
      lng: 85.3647,
      address: 'Children Hospital, Hazaribagh, Jharkhand'
    },
    landmarks: 'Near DC Office',
    urgency: 'medium',
    image: 'https://via.placeholder.com/300x200?text=Child+Patient'
  },
  // Additional appointments
  {
    id: '6',
    serialNumber: 6,
    requestId: 'QARE2024006',
    category: 'Neurology',
    area: 'Medical College Hospital, Deoghar',
    time: '09:15 AM',
    date: '17/03/2025',
    status: 'pending',
    description: 'Patient with severe headache and dizziness',
    geolocation: {
      lat: 24.4851,
      lng: 86.6975,
      address: 'Medical College Hospital, Deoghar, Jharkhand'
    },
    landmarks: 'Near Baba Baidyanath Temple',
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=Neurology+Patient'
  },
  {
    id: '7',
    serialNumber: 7,
    requestId: 'QARE2024007',
    category: 'Gynecology',
    area: 'Women Hospital, Giridih',
    time: '07:30 AM',
    date: '18/03/2025',
    status: 'in-process',
    description: 'Pregnant woman with complications',
    geolocation: {
      lat: 24.1870,
      lng: 86.3006,
      address: 'Women Hospital, Giridih, Jharkhand'
    },
    urgency: 'critical',
    image: 'https://via.placeholder.com/300x200?text=Pregnancy+Care'
  },
  {
    id: '8',
    serialNumber: 8,
    requestId: 'QARE2024008',
    category: 'Ophthalmology',
    area: 'Eye Care Center, Palamu',
    time: '05:45 PM',
    date: '18/03/2025',
    status: 'pending',
    description: 'Patient with vision problems and eye pain',
    geolocation: {
      lat: 23.8415,
      lng: 84.0784,
      address: 'Eye Care Center, Daltonganj, Palamu, Jharkhand'
    },
    urgency: 'critical',
    image: 'https://via.placeholder.com/300x200?text=Eye+Examination'
  },
  {
    id: '9',
    serialNumber: 9,
    requestId: 'QARE2024009',
    category: 'Dentistry',
    area: 'Dental Clinic, Chaibasa',
    time: '12:20 PM',
    date: '19/03/2025',
    status: 'pending',
    description: 'Patient with toothache and gum swelling',
    geolocation: {
      lat: 22.5541,
      lng: 85.8070,
      address: 'Dental Clinic, Chaibasa, Jharkhand'
    },
    urgency: 'medium',
    image: 'https://via.placeholder.com/300x200?text=Dental+Issue'
  },
  {
    id: '10',
    serialNumber: 10,
    requestId: 'QARE2024010',
    category: 'Psychiatry',
    area: 'Mental Health Center, Gumla',
    time: '03:10 PM',
    date: '19/03/2025',
    status: 'in-process',
    description: 'Patient with anxiety and depression',
    geolocation: {
      lat: 23.0433,
      lng: 84.5384,
      address: 'Mental Health Center, Gumla, Jharkhand'
    },
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=Mental+Health'
  },
  {
    id: '11',
    serialNumber: 11,
    requestId: 'QARE2024011',
    category: 'ENT',
    area: 'ENT Clinic, Koderma',
    time: '06:00 AM',
    date: '20/03/2025',
    status: 'pending',
    description: 'Patient with ear pain and hearing issues',
    geolocation: {
      lat: 24.4686,
      lng: 85.5937,
      address: 'ENT Clinic, Koderma, Jharkhand'
    },
    landmarks: 'Near Railway Station',
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=ENT+Examination'
  },
  {
    id: '12',
    serialNumber: 12,
    requestId: 'QARE2024012',
    category: 'Radiology',
    area: 'Diagnostic Center, Ramgarh',
    time: '04:30 PM',
    date: '20/03/2025',
    status: 'completed' as const,
    description: 'Patient requiring X-ray and MRI scans',
    geolocation: {
      lat: 23.6225,
      lng: 85.5197,
      address: 'Diagnostic Center, Ramgarh, Jharkhand'
    },
    urgency: 'medium',
    image: 'https://via.placeholder.com/300x200?text=Medical+Imaging'
  },
  {
    id: '13',
    serialNumber: 13,
    requestId: 'QARE2024013',
    category: 'Oncology',
    area: 'Cancer Care Hospital, Lohardaga',
    time: '08:15 AM',
    date: '21/03/2025',
    status: 'pending',
    description: 'Patient with suspected tumor requiring biopsy',
    geolocation: {
      lat: 23.4341,
      lng: 84.6811,
      address: 'Cancer Care Hospital, Lohardaga, Jharkhand'
    },
    urgency: 'critical',
    image: 'https://via.placeholder.com/300x200?text=Oncology+Patient'
  },
  {
    id: '14',
    serialNumber: 14,
    requestId: 'QARE2024014',
    category: 'Urology',
    area: 'Kidney Hospital, Simdega',
    time: '01:45 PM',
    date: '21/03/2025',
    status: 'in-process',
    description: 'Patient with kidney stones and urinary issues',
    geolocation: {
      lat: 22.6169,
      lng: 84.5125,
      address: 'Kidney Hospital, Simdega, Jharkhand'
    },
    urgency: 'critical',
    image: 'https://via.placeholder.com/300x200?text=Urology+Patient'
  },
  {
    id: '15',
    serialNumber: 15,
    requestId: 'QARE2024015',
    category: 'General Medicine',
    area: 'Primary Health Center, Pakur',
    time: '10:00 AM',
    date: '22/03/2025',
    status: 'pending',
    description: 'Patient with fever and body aches',
    geolocation: {
      lat: 24.6340,
      lng: 87.8479,
      address: 'Primary Health Center, Pakur, Jharkhand'
    },
    urgency: 'high',
    image: 'https://via.placeholder.com/300x200?text=General+Checkup'
  },
  // Low priority appointments
  {
    id: '16',
    serialNumber: 16,
    requestId: 'QARE2024016',
    category: 'Physiotherapy',
    area: 'Rehabilitation Center, Ranchi',
    time: '09:30 AM',
    date: '22/03/2025',
    status: 'pending',
    description: 'Patient requiring post-surgery physiotherapy',
    geolocation: {
      lat: 23.3569,
      lng: 85.3349,
      address: 'Rehabilitation Center, Ranchi, Jharkhand'
    },
    landmarks: 'Near Morabadi Ground',
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Physiotherapy'
  },
  {
    id: '17',
    serialNumber: 17,
    requestId: 'QARE2024017',
    category: 'Nutrition',
    area: 'Health Clinic, Dhanbad',
    time: '11:15 AM',
    date: '23/03/2025',
    status: 'completed' as const,
    description: 'Patient consultation for diet and nutrition',
    geolocation: {
      lat: 23.7879,
      lng: 86.4284,
      address: 'Health Clinic, Dhanbad, Jharkhand'
    },
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Nutrition+Consultation'
  },
  {
    id: '18',
    serialNumber: 18,
    requestId: 'QARE2024018',
    category: 'Vaccination',
    area: 'Immunization Center, Jamshedpur',
    time: '02:00 PM',
    date: '23/03/2025',
    status: 'pending',
    description: 'Child vaccination schedule follow-up',
    geolocation: {
      lat: 22.7925,
      lng: 86.1842,
      address: 'Immunization Center, Jamshedpur, Jharkhand'
    },
    landmarks: 'Near Jubilee Park',
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Vaccination'
  },
  {
    id: '19',
    serialNumber: 19,
    requestId: 'QARE2024019',
    category: 'Dermatology',
    area: 'Skin Care Clinic, Bokaro',
    time: '04:45 PM',
    date: '24/03/2025',
    status: 'in-process',
    description: 'Patient follow-up for skin condition treatment',
    geolocation: {
      lat: 23.6739,
      lng: 86.1511,
      address: 'Skin Care Clinic, Bokaro Steel City, Jharkhand'
    },
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Dermatology+Followup'
  },
  {
    id: '20',
    serialNumber: 20,
    requestId: 'QARE2024020',
    category: 'Cardiology',
    area: 'Heart Care Center, Hazaribagh',
    time: '07:20 AM',
    date: '24/03/2025',
    status: 'pending',
    description: 'Patient routine heart checkup',
    geolocation: {
      lat: 23.9875,
      lng: 85.3678,
      address: 'Heart Care Center, Hazaribagh, Jharkhand'
    },
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Heart+Checkup'
  },
  {
    id: '21',
    serialNumber: 21,
    requestId: 'QARE2024021',
    category: 'Orthopedics',
    area: 'Bone Clinic, Deoghar',
    time: '08:00 AM',
    date: '25/03/2025',
    status: 'completed' as const,
    description: 'Patient follow-up for fracture healing',
    geolocation: {
      lat: 24.4821,
      lng: 86.6958,
      address: 'Bone Clinic, Deoghar, Jharkhand'
    },
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Fracture+Healing'
  },
  {
    id: '22',
    serialNumber: 22,
    requestId: 'QARE2024022',
    category: 'Pediatrics',
    area: 'Children Clinic, Giridih',
    time: '10:30 AM',
    date: '25/03/2025',
    status: 'pending',
    description: 'Child routine health checkup',
    geolocation: {
      lat: 24.1845,
      lng: 86.2987,
      address: 'Children Clinic, Giridih, Jharkhand'
    },
    urgency: 'low',
    image: 'https://via.placeholder.com/300x200?text=Child+Checkup'
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Rajesh Kumar',
    category: 'Cardiology',
    contact: '+91 9876543210',
    area: 'Apollo Hospital, Ranchi',
    available: true
  },
  {
    id: 'd2',
    name: 'Dr. Amit Kumar',
    category: 'Cardiology',
    contact: '+91 9876543211',
    area: 'City Hospital, Ranchi',
    available: true
  },
  {
    id: 'd3',
    name: 'Dr. Sunita Devi',
    category: 'Dermatology',
    contact: '+91 9876543212',
    area: 'City Hospital, Dhanbad',
    available: false
  },
  {
    id: 'd4',
    name: 'Dr. Raman Kumar',
    category: 'Emergency Medicine',
    contact: '+91 9876543213',
    area: 'Tata Main Hospital, Jamshedpur',
    available: true
  },
  {
    id: 'd5',
    name: 'Dr. Priya Singh',
    category: 'Orthopedics',
    contact: '+91 9876543214',
    area: 'District Hospital, Bokaro',
    available: true
  },
  {
    id: 'd6',
    name: 'Dr. Deepak Kumar Yadav',
    category: 'Pediatrics',
    contact: '+91 9876543215',
    area: 'Children Hospital, Hazaribagh',
    available: true
  }
];

export const mockAssignedDoctors = [
  {
    id: 'dd1',
    workerId: 'd1',
    worker: {
      name: 'Dr. Rajesh Kumar',
      category: 'Cardiology',
      contact: '+91 9876543210',
      area: 'Apollo Hospital, Ranchi'
    },
    reportId: '1',
    report: {
      requestId: 'QARE2024001',
      category: 'Cardiology',
      area: 'Apollo Hospital, Ranchi',
      urgency: 'high',
      description: 'Patient experiencing chest pain and shortness of breath'
    },
    dispatchedAt: '16/03/2025 09:00 AM',
    estimatedCompletion: '17/03/2025 05:00 PM',
    status: 'active' as const,
    progress: 'En route to hospital'
  },
  {
    id: 'dd2',
    workerId: 'd4',
    worker: {
      name: 'Dr. Raman Kumar',
      category: 'Emergency Medicine',
      contact: '+91 9876543213',
      area: 'Tata Main Hospital, Jamshedpur'
    },
    reportId: '3',
    report: {
      requestId: 'QARE2024003',
      category: 'Emergency Medicine',
      area: 'Tata Main Hospital, Jamshedpur',
      urgency: 'critical',
      description: 'Patient with severe abdominal pain and vomiting'
    },
    dispatchedAt: '16/03/2025 10:30 AM',
    estimatedCompletion: '16/03/2025 06:00 PM',
    status: 'active' as const,
    progress: 'Examining patient - emergency treatment in progress'
  },
  {
    id: 'dd3',
    workerId: 'd5',
    worker: {
      name: 'Dr. Priya Singh',
      category: 'Orthopedics',
      contact: '+91 9876543214',
      area: 'District Hospital, Bokaro'
    },
    reportId: '4',
    report: {
      requestId: 'QARE2024004',
      category: 'Orthopedics',
      area: 'District Hospital, Bokaro',
      urgency: 'high',
      description: 'Patient with fractured leg after road accident'
    },
    dispatchedAt: '16/03/2025 02:15 PM',
    estimatedCompletion: '16/03/2025 08:00 PM',
    status: 'active' as const,
    progress: 'Preparing for surgery'
  },
  {
    id: 'dd4',
    workerId: 'd3',
    worker: {
      name: 'Dr. Sunita Devi',
      category: 'Dermatology',
      contact: '+91 9876543212',
      area: 'City Hospital, Dhanbad'
    },
    reportId: '2',
    report: {
      requestId: 'QARE2024002',
      category: 'Dermatology',
      area: 'City Hospital, Dhanbad',
      urgency: 'medium',
      description: 'Patient with skin rash and itching'
    },
    dispatchedAt: '15/03/2025 11:00 AM',
    estimatedCompletion: '15/03/2025 04:00 PM',
    status: 'completed' as const,
    progress: 'Treatment completed successfully'
  },
  {
    id: 'dd5',
    workerId: 'd6',
    worker: {
      name: 'Dr. Deepak Kumar Yadav',
      category: 'Pediatrics',
      contact: '+91 9876543215',
      area: 'Children Hospital, Hazaribagh'
    },
    reportId: '5',
    report: {
      requestId: 'QARE2024005',
      category: 'Pediatrics',
      area: 'Children Hospital, Hazaribagh',
      urgency: 'medium',
      description: 'Child with high fever and cough'
    },
    dispatchedAt: '17/03/2025 08:00 AM',
    estimatedCompletion: '17/03/2025 02:00 PM',
    status: 'completed' as const,
    progress: 'Treatment completed'
  }
];

export const mockUser: User = {
  username: 'admin',
  name: 'Dr. Pradeep Kumar Sharma',
  designation: 'Healthcare Administrator',
  department: 'Qare Healthcare Platform',
  contact: '+91 9876543200',
  email: 'admin@qarehealthcare.com',
  location: 'Ranchi, Jharkhand'
};