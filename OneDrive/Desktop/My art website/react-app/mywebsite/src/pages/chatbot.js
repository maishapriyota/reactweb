import React, { useState } from 'react';
import './chatbot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! Thanks for showing interest! :) How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');

      // Simulate bot response (replace with actual bot response logic)
      setTimeout(() => {
        setMessages([...messages, { text: 'Thank you for your message. I will get back to you shortly.', sender: 'bot' }]);
      }, 1000);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="toggle-container">
        <i className="fa-solid fa-sun"></i>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
        <i className="fa-solid fa-moon"></i>
      </div>
      <div className="chat">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      
    </div>
  );
};

export default ChatBot;
