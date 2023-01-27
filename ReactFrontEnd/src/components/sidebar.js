import React, { useState } from "react";
import logo from "../logo.svg";
import "../styles/style.css";

function Sidebar() {
    const [isActive, setActive] = useState("false");
    const icon = document.getElementById("mobile-nav-toggle");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <body className={isActive ? "" : "mobile-nav-active"}>
            <i
                id="mobile-nav-toggle"
                onClick={handleToggle}
            >
                <span id={isActive ? "" : "activet"} className="top_line common" ></span>
                <span id={isActive ? "" : "activem"} className="middle_line common" ></span>
                <span id={isActive ? "" : "activeb"} className="bottom_line common" ></span>
            </i>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="" alt="" className="" />
                        <h1 className="text-light">
                            <a href="/">Spork.</a>
                        </h1>
                        <span className="profile-divider"/>
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
                                    <span>Occasions</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a href="#" className="account-login">
                    Log in / Register
                </a>
                <div id="footer">
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright{" "}
                            <strong>
                                <span>Unnamed Recipe Website</span>
                            </strong>
                        </div>
                        <div className="credits">
                            By <a href="https://discord.gg/smZjem4x4j">Degenerates</a>
                        </div>
                    </div>
                </div>
            </header>
        </body>
    );
}

export default Sidebar;
