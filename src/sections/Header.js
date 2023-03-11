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
            <a href="#contact" className="nav-list__title">
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
              <i className="bx bxl-linkedin bx-tada-hover"></i>
            </button>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero__intro">
          <h1 className="hero__title">
            <span>Hello</span> I'm Sher. <br />A Developer.
          </h1>
          <span className="hero__subtitle">
            I’m also a designer and general doodler with a keen eye for creating
            engaging UI, bringing products to life.
          </span>
          <a role="button" className="btn btn--main" href="#projects">
            Advance
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </a>
        </div>
        <div className="hero__photo">
          <div className="hero__image">
            <img
              src={mainPhoto}
              alt="Photo1"
              className="hero__image--picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
