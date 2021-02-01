import React from "react";
import ContactContainer from "./ContactContainer";
import LocationContainer from "./LocationContainer";
import "./location.css";

function Location() {
  return (
    <div className="Location-Main-container">
      <LocationContainer />
      <ContactContainer />
    </div>
  );
}

export default Location;
