# BossChat
Boss Chat is a node module that allows you to interact with OpenAI via the paid or free plan. It includes easy integration into web applications and other programs aswell.

[GitHub Repository](https://github.com/itz-hyperz/bosschat)

---

# Dependencies
- [@ChatGPT](https://www.npmjs.com/package/chatgpt)

| ChatGPTAPI        | ChatGPTUnofficialProxyAPI |
| ------------- | -----|
| Uses the gpt-3.5-turbo-0301 model with the official OpenAI chat completions API. | Uses an unofficial proxy server to access ChatGPT's backend API in a way that circumvents Cloudflare. |
| You can override the model, completion params, and system message to fully customize your assistant. | Uses the real ChatGPT and is pretty lightweight. |
| Official, robust approach, but it's not free. | Relies on a third-party server and is rate-limited. |

---

# Example
This is a simple example of the node module in use.

```javascript
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
```

---

# Credits
- [@Hyperz](https://bosssoftware.net) *Lead Stack Developer.*