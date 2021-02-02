import React from "react";
import { Title, P } from "../../Buttons";

function ContactContainer() {
  return (
    <div className="ContactContainer" id="info">
      <div className="Container-Header">
        <Title primary> Contact</Title>
        <div className="border" />
      </div>
      <div className="Container-address">
        <P>
          Kebabci Mediterranean Grills & Rolls <br />
          Kodailbail, Mangalore, Karnataka 575003
        </P>
        <div className="Container-phone">
          <a href="tel:1234567">
            <i class="fas fa-mobile-alt"></i>123-4567
          </a>
        </div>
      </div>
      <div className="Container-Hours">
        <div className="hours">
          <h3>Hours</h3>
        </div>
        <div className="hours-data">
          <P>Monday to Sunday </P>
          <P primary>12:30pn - 11:30pm</P>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
