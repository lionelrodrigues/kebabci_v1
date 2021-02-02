import React from "react";
import "./Hero.css";
import { Button } from "../../Buttons.js";
import Socials from "../../Footer/Socials";
import { NavHashLink } from "react-router-hash-link";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Kebabçï</h1>
      <p>Made in charcoal, Made with Love.</p>
      <NavHashLink
        to="route"
        smooth
        id="menu"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://drive.google.com/file/u/6/d/1TqVoihdQ-jPt-9s0msP35Gz-fyreB0p8/view?usp=sharing"
          );
        }}
      >
        <Button primary>Order Now</Button>
      </NavHashLink>
      <Socials />
      <span className="down-arrow">
        <i class="fas fa-angle-down"></i>
      </span>
    </div>
  );
}

export default Hero;
