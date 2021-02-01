import React from "react";
import Socials from "./Socials";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="Newsletter"></div>
      <div className="footer-sub">
        <div className="footer-copyright">
          <p className="footer-p">Powered by Halal chicken &#128020; </p>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
