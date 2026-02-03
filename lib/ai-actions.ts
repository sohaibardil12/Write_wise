'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateContent(prompt: string) {
    const apiKey = process.env.GEMINI_API_KEY;

    console.log("API Key present:", !!apiKey);
    console.log("Prompt:", prompt);

    if (!apiKey) {
        return { error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env.local file.' };
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        console.log("Calling Gemini API...");
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("Generation successful, text length:", text.length);
        return { output: text };
    } catch (error) {
        console.error('Error in generateContent:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        // Check for rate limit errors
        if (errorMessage.includes('429') || errorMessage.includes('quota')) {
            return { error: 'Rate limit reached. Please wait 10 seconds and try again, or get a new API key from https://aistudio.google.com/app/apikey' };
        }

        return { error: `Failed to generate content: ${errorMessage}` };
    }
}
