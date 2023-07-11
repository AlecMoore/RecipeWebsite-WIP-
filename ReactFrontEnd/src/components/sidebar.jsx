import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink }  from "react-router-dom"
import LoginModal from "./loginModal";
import "../styles/style.css";

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
              <a href="/">Spork.</a>
            </h1>
          </div>
          <nav id="navbar" className="nav-menu">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/TopRecipes" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Top Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/Meals" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Meals</NavLink>
              </li>
              <li>
                <NavLink to="/Cuisines" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Cuisines</NavLink>
              </li>
              <li>
                <NavLink to="/Occasions" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Occasions</NavLink>
              </li>
            </ul>
          </nav>

          <div id="footer">
            <button className="account-login" onClick={openModal}>
              Log in / Register
            </button>

            <Modal
              className={"login-modal"}
              closeTimeoutMS={150}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example"
            >
              <LoginModal />
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
