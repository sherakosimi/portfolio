import React from "react";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Work from "./sections/Work";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Projects />
        <Work />
      </main>
    </div>
  );
}

export default App;
