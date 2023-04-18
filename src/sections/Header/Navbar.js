import { HashLink } from "react-router-hash-link";

export default function Header() {
  const onClickSocial = (url) => {
    window.open(url, "_blank");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-list__item">
          <HashLink to={"#projects"} className="nav-list__title">
            <span>Projects</span>
          </HashLink>
        </li>
        <li className="nav-list__item">
          <HashLink to={"#work"} className="nav-list__title">
            <span>Work</span>
          </HashLink>
        </li>
        <li className="nav-list__item">
          <HashLink to={"#about"} className="nav-list__title">
            <span>About</span>
          </HashLink>
        </li>
        <li className="nav-list__item">
          <HashLink to={"#contact"} className="nav-list__title">
            <span>Contact</span>
          </HashLink>
        </li>
      </ul>
      <div className="logo-container">
        <div className="logo-container__background">
          <div className="flame"></div>
        </div>
      </div>
      <div className="social">
        <div className="social__container">
          <button
            className="btn btn--social"
            onClick={() => onClickSocial("https://github.com/sherakosimi")}
          >
            <i className="bx bxl-github bx-tada-hover"></i>
          </button>
          <button
            onClick={() =>
              onClickSocial("https://www.linkedin.com/in/shermukhammad-kosimi/")
            }
            className="btn btn--social"
          >
            <i className="bx bxl-linkedin bx-tada-hover"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
