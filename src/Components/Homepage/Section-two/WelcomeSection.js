import React from "react";
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
      <Button> About US</Button>
    </div>
  );
}

export default WelcomeSection;
