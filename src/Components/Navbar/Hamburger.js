import React from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import menuItems from "./Menuitems";
import "./hamburger.css";
import { useState } from "react";

function Hamburger() {
  const [state, setstate] = useState(false);
  return (
    <nav>
      <Menu
        right
        customCrossIcon={<i className="fas fa-times"></i>}
        isOpen={state}
        outerContainerId={"outer-container"}
        pageWrapId={"page-wrap"}
      >
        {menuItems.map((item, index) => {
          return (
            <NavLink
              to={item.to}
              id={item.id}
              className={item.cName}
              onClick={
                item.extern
                  ? (e) => {
                      e.preventDefault();
                      window.open(item.window);
                    }
                  : setstate
              }
              key={index}
            >
              {item.title}
            </NavLink>
          );
        })}
      </Menu>
    </nav>
  );
}

export default Hamburger;
