import React from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";

function Main() {
  return (
    <main>
      <Projects />
      <Work />
      <About />
      <Contact />
    </main>
  );
}

export default Main;
