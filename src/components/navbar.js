import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
import * as CiIcon from "react-icons/ci";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="nav-menu">
          <ul className="nav-menu-items">
            <span className="logo">
              Recipe Website
              <CiIcon.CiWheat />
            </span>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
