import React, { Component } from "react";
import "../styles/DashboardStyles.css";

export default class TopRecipes extends Component {
  render() {
    return (
      <div id="container">
        <div className="hero-container">
          <div className="hero-text">
            <div className="border-text">Unnamed Recipe Website</div>
            <h1>Top Recipes</h1>
          </div>
        </div>
      </div>
    );
  }
}
