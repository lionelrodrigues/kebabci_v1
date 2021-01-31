import React from "react";
import { Title, P } from "../../Buttons";
import "../Bulk-hero/Bulk-hero.css";

function Bulkhero() {
  return (
    <div className="bulk-hero">
      <div className="hero-component">
        <Title primary>Bulk Orders</Title>
        <P>
          conditions and discription
          <br /> Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia
        </P>
      </div>
    </div>
  );
}

export default Bulkhero;
