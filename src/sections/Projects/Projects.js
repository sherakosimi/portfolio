import React, { useState } from "react";
import { description, overview } from "./ProjectsData";
import ProjectPage from "./ProjectPage";

export default function Projects() {
  const [projectID, setProjectID] = useState(null);

  const onClick = (id) => {
    setProjectID(id);
  };

  console.log(overview);
  return (
    <section id="projects" className="section">
      <div className="cover">
        <div className="heading">
          <h2 className="heading__secondary">Personal</h2>
          <h2 className="heading__tertiary">Projects</h2>
        </div>
        <div className="cover__container">
          {description.map((project, i) => (
            <div className="card" key={i}>
              <div className="card__top" id="web">
                <h3 className="card__description card__description--front">
                  Features Overview
                </h3>
                <h3 className="card__description card__description--back">
                  {project.caseName}
                </h3>
                <ul className="card__list">
                  {project.techStack.map((item, k) => (
                    <div key={k}>
                      <li className="card__item card__item--front">
                        <span className="card__icon card__icon--front">
                          {item.iconFront}
                        </span>
                        {item.nameFront}
                      </li>
                      <li className="card__item card__item--back">
                        <span className="card__icon card__icon--back">
                          {item.iconBack}
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
                    onClick={() => onClick(i)}
                  >
                    {project.btnIcon}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectPage id={projectID} setProjectID={setProjectID} />
    </section>
  );
}
