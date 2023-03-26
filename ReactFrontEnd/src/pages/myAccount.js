import React, { Component } from "react";
import Register from "../components/Register";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
};

export class MyAccount extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <h1>My Account</h1>
                <Register />
            </div>
        );
    }
}

export default MyAccount;
