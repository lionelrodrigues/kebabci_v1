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
              onClick={
                item.extern
                  ? (e) => {
                      e.preventDefault();
                      window.open(item.window);
                    }
                  : alert("click again")
              }
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
