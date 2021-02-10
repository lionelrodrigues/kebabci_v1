import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Button, P } from "../../Buttons";

function WelcomeSection() {
  return (
    <div className="welcomeSection">
      <div className="heading">
        <h2 className="welcomeSection-header">Welcome to Kebabçï</h2>
        <div className="border" />
      </div>
      <div className="welcomesection-paragraph">
        <P>
          Kebabçï is a Open Kitchen that Serves food in heart of Manglore. We
          specialize in Mediterranean food and people visit us for Quick bites.
          Our mission is to delight each customer with unique hospitality and
          mouth-watering food at great prices. To know more about us click
          below.
        </P>
      </div>
      <NavHashLink to="/aboutus/#aboutus" smooth id="menu">
        <Button primary>About us</Button>
      </NavHashLink>
    </div>
  );
}

export default WelcomeSection;
