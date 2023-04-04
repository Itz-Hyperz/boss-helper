const bosschat = require('bosschat'); // Import module

// APIKEY: String, Free/Paid OpenAI API Key
// VERSION: Integer, 0=Free, 1=Paid
// DEBUGMODE: Boolean, True/False Error Logging
const instance = new bosschat({ apiKey: 'YOUR_OPENAI_API_KEY', version: 0, debugMode: true }); // Configure module instance

instance.init(); // Initialize instance

// SIMPLE AI PROMPT
let simpleResponse = instance.prompt('How do you bake a cake?'); // Ask the AI a question in simple format.
console.log(simpleResponse); // You can bake a cake by...

// ADVANCED AI PROMPT
let conversationId = Date.now(); // This would usually be a user Id or session Id.
let advancedResponse = instance.prompt('How do you bake a cake?', { conversationId: conversationId }); // Ask the AI a question in advanced format with options.
console.log(advancedResponse); // Returns OBJECT of conversation prompts and response history for session Id.

// Delete a conversation
instance.deleteConvo(conversationId); // Returns a true value

// Delete all conversation history
instance.deleteAllConvos(); // Returns a true value
