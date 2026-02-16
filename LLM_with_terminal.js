import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';
// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const ai = new GoogleGenAI({apiKey:""});

const History = []
async function chatting(userProblem) {
    History.push({
        role:"user",
        parts:[{text:userProblem}]
    })
    
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: History
  });
  History.push({
    role:"model",
    parts:[{text:response.text}]
  })
  console.log(response.text);
}
async function main() {
    const userProblem =readlineSync.question("Ask me anything: ");
    await chatting(userProblem);
    // jab tak answer na mile tab tak aage nahi jaega
    main();
    // Recursion is used here to keep the chat going until the user decides to stop it.

    //agar ham main ko call na kare to memory release ho jaegi aur context chla jaega, isliye main ko call karna jaruri hai taki chat chalti rahe aur context bhi bana rahe.
}


main();
