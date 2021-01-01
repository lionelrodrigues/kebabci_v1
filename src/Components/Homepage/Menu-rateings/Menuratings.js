import React from "react";
import { P, Title } from "../../Buttons";
import { menuitems } from "./Menuitems";
import "./menuratings.css";

function Menuratings() {
  return (
    <div className="Menu-rateings">
      <Title>TRY OUT OUR POPULAR OPTIONS</Title>
      <div className="popular-section">
        {menuitems.map((item) => {
          return (
            <div className={item.cname}>
              <P>{item.discription}</P>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menuratings;
