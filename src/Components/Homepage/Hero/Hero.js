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
        id="order-online"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.zomato.com/mangalore/kebabci-1-kodailbail");
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
