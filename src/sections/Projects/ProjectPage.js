import React from "react";
import screen from "../../img/lifetrackrReminder.png";
import screen2 from "../../img/lifetrackrSignUp.png";
import { overviewData } from "./ProjectsData";
export default function ProjectPage() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__header">
          <div className="heading">
            <h2 className="heading__secondary">{overviewData[0].platform}</h2>
            <h1 className="heading__tertiary">{overviewData[0].projectName}</h1>
          </div>
          <div className="popup__source">
            <button className="btn btn--source">
              <i className="fa-brands fa-behance"></i>
            </button>
            <a
              role="button"
              className="btn btn--popup"
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/sherakosimi"
            >
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
              Source Code
            </a>
          </div>
          <a href="#projects" className="popup__close">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
        <div className="popup__container">
          <div className="popup__info">
            {overviewData[0].description}
            <div className="popup__features">
              <h3 className="popup__functionality">Functionality:</h3>
              {overviewData[0].functionality.map((i, key) => (
                <div>{i}</div>
              ))}
            </div>
            <div>
              <h3 className="popup__functionality">Tech:</h3>
              <div className="popup__cover">
                <ul className="list">
                  <li className="list__item">
                    <span className="list__icon">
                      <i className="bx bxl-redux"></i>
                    </span>
                    Redux Saga
                    <span className="list__answer">
                      &nbsp;as a AJAX state manager
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i className="fa-solid fa-book-atlas fa-sm"></i>
                    </span>
                    Axios
                    <span className="list__answer">
                      &nbsp;for HTTP Requests (API calls)
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i className="fa-solid fa-signs-post fa-sm"></i>
                    </span>
                    React Navigaton
                    <span className="list__answer">
                      &nbsp;as page navigator
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i className="fa-solid fa-icons fa-sm"></i>
                    </span>
                    MUI
                    <span className="list__answer">
                      &nbsp;as an icons package
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i className="fa-regular fa-calendar-days fa-sm"></i>
                    </span>
                    Moment JS
                    <span className="list__answer">
                      &nbsp;as a date/time formatter
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-solid fa-list fa-sm"></i>
                    </span>
                    Formik
                    <span className="list__answer">
                      &nbsp;for handling input forms
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="popup__screens">
            <img src={screen} className="popup__screens--img1" alt="" />
            <img src={screen2} className="popup__screens--img2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
