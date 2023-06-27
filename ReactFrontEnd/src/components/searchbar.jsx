import React, { Component } from "react";
import "../styles/DashboardStyles.css";

export default class Searchbar extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="search"
          id="search-bar"
          maxLength={40}
          placeholder="Your mum's a cunt!"
        />
      </div>
    );
  }
}
