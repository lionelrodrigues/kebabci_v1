import React from "react";
import Subdata from "./Subdata";
import "./subsection.css";
import SubsectionBox from "./SubsectionBox";

function Subsection() {
  return (
    <>
      <div className="sub-section">
        <Subdata />
      </div>
      <div className="subsection-container">
        <SubsectionBox />
      </div>
    </>
  );
}

export default Subsection;
