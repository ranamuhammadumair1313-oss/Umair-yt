
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export interface VideoInfo {
  title: string;
  description: string;
  views?: string;
  uploader?: string;
  sources: { title: string; web: { uri: string } }[];
}

export const analyzeYouTubeLink = async (url: string): Promise<VideoInfo | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Explain what this YouTube video is about and give me its title and uploader name if possible: ${url}`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No details found.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    // We try to parse some basic info or just return the text
    return {
      title: "Video Insights",
      description: text,
      sources: chunks.map((c: any) => ({
        title: c.web?.title || "Reference",
        web: { uri: c.web?.uri || url }
      }))
    };
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return null;
  }
};
