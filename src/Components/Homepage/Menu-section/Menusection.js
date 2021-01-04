import React from "react";
import Textcontainer from "./Textcontainer";
import "./Menusection.css";

function Menusection() {
  return (
    <div className="menusection-container">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
          alt="restraunt-menu"
        />
      </div>
      <div className="text-container">
        <Textcontainer />
      </div>
    </div>
  );
}

export default Menusection;
