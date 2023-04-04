const { ChatGPTUnofficialProxyAPI, ChatGPTAPI } = require('chatgpt');
var BossChatInstance = null;
var bossStoredConversations = [];

class BossChat {
    constructor(options) {
        this.apiKey = options.apiKey || 'none', // String, Free/Paid OpenAI API Key
        this.version = options.version || 0, // Integer, 0=Free, 1=Paid
        this.debugMode = options.debugMode || false // Boolean, True/False Error Logging
        if(this.apiKey == 'none') return this.debug('You must provide a valid API key.');
    };

    // Debug function for all error handling
    debug(error) {
        if(!this.debugMode) return;
        console.log(`[DEBUG MODE] Boss Chat\n`, error);
    };

    // Separate initialization protocol to ensure the API can be reconnected
    init() {
        if(this.version === 0) {
            BossChatInstance = new ChatGPTUnofficialProxyAPI({ // Free
                apiKey: this.apiKey,
                debug: this.debugMode
            });
            this.debug('FREE OpenAI Instance Selected.');
        } else if(this.version === 1) {
            BossChatInstance = new ChatGPTAPI({ // Paid
                apiKey: this.apiKey,
                debug: this.debugMode
            });
            this.debug('PAID OpenAI Instance Selected.');
        };
    };

    async prompt(value, options) {
        let response = await BossChatInstance.sendMessage(value);
        if(typeof options == 'undefined') return response;
        if(typeof options.conversationId != 'undefined') {
            bossStoredConversations.push({
                "conversationId": options.conversationId,
                "prompt": value,
                "response": response
            });
            return bossStoredConversations.filter(convo => convo.conversationId === options.conversationId);
        };
    };

    deleteConvo(conversationId) {
        bossStoredConversations = bossStoredConversations.filter(convo => convo.conversationId !== conversationId);
        return 1;
    };

    deleteAllConvos() {
        bossStoredConversations = [];
        return 1;
    };

};

module.exports = BossChat;

// Programmed by Hyperz#0001
// Programmed by Hyperz#0001
// Programmed by Hyperz#0001
