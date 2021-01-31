import React from "react";
import Carousel from "../../carousel/Carousel";
import { Title, P, Button } from "../../Buttons.js";
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
            recipes. <br />
            write about youtr menu and highlight the uniqueness{" "}
          </P>
          <Button primary>view menu</Button>
        </div>
      </div>
      <div className="Menusection-Carousel">
        <Carousel />
      </div>
    </div>
  );
}

export default MenuSection;
