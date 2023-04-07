import React from "react";
import "./recipe.css";
import { recipes } from "./RecipeData";
import { NavLink } from "react-router-dom";

export default function Recipe() {
  return (
    <div className="recipe-body">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <div className="recipe-img">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="recipe-detail">
            <h3>{recipe.name}</h3>
            <p>{recipe.info}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            {/* <p>{recipe.ingredients}</p> */}
            <h4>Instruction:</h4>
            <p>{recipe.instructions}</p>
          </div>
          <div className="full-recipe">
            <NavLink to={`/fullrecipe/${recipe.id}`}>
              <button>FULL RECIPE</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
