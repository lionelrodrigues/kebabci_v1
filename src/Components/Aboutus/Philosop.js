import React from "react";
import { Title, P } from "../Buttons";
import AboutusCarousel from "./AboutusCarousel";
function Philosop() {
  return (
    <div className="aboutus-philo">
      <div className="philosop-section">
        <div className="section-heading">
          <Title primary>Our Story</Title>
          <div className="border" />
        </div>
        <div className="section-textcontent">
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat est dolor, sit amet suscipit dolor rutrum eu. Duis semper
            aliquet ex, eget placerat nisi fringilla vel. Curabitur euismod,
            metus sed placerat feugiat, urna elit sollicitudin ipsum, vel
            gravida ante nisl sit amet enim. Duis laoreet id nunc at
            scelerisque. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Maecenas tortor nulla,
            ultrices sed risus vel, lacinia cursus est.
          </P>
        </div>
        <div className="aboutus-carousel-container">
          <AboutusCarousel />
        </div>
      </div>
    </div>
  );
}

export default Philosop;
