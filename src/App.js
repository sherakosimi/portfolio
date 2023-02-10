import React from "react";
import About from "./sections/About";
import Header from "./sections/Header";
import Projects from "./sections/Projects/Projects";
import Work from "./sections/Work/Work";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Projects />
        <Work />
        <About />
      </main>
    </div>
  );
}

export default App;
