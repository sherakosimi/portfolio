import React from "react";
import screen from "../../img/lifetrackrReminder.png";
import screen2 from "../../img/lifetrackrSignUp.png";

export default function ProjectPage() {
  return (
    <div class="popup" id="popup">
      <div class="popup__content">
        <div className="popup__header">
          <div className="heading">
            <h2 className="heading__secondary">Mobile App</h2>
            <h1 className="heading__tertiary">LifeTrackr</h1>
          </div>
          <div className="source">
            <button className="source__btn">
              <span className="source__icon">
                <i class="fa-brands fa-github"></i>
              </span>
            </button>
            <button className="source__btn ">
              <span className="source__icon source__icon--behance">
                <i class="fa-brands fa-behance"></i>
              </span>
            </button>
          </div>
          <a href="f" className="popup__close">
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
        <div className="popup__container">
          <div className="info">
            <p className="popup__description">
              <span>Lifetrackr</span> is a cross-platform mobile app created
              using React Native framework. <br /> The goal of this app is to
              offer functionality that aids in the process of taking care of
              plants and animals. The case is done as a diploma project.
            </p>
            <div>
              <h3 className="popup__functionality">Functionality:</h3>
              <div className="popup__cover">
                <ul className="list">
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-brands fa-react"></i>
                    </span>
                    React Native
                    <span className="list__answer">
                      &nbsp;a software framework
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="bx bxl-redux"></i>
                    </span>
                    Redux Saga
                    <span className="list__answer">
                      &nbsp;as a state manager
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-solid fa-graduation-cap"></i>
                    </span>
                    Axios
                    <span className="list__answer">
                      &nbsp;for HTTP Requests (API calls)
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-solid fa-hands-asl-interpreting"></i>
                    </span>
                    Redux Saga
                    <span className="list__answer">
                      {" "}
                      &nbsp;as a state manager
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-solid fa-building-columns"></i>
                    </span>
                    MUI
                    <span className="list__answer">
                      &nbsp;as an icons package
                    </span>
                  </li>
                  <li className="list__item">
                    <span className="list__icon">
                      <i class="fa-brands fa-square-js"></i>
                    </span>
                    Neomorphism
                    <span className="list__answer">
                      {" "}
                      &nbsp;as an UI design style
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="screens">
            <img src={screen} className="screens__img1" alt="" />
            <img src={screen2} className="screens__img2" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
