import React, { Component, useState } from 'react';
import * as Icon from "react-bootstrap-icons";
import "../styles/DashboardStyles.css";


export default function LoginModal () {

  const [register, setRegister] = useState(true);
  const toggleRegister = () => {
    setRegister(!register);
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
        return ( 
              <div id={register ? "login-form" : "register-form"}>
                <div className="login-title">
                  <span className="line left-line" />
                  {register ? "Login" : "Register"}
                  <span className="line right-line" />
                </div>
                <div className="login-container">
                  <form>
                    <div className="input-container">
                      <input
                        type="text"
                        name="uname"
                        placeholder="Email Address"
                        maxLength={30}
                        required
                      />
                      {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                      <input
                        type="password"
                        name="pass"
                        placeholder="Password"
                        maxLength={30}
                        required
                      />
                      {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                      <input type="submit" />
                    </div>
                  </form>
                  <div className="social-login-container">
                    <span className="social-login-title">
                      Sign in with
                      <Icon.Facebook className="icon facebook-icon" />
                      <Icon.Google className="icon google-icon" />
                      <Icon.Twitter className="icon Twitter-icon" />
                    </span>
                  </div>

                  <div className="register-switch-button">
                    Not a member?
                    <button
                      className="register-button"
                      onClick={toggleRegister}
                    >
                      Register
                    </button>
                  </div>
                </div>

                <div className="register-container">
                  <form>
                    <div className="input-container">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        maxLength={15}
                        required
                      />
                      {renderErrorMessage("firstName")}
                    </div>
                    <div className="input-container">
                      <input
                        type="password"
                        name="lastName"
                        placeholder="Last Name"
                        maxLength={15}
                        required
                      />
                      {renderErrorMessage("lastName")}
                    </div>
                    <div className="input-container">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        maxLength={15}
                        required
                      />
                      {renderErrorMessage("pass")}
                    </div>
                    <div className="input-container">
                      <input
                        type="password"
                        name="pass"
                        placeholder="Password"
                        maxLength={15}
                        required
                      />
                      {renderErrorMessage("pass")}
                    </div>
                    <div className="input-container">
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        maxLength={15}
                        required
                      />
                      {renderErrorMessage("mobile")}
                    </div>

                    <div className="button-container">
                      <input type="submit" />
                    </div>
                  </form>
                  <div className="login-switch-button">
                    Already a member?
                    <button
                      className="logbutton-button"
                      onClick={toggleRegister}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
        );
    }
