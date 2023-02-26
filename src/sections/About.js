import React from "react";
import soccer from "../img/soccer.jpg";
import glasses from "../img/photoshoot.PNG";
export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="about">
        <div className="heading">
          <h2 className="heading__secondary">About</h2>
          <h2 className="heading__tertiary">Me</h2>
        </div>
        <div className="grid-container">
          <div className="about-grid">
            <div className="grid-items grid-items--photo">
              <div className="img-container">
                <img src={glasses} alt="Photo0" className="profile-img" />
              </div>
            </div>
            <div className="grid-items grid-items--bio">
              <ul className="bio-list">
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-solid fa-signature"></i>
                  </span>
                  Name:
                  <span className="bio-list--answer">Shermukhammad Kosimi</span>
                </li>
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </span>
                  Degree:
                  <span className="bio-list--answer">
                    B.S in Computer Science
                  </span>
                </li>
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-solid fa-hands-asl-interpreting"></i>
                  </span>
                  Languages:
                  <span className="bio-list--answer">
                    Russian, English, Tajik
                  </span>
                </li>
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-solid fa-building-columns"></i>
                  </span>
                  University:
                  <span className="bio-list--answer">WIT (Boston)</span>
                </li>
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-brands fa-square-js"></i>
                  </span>
                  Age:
                  <span className="bio-list--answer">23 y.o</span>
                </li>
                <li className="bio-list--item">
                  <span className="bio-list--icon">
                    <i class="fa-solid fa-house-flag"></i>
                  </span>
                  Home Country:
                  <span className="bio-list--answer">Tajikistan</span>
                </li>
              </ul>
            </div>
            <div className="grid-items grid-items--intro">
              <div className="intro-container">
                <h2 className="introduction">
                  A highly motivated and talented Computer Science graduate,
                  passionate about leveraging technology to solve complex
                  problems and make a positive impact on the world. With a
                  strong foundation in programming languages, software
                  engineering, databases, and artificial intelligence
                </h2>
              </div>
            </div>

            {/* <div className="grid-items grid-items--tech">
              <div className="grid-items__heading">
                <i class="fa-solid fa-code"></i>
                <span className="grid-items__title">Tech Stack:</span>
              </div>
              <ul className="tech-list">
                <li className="tech-list--item">
                  <i class="fa-brands fa-square-js"></i>
                  <span className="tech-list--answer">JavaScript </span>
                </li>

                <li className="tech-list--item">
                  <i class="fa-brands fa-react"></i>
                  <span className="tech-list--answer">React JS </span>
                </li>
                <li className="tech-list--item">
                  <i class="fa-brands fa-java"></i>
                  <span className="tech-list--answer">Java </span>
                </li>
                <li className="tech-list--item">
                  <i class="bx bxl-typescript"></i>
                  <span className="tech-list--answer">TypeScript </span>
                </li>
                <li className="tech-list--item">
                  <i class="fa-brands fa-react"></i>
                  <span className="tech-list--answer">React Native </span>
                </li>
                <li className="tech-list--item">
                  <i class="bx bxl-redux"></i>
                  <span className="tech-list--answer">Redux </span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
