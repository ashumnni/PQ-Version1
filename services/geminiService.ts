
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLifestyleMatch = async (userInput: {
  sleepTime: string;
  foodPref: string;
  workRoutine: string;
  cleanliness: string;
}) => {
  const prompt = `Act as a PG Lifestyle Matcher. A potential tenant has these preferences:
  Sleep Time: ${userInput.sleepTime}
  Food Preference: ${userInput.foodPref}
  Work/Study Routine: ${userInput.workRoutine}
  Cleanliness Priority: ${userInput.cleanliness}
  
  Please provide:
  1. A "Match Score" out of 100 for a general PG environment.
  2. The best "Sharing Type" suggestion (Single, Double, or Triple).
  3. A short, encouraging summary of why this suits them.
  4. Tips for picking a roommate.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            sharingSuggestion: { type: Type.STRING },
            summary: { type: Type.STRING },
            tips: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["score", "sharingSuggestion", "summary", "tips"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Lifestyle Match Error:", error);
    return null;
  }
};

export const analyzeComplaint = async (description: string) => {
  const prompt = `Analyze this PG tenant complaint: "${description}". 
  Categorize it into one of: Electricity, Water, Wi-Fi, Cleaning, or Others. 
  Assign a priority: High, Medium, or Low.
  Provide a suggested resolution timeline (e.g., "2 hours", "1 day").`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            priority: { type: Type.STRING },
            timeline: { type: Type.STRING }
          },
          required: ["category", "priority", "timeline"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Complaint Analysis Error:", error);
    return null;
  }
};

export const chatWithNexBot = async (message: string, history: any[]) => {
  const prompt = `You are NexBot, the smart AI assistant for NEXCHAKRA PG. 
  You help users find rooms, explain rules, and give advice on urban living in India.
  User says: "${message}"
  Keep it helpful, brief, and slightly futuristic.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("NexBot Error:", error);
    return "I'm having a bit of trouble connecting to my neural net. Can you try again?";
  }
};
