import React from "react";
import "./Contact.css";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-left">
        <h2>Contact US</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <ul>
          <li>
            <MapIcon />
            34 Street Name, City Name Here, United States
          </li>
          <li>
            <PhoneIcon />
            +1 (222) 345 6789
          </li>
          <li>
            <MailOutlineIcon />
            info@tsewangs.com
          </li>
        </ul>
      </div>
      <div className="contact-right">
        <h4>Write To Us</h4>
        <form className="contact-form" action="">
          <input type="text" name="name" placeholder="Name" />
          <input type="tel" name="Phone Number" placeholder="Phone Number" />
          <textarea type="text" name="name" placeholder="Message" rows="5" />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
}
