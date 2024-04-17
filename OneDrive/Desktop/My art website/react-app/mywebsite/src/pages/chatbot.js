import React, { useState } from 'react';
import './home.css';

const Contact = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you?', isBot: true },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setMessages([...messages, { text: userInput, isBot: false }]);
    setUserInput('');

    // Simulate bot response after 1 second (replace with actual bot logic)
    setTimeout(() => {
      setMessages([
        ...messages,
        {
          text: 'Thanks for reaching out! We will get back to you soon.',
          isBot: true,
        },
      ]);
    }, 1000);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

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
                <div className="drop-in-2">
    <div className="container2">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isBot ? 'bot-message' : 'user-message'}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
  
};

export default Contact;