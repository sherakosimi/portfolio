import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="section-projects">
      <div className="projects">
        <div>
          <h2 className="heading-secondary">Personal</h2>
          <h2 className="heading-tertiary">Projects</h2>
        </div>
        <div className="projects__flexbox">
          <div className="projects__card">
            <div className="projects__card-container"></div>
            <h2 className="projects__card-title">LifeTrackr</h2>
            <h2 className="projects__card-subtitle">Mobile App</h2>
          </div>
          <div className="projects__card">
            <div className="projects__card-container"></div>
            <h2 className="projects__card-title">Outdoors</h2>
            <h2 className="projects__card-subtitle">Web App</h2>
          </div>
          <div className="projects__card">
            <div className="projects__card-container"></div>
            <h2 className="projects__card-title">ETH Wallet</h2>
            <h2 className="projects__card-subtitle">Web App</h2>
          </div>
          <div className="projects__card">
            <div className="projects__card-container"></div>
            <h2 className="projects__card-title">Team Manager</h2>
            <h2 className="projects__card-subtitle">Mobile App</h2>
          </div>
          <div className="projects__card">
            <div className="projects__card-container"></div>
            <h2 className="projects__card-title">Portfolio</h2>
            <h2 className="projects__card-subtitle">Web App</h2>
          </div>

          {/* <div className="projects__card">
            <div className="projects__content">
              <h2 className="projects__title">LifeTrackr</h2>
              <p className="projects__copy">
                Check out all of these gorgeous mountain trips with beautiful
                views of, you guessed it, the mountains{" "}
              </p>
              <button className="projects__btn"> Learn more</button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
