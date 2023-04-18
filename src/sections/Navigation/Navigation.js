import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const onClickHamburger = () => {
    //Toggle Active
    document.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".navigation").classList.toggle("is-active");
  };

  const onClickSocial = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="navigation__hamburger">
        <button
          className="hamburger hamburger--collapse"
          type="button"
          onClick={() => onClickHamburger()}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="navigation">
        <HashLink
          to={"#projects"}
          onClick={() => onClickHamburger()}
          className="navigation__link"
        >
          Projects
        </HashLink>
        <HashLink
          to={"#work"}
          onClick={() => onClickHamburger()}
          className="navigation__link"
        >
          Work
        </HashLink>
        <HashLink
          to={"#about"}
          onClick={() => onClickHamburger()}
          className="navigation__link"
        >
          About
        </HashLink>
        <HashLink
          to={"#contact"}
          onClick={() => onClickHamburger()}
          className="navigation__link"
        >
          Contact
        </HashLink>
        <div className="navigation__social">
          <i
            className="bx bx-envelope bx-tada-hover"
            onClick={() => onClickSocial("mailto:sherakosimi@gmail.com")}
          ></i>
          <i
            className="bx bxl-linkedin bx-tada-hover"
            onClick={() =>
              onClickSocial("https://www.linkedin.com/in/shermukhammad-kosimi/")
            }
          ></i>
          <i
            className="bx bxl-telegram bx-tada-hover"
            onClick={() => onClickSocial("https://t.me/sherakosimi")}
          ></i>
          <i
            className="bx bxl-github bx-tada-hover"
            onClick={() => onClickSocial("https://github.com/sherakosimi")}
          ></i>
        </div>
      </div>
    </div>
  );
}
