export interface Appointment {
  id: string;
  serialNumber: number;
  requestId: string;
  category: string; // Medical specialization
  area: string; // Hospital name and location
  time: string;
  date: string;
  status: 'completed' | 'pending' | 'in-process';
  description: string; // Medical concern
  image?: string; // Patient image
  audioNote?: string; // Patient voice note
  geolocation: {
    lat: number;
    lng: number;
    address: string; // Hospital address
  };
  additionalNotes?: string; // Additional medical notes
  landmarks?: string; // Nearby landmarks
  urgency?: 'low' | 'medium' | 'high' | 'critical'; // Priority level
}

export interface Doctor {
  id: string;
  name: string;
  category: string; // Medical specialization
  contact: string;
  area: string; // Hospital affiliation
  available: boolean;
}

export interface User {
  username: string;
  name: string;
  designation: string;
  department: string;
  contact: string;
  email: string;
  location: string;
}

export interface AssignedDoctor {
  id: string;
  workerId: string; // Doctor ID
  worker: {
    name: string;
    category: string; // Medical specialization
    contact: string;
    area: string; // Hospital affiliation
  };
  reportId: string; // Appointment ID
  report: {
    requestId: string;
    category: string; // Medical specialization
    area: string; // Hospital name
    urgency: string; // Priority level
    description: string; // Medical concern
  };
  dispatchedAt: string; // Assigned at
  estimatedCompletion: string; // Estimated completion time
  status: 'active' | 'completed' | 'delayed';
  progress: string; // Current status
}