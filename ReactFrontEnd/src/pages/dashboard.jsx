import React, { Component } from "react";
import Searchbar from "../components/searchbar";
import Carousel from "../components/carousel";
import DashboardFeed from "../components/dashboardFeed";
import "../styles/DashboardStyles.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div id="container">
{/*         <img className="bgimg" id="plate" src={background} alt="foodPlate" />
        <img className="bgimg" id="dash" src={ingredients} alt="ingredients" /> */}
        <div className="hero-container">
          <div className="hero-text">
           <h1>Spork.</h1>
            <p>Recipes without the Rubbish.</p>
          </div>
        </div>
        <Searchbar />
        <Carousel/>
        {/* <DashboardFeed /> */}
      </div>
    );
  }
}
