import React from "react";
import Bulksection from "./Bulk-section/Bulksection";
import Hero from "./Hero/Hero";
import Footer from "../Footer/Footer";
import Location from "./Location-section/Location";
import Menuratings from "./Menu-rateings/Menuratings";
import Subsectionred from "./Sub-section/Subsectionred";
import SectionTwo from "./Section-two/SectionTwo";

function Homepage() {
  return (
    <main className="main">
      <Hero />
      <SectionTwo />
      <Subsectionred />
      <Bulksection />
      <Menuratings />
      <Location />
      <Footer />
    </main>
  );
}

export default Homepage;
