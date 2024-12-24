import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css'; // Ensure your CSS file is imported

function AppChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for toggling chat visibility

  const handleSend = async (e) => {
    e.preventDefault();

    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const backendUrl = 'http://100.101.85.99:5001';

      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error:', errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get response from the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Toggle Button for the Chat */}
      <div className="chat-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Chat with our AI assistant!'}
      </div>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h2>Questions</h2>
            <div className="subtitle">Interact with our AI assistant</div>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            {loading && (
              <div className="chat-message bot typing-indicator">
                <p>Assistant is typing...</p>
              </div>
            )}
          </div>
          <Form onSubmit={handleSend} className="chat-form">
            <Form.Group controlId="chatInput">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2 w-100">
              Send
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}

export default AppChat;
