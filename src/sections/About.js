import React from "react";
import glasses from "../img/photoshoot.PNG";
export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="about">
        <div className="heading">
          <h2 className="heading__secondary">About</h2>
          <h2 className="heading__tertiary">Me</h2>
        </div>
        <div className="about__container">
          <div className="bio">
            <div className="circle">
              <div className="circle__photo">
                <img src={glasses} alt="Photo0" className="circle__img" />
              </div>
            </div>
            <div className="bio__container">
              <div className="bio__heading">
                <h2 className="bio__heading--name">Sher Kosimi</h2>
                <h2 className="bio__heading--whoami">Software Engineer</h2>
                <div className="bio__heading--social">
                  <span className="bio__heading--icon">
                    <i class="fa-regular fa-envelope"></i>
                  </span>
                  <span className="bio__heading--icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </span>
                  <span className="bio__heading--icon">
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                  <span className="bio__heading--icon">
                    <i class="fa-brands fa-github"></i>
                  </span>
                </div>
              </div>
              <div className="bio__section">
                <h3 className="bio__section--text">BIO</h3>
                <div className="bio__section--degree">
                  <div className="bio__section--item">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>Age:</span>23 y.o
                  </div>
                  <div className="bio__section--item">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>Degree:</span>B.S in Computer Science (WIT)
                  </div>
                  <div className="bio__section--item">
                    <i class="fa-solid fa-earth-americas"></i>
                    <span>Languages:</span>English, Tajik, Russian
                  </div>
                  <div className="bio__section--item">
                    <i class="fa-solid fa-code"></i>
                    <span>Tech Languages:</span>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#007acc" }}
                    >
                      <i class="bx bxl-typescript"></i>
                    </div>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#F0DB4F", paddingTop: 0.3 }}
                    >
                      <i class="fa-brands fa-square-js fa-sm"></i>
                    </div>
                    <div className="bio__section--icon">
                      <i class="bx bxl-java"></i>
                    </div>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#4584b6", paddingTop: 0.3 }}
                    >
                      <i class="bx bxl-python"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bio__section">
                <h3 className="bio__section--text">Software Knowledge</h3>
                <div className="bio__section--skills">
                  <div className="bio__section--skill">React JS</div>
                  <div className="bio__section--skill">HTML</div>
                  <div className="bio__section--skill">CSS (SASS)</div>

                  <div className="bio__section--skill">Git</div>
                  <div className="bio__section--skill">Redux</div>
                  <div className="bio__section--skill">React Native</div>
                  <div className="bio__section--skill">Node JS</div>
                  <div className="bio__section--skill"> MongoDB</div>
                  <div className="bio__section--skill">Figma</div>
                  <div className="bio__section--skill">Express JS</div>
                  <div className="bio__section--skill">Firebase</div>
                  <div className="bio__section--skill">Selenium</div>
                  <div className="bio__section--skill">AWS</div>
                </div>
              </div>
            </div>
          </div>

          <div className="intro">
            <h2 className="intro__heading">
              Hello!
              <p className="intro__paragraph">
                I'm Shermukhammad Kosimi, a recent Computer Science graduate
                with a passion for coding and a love for problem-solving. As a
                self-motivated and dedicated developer, I thrive on challenges
                and am always seeking new ways to improve my skills. With a
                strong foundation in programming languages and a keen eye for
                detail, I'm committed to delivering high-quality solutions that
                meet and exceed expectations.
              </p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
