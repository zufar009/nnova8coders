'use strict';
class ChatAI {

    constructor(options) {
        let defaults = {
            api_key: '',
            source: 'openai',
            model: 'gpt-3.5-turbo',
            conversations: [],
            selected_conversation: null,
            container: '.chat-ai',
            chat_speed: 30,
            title: 'Untitled',
            max_tokens: 100,
            version: '1.0.0',
            show_tokens: true,
            available_models: ['gpt-4', 'gpt-4-0613', 'gpt-4-32k', 'gpt-4-32k-0613', 'gpt-3.5-turbo', 'gpt-3.5-turbo-0613', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo-16k-0613']
        };
        this.options = Object.assign(defaults, options);
        this.options.container = document.querySelector(this.options.container);
        this.options.container.innerHTML = `
            ${this._sidebarTemplate()}
            <main class="content">               
                ${this._welcomePageTemplate()}
                <form class="message-form">
                    <input type="text" placeholder="Type a message..." required>
                    <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </main>
        `;
        let settings = this.getSettings();
        if (settings) {
            this.options = Object.assign(this.options, settings);
        }
        this._eventHandlers();
        this.container.querySelector('.message-form input').focus();
    }
  }












//_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*__*_*_*_*_*_*_*_*_//
// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function
function generateResponse(input) {
    // Add chatbot logic here
    const responses = [
      "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      "I'm here to assist you with any questions or concerns you may have. 📩",
      "I'm sorry, I'm not able to browse the internet or access external information. Is there anything else I can help with? 💻",
      "What would you like to know? 🤔",
      "I'm sorry, I'm not programmed to handle offensive or inappropriate language. Please refrain from using such language in our conversation. 🚫",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 🚀",
      "Is there anything specific you'd like to talk about? 💬",
      "I'm happy to help with any questions or concerns you may have. Just let me know how I can assist you. 😊",
      "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗",
      "Is there anything specific you'd like to ask or talk about? I'm here to help with any questions or concerns you may have. 💬",
      "I'm here to assist you with any questions or problems you may have. How can I help you today? 💡",
    ];
    
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  
