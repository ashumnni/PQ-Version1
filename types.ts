
export type PGType = 'Boys' | 'Girls' | 'Co-ed';
export type SharingType = 'Single' | 'Double' | 'Triple';
export type IssueStatus = 'Open' | 'In Progress' | 'Resolved';
export type ServiceStatus = 'Pending' | 'In Progress' | 'Completed';

export interface Room {
  id: string;
  sharingType: SharingType;
  rent: number;
  deposit: number;
  available: boolean;
  totalBeds: number;
  availableBeds: number;
  furnishing: string[];
  amenities: string[];
}

export interface Booking {
  id: string;
  pgName: string;
  roomType: SharingType;
  rent: number;
  date: string;
  status: 'Confirmed' | 'Pending';
}

export interface ServiceRequest {
  id: string;
  type: 'Laundry' | 'Deep Cleaning' | 'Maintenance' | 'Storage';
  status: ServiceStatus;
  scheduledDate: string;
  timeSlot: string;
}

export interface MoveOutAssistant {
  noticeStarted: string;
  noticeEnds: string;
  progress: number;
  checklist: { task: string; done: boolean }[];
  refundStatus: 'Pending' | 'Verifying' | 'Processed';
  refundAmount: number;
}

export interface Guardian {
  name: string;
  relation: string;
  phone: string;
  isVerified: boolean;
  emergencyAlertsEnabled: boolean;
}

export interface RentMetric {
  neighborhoodAvg: number;
  nexchakraValue: number;
  savings: number;
}

export interface NeighborhoodPulse {
  name: string;
  type: 'Library' | 'Tiffin' | 'Gym' | 'Metro';
  distance: string;
  walkTime: string;
}

export interface PG {
  id: string;
  name: string;
  type: PGType;
  location: string;
  landmark: string;
  images: string[];
  virtualTourUrl?: string;
  rooms: Room[];
  rating: number;
  hygieneScore: number;
  noiseLevel: number; // 1-10 (1 is quiet)
  ownerName: string;
  yearsOperating: number;
  occupancyRate: number;
  rules: string[];
  rentComparison: RentMetric;
  neighborhood: NeighborhoodPulse[];
  distanceFromHubs: {
    college: string;
    metro: string;
    office: string;
  };
}

export interface EnergyUsage {
  date: string;
  kwh: number;
  cost: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'City Guide' | 'Finance' | 'Life Hacks' | 'NexTip';
  author: string;
  date: string;
  readTime: string;
  image: string;
  isSpotlight?: boolean;
}

export interface CommunityPost {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
  type: 'Announcement' | 'Marketplace' | 'General';
}

export interface MenuItem {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  isSpecial?: boolean;
}
