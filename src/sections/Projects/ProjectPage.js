import React from "react";
import screen from "../../img/lifetrackrReminder.png";
import screen2 from "../../img/lifetrackrSignUp.png";

export default function ProjectPage() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__header">
          <div className="heading">
            <h2 className="heading__secondary">Mobile App</h2>
            <h1 className="heading__tertiary">LifeTrackr</h1>
          </div>
          <div className="popup__source">
            <button className="btn btn--source">
              <i className="fa-brands fa-github"></i>
            </button>
            <button className="btn btn--source">
              <i className="fa-brands fa-behance"></i>
            </button>
          </div>
          <a href="#projects" className="popup__close">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
        <div className="popup__container">
          <div className="popup__info">
            <p className="popup__description">
              <span>Lifetrackr</span> is a cross-platform mobile app created
              using <span>React Native</span> framework. <br /> The goal of this
              app is to offer functionality that aids in the process of taking
              care of plants and animals. The case is done as a diploma project.
            </p>
            <div className="popup__features">
              <h3 className="popup__functionality">Functionality:</h3>
              <p className="popup__features--item">
                <span>Add Companions</span> (pet) by providing its name, related
                notes, and companion type. <br />
                There are five available companion types in our app: dog, cat,
                reptile, plant, bird
              </p>
              <p className="popup__features--item">
                <span>Link reminders</span> to each companion by specifying the
                name, frequency, and reminder type and get timely notifications.
                Reminder types change depending on the companion
              </p>
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
                      <i className="fa-solid fa-file-signature fa-sm"></i>{" "}
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
