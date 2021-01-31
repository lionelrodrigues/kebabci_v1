import React from "react";
import { P, Title } from "../../Buttons";
import "./location.css";
function Location() {
  return (
    <div className="location">
      <div className="container1">
        <Title>Location</Title>
        <div className="inner-text">
          <h3>Adress</h3>
          <P>Kodailbail, Mangalore, Karnataka 575003</P>
          <h3>timings</h3>
          <P>Sunday, 12:30–11:30pm</P>
          <P>To</P>
          <P>Saturday, 12:30–11:30pm</P>
        </div>
      </div>
      <div className="container2" id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5035015337494!2d74.83784891482107!3d12.87531269091913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bf0c749d73b%3A0xb2d28e68d87b13ce!2sKebab%C3%A7%C3%AF%20Mediterranean%20Grills%20%26%20Rolls!5e0!3m2!1sen!2sin!4v1609043523356!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="kebabci-manglore"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
