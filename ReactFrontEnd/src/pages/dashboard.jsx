import React, { useState, useEffect } from "react";
import HeroText from "../components/heroText";
import "../styles/DashboardStyles.css";
import { Grid } from "@mui/material";
import DashCard from "../components/dashCard";
import Searchbar from "../components/searchbar";

export default function Dashboard() {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    // Function to fetch random recipe data from Spoonacular API
    const fetchRandomRecipes = async () => {
      const API_KEY = "bd2aeb7900d044f69fe9a60dd5b8b052";
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=20`
      );

      if (response.ok) {
        const data = await response.json();
        setRandomRecipes(data.recipes);
      } else {
        console.error("Failed to fetch random recipes.");
      }
    };

    fetchRandomRecipes();
  }, []);

  return (
    <div className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} s={8} md={6}>
          <div className="hero container">
            <HeroText title="Spork." subtitle="Recipes without the Rubbish." />
          </div>
        </Grid>
        {/* Remove the Grid item for the container */}
        <Grid item xs={6} md={6}>
          <div className="top-cuisines container"></div>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <div className="search-bar container">
            <Searchbar />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5} xl={4}>
          <div className="random-recipe container">
            <Grid container spacing={2}>
              {randomRecipes.map((recipe) => (
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={6}
                  lg={5}
                  xl={4}
                  key={recipe.id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {/* Each random recipe will take 4 out of 12 columns */}
                  <DashCard
                    title={recipe.title}
                    image={recipe.image}
                    instructions={recipe.instructions}
                    ingredients={recipe.extendedIngredients.map(
                      (ingredient) => ingredient.original
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
