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

      <P>
        Kebabçï is a Open Kitchen that Serves food in heart of Manglore.
        <br />
        We specialize in Indian Cuzine and people visit us for Quick bites
      </P>
      <NavHashLink to="/aboutus/#aboutus" smooth id="menu">
        <Button primary>About us</Button>
      </NavHashLink>
    </div>
  );
}

export default WelcomeSection;
