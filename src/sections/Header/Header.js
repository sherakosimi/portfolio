import mainPhoto from "../../img/portrait.JPG";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="header">
      <Navbar />
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
