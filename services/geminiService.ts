
import { GoogleGenAI, Type } from "@google/genai";
import { AIRootPlan } from "../types";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });

export const generateProjectWorkflow = async (prompt: string): Promise<AIRootPlan> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Design a high-productivity AI-first development workflow for the following project: ${prompt}. Focus on using modern AI tools like Copilot, Cursor, v0.dev, etc.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          suggestedStack: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          workflow: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                toolCategory: { type: Type.STRING }
              },
              required: ["title", "description", "toolCategory"]
            }
          },
          productivityTip: { type: Type.STRING }
        },
        required: ["projectName", "suggestedStack", "workflow", "productivityTip"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as AIRootPlan;
};
