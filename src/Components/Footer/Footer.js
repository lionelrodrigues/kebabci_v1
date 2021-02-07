import React from "react";
import Socials from "./Socials";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-sub">
        <div className="footer-copyright">
          <p className="footer-p">Kebabçï by Millennium </p>
          <p className="footer-p">&#169; copyright 2021 all rights reserved </p>
          <p className="footer-p">Website by LMR and SOHO </p>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Footer;
