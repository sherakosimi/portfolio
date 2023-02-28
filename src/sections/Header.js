import React from "react";
import mainPhoto from "../img/portrait.JPG";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="#projects" className="nav-list__title">
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-list__item">
            <a href="#work" className="nav-list__title">
              <span>Work</span>
            </a>
          </li>
          <li className="nav-list__item">
            <a href="#about" className="nav-list__title">
              <span>About</span>
            </a>
          </li>
          <li className="nav-list__item">
            <a href="hero" className="nav-list__title">
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <div className="logo-container">
          <div className="logo-container__background">
            <div className="flame"></div>
          </div>
        </div>
        <div className="social">
          <div className="social__container">
            <button className="btn btn--social">
              <i className="bx bxl-github bx-tada-hover"></i>
            </button>
            <button className="btn btn--social">
              <i class="bx bxl-linkedin bx-tada-hover"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="hero__box">
          <div className="hero__box--intro">
            <h1 className="hero__box--title">Hello. I'm Sher.</h1>
            <h1 className="hero__box--title">A Developer.</h1>
            <span className="hero__box--subtitle">
              I’m also a designer and general doodler with a keen eye for
              creating engaging UI, bringing products to life.
            </span>
            <a role="button" className="btn btn--main" href="#projects">
              Advance
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </div>
          <div className="hero__box--image">
            <div className="hero__image--container">
              <img src={mainPhoto} alt="Photo1" className="hero__image" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
