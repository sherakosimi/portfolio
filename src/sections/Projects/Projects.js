import React from "react";
import { projectsData } from "./ProjectsData";

export default function Projects() {
  return (
    <section id="projects" className="section-projects">
      <div className="projects">
        <div>
          <h2 className="heading-secondary">Personal</h2>
          <h2 className="heading-tertiary">Projects</h2>
        </div>
        <div className="projects__flexbox">
          {projectsData.map((project, i) => (
            <div className="card" key={i}>
              <div className="card__top" id="web">
                <h3 className="card__description card__description--front">
                  {project.caseName}
                </h3>
                <h3 className="card__description card__description--back">
                  Features Overview
                </h3>
                <ul className="card__list">
                  {project.techStack.map((item, k) => (
                    <>
                      <li className="card__item card__item--front" key={k}>
                        <span
                          className="card__icon card__icon--front"
                          style={item.colorFront}
                        >
                          <i className={item.iconFront}></i>
                        </span>
                        {item.nameFront}
                      </li>
                      <li className="card__item card__item--back">
                        <span className="card__icon card__icon--back">
                          <i
                            className={item.iconBack}
                            style={item.colorBack}
                          ></i>
                        </span>
                        {item.nameBack}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="card__bottom">
                <div className="card__title">
                  <h2 className="card__title--name">{project.projectName}</h2>
                  <h2 className="card__title--platform">{project.platform}</h2>
                </div>
                <div className="card__more">
                  <button className="card__more--btn">
                    <i class="bx bx-spa"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
