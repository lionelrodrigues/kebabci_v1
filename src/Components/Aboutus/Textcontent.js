import React from "react";
import { P } from "../Buttons";

function Textcontent() {
  return (
    <>
      <div className="ourfood-container">
        <img src="/images/kebab.svg" class="image" alt="rolls" />
        <div className="outfood-txt">
          <h3>We’re Passionate About Our Food</h3>
          <P>
            From adding more balanced options to our Menu, to serving up fresh
            Rumali roti’s that are cooked when you order, we’re always finding
            ways to show our commitment to our customers and our food.
          </P>
        </div>
      </div>
      <div className="ourfood-container">
        <img src="/images/quality.svg" class="image right" alt="quality" />
        <div className="outfood-txt">
          <h3>Commitment to Quality</h3>
          <P>
            We're committed to improving the way we cook our quality food and
            the ingredients that go into it.
          </P>
        </div>
      </div>
      <div className="ourfood-container">
        <img src="/images/cooking.svg" class="image " alt="cooking" />
        <div className="outfood-txt">
          <h3>Pride in Preparation</h3>
          <P>
            Every day, our kitchens work to prepare your food just the way you
            like it. That’s why we introduced wide variety of Charcoal Rumali
            shawarmas making it Juicier, Spicier and Bigger.
          </P>
        </div>
      </div>
      <div className="ourfood-container">
        <img src="/images/menu.svg" class="image right " alt="menu" />
        <div className="outfood-txt">
          <h3>Committed to Menu Evolution</h3>
          <P>
            Change is good, especially when it means adding new dishes to our
            menu.
          </P>
        </div>
      </div>
    </>
  );
}

export default Textcontent;
