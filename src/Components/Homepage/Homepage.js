import React from "react";
import Nav from "../Navbar/Nav";
import Bulksection from "./Bulk-section/Bulksection";
import Hero from "./Hero/Hero";
import Subsection from "./Sub-section/Subsection";
import Footer from "../Footer/Footer";
import Location from "./Location-section/Location";
import Menuratings from "./Menu-rateings/Menuratings";
import Subsectionred from "./Sub-section/Subsectionred";
import Menusection from "./Menu-section/Menusection";

function Homepage() {
  return (
    <main className="main">
      <Nav />
      <Hero />
      <Subsection />
      <Menusection />
      <Bulksection />
      <Subsectionred />
      <Menuratings />
      <Location />
      <Footer />
    </main>
  );
}

export default Homepage;
