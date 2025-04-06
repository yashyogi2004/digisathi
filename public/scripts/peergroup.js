// chatui5.js

const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message');
const chatHeader = document.getElementById('chat-header');

let currentChatId = null;
const chatData = {}; // Store chat messages for each user

function openChat(chatId) {
    currentChatId = chatId;
    chatHeader.textContent = chatId;
    displayMessages(chatId);
}

function displayMessages(chatId) {
    chatMessages.innerHTML = '';
    if (chatData[chatId]) {
        chatData[chatId].forEach(message => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', message.sender);
            messageElement.textContent = message.text;
            chatMessages.appendChild(messageElement);
        });
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
}

function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText && currentChatId) {
        if (!chatData[currentChatId]) {
            chatData[currentChatId] = [];
        }
        chatData[currentChatId].push({
            sender: 'you',
            text: messageText,
        });
        displayMessages(currentChatId);
        messageInput.value = '';

        // Simulate a reply (optional, for demonstration)
        setTimeout(() => {
          simulateReply(currentChatId, messageText);
        }, 1000 + Math.random() * 1000);
    }
}

function simulateReply(chatId, userMessage) {
    const replies = {
        'User 1': ['Hello!', 'How are you?', 'Nice to meet you!'],
        'User 2': ['What are you doing?', 'Cool.', 'See you later.'],
        'User 3': ['Interesting.', 'Okay, sounds good.', 'Have a great day!'],
        'User 4': ['Sure, why not?', 'Tell me more.', 'I understand.'],
        'User 5': ['Absolutely!', 'That\'s amazing.', 'Let\'s do it!'],
    };

    if (!replies[chatId]) return;

    const reply = replies[chatId][Math.floor(Math.random() * replies[chatId].length)];

    if (!chatData[chatId]) {
      chatData[chatId] = [];
    }
    chatData[chatId].push({
        sender: 'other',
        text: reply,
    });
    displayMessages(chatId);
}

// Initial state
openChat('User 1'); // Or any default user