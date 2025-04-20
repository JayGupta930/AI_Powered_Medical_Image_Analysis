import React, { useState } from 'react';
import runChat from '../../config/gemini'; 
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown'
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your medical assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, isBot: false };
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsLoading(true);

      try {
        const response = await runChat(inputText);
        const botResponse = { text: response, isBot: true };
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Error details:', error);
        setMessages(prev => [...prev, { 
          text: "Sorry, I couldn't process your request. Please try again later.", 
          isBot: true 
        }]);
      }

      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <FaRobot size={24} />
        <div>
          <h1 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>HealthChat AI</h1>
          <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', opacity: 0.9 }}>Your 24/7 Medical Assistant</p>
        </div>
        <BsQuestionCircle style={{ marginLeft: 'auto' }} size={20} />
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
          >
            {message.isBot && <span className="bot-icon"><FaRobot size={16} /></span>}
            <span className="message-text"><ReactMarkdown>{message.text}</ReactMarkdown></span>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            <span className="bot-icon"><FaRobot size={16} /></span>
            <div className="loading-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your medical question here..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>
          <FaPaperPlane size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
