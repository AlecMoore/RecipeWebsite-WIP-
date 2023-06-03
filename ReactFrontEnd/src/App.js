import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/dashboard";
import TopRecipes from "./pages/topRecipes";
import Meals from "./pages/meals";
import Cuisines from "./pages/cuisines";
import Occasions from "./pages/occasions";
import About from "./pages/about";
import MyAccount from "./pages/myAccount";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="TopRecipes" element={<TopRecipes />} />
          <Route path="Meals" element={<Meals />} />
          <Route path="Cuisines" element={<Cuisines />} />
          <Route path="Occasions" element={<Occasions />} />
          <Route path="About" element={<About />} />
          <Route path="MyAccount" element={<MyAccount />} />
        </Route>
      </Routes>
    </Router>
  );
}
