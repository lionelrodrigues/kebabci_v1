import React from "react";
import Nav from "../Navbar/Nav";
import Aboutfood from "./Aboutfood";
import "./Aboutus.css";
import Philosop from "./Philosop";
import Footer from "../Footer/Footer";

function Aboutus() {
  return (
    <main className="main">
      <Nav />
      <div className="aboutus-hero"></div>
      <Philosop />
      <Aboutfood />
      <Footer />
    </main>
  );
}

export default Aboutus;
