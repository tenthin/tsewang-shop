import React from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="/images/tsewangs-logo.png"></img>
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ourfood">Our Food</NavLink>
          </li>
          <li>
            <NavLink to="aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="Recipe">Recipe</NavLink>
          </li>
          <li>
            <NavLink>
              <ShoppingCartIcon />
            </NavLink>
          </li>
          {/* <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="/ourfood">Our Food</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Recipe</a>
          </li>
          <li>
            <a href=""></a>
          </li> */}
        </ul>
      </div>
      <div className="search">
        <SearchIcon />
      </div>
    </div>
  );
}
