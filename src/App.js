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

function App() {
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

export default App;
