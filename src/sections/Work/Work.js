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
        <div className="cover__container">
          <div className="grid">
            {workData.map((item, i) => (
              <div className={item.style} key={i}>
                <div className="item__experience">
                  <span className="item__experience--company">{item.name}</span>
                  <span className="item__experience--location">
                    {item.location}
                  </span>
                </div>
                <div className="item__line"></div>
                <div className="item__desc-container">
                  <div className="item__position">
                    <span className="item__position--name">
                      {item.position}
                    </span>
                    <span className="item__position--date">{item.date}</span>
                  </div>
                  <button className="btn btn--work">
                    <i className="bx bxs-chevron-right"></i>
                  </button>
                </div>
                <h2 className="item__responsibility">
                  Tools & Responsibilites
                </h2>
                <ul className="item__tools">
                  {item.tools.map((tool, k) => (
                    <li className="item__tools--item" key={k}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
