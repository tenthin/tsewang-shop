import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/images/tsewangs-logo.png"></img>
      </div>
      <div className="footer-menu">
        <ul>
          <li>
            <a href="">CONTACT US</a>
          </li>
          <li>
            <a href="">MEDIA</a>
          </li>
          <li>
            <a href="">CAREERS</a>
          </li>
          <li>
            <a href="">OUR COMMUNITY</a>
          </li>
          <li>
            <a href="">SITE MAP</a>
          </li>
          <li>
            <a href="">PRIVACY POLICY</a>
          </li>
          <li>
            <a href="">TERMS OF USE</a>
          </li>
        </ul>
      </div>
      <div className="social">
        <div className="social-icon">
          <FacebookIcon />
        </div>
        <div className="social-icon">
          <InstagramIcon />
        </div>
        <div className="social-icon">
          <TwitterIcon />
        </div>
        <div className="social-icon">
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}
