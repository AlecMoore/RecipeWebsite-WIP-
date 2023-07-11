import React, { Component } from "react";
import "../styles/DashboardStyles.css";

function searchPlaceholder() {
    const date = new Date();
    if (date.getHours() < 10) {
        return ("What's for Breakfast?");
    } else if (date.getHours() >= 10 && date.getHours() <= 15) {
        return ("What's for Lunch?");
    } else if (date.getHours() >= 16) {
        return ("What's for Dinner?");
    } else {
        return ("Hungry?");
    }
}
export default class Searchbar extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="search"
          id="search-bar"
          maxLength={40}
          placeholder={searchPlaceholder()}
        />
      </div>
    );
  }
}
