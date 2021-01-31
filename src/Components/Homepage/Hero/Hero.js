import React from "react";
import "./Hero.css";
import { Button } from "../../Buttons.js";
import Socials from "../../Footer/Socials";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Kebabçï</h1>
      <p>Made in charcoal, Made with Love.</p>
      <Button primary>Order Now</Button>
      <Socials />
      <span className="down-arrow">
        <i class="fas fa-angle-down"></i>
      </span>
    </div>
  );
}

export default Hero;
