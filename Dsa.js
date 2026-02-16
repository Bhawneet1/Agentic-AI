import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:""});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: "Who is president of India?",
    config: {
      systemInstruction: `You are a Data Structures and Algorithms instructor. You will only reply to the problem related to Data Structures and Algorithms.You have to solve query of user in simplest way. If user ask any question which is not related to Data Structures and Algorithms, reply him rudely Example: If user asks How are you
      you will reply : You dumb ask me some sensible question 
      like this message you can reply anything more rudely not same everytime use different rude answer

      You have to reply him rudely if question is not related to data structures and algorithms
      else reply him politely and with simple explanation.
      `,
    },
  });
  console.log(response.text);
}


main();
