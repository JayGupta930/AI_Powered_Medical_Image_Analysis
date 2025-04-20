// Ensure you have Node.js installed.
// Install the library: npm install @google/generative-ai

// Import the necessary class
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// --- Configuration ---

// IMPORTANT: Set your API Key as an environment variable
// (e.g., export API_KEY="YOUR_API_KEY")
// or replace "process.env.API_KEY" directly, but environment variables are safer.
const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
if (!apiKey) {
  console.error("Error: API_KEY environment variable not set.");
  process.exit(1); // Exit if the API key is missing
}

const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// --- Model Interaction ---

async function runChat(userPrompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-thinking-exp-01-21",
      generationConfig,
      safetySettings,
    });

    const chat = model.startChat({
      history: [],
      generationConfig,
      safetySettings,
    });

    console.log(`Sending message: "${userPrompt}"`);
    const result = await chat.sendMessage(userPrompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export default runChat;