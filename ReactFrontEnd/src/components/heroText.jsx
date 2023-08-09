import React from "react";
import { Fade } from "@mui/material";
import "../styles/DashboardStyles.css";

const HeroText = ({ title, subtitle }) => {
  return (
    <div className="hero">
      <Fade in={true} timeout={500}>
        <div className="hero-text">
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroText;
