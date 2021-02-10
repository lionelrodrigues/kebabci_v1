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
            The Kebabci’s incredible journey begins in 2018. Kebabci opened its
            doors as a quick bite takeaway restaurant. The restaurant quickly
            became a go-to-go place with its top-quality shawarmas,
            unprecedented food quality.
          </P>
          <P>
            We pivoted to selling halal food. Word spread about the unique jumbo
            Rolls we offer, and our fanbase quickly expanded beyond youngsters
            to a much larger, diverse demographic of Mangaloreans, eager to
            experience new and exotic tastes, textures, and flavors.
          </P>
          <P>
            The Kebabci way has been the same for 2 years, we believe in
            treating every customer with sincere appreciation, honor, dignity,
            and respect. By offering many unique options to charcoal meat
            lovers, Kebabci brought extra flair to the shawarma culture and
            still serves as an indispensable location for its guests.
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
