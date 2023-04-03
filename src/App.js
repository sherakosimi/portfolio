import React from "react";
import About from "./sections/About";
import Header from "./sections/Header";
import Projects from "./sections/Projects/Projects";
import Work from "./sections/Work/Work";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact/Contact";
import { toast, ToastContainer } from "react-toastify";

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
      <Footer />
    </div>
  );
}

export default App;
