import React, { Component } from "react";
import background from "../media/foodplate.png";
import ingredients from "../media/ingredientsimg1.png";
import Searchbar from "../components/searchbar";
import DashboardFeed from "../components/dashboardFeed";
import "../styles/DashboardStyles.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div id="container">
        <img className="bgimg" id="plate" src={background} alt="foodPlate" />
        <img className="bgimg" id="dash" src={ingredients} alt="ingredients" />
        <div className="hero-container">
          <div className="hero-text">
            <div className="border-text">Welcome to Unnamed Recipe Website</div>
            <h1>Recipes Without The Rubbish</h1>
          </div>
        </div>
        <Searchbar />
        <DashboardFeed />
      </div>
    );
  }
}
