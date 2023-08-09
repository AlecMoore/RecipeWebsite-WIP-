import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  width: 200, // Customize the maximum width of the card
  marginBottom: theme.spacing(2), // Add some margin between cards
  backgroundColor: "transparent", // Make the background color transparent
  borderRadius: "10px",
  boxShadow: "none",
  listStyle: "none",
  cursor: "pointer", // Change cursor to pointer to indicate the card is clickable
  overflow: "hidden", // Hide any overflowing title on hover
  transition: "transform 0.2s", // Add a smooth transition for the hover effect
  "&:hover": {
    transform: "scale(1.05)", // Scale up the card on hover
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250, // Customize the height of the card media (image)
  borderRadius: "50px", // Apply the desired filter to the images
  position: "relative", // Add position relative to enable absolute positioning of the title
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  "& ul": {
    listStyle: "none", // Remove the bullet points from the ul element
    margin: 0,
    padding: 0,
    "& li": {
      listStyle: "none",
      margin: "0", // Remove any default margin on the li element
      padding: "0", // Remove any default padding on the li element
    },
  },
}));

const RecipeCard = ({ title, image, instructions, ingredients }) => {
  return (
    <StyledCard>
      <Link to={`/recipes/${title}`} style={{ textDecoration: "none" }}>
        {/* Wrap only the image in a Link to make it clickable */}
        <StyledCardMedia
          className="recipe-image"
          component="img"
          image={image}
          alt={title}
        />
      </Link>
      <StyledCardContent>
        {/* Show the title on top of the image */}
        <Typography
          className="recipe-title"
          variant="h5"
          component="h2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.7)",
            padding: "10px",
            borderRadius: "5px",
            display: "none", // Hide the title by default
          }}
        >
          {title}
        </Typography>
      </StyledCardContent>
      {/* <CardActions>
        <Button>Show Ingredients & Method</Button>
      </CardActions> */}
    </StyledCard>
  );
};

export default RecipeCard;
