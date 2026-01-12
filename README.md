# NEXCHAKRA PG - Smart Living Redefined

NEXCHAKRA is a premium, AI-integrated co-living and Paying Guest (PG) management platform designed specifically for the modern Indian urbanite. It blends high-end aesthetics with product-like intelligence to solve the traditional friction points of rental living.

## 🚀 Key Features

### ✅ Smart Discovery & Booking
- **Hyper-Local Context**: Detailed "Neighborhood Pulse" data showing proximity to libraries, gyms, and transit hubs.
- **360° Virtual Tours**: Fully immersive VR experiences to view rooms before visiting.
- **Real-Time Inventory**: Visual bed-mapping showing exactly which sharing spots are available.
- **Direct Connect**: Integrated WhatsApp, Call, and Visit Request triggers.

### 🧠 AI-Powered Intelligence (Powered by Gemini)
- **Lifestyle Match™**: A Gemini-driven engine that analyzes your sleep cycle, food preferences, and work routine to suggest the optimal room type and roommate synergy.
- **NexBot AI**: A persistent smart assistant for finding rooms, explaining house rules, and urban living advice.
- **Smart Issue Reporting**: AI-categorized maintenance requests with automated priority and resolution timeline estimation.

### 👤 Advanced Tenant Dashboard
- **NexScore™ Hub**: A gamified resident reputation system that unlocks rewards and rent cashbacks for good citizenship.
- **NexEnergy™ AI**: Real-time visualization of electricity consumption with AI-driven savings recommendations.
- **Community Hub**: A resident-only social layer for announcements and peer-to-peer marketplace.
- **Move-Out Assistant**: Rare transparency in tracking notice periods, dues checklists, and security deposit refunds.

### 📄 Digital Compliance
- **Agreement Hub**: End-to-end digital rental agreements with template downloads and secure e-sign upload channels.

## 🛠️ Technical Stack

- **Framework**: React 19 (ESM modules via `esm.sh`)
- **Intelligence**: Google Gemini API (`@google/genai`)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons/UI**: Custom SVG implementations and Phosphor/Lucide-inspired design language.
- **Typography**: Plus Jakarta Sans (High-legibility geometric sans-serif)

## 📁 Project Structure

- `App.tsx`: The main orchestration layer and routing logic.
- `types.ts`: Strongly typed interfaces for PGs, Rooms, Bookings, and AI responses.
- `constants.tsx`: Rich mock data layer simulating a production backend.
- `services/geminiService.ts`: Centralized AI orchestration for matching and chat.
- `components/`: Modular UI components (Dashboard, Blog, VR Modal, etc.)

## 🔑 Environment Requirements

The application requires a valid `process.env.API_KEY` to be injected for all AI functionalities (Lifestyle Match, NexBot, and Complaint Analysis). It utilizes the `gemini-3-flash-preview` model for low-latency, high-reasoning tasks.

## 🌐 Localization & Context
Built with a focus on Indian metropolitan hubs (Bangalore, Mumbai, Delhi, Hyderabad, Pune), incorporating regional nuances like "Veg/Non-Veg" preferences, "Metro Proximity", and "Guardian Verification Panels".

---
**NEXCHAKRA** - *Your Urban Era, Unfiltered.*
