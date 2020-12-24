import Carousel from "react-elastic-carousel";
import React from "react";
import Items from "./Items";

function Caroursel() {
  return (
    <Carousel>
      <Items>page1</Items>
      <Items>
        <h1>page 2</h1>
      </Items>
    </Carousel>
  );
}

export default Caroursel;
