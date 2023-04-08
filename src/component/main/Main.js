import React from "react";
import "./main.css";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <div className="hero">
        <div className="hero-title">
          <h2>
            Saturday -<br /> Morning <br /> Tasty
          </h2>
        </div>
        <div className="hero-img">
          <img
            className="hero-img-2"
            src="images/cerealbox.jpg"
            alt="image-2"
          />
        </div>
      </div>
      <div className="products">
        <div className="items">
          <img src="images/chocofill.jpg"></img>
          <h4>Delicious Choco Fills</h4>
          <NavLink to="/ourfood">
            <button className="product-btn">DETAILS</button>
          </NavLink>
        </div>
        <div className="items">
          <img src="images/fruitring.jpg"></img>
          <h4>Crunchy Fruit Rings</h4>
          <NavLink to="/ourfood">
            <button className="product-btn">DETAILS</button>
          </NavLink>
        </div>
        <div className="items">
          <img src="images/cornflakes.jpg"></img>
          <h4>Classic Corn Flakes</h4>
          <NavLink to="/ourfood">
            <button className="product-btn">DETAILS</button>
          </NavLink>
        </div>
      </div>
      <div className="about-us">
        <h2>For The Love Of Good Food</h2>
        <p>
          Welcome to our sweet snacks brand! At our sweet snack brand, we
          believe that good food should be <br />
          enjoyed by all. This is why we use only the highest quality
          ingredients in our snacks. <br />
          We are commited to using natural and organic ingredients wherever
          possible.
        </p>
        <NavLink to="/aboutus">
          <button className="about-us-btn">More About Us</button>
        </NavLink>
      </div>
      <div className="about-us-bg">
        <img src="images/aboutusbg.jpg" alt="aboutus" />
      </div>

      <div className="container3">
        <div className="recipe">
          <NavLink to="/recipe">
            <img src="images/recipebg.jpg" alt="recipe" />
          </NavLink>
          {/* <button className="recipe-btn">Know More</button> */}
        </div>
        <div className="stories">
          <img src="images/storiesbg.jpg" alt="stories" />
          {/* <button className="stories-btn">Know More</button> */}
        </div>
      </div>
    </div>
  );
}
