import React, { useState } from "react";
import "./ourfood.css";
import { NavLink } from "react-router-dom";
import { products } from "./ProductData";

export default function OurFood() {
  const [popup, setPopup] = useState([]);
  const [popupToggle, setPopupToggle] = useState(false);
  const changecontent = (product) => {
    setPopup([product]);
    setPopupToggle(!popupToggle);
    if (styling === null) {
      setStyling({ position: "absolute" });
    } else {
      setStyling(null);
    }
  };

  const [styling, setStyling] = useState(null);

  return (
    <>
      {/* <div className="product-list" style={styling}> */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            {/* <p>{product.price}</p> */}
            <NavLink>
              <button onClick={() => changecontent(product)}>DETAILS</button>
            </NavLink>
          </div>
        ))}
      </div>
      {popupToggle && (
        <div className="popup-container" onClick={changecontent}>
          <div className="popup-body" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <button onClick={changecontent}>X</button>
            </div>
            <div className="popup-content">
              {popup.map((pop) => {
                return (
                  <div className="popup-card">
                    <div className="popup-img">
                      <img src={pop.image} alt={pop.name} />
                    </div>
                    <div className="pop-item-detail">
                      <p className="popup-name">
                        <h3>{pop.name}</h3>
                      </p>
                      <p className="popup-description"> {pop.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
