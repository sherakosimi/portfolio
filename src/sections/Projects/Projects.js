import React, { useState } from "react";
import { overviewData } from "./ProjectsData";
import ProjectPage from "./ProjectPage";

export default function Projects() {
  const [isOpen, setOpen] = useState(false);

  const onClick = (project) => {
    setOpen(true);
  };

  console.log(isOpen);
  return (
    <section id="projects" className="section">
      <div className="cover">
        <div className="heading">
          <h2 className="heading__secondary">Personal</h2>
          <h2 className="heading__tertiary">Projects</h2>
        </div>
        <div className="cover__container">
          {overviewData.map((project, i) => (
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
                    <div key={k}>
                      <li className="card__item card__item--front">
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
                    </div>
                  ))}
                </ul>
                <h2 className="card__date">{project.date}</h2>
              </div>
              <div className="card__bottom">
                <div className="card__title">
                  <h2 className="card__title--name">{project.projectName}</h2>
                  <h2 className="card__title--platform">{project.platform}</h2>
                </div>
                <div className="card__more">
                  <button
                    className="btn btn--project"
                    onClick={() => onClick(project)}
                  >
                    {project.btnIcon}
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
