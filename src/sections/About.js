import React from "react";
import soccer from "../img/soccer.jpg";
import glasses from "../img/glasses.PNG";
export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="about">
        <h2 className="heading-secondary">About</h2>
        <h2 className="heading-tertiary">Me</h2>
        <div className="about-grid">
          <div className="sub-heading sub-heading--create">
            <h3>Explore</h3>
          </div>
          <div className="sub-heading sub-heading--explore">
            <h3>Achieve</h3>
          </div>
          <div className="sub-heading sub-heading--conquer">
            <h3>Develop</h3>
          </div>
          <div className="grid-items grid-items--bio">
            <div className="grid-items__heading">
              <i class="fa-solid fa-globe"></i>
              <span className="grid-items__title">Bio:</span>
            </div>
            <ul className="bio-list">
              <li className="bio-list--item">
                Name:
                <span className="bio-list--answer">Shermukhammad Kosimi</span>
              </li>
              <li className="bio-list--item">
                Degree:
                <span className="bio-list--answer">
                  B.S in Computer Science
                </span>
              </li>
              <li className="bio-list--item">
                Languages:
                <span className="bio-list--answer">
                  English, Tajik, Russian
                </span>
              </li>
              <li className="bio-list--item">
                University:
                <span className="bio-list--answer">WIT (Boston)</span>
              </li>
              <li className="bio-list--item">
                Age:
                <span className="bio-list--answer">23 y.o</span>
              </li>
              <li className="bio-list--item">
                Home Country:
                <span className="bio-list--answer">Tajikistan</span>
              </li>
            </ul>
          </div>
          <div className="grid-items grid-items--photo">
            <div className="img-container">
              <img src={glasses} alt="Photo0" className="profile-img" />
            </div>
          </div>
          <div className="grid-items grid-items--tech">
            <div className="grid-items__heading">
              <i class="fa-solid fa-code"></i>
              <span className="grid-items__title">Tech Stack:</span>
            </div>
            <ul className="bio-list">
              <li className="bio-list--item">
                Name:
                <span className="bio-list--answer">Shermukhammad Kosimi</span>
              </li>
              <li className="bio-list--item">
                Homecountry:
                <span className="bio-list--answer">Tajikistan</span>
              </li>
              <li className="bio-list--item">
                Degree:
                <span className="bio-list--answer">
                  B.S in Computer Science
                </span>
              </li>
              <li className="bio-list--item">
                University:
                <span className="bio-list--answer">WIT (Boston, MA)</span>
              </li>
              <li className="bio-list--item">
                Age:
                <span className="bio-list--answer">23 y.o</span>
              </li>
              <li className="bio-list--item">
                Languages :
                <span className="bio-list--answer">
                  English, Tajik, Russian
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
