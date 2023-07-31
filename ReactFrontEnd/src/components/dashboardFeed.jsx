import React, { Component } from 'react';
import "../styles/DashboardStyles.css";
import DashCard from './dashCard';

export default class DashboardFeed extends Component {
    render() { 
        return (
            <div class="dashboard-feed">
                <div class="div1"><DashCard recipeID = "Cocaine"/></div>
                <div class="div2"><DashCard recipeID = "Heroin"/></div>
                <div class="div3"><DashCard recipeID = "MDMA"/></div>
                <div class="div4"><DashCard recipeID = "Methenamine"/></div>
                <div class="div5"><DashCard recipeID = "Crack"/></div>
                <div class="div6"><DashCard recipeID = "Weed"/></div>
                <div class="div7"><DashCard recipeID = "Ketamine"/></div>
                <div class="div8"><DashCard recipeID = "LSD"/></div>
                <div class="div9"><DashCard recipeID = "Speed"/></div>
                <div class="div10"><DashCard recipeID = "GHB"/></div>
                <div class="div11"><DashCard recipeID = "Fentanyl"/></div>
                <div class="div12"><DashCard recipeID = "Alcohol"/></div>
            </div>
        );
    }
}
 