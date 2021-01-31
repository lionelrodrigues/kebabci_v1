import React from "react";
import { stack as Menu } from "react-burger-menu";
import menuItems from "./Menuitems";
import "./hamburger.css";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

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
            <NavHashLink
              to={item.to}
              smooth
              activeClassName="activelink"
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
            </NavHashLink>
          );
        })}
      </Menu>
    </nav>
  );
}

export default Hamburger;
