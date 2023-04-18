import React from "react";
import glasses from "../../img/photoshoot.PNG";

const socialButtons = [
  {
    icon: "fa-regular fa-envelope",
    href: "mailto:sherakosimi@gmail.com",
    //fa-regular fa-envelope
  },
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/shermukhammad-kosimi/",
  },
  {
    icon: "fa-brands fa-instagram",
    href: "https://www.instagram.com/sherakosimi/",
  },
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/sherakosimi",
  },
];

export default function About() {
  const onClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="about" className="section">
      <div className="cover cover--noshadow">
        <div className="heading">
          <h2 className="heading__secondary">About</h2>
          <h2 className="heading__tertiary">Me</h2>
        </div>
        <div className="cover__container cover__container--about">
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
                  {socialButtons?.map((btn, key) => (
                    <span
                      className="bio__heading--icon"
                      onClick={() => onClick(btn.href)}
                      key={key}
                    >
                      <i className={btn.icon}></i>
                    </span>
                  ))}
                </div>
              </div>
              <div className="bio__section">
                <h3 className="bio__section--text">Background</h3>
                <div className="bio__section--degree">
                  <div className="bio__section--item">
                    <i className="fa-solid fa-certificate"></i>
                    <span>Age:</span>23 y.o
                  </div>
                  <div className="bio__section--item">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span>Degree:</span>B.S in Computer Science (WIT)
                  </div>
                  <div className="bio__section--item">
                    <i className="fa-solid fa-earth-americas"></i>
                    <span>Languages:</span>English, Tajik, Russian
                  </div>
                  <div className="bio__section--item">
                    <i className="fa-solid fa-code"></i>
                    <span>Tech Languages:</span>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#007acc" }}
                    >
                      <i className="bx bxl-typescript"></i>
                    </div>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#F0DB4F", paddingTop: 0.3 }}
                    >
                      <i className="fa-brands fa-square-js fa-sm"></i>
                    </div>
                    <div className="bio__section--icon">
                      <i className="bx bxl-java"></i>
                    </div>
                    <div
                      className="bio__section--icon"
                      style={{ color: "#4584b6", paddingTop: 0.3 }}
                    >
                      <i className="bx bxl-python"></i>
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
                  <div className="bio__section--skill">Redux</div>
                  <div className="bio__section--skill">Git</div>
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
            <h2 className="intro__heading">Hello!</h2>
            <p className="intro__paragraph">
              <span>I'm Shermukhammad Kosimi,</span> a recent Computer Science
              graduate originally from Tajikistan. As a self-motivated with a
              strong foundation in programming languages, I always thrive on
              challenges and am always seeking new ways to improve my skills.
            </p>
            <p className="intro__paragraph">
              <span>Throughout my career,</span> I have worked on several large
              projects and take pride in creating high-quality user interfaces.
              I am confident that my skills and experience will make me a
              valuable addition to your team.
            </p>

            <p className="intro__paragraph">
              <span>Outside of programming,</span> as a former semi-professional
              soccer player, I gained valuable experience that helped me develop
              my leadership skills, including communication, motivation, and
              effective resource management.
            </p>
          </div>

          <div className="skills">
            <h2 className="skills__heading">Skills</h2>
            <div className="skills__container">
              <h2 className="skills__subheading">Programming Skills</h2>
              <ul className="skills__list">
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-layer-group"></i>
                  </span>
                  Data Structures & Algorithms
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-laptop-code"></i>
                  </span>
                  Web & Mobile App Development
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-sitemap"></i>
                  </span>
                  Operating Systems
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-user-secret"></i>
                  </span>
                  Cybersecurity
                </li>

                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-database"></i>
                  </span>
                  Big Data Programming
                </li>
              </ul>

              <h2 className="skills__subheading">Front-End Development</h2>
              <ul className="skills__list">
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-igloo"></i>
                  </span>
                  DOM Manipulation
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-book-atlas"></i>
                  </span>
                  RESTful API Integration
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-circle-nodes"></i>
                  </span>
                  AJAX State Management
                </li>
                <li className="skills__list--item">
                  <span>
                    <i className="fa-solid fa-pen-nib"></i>
                  </span>
                  Responsive UI/UX Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
