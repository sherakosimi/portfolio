import React from "react";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import Navigation from "./sections/Navigation/Navigation";
import Main from "./sections/Main";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
