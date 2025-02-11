import React, { useState, useRef } from 'react';
import './LoginSignUp.css';

// Modal Component for Forgot Password
const ForgotPasswordModal = ({ closeModal }) => {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log("Reset password for:", emailRef.current.value);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            required
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal} className="close-btn">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: action === "Sign Up" ? nameRef.current.value : null,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(formData);
    // Add your authentication logic here
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="background-container">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <input type="text" placeholder="Name" ref={nameRef} />
            </div>
          )}
          <div className="input">
            <input type="email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
          </div>
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            <a href="#" onClick={openModal}>Forgot Password?</a>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'none' }}>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && <ForgotPasswordModal closeModal={closeModal} />}
    </div>
    
  );
};

export default LoginSignUp;
