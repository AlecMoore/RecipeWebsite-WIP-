import React, { Component } from "react";
import "../styles/DashboardStyles.css";
import HeroText from "../components/heroText";

export default class Meals extends Component {
  render() {
    return (
      <div id="container">
        <HeroText title="Meals" subtitle="" />
      </div>
    );
  }
}
