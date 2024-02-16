
const quiz = {
  questions: [
    {
      question: "In the past one month, how often have you felt overwhelmingly sad?",
      options: ["Not at all","At times","More than half the days","Nearly every day"],
      answer: 0
    },
    {
      question:"Have you had any thoughts of suicide or have you felt hopeless about the future?",
      options: ["Never","Strongly disagree","Strongly agree"],
      answer: 0
    },
    {
      question: "How is your sleep?",
      options: ["Sleeping as usual","Slight difficulty", "A lot of difficulties"],
      answer: 0
    },
    {
      question: "Do you prefer to stay at home rather than going out and doing new things?",
      options: ["Yes","No"],
      answer: 0
    },
    {
      question: "Have you been feeling tired or having little energy?",
      options: ["Sleeping as usual","Slight difficulty", "A lot of difficulties"],
      answer: 0
    },
    {
      question: "How is your sleep?",
      options: ["Not at all","Almost every day","I feel hopeless and I don't feel like working at all"],
      answer: 0
    }
  ],
  currentQuestion: 0,
  score: 0
};

function displayQuestion() {
  const questionElem = document.getElementById("question");
  const optionsElem = document.getElementById("options");

  questionElem.textContent = quiz.questions[quiz.currentQuestion].question;

  optionsElem.innerHTML = "";
  quiz.questions[quiz.currentQuestion].options.forEach((option, index) => {
    const liElem = document.createElement("li");
    const buttonElem = document.createElement("button");
    buttonElem.textContent = option;
    buttonElem.id = `option${index}`;
    buttonElem.addEventListener("click", handleOptionClick);
    liElem.appendChild(buttonElem);
    optionsElem.appendChild(liElem);
  });
}

function handleOptionClick(event) {
  const selectedOption = parseInt(event.target.id.slice(-1));

  if (selectedOption === quiz.questions[quiz.currentQuestion].answer) {
    quiz.score++;
  }

  quiz.currentQuestion++;

  if (quiz.currentQuestion < quiz.questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  const scoreElem = document.createElement("h1");
  scoreElem.textContent = `You might want to consult a doctor, the most probable illnesses might be: Depression or PTSD or Anxiety or ADHD`;
  document.getElementById("quiz").appendChild(scoreElem);
}

displayQuestion();









//_*_*_*__*_*_*_*_*_*_*_*_*_*_*_*_*_
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
     // "Hello, how can I help you today? 😊",
      "I'm sorry, I didn't understand your question. Could you please rephrase it? 😕",
      " I'm sorry to hear that. Depression can be really tough to deal with. Have you been experiencing any specific symptoms?",
      " I'm sorry to hear that. Depression can be really tough to deal with. Have you been experiencing any specific symptoms?",
      " I'm sorry to hear that. Depression can be really tough to deal with. Have you been experiencing any specific symptoms?",
      " I'm sorry to hear that. Depression can be really tough to deal with. Have you been experiencing any specific symptoms?",
      "Of course. Remember, you're not alone in this. If you ever need someone to talk to, I'm here for you. Take care of yourself.",
      "Of course. Remember, you're not alone in this. If you ever need someone to talk to, I'm here for you. Take care of yourself.",
      "It's actually quite simple. You can start by finding a quiet and comfortable place to sit or lie down. Close your ",
      "It's normal for thoughts to come and go during meditation. The goal isn't to stop your thoughts completely, but rather to observe them without judgment and let them pass. If you find yourself getting caught up in worry, gently redirect your attention back to your breath or the guided instructions.",
      " Absolutely! We actually have a web app that offers guided meditation sessions specifically designed to reduce anxiety. It provides step-by-step instructions and soothing audio to help you relax. Would you like me to share the link with you?",
      "Sure thing. Here's the link to our web app: [Link]. I hope you find it helpful. Remember, it's important to take care of yourself, especially during stressful times like these.",
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
  
  
