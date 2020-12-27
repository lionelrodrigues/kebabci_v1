/* eslint-disable array-callback-return */
import React from "react";
import menuItems from "../Navbar/Menuitems";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div className="socials">
      {menuItems.map((item, index) => {
        if (index >= 6) {
          return (
            <Link
              to={item.to}
              id={item.id}
              className={item.cName}
              onClick={(e) => {
                e.preventDefault();
                window.open(item.window);
              }}
              key={index}
            >
              {item.title}
            </Link>
          );
        }
      })}
    </div>
  );
}

export default Socials;
