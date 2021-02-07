import React from "react";
import Carousel from "../../carousel/Carousel";
import { Title, P, Button } from "../../Buttons.js";
import { NavHashLink } from "react-router-hash-link";
function MenuSection() {
  return (
    <div className="Menusection">
      <div className="Menusection-header">
        <div className="Menusection-headding">
          <Title primary>
            THE BEST RECIPIES
            <br /> IN TOWN
          </Title>
          <div className="border" />
        </div>
        <div className="Menusection-Content">
          <P>
            All of the food served is prepared in our kitchen using our own
            recipes. we serve a large variety of hand crafted Kebabs and rolls
            with a zest of our own flavours to it.
            <br />
            <br />
            Our menu consits of wide varity of options from handcrafed rolls to
            Dum biriyani.
          </P>
          <NavHashLink
            to="route"
            smooth
            id="menu"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://drive.google.com/file/u/6/d/1TqVoihdQ-jPt-9s0msP35Gz-fyreB0p8/view?usp=sharing"
              );
            }}
          >
            <Button primary>View menu</Button>
          </NavHashLink>
        </div>
      </div>
      <div className="Menusection-Carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default MenuSection;
