import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__name">Sher Kosimi</h2>
        <div className="footer__menu">
          <a className="footer__menu--item" href="#projects">
            Projects
          </a>
          <a className="footer__menu--item" href="#work">
            Work
          </a>
          <a className="footer__menu--item" href="#about">
            About
          </a>
          <a className="footer__menu--item" href="#contact">
            Contact
          </a>
        </div>
        <div className="footer__bottom">
          <h2 className="footer__bottom--copyright">
            Copyright © 2023 Shermukhammad Kosimi. All rights reserved.
          </h2>
          <h2 className="footer__bottom--copyright">
            Designed and built by Shermukhammad Kosimi
          </h2>
        </div>
      </div>
    </footer>
  );
}
