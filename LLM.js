import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({apiKey:""});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",

    // Manually we are giving content
    contents: [
        {
            role: "user",
            parts:[
                {text:"Hey I am Bhawneet."}
            ]
        },
        {
            role:"model",
            parts:[
                {text:"Hi Bhawneet! It's nice to meet you. How can I help you today?"}
            ]
        },
        {
            role:"user",
            parts:[
                {text:"What is my name?"}
            ]
        }
    ]
  });
  console.log(response.text);
}


main();
