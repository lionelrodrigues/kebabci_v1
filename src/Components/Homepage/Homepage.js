import React from "react";
import Nav from "../Navbar/Nav";
import Bulksection from "./Bulk-section/Bulksection";
import Hero from "./Hero/Hero";
import Subsection from "./Sub-section/Subsection";
import Footer from "../Footer/Footer";
import Location from "./Location-section/Location";
import Menuratings from "./Menu-rateings/Menuratings";

function Homepage() {
  return (
    <main className="main">
      <Nav />
      <Hero />
      <Subsection />
      <Bulksection />
      <Menuratings />
      <Location />
      <Footer />
    </main>
  );
}

export default Homepage;
