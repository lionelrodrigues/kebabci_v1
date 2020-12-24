import React from "react";
import "./Hero.css";
import { Button } from "../../Buttons.js";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Kebabçï</h1>
      <p>Made in charcoal, Made with Love.</p>
      <Button primary>Order Now</Button>
    </div>
  );
}

export default Hero;
