import React, { useState } from "react";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" onClick={handleItemClick}>
          <img src="/images/tsewangs-logo.png"></img>
        </NavLink>
      </div>
      <nav className={showMenu ? "menu show" : "menu"}>
        <ul>
          <li>
            <NavLink to="/" onClick={handleItemClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourfood" onClick={handleItemClick}>
              Our Food
            </NavLink>
          </li>
          <li>
            <NavLink to="aboutus" onClick={handleItemClick}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="recipe" onClick={handleItemClick}>
              Recipe
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" onClick={handleItemClick}>
              Contact
            </NavLink>
          </li>
          {/* <li>
            <NavLink>
              <ShoppingCartIcon />
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </div>
      {/* <div className="search">
        <SearchIcon />
      </div> */}
    </div>
  );
}
