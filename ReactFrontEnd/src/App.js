import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import TopCuisines from "./pages/topCuisines";
import TopRecipes from "./pages/topRecipes";
import Meals from "./pages/meals";
import About from "./pages/about";
import MyAccount from "./pages/myAccount";

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    //componentDidMount() {
    //    this.populateWeatherData();
    //}

    static renderForecastsTable() {
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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderForecastsTable();

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}