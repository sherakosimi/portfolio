import React from "react";
import About from "./sections/About";
import Header from "./sections/Header";
import Projects from "./sections/Projects/Projects";
import Work from "./sections/Work/Work";
import Footer from "./sections/Footer";
import ProjectPage from "./sections/Projects/ProjectPage";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Projects />
        <Work />
        <About />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
