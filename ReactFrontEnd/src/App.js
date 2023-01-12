import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./pages/dashboard";
import TopCuisines from "./pages/topCuisines";
import TopRecipes from "./pages/topRecipes";
import Meals from "./pages/meals";
import About from "./pages/about";
import MyAccount from "./pages/myAccount";

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Sidebar />}>
                        <Route index element={<Dashboard />} />
                        <Route path="TopCuisines" element={<TopCuisines />} />
                        <Route path="TopRecipes" element={<TopRecipes />} />
                        <Route path="Meals" element={<Meals />} />
                        <Route path="About" element={<About />} />
                        <Route path="MyAccount" element={<MyAccount />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}


    //constructor(props) {
    //    super(props);
    //    this.state = { forecasts: [], loading: true };
    //}

    //componentDidMount() {
    //    this.populateWeatherData();
    //}

    //static renderForecastsTable() {
        //return (
        //    <>
        //        <Router>
        //            <Routes>
        //                <Route path="/" element={<Sidebar />}>
        //                    <Route index element={<Dashboard />} />
        //                    <Route path="TopCuisines" element={<TopCuisines />} />
        //                    <Route path="TopRecipes" element={<TopRecipes />} />
        //                    <Route path="Meals" element={<Meals />} />
        //                    <Route path="About" element={<About />} />
        //                    <Route path="MyAccount" element={<MyAccount />} />
        //                </Route>
        //            </Routes>
        //        </Router>
        //    </>
        //);
    //}