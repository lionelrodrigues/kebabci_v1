import React from "react";
import Nav from "../Navbar/Nav";
import Bulksection from "./Bulk-section/Bulksection";
import Hero from "./Hero/Hero";
import Subsection from "./Sub-section/Subsection";

function Homepage() {
  return (
    <main className="main">
      <Nav />
      <Hero />
      <Subsection />
      <Bulksection />
    </main>
  );
}

export default Homepage;
