import React from "react";

const socialButtons = [
  {
    icon: "bx bx-envelope bx-tada-hover",
    href: "mailto:sherakosimi@gmail.com",
  },

  {
    icon: "bx bxl-linkedin bx-tada-hover",
    href: "https://www.linkedin.com/in/shermukhammad-kosimi/",
  },
  {
    icon: "bx bxl-instagram  bx-tada-hover",
    href: "https://www.instagram.com/sherakosimi/",
  },
  {
    icon: "bx bxl-telegram  bx-tada-hover",
    href: "https://t.me/sherakosimi",
  },
];

export default function Contact() {
  const onClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="cover cover--noshadow">
        <div className="heading">
          <h2 className="heading__secondary">Let's</h2>
          <h2 className="heading__tertiary">Connect</h2>
        </div>
        <div className="cover__container cover__container--contact">
          <div className="form">
            <div className="form__side">
              <h2 className="form__heading">Contact Me</h2>
              <h3 className="form__subheading">
                Let's work together to create something amazing.
                <br />
                Contact me to start the journey.
              </h3>
              <div className="form__social">
                {socialButtons?.map((btn, key) => (
                  <button
                    key={key}
                    className="btn btn--social"
                    onClick={() => onClick(btn.href)}
                  >
                    <i className={btn.icon}></i>
                  </button>
                ))}
              </div>
            </div>
            <div className="form__side">
              <h2 className="form__heading">Submit Form</h2>
              <h3 className="form__subheading">
                Feel free to get in touch with me using the form below. I'd love
                to hear from you!
              </h3>
              <div className="form__container">
                <div className="form__group">
                  <input
                    type="text"
                    required=""
                    autoComplete="off"
                    spellCheck="false"
                    className="form__group--input"
                    placeholder="Name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    required=""
                    spellCheck="false"
                    autoComplete="off"
                    className="form__group--input"
                    placeholder="Email"
                  />
                </div>
                <div className="form__group">
                  <textarea
                    required=""
                    autoComplete="off"
                    className="form__group--input"
                    placeholder="Leave a message"
                  />
                </div>
              </div>
              <button
                className="btn btn--main"
                style={{ margin: 2 }}
                href="#projects"
              >
                Submit
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
