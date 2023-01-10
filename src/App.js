import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dashboard from './pages/dashboard';
import topCuisines from './pages/topCuisines';
import topRecipes from './pages/topRecipes';
import myAccount from './pages/myAccount';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact component={dashboard}/>
            <Route path='/TopCuisines' exact component={topCuisines}/>
            <Route path='/TopRecipes' exact component={topRecipes}/>
            <Route path='/myAccount' exact component={myAccount}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;