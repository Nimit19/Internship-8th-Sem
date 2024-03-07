import "./Auth.css";

import React, { useState } from "react";

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuth = () => {
    setIsSignIn((prevState) => !prevState);
  };

  return (
    <div className="auth">
      <div
        className={`auth-container ${isSignIn ? "" : "active"}`}
        id="container"
      >
        <div className={`form-container ${isSignIn ? "sign-in" : "sign-up"}`}>
          <form>
            <p className="form-title">
              {isSignIn ? "Sign In" : "Create Account"}
            </p>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>
              {isSignIn
                ? "or use your email password"
                : "or use your email for registration"}
            </span>
            {!isSignIn && <input type="text" placeholder="Name" />}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            {/* {!isSignIn && <button>Sign Up</button>} */}
            {isSignIn && <a href="#">Forget Your Password?</a>}
            <button type="button" onClick={toggleAuth}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div
              className={`toggle-panel ${
                isSignIn ? "toggle-left" : "toggle-right"
              }`}
            >
              <p className="toggle-panel__title">
                {isSignIn ? "Welcome Back!" : "Hello, Friend!"}
              </p>
              <p className="toggle-panel__description">
                {isSignIn
                  ? "Enter your personal details to use all of site features"
                  : "Register with your personal details to use all of site features"}
              </p>
              <button className="hidden" onClick={toggleAuth}>
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div
              className={`toggle-panel ${
                isSignIn ? "toggle-right" : "toggle-left"
              }`}
            >
              <p className="toggle-panel__title">
                {isSignIn ? "Hello, Friend!" : "Welcome Back!"}
              </p>
              <p className="toggle-panel__description">
                {isSignIn
                  ? "Register with your personal details to use all of site features"
                  : "Enter your personal details to use all of site features"}
              </p>
              <button className="hidden" onClick={toggleAuth}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
