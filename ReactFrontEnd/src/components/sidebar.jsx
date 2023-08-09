import React, { useState } from "react";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { BiFoodMenu, BiHome } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { PiForkKnifeBold } from "react-icons/pi";
import { MdOutlineFastfood } from "react-icons/md";
import { TbChristmasTree } from "react-icons/tb";
import { FaUtensilSpoon } from "react-icons/fa";

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
          <FaUtensilSpoon className="logo" href="/" />
          <nav id="navbar" className="nav-menu">
            <ul>
              <Tooltip title="Home" placement="right" arrow>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <BiHome />
                  </NavLink>
                </li>
              </Tooltip>
              <Tooltip title="Top Recipes" placement="right" arrow>
                <li>
                  <NavLink
                    to="/TopRecipes"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <BiFoodMenu />
                  </NavLink>
                </li>
              </Tooltip>
              <Tooltip title="Meals" placement="right" arrow>
                <li>
                  <NavLink
                    to="/Meals"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <PiForkKnifeBold />
                  </NavLink>
                </li>
              </Tooltip>
              <Tooltip title="Cuisines" placement="right" arrow>
                <li>
                  <NavLink
                    to="/Cuisines"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <MdOutlineFastfood />
                  </NavLink>
                </li>
              </Tooltip>
              <Tooltip title="Occasions" placement="right" arrow>
                <li>
                  <NavLink
                    to="/Occasions"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <TbChristmasTree />
                  </NavLink>
                </li>
              </Tooltip>
            </ul>
          </nav>

          <div id="footer">
            <NavLink onClick={openModal}>
              <VscAccount className="nav-link" />
            </NavLink>

            <Modal
              className={"login-modal"}
              closeTimeoutMS={150}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example"
            >
              <LoginModal />
            </Modal>

            {/* <div className="container">
              <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Unnamed Recipe Website</span>
                </strong>
              </div>
              <div className="credits">
                Made by <a href="https://discord.gg/smZjem4x4j">Degenerates</a>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Sidebar;
