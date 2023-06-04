import React, { useState } from "react";
import "./LoginSection.css";

export const LoginSection = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <section className="login-section">
      <button className="login-button" onClick={toggleLoginPopup}>
        Login
      </button>
      {showLoginPopup && (
        <section className="login-popup">
          <section className="login-popup-content">
            <button className="close-button" onClick={toggleLoginPopup}>
              close
            </button>
            <ul>
              <li>
                <label for="username">Username / Email</label>
                <input type="text" placeholder="" id="username" />
              </li>
              <li>
                <label for="username">Password</label>
                <input type="password" placeholder="" id="password" />
              </li>
            </ul>
            <button>Login</button>
          </section>
        </section>
      )}
      <button className="signup-button">SIGN UP</button>
    </section>
  );
};
