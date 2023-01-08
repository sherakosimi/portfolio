import React from "react";
import mainPhoto from "../../img/portrait.JPG";

export default function Header() {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <div className="nav">
            <div className="nav__box">
              <span className="nav__title">Projects</span>
            </div>
            <div className="nav__box">
              <span className="nav__title">Work</span>
            </div>
            <div className="nav__box">
              <span className="nav__title">About</span>
            </div>
            <div className="nav__box">
              <span className="nav__title">Contact</span>
            </div>
          </div>
          <div className="logo">
            <div className="logo__flame"></div>
          </div>
          <div className="social">
            <div className="social__icon-wrapper">
              <i className="bx bxl-github bx-tada-hover"></i>
            </div>
            <div className="social__icon-wrapper">
              <i class="bx bxl-linkedin bx-tada-hover"></i>
            </div>
          </div>
        </nav>
      </header>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__box--intro">
            <h1 className="hero__box--title">Hello. I'm Sher.</h1>
            <h1 className="hero__box--title">A Developer.</h1>
            <span className="hero__box--subtitle">
              I’m also a designer and general doodler with a keen eye for
              creating engaging UI, bringing products to life.
            </span>
          </div>
          <div className="hero__box--image">
            <div className="hero__image--container">
              <img src={mainPhoto} alt="Photo1" className="hero__image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
