import React from "react";
import { workData } from "./WorkData";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="cover">
        <div className="heading">
          <h2 className="heading__secondary">Work</h2>
          <h2 className="heading__tertiary">Experience</h2>
        </div>
        <div className="cover__container cover__container--work">
          {workData.map((item, i) => (
            <div className={item.style} key={i}>
              <div className="work__experience">
                <span className="work__experience--company">{item.name}</span>
                <span className="work__experience--location">
                  {item.location}
                </span>
              </div>
              <div className="work__line"></div>
              <div className="work__desc-container">
                <div className="work__position">
                  <span className="work__position--name">{item.position}</span>
                  <span className="work__position--date">{item.date}</span>
                </div>
                <button className="btn btn--work">{item.icon}</button>
              </div>
              <h2 className="work__responsibility">Tools & Responsibilites</h2>
              <ul className="work__tools">
                {item.tools.map((tool, k) => (
                  <li className="work__tools--item" key={k}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
