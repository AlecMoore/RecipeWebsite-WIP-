import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dashboard from "./pages/dashboard";
import topCuisines from "./pages/topCuisines";
import topRecipes from "./pages/topRecipes";
import meals from "./pages/meals";
import myAccount from "./pages/myAccount";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={dashboard} />
          <Route path="/topCuisines" component={topCuisines} />
          <Route path="/topRecipes" component={topRecipes} />
          <Route path="/meals" component={meals} />
          <Route path="/myAccount" component={myAccount} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
