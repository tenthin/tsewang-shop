import React from "react";
import "./fullrecipe.css";
import { recipes } from "./RecipeData";
import { NavLink, useParams } from "react-router-dom";

export default function FullRecipe() {
  const { id } = useParams(); // get the recipe ID from the URL

  // find the matching recipe object in the recipes array
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    // if no recipe found for the given ID, show an error message
    return <div>Recipe not found</div>;
  }
  return (
    <div className="full-recipe-container">
      <div className="full-recipe-page">
        <div key={recipe.id} className="full-recipe-link">
          <div className="full-recipe-img">
            <img src={recipe.image} alt={recipe.name} />
          </div>

          <div className="full-recipe-info">
            <h3>{recipe.name}</h3>
            <p>{recipe.info}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instruction:</h4>
            <p>{recipe.instructions}</p>
          </div>
          <div className="full-recipe-btn">
            <NavLink to="/recipe">
              <button>BACK</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
