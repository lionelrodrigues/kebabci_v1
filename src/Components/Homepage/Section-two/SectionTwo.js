import React from "react";
import MenuSection from "./MenuSection.js";
import "./SectionTwo.css";
import WelcomeSection from "./WelcomeSection.js";

function SectionTwo() {
  return (
    <div className="SectionTwo">
      <WelcomeSection />
      <MenuSection />
    </div>
  );
}

export default SectionTwo;
