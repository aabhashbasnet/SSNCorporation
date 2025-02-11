import React, { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";
import "./FloatingChatButton.css";

const FloatingChatButton = () => {
  const faqs = [
    {
      question: "What are your business hours?",
      answer: "Our business hours are from 9 AM to 5 PM, Monday to Friday.",
    },
    {
      question: "What type of drawings can I upload?",
      answer: "You can upload drawings in PDF or image formats. The AI system can process these file types to extract the necessary information.",
    },
    {
      question: " How accurate are the material estimates?",
      answer:
        "The estimates are based on advanced algorithms that process historical data, engineering standards, and real-time cost data from trusted external sources. While the system provides highly accurate estimates, it is always recommended to verify the details with a professional for critical projects.",
    },
    {
      question: "Can the AI model handle complex multi-page drawings?",
      answer:
        "Yes, our system is capable of processing multi-page drawings, ensuring that all elements across different pages are analyzed and included in the final material estimate.",
    },
  ];

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userDetails, setUserDetails] = useState({ phone: "", email: "" });
  const [step, setStep] = useState(0);
  const [greeting, setGreeting] = useState(false); // New state for greeting message

  const toggleChat = () => {
    if (isChatOpen) {
      setMessages([]);
      setMessage("");
      setUserDetails({ phone: "", email: "" });
      setStep(0);
      setGreeting(false); // Reset greeting when closing chat
    }
    setIsChatOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isChatOpen) {
      setGreeting(true); // Display greeting when chat is opened
      setTimeout(() => setGreeting(false), 3000); // Remove greeting after 3 seconds
    }
  }, [isChatOpen]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage(""); 
      if (step === 0) {
        setStep(1);
      }
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleContactSubmit = () => {
    if (userDetails.phone && userDetails.email) {
      setMessages((prevMessages) => [
        ...prevMessages,
        "Thank you for sharing your contact details. We will reach out to you as soon as possible.",
      ]);
      setStep(2);
    }
  };

  const handleFAQClick = (faq) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      `Q: ${faq.question}`,
      `A: ${faq.answer}`,
    ]);
  };

  return (
    <div>
      <div className="chat-button" onClick={toggleChat}>
        <FaComment size={28} color="white" />
      </div>

      {isChatOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat with us!</span>
            <button onClick={toggleChat} className="close-btn">
              X
            </button>
          </div>
          <div className="chat-body">
            {greeting && (
              <div className="message greeting">
                <p>Hello, how can we help you?</p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <p>{msg}</p>
              </div>
            ))}

            {step === 1 && (
              <div className="contact-details">
                <p>
                  Please provide your contact number and email, and we'll get
                  in touch as soon as possible.
                </p>
                <input
                  type="text"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleContactChange}
                  placeholder="Your contact number"
                />
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleContactChange}
                  placeholder="Your email address"
                />
                <button onClick={handleContactSubmit}>Submit</button>
              </div>
            )}

            {step === 2 && (
              <div className="faq-section">
                <p>Here are some Frequently Asked Questions (FAQs):</p>
                <ul>
                  {faqs.map((faq, index) => (
                    <li key={index} onClick={() => handleFAQClick(faq)}>
                      {faq.question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatButton;
