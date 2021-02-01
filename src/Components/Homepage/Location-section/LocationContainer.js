import React from "react";
import { Title } from "../../Buttons";
function LocationContainer() {
  return (
    <div className="LocationContainer">
      <div className="Container-Header">
        <Title primary> Location</Title>
        <div className="border" />
      </div>
      <div className="location-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3889.5035013928427!2d74.8400376!3d12.8753127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bf0c749d73b%3A0xb2d28e68d87b13ce!2sKebabci%20Mediterranean%20Grills%20%26%20Rolls!5e0!3m2!1sen!2sin!4v1612199349966!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="kebabci location"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationContainer;
