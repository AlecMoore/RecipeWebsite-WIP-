import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/style.css";
import * as Icon from "react-bootstrap-icons";

function Sidebar() {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [register, setRegister] = useState(false);
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
    <div className={isActive ? "" : "mobile-nav-active"}>
      <i id="mobile-nav-toggle" onClick={handleToggle}>
        <span id={isActive ? "" : "activet"} className="top_line common"></span>
        <span
          id={isActive ? "" : "activem"}
          className="middle_line common"
        ></span>
        <span
          id={isActive ? "" : "activeb"}
          className="bottom_line common"
        ></span>
      </i>
      <header id="header">
        <div className="sidebar-border">
          <div className="profile">
            <h1 className="text-light">
              <a href="/">Unnamed Recipe Website</a>
            </h1>
          </div>
          <nav id="navbar" className="nav-menu">
            <ul>
              <li>
                <a href="/" className="nav-link  active">
                  Home
                </a>
              </li>
              <li>
                <a href="/TopRecipes" className="nav-link">
                  Top Recipes
                </a>
              </li>
              <li>
                <a href="/Meals" className="nav-link">
                  Meals
                </a>
              </li>
              <li>
                <a href="/Cuisines" className="nav-link">
                  Cuisines
                </a>
              </li>
              <li>
                <a href="/Occasions" className="nav-link ">
                  Occasions
                </a>
              </li>
            </ul>
          </nav>

          <div id="footer">
            <button className="account-login" onClick={openModal}>
              Log in / Register
            </button>

            <Modal
              className="login-modal"
              closeTimeoutMS={150}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example"
            >
              <div className="login-container">
                <div className="login-title">
                  <span className="line left-line" />
                  Login
                  <span className="line right-line" />
                </div>
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
                <div className="register-container">
                  <button className="register-button" onClick={toggleRegister}>
                    Register
                  </button>
                </div>
                <div className="social-login-title">Sign in with</div>
                <div className="social-login-container">
                  <Icon.Facebook className="icon facebook-icon" />
                  <Icon.Google className="icon google-icon" />
                  <Icon.Twitter className="icon Twitter-icon" />
                </div>
              </div>
              <div className={register ? "register-form" : "register-form a"}>
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
                      maxLength={15}
                      required
                    />
                    {renderErrorMessage("pass")}
                  </div>
                  <div className="button-container">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </Modal>

            <div className="container">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Unnamed Recipe Website</span>
                </strong>
              </div>
              <div className="credits">
                Made by <a href="https://discord.gg/smZjem4x4j">Degenerates</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Sidebar;
