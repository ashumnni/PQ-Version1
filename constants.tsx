
import { PG, MenuItem, BlogPost, CommunityPost } from './types';

export const MOCK_PGS: PG[] = [
  {
    id: 'pg-1',
    name: 'NEXCHAKRA Elite',
    type: 'Boys',
    location: 'Koramangala, Bangalore',
    landmark: 'Near Wipro Park',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200'
    ],
    virtualTourUrl: 'https://kuula.co/share/collection/79KxK',
    rentComparison: { neighborhoodAvg: 21000, nexchakraValue: 18000, savings: 3000 },
    rating: 4.8, hygieneScore: 9.5, noiseLevel: 3,
    rooms: [
      { id: 'r1', sharingType: 'Single', rent: 18000, deposit: 30000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['AC', 'Bed', 'Wardrobe'], amenities: ['High-speed Wi-Fi'] },
      { id: 'r2', sharingType: 'Double', rent: 11000, deposit: 20000, available: true, totalBeds: 2, availableBeds: 1, furnishing: ['Bed', 'Wardrobe'], amenities: ['Wi-Fi'] }
    ],
    ownerName: 'Vikram Singh', yearsOperating: 5, occupancyRate: 92, rules: ['No loud music', 'Curfew: 11 PM'],
    neighborhood: [
      { name: 'Koramangala Public Library', type: 'Library', distance: '800m', walkTime: '10 min' },
      { name: 'Annapurna Tiffin Center', type: 'Tiffin', distance: '200m', walkTime: '3 min' },
      { name: 'Cult.fit HSR', type: 'Gym', distance: '1.2km', walkTime: '15 min' }
    ],
    distanceFromHubs: { college: '2 km from Christ', metro: '1 km from HSR Metro', office: 'Walking distance to Sony Hub' }
  },
  {
    id: 'pg-2',
    name: 'NEXCHAKRA Bloom',
    type: 'Girls',
    location: 'Sector 62, Noida',
    landmark: 'Near Fortis',
    rentComparison: { neighborhoodAvg: 14500, nexchakraValue: 12500, savings: 2000 },
    rating: 4.5, hygieneScore: 9.8, noiseLevel: 2,
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'
    ],
    virtualTourUrl: 'https://kuula.co/share/collection/7P97X',
    rooms: [{ id: 'r3', sharingType: 'Double', rent: 12500, deposit: 25000, available: true, totalBeds: 2, availableBeds: 2, furnishing: ['Bed', 'Wardrobe'], amenities: ['3 Tier Security'] }],
    ownerName: 'Priya Sharma', yearsOperating: 3, occupancyRate: 88, rules: ['Curfew: 10 PM'],
    neighborhood: [
      { name: 'Noida City Center Library', type: 'Library', distance: '2.5km', walkTime: '30 min' },
      { name: 'Home Style Tiffin', type: 'Tiffin', distance: '400m', walkTime: '5 min' }
    ],
    distanceFromHubs: { college: '1 km from JIIT', metro: '0.5 km from Metro', office: 'Near Fortis IT Hub' }
  },
  {
    id: 'pg-3',
    name: 'NEXCHAKRA Urban',
    type: 'Co-ed',
    location: 'HSR Layout, Bangalore',
    landmark: 'Near BDA Complex',
    rentComparison: { neighborhoodAvg: 24000, nexchakraValue: 19500, savings: 4500 },
    rating: 4.7, hygieneScore: 9.2, noiseLevel: 5,
    images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200'],
    rooms: [
      { id: 'r4', sharingType: 'Single', rent: 19500, deposit: 40000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['AC', 'Workstation'], amenities: ['Gym'] },
      { id: 'r5', sharingType: 'Double', rent: 13000, deposit: 25000, available: true, totalBeds: 2, availableBeds: 1, furnishing: ['Bed'], amenities: ['Wi-Fi'] }
    ],
    ownerName: 'Arjun Reddy', yearsOperating: 2, occupancyRate: 85, rules: ['Co-ed decorum', 'Gate 12 AM'],
    neighborhood: [
      { name: 'HSR Public Park', type: 'Gym', distance: '500m', walkTime: '6 min' },
      { name: 'Metro Station HSR', type: 'Metro', distance: '1.5km', walkTime: '20 min' }
    ],
    distanceFromHubs: { college: '3 km from NIFT', metro: '1.5 km', office: 'Near Startup Hub' }
  },
  {
    id: 'pg-4',
    name: 'NEXCHAKRA Scholar',
    type: 'Boys',
    location: 'North Campus, Delhi',
    landmark: 'Near GTB Nagar Metro',
    rentComparison: { neighborhoodAvg: 16000, nexchakraValue: 14000, savings: 2000 },
    rating: 4.3, hygieneScore: 8.8, noiseLevel: 7,
    images: ['https://images.unsplash.com/photo-1555854817-5b2247a8175f?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r6', sharingType: 'Triple', rent: 14000, deposit: 14000, available: true, totalBeds: 3, availableBeds: 2, furnishing: ['Study Desks'], amenities: ['Library Access'] }],
    ownerName: 'Rajesh Khanna', yearsOperating: 10, occupancyRate: 95, rules: ['No smoking', 'Library discipline'],
    neighborhood: [
      { name: 'DU Central Library', type: 'Library', distance: '1.2km', walkTime: '15 min' },
      { name: 'Students Tiffin', type: 'Tiffin', distance: '100m', walkTime: '2 min' }
    ],
    distanceFromHubs: { college: 'Walking distance to DU', metro: '0.2 km', office: 'N/A' }
  },
  {
    id: 'pg-5',
    name: 'NEXCHAKRA Aura',
    type: 'Girls',
    location: 'Andheri West, Mumbai',
    landmark: 'Near Infinity Mall',
    rentComparison: { neighborhoodAvg: 35000, nexchakraValue: 28000, savings: 7000 },
    rating: 4.9, hygieneScore: 9.9, noiseLevel: 3,
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r7', sharingType: 'Double', rent: 28000, deposit: 50000, available: true, totalBeds: 2, availableBeds: 1, furnishing: ['Modular Wardrobes'], amenities: ['3 Tier Security'] }],
    ownerName: 'Sanjana Kapoor', yearsOperating: 4, occupancyRate: 98, rules: ['Female guests only', 'Kitchen use timing'],
    neighborhood: [
      { name: 'Versova Library', type: 'Library', distance: '2km', walkTime: '25 min' },
      { name: 'Fitness First', type: 'Gym', distance: '400m', walkTime: '5 min' }
    ],
    distanceFromHubs: { college: '2 km from Bhavan\'s', metro: '0.5 km', office: 'Near Laxmi Industrial Estate' }
  },
  {
    id: 'pg-6',
    name: 'NEXCHAKRA Cyber',
    type: 'Co-ed',
    location: 'Gachibowli, Hyderabad',
    landmark: 'Near DLF Cyber City',
    rentComparison: { neighborhoodAvg: 18000, nexchakraValue: 15500, savings: 2500 },
    rating: 4.6, hygieneScore: 9.3, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r8', sharingType: 'Single', rent: 15500, deposit: 30000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['Ergonomic Chair'], amenities: ['1Gbps Wi-Fi'] }],
    ownerName: 'Satya Reddy', yearsOperating: 3, occupancyRate: 90, rules: ['Curfew 12 AM', 'Professional conduct'],
    neighborhood: [
      { name: 'Gachibowli Stadium', type: 'Gym', distance: '1.5km', walkTime: '20 min' },
      { name: 'Raidurg Metro', type: 'Metro', distance: '2.5km', walkTime: '30 min' }
    ],
    distanceFromHubs: { college: '5 km from UoH', metro: '2.5 km', office: 'Walking distance to DLF' }
  },
  {
    id: 'pg-7',
    name: 'NEXCHAKRA Zen',
    type: 'Girls',
    location: 'Viman Nagar, Pune',
    landmark: 'Behind Phoenix Mall',
    rentComparison: { neighborhoodAvg: 19000, nexchakraValue: 16000, savings: 3000 },
    rating: 4.7, hygieneScore: 9.7, noiseLevel: 1,
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r9', sharingType: 'Double', rent: 16000, deposit: 30000, available: true, totalBeds: 2, availableBeds: 2, furnishing: ['Eco-friendly decor'], amenities: ['Yoga Studio'] }],
    ownerName: 'Meghna Pant', yearsOperating: 2, occupancyRate: 82, rules: ['Quiet hours 9 PM', 'Eco-policy'],
    neighborhood: [
      { name: 'Viman Nagar Library', type: 'Library', distance: '1km', walkTime: '12 min' },
      { name: 'Zen Fitness', type: 'Gym', distance: '200m', walkTime: '3 min' }
    ],
    distanceFromHubs: { college: '1 km from Symbiosis', metro: 'N/A', office: 'Near Weikfield IT Citi' }
  },
  {
    id: 'pg-8',
    name: 'NEXCHAKRA Pulse',
    type: 'Boys',
    location: 'Indiranagar, Bangalore',
    landmark: 'Near 100ft Road',
    rentComparison: { neighborhoodAvg: 25000, nexchakraValue: 21000, savings: 4000 },
    rating: 4.8, hygieneScore: 9.4, noiseLevel: 6,
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r10', sharingType: 'Double', rent: 21000, deposit: 40000, available: true, totalBeds: 2, availableBeds: 1, furnishing: ['Smart Lockers'], amenities: ['Rooftop Cafe'] }],
    ownerName: 'Karthik Rao', yearsOperating: 5, occupancyRate: 96, rules: ['No outside food on rooftop'],
    neighborhood: [
      { name: 'Indiranagar Club', type: 'Gym', distance: '1.2km', walkTime: '15 min' },
      { name: 'CMH Road Metro', type: 'Metro', distance: '0.8km', walkTime: '10 min' }
    ],
    distanceFromHubs: { college: '4 km from St Joseph', metro: '0.8 km', office: 'Walking distance to Startups' }
  },
  {
    id: 'pg-9',
    name: 'NEXCHAKRA Heritage',
    type: 'Co-ed',
    location: 'Adyar, Chennai',
    landmark: 'Near IIT Madras',
    rentComparison: { neighborhoodAvg: 18000, nexchakraValue: 15000, savings: 3000 },
    rating: 4.5, hygieneScore: 9.6, noiseLevel: 2,
    images: ['https://images.unsplash.com/photo-1536376074432-cd4258ae0fdd?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r11', sharingType: 'Single', rent: 15000, deposit: 45000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['Vintage Furnishing'], amenities: ['Cultural Lounge'] }],
    ownerName: 'Sundar Pichai', yearsOperating: 6, occupancyRate: 75, rules: ['Veg kitchen only', 'No loud media'],
    neighborhood: [
      { name: 'Anna Library', type: 'Library', distance: '3km', walkTime: '35 min' },
      { name: 'IIT Gymkhana', type: 'Gym', distance: '1km', walkTime: '12 min' }
    ],
    distanceFromHubs: { college: '1 km from IIT M', metro: '2 km (MRTS)', office: 'Near Tidel Park' }
  },
  {
    id: 'pg-10',
    name: 'NEXCHAKRA Vogue',
    type: 'Girls',
    location: 'Hauz Khas, Delhi',
    landmark: 'Near HKV Village',
    rentComparison: { neighborhoodAvg: 30000, nexchakraValue: 24000, savings: 6000 },
    rating: 4.8, hygieneScore: 9.8, noiseLevel: 5,
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r12', sharingType: 'Single', rent: 24000, deposit: 48000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['Designer Mirror', 'AC'], amenities: ['Boutique Security'] }],
    ownerName: 'Ananya Sharma', yearsOperating: 1, occupancyRate: 88, rules: ['No pets', 'Strict visitor logs'],
    neighborhood: [
      { name: 'Deer Park', type: 'Gym', distance: '0.5km', walkTime: '6 min' },
      { name: 'Hauz Khas Metro', type: 'Metro', distance: '1km', walkTime: '12 min' }
    ],
    distanceFromHubs: { college: '2 km from NIFT', metro: '1 km', office: 'Near South Ex' }
  },
  {
    id: 'pg-11',
    name: 'NEXCHAKRA Tech',
    type: 'Boys',
    location: 'Hinjewadi, Pune',
    landmark: 'Near Infosys Phase 1',
    rentComparison: { neighborhoodAvg: 12000, nexchakraValue: 9500, savings: 2500 },
    rating: 4.2, hygieneScore: 9.0, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r13', sharingType: 'Double', rent: 9500, deposit: 15000, available: true, totalBeds: 4, availableBeds: 4, furnishing: ['Standard Fitout'], amenities: ['Gaming Room'] }],
    ownerName: 'Narayana Patil', yearsOperating: 8, occupancyRate: 70, rules: ['Professional conduct', 'Pool timing'],
    neighborhood: [
      { name: 'E-Square Fitness', type: 'Gym', distance: '1.2km', walkTime: '15 min' },
      { name: 'Marunji Tiffin', type: 'Tiffin', distance: '300m', walkTime: '4 min' }
    ],
    distanceFromHubs: { college: 'N/A', metro: 'N/A', office: 'Walking distance to IT Park' }
  },
  {
    id: 'pg-12',
    name: 'NEXCHAKRA Coast',
    type: 'Co-ed',
    location: 'Bandra West, Mumbai',
    landmark: 'Near Bandstand',
    rentComparison: { neighborhoodAvg: 60000, nexchakraValue: 50000, savings: 10000 },
    rating: 4.9, hygieneScore: 9.9, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r14', sharingType: 'Single', rent: 50000, deposit: 150000, available: true, totalBeds: 3, availableBeds: 1, furnishing: ['Luxury Fitout'], amenities: ['Beach Access'] }],
    ownerName: 'Rohan Mehra', yearsOperating: 1, occupancyRate: 99, rules: ['Lifestyle harmony policy'],
    neighborhood: [
      { name: 'Bandra Study Circle', type: 'Library', distance: '1.5km', walkTime: '18 min' },
      { name: 'Ocean Tiffin', type: 'Tiffin', distance: '300m', walkTime: '4 min' }
    ],
    distanceFromHubs: { college: '2 km from St. Andrews', metro: 'N/A', office: 'BKC Hub (5km)' }
  },
  {
    id: 'pg-13',
    name: 'NEXCHAKRA Marine',
    type: 'Co-ed',
    location: 'Marine Drive, Mumbai',
    landmark: 'Near Air India Building',
    rentComparison: { neighborhoodAvg: 55000, nexchakraValue: 45000, savings: 10000 },
    rating: 4.9, hygieneScore: 9.9, noiseLevel: 2,
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r15', sharingType: 'Single', rent: 45000, deposit: 100000, available: true, totalBeds: 1, availableBeds: 1, furnishing: ['Sea view balcony'], amenities: ['Concierge Service'] }],
    ownerName: 'Mukesh Ambani', yearsOperating: 2, occupancyRate: 94, rules: ['Privacy policy', 'No loud parties'],
    neighborhood: [
      { name: 'Asiatic Library', type: 'Library', distance: '2km', walkTime: '25 min' },
      { name: 'Marine Drive Fitness', type: 'Gym', distance: '100m', walkTime: '1 min' }
    ],
    distanceFromHubs: { college: '1 km from Jai Hind', metro: '0.5 km (Churchgate)', office: 'Nariman Point Hub' }
  },
  {
    id: 'pg-14',
    name: 'NEXCHAKRA Skyline',
    type: 'Co-ed',
    location: 'Cyber City, Gurgaon',
    landmark: 'Near DLF Phase 3',
    rentComparison: { neighborhoodAvg: 32000, nexchakraValue: 26000, savings: 6000 },
    rating: 4.7, hygieneScore: 9.5, noiseLevel: 6,
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r16', sharingType: 'Single', rent: 26000, deposit: 50000, available: true, totalBeds: 10, availableBeds: 4, furnishing: ['Workstation', 'AC'], amenities: ['Co-working Space'] }],
    ownerName: 'Deepak Hooda', yearsOperating: 4, occupancyRate: 91, rules: ['Professional attire in common areas'],
    neighborhood: [
      { name: 'Cyber Hub Library', type: 'Library', distance: '1.2km', walkTime: '15 min' },
      { name: 'Phase 3 Metro', type: 'Metro', distance: '0.5km', walkTime: '6 min' }
    ],
    distanceFromHubs: { college: 'N/A', metro: '0.5 km', office: 'Walking distance to Cyber City' }
  },
  {
    id: 'pg-15',
    name: 'NEXCHAKRA Royal',
    type: 'Boys',
    location: 'Salt Lake, Kolkata',
    landmark: 'Near City Centre 1',
    rentComparison: { neighborhoodAvg: 14000, nexchakraValue: 11000, savings: 3000 },
    rating: 4.4, hygieneScore: 9.1, noiseLevel: 3,
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r17', sharingType: 'Double', rent: 11000, deposit: 20000, available: true, totalBeds: 4, availableBeds: 2, furnishing: ['Solid Wood Bed'], amenities: ['Community Kitchen'] }],
    ownerName: 'Saurav Ganguly', yearsOperating: 7, occupancyRate: 85, rules: ['No late night music'],
    neighborhood: [
      { name: 'Salt Lake Stadium Gym', type: 'Gym', distance: '2.5km', walkTime: '30 min' },
      { name: 'City Centre Tiffin', type: 'Tiffin', distance: '400m', walkTime: '5 min' }
    ],
    distanceFromHubs: { college: '2 km from NUJS', metro: '0.6 km (City Centre)', office: 'Sector V Hub' }
  },
  {
    id: 'pg-16',
    name: 'NEXCHAKRA Pink',
    type: 'Girls',
    location: 'Malviya Nagar, Jaipur',
    landmark: 'Near WTP Mall',
    rentComparison: { neighborhoodAvg: 12000, nexchakraValue: 9500, savings: 2500 },
    rating: 4.6, hygieneScore: 9.8, noiseLevel: 2,
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r18', sharingType: 'Triple', rent: 9500, deposit: 15000, available: true, totalBeds: 6, availableBeds: 3, furnishing: ['Full Furnished'], amenities: ['Pick & Drop Service'] }],
    ownerName: 'Vasundhara Raje', yearsOperating: 3, occupancyRate: 80, rules: ['Curfew 10 PM', 'ID check mandatory'],
    neighborhood: [
      { name: 'Jaipur Literature Hub', type: 'Library', distance: '3.5km', walkTime: '45 min' },
      { name: 'Pink Gym', type: 'Gym', distance: '800m', walkTime: '10 min' }
    ],
    distanceFromHubs: { college: '1 km from MNIT', metro: 'N/A', office: 'Near Genpact' }
  },
  {
    id: 'pg-17',
    name: 'NEXCHAKRA Emerald',
    type: 'Girls',
    location: 'Sector 17, Chandigarh',
    landmark: 'Near Rose Garden',
    rentComparison: { neighborhoodAvg: 20000, nexchakraValue: 17000, savings: 3000 },
    rating: 4.8, hygieneScore: 9.9, noiseLevel: 1,
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r19', sharingType: 'Single', rent: 17000, deposit: 35000, available: true, totalBeds: 5, availableBeds: 2, furnishing: ['White Oak Decor'], amenities: ['Green Terrace'] }],
    ownerName: 'Kirron Kher', yearsOperating: 2, occupancyRate: 78, rules: ['Eco-friendly lifestyle only'],
    neighborhood: [
      { name: 'Sector 17 Library', type: 'Library', distance: '0.4km', walkTime: '5 min' },
      { name: 'Garden Tiffin', type: 'Tiffin', distance: '200m', walkTime: '3 min' }
    ],
    distanceFromHubs: { college: '3 km from PEC', metro: 'N/A', office: 'Sector 17 Market Hub' }
  },
  {
    id: 'pg-18',
    name: 'NEXCHAKRA Heritage',
    type: 'Boys',
    location: 'Navrangpura, Ahmedabad',
    landmark: 'Near IIM-A',
    rentComparison: { neighborhoodAvg: 15000, nexchakraValue: 13000, savings: 2000 },
    rating: 4.5, hygieneScore: 9.4, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r20', sharingType: 'Double', rent: 13000, deposit: 25000, available: true, totalBeds: 8, availableBeds: 4, furnishing: ['Solid Wood'], amenities: ['Case Study Room'] }],
    ownerName: 'Gautam Adani', yearsOperating: 5, occupancyRate: 89, rules: ['Study hours maintained'],
    neighborhood: [
      { name: 'AMA Library', type: 'Library', distance: '1km', walkTime: '12 min' },
      { name: 'IIM Tiffin Circle', type: 'Tiffin', distance: '500m', walkTime: '6 min' }
    ],
    distanceFromHubs: { college: 'Walking distance to IIM', metro: '1.5 km (Gujarat College)', office: 'Navrangpura Hub' }
  },
  {
    id: 'pg-19',
    name: 'NEXCHAKRA Metro',
    type: 'Boys',
    location: 'Gomti Nagar, Lucknow',
    landmark: 'Near Janeshwar Mishra Park',
    rentComparison: { neighborhoodAvg: 11000, nexchakraValue: 8500, savings: 2500 },
    rating: 4.3, hygieneScore: 9.0, noiseLevel: 2,
    images: ['https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r21', sharingType: 'Triple', rent: 8500, deposit: 10000, available: true, totalBeds: 12, availableBeds: 6, furnishing: ['Spacious Layout'], amenities: ['Shuttle Service'] }],
    ownerName: 'Akhilesh Yadav', yearsOperating: 3, occupancyRate: 70, rules: ['No outsiders after 9 PM'],
    neighborhood: [
      { name: 'Lucknow Library', type: 'Library', distance: '4km', walkTime: '50 min' },
      { name: 'Park Side Metro', type: 'Metro', distance: '2km', walkTime: '25 min' }
    ],
    distanceFromHubs: { college: '5 km from Amity', metro: '2 km', office: 'Near TCS Awadh Park' }
  },
  {
    id: 'pg-20',
    name: 'NEXCHAKRA Urban',
    type: 'Co-ed',
    location: 'Hebbal, Mysore',
    landmark: 'Near Infosys Campus',
    rentComparison: { neighborhoodAvg: 13000, nexchakraValue: 10500, savings: 2500 },
    rating: 4.6, hygieneScore: 9.5, noiseLevel: 3,
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r22', sharingType: 'Double', rent: 10500, deposit: 20000, available: true, totalBeds: 10, availableBeds: 2, furnishing: ['Modern Minimalist'], amenities: ['Cycle Rental'] }],
    ownerName: 'Sudha Murthy', yearsOperating: 4, occupancyRate: 93, rules: ['Ethical living guidelines'],
    neighborhood: [
      { name: 'Mysore University Library', type: 'Library', distance: '6km', walkTime: '70 min' },
      { name: 'Campus Tiffin', type: 'Tiffin', distance: '100m', walkTime: '1 min' }
    ],
    distanceFromHubs: { college: '4 km from NIE', metro: 'N/A', office: 'Walking distance to Infosys' }
  },
  {
    id: 'pg-21',
    name: 'NEXCHAKRA Haven',
    type: 'Girls',
    location: 'Patia, Bhubaneswar',
    landmark: 'Near KIIT University',
    rentComparison: { neighborhoodAvg: 9000, nexchakraValue: 7500, savings: 1500 },
    rating: 4.5, hygieneScore: 9.6, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r23', sharingType: 'Double', rent: 7500, deposit: 10000, available: true, totalBeds: 15, availableBeds: 5, furnishing: ['Colorful Vibe'], amenities: ['Self-Defense Class'] }],
    ownerName: 'Naveen Patnaik', yearsOperating: 2, occupancyRate: 85, rules: ['Student decorum required'],
    neighborhood: [
      { name: 'Patia Library', type: 'Library', distance: '0.8km', walkTime: '10 min' },
      { name: 'Bhubaneswar Metro (Planned)', type: 'Metro', distance: '1.5km', walkTime: '18 min' }
    ],
    distanceFromHubs: { college: 'Walking distance to KIIT', metro: 'N/A', office: 'Near Infocity' }
  },
  {
    id: 'pg-22',
    name: 'NEXCHAKRA Pulse',
    type: 'Boys',
    location: 'Peelamedu, Coimbatore',
    landmark: 'Near PSG Tech',
    rentComparison: { neighborhoodAvg: 10000, nexchakraValue: 8000, savings: 2000 },
    rating: 4.4, hygieneScore: 9.2, noiseLevel: 5,
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r24', sharingType: 'Triple', rent: 8000, deposit: 12000, available: true, totalBeds: 9, availableBeds: 4, furnishing: ['Sturdy Furniture'], amenities: ['Common Project Room'] }],
    ownerName: 'Annamalai Raja', yearsOperating: 6, occupancyRate: 88, rules: ['Academic priority hours'],
    neighborhood: [
      { name: 'PSG Library', type: 'Library', distance: '0.3km', walkTime: '4 min' },
      { name: 'Industrial Tiffin', type: 'Tiffin', distance: '100m', walkTime: '1 min' }
    ],
    distanceFromHubs: { college: 'Walking distance to PSG', metro: 'N/A', office: 'Near TIDEL Park CBE' }
  },
  {
    id: 'pg-23',
    name: 'NEXCHAKRA Hub',
    type: 'Co-ed',
    location: 'Infopark, Kochi',
    landmark: 'Near Lulu Mall (Edapally)',
    rentComparison: { neighborhoodAvg: 15000, nexchakraValue: 12500, savings: 2500 },
    rating: 4.7, hygieneScore: 9.7, noiseLevel: 4,
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1200'],
    rooms: [{ id: 'r25', sharingType: 'Double', rent: 12500, deposit: 25000, available: true, totalBeds: 20, availableBeds: 10, furnishing: ['High-Tech Suite'], amenities: ['Poolside Lounge'] }],
    ownerName: 'Yusuff Ali', yearsOperating: 1, occupancyRate: 92, rules: ['Weekend parties allowed in lounge'],
    neighborhood: [
      { name: 'Infopark Library', type: 'Library', distance: '1km', walkTime: '12 min' },
      { name: 'Kochi Metro Station', type: 'Metro', distance: '3km', walkTime: '35 min' }
    ],
    distanceFromHubs: { college: '5 km from CUSAT', metro: '3 km', office: 'Walking distance to SmartCity' }
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: '5 Hacks to Optimize Small PG Rooms',
    excerpt: 'Living in a double sharing? Here is how to maximize your personal space without cluttering.',
    category: 'Life Hacks',
    author: 'Neha Roy',
    date: 'Oct 12, 2024',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b2',
    title: 'Navigating Rent in Bangalore: A 2024 Guide',
    excerpt: 'Understanding security deposits, lock-in periods, and how to negotiate your first rental agreement.',
    category: 'Finance',
    author: 'Aman Verma',
    date: 'Oct 14, 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1554224155-16974a4ea565?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b3',
    title: 'Resident Spotlight: Meet Aravind, Techie & Musician',
    excerpt: 'How Aravind balanced a 9-to-5 with his band while living at NEXCHAKRA Indiranagar for 2 years.',
    category: 'NexTip',
    author: 'Journal Team',
    date: 'Oct 15, 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    isSpotlight: true
  },
  {
    id: 'b4',
    title: 'Quick Tip: How to Manage Laundry Like a Pro',
    excerpt: 'Three simple rules for shared laundry etiquette to keep the peace and your socks together.',
    category: 'NexTip',
    author: 'Lifestyle Team',
    date: 'Oct 16, 2024',
    readTime: '2 min',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'b5',
    title: 'Mumbai City Living: Bandra vs Andheri',
    excerpt: 'A comprehensive comparison for young professionals moving to the city of dreams.',
    category: 'City Guide',
    author: 'Rahul Sharma',
    date: 'Oct 18, 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=800'
  }
];

export const MOCK_COMMUNITY: CommunityPost[] = [
  {
    id: 'c2',
    user: 'Admin',
    avatar: 'https://i.pravatar.cc/150?u=admin',
    content: 'Reminder: The terrace pool will be closed for maintenance tomorrow 10am-2pm.',
    timestamp: '5h ago',
    likes: 45,
    type: 'Announcement'
  }
];

export const WEEKLY_MENU: MenuItem[] = [
  { day: 'Monday', breakfast: 'Poha & Chai', lunch: 'Rajma Chawal', dinner: 'Mix Veg & Chapati' },
  { day: 'Friday', breakfast: 'Upma', lunch: 'Dal Makhani', dinner: 'Chicken Curry / Shahi Paneer', isSpecial: true }
];
