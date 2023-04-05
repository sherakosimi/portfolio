import React from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.elements.name.value &&
      e.target.elements.email.value &&
      e.target.elements.subject.value
    ) {
      emailjs
        .sendForm(
          "gmail",
          "application_template",
          e.target,
          "user_Ra8roTJE5NBAXZq7eRSsY"
        )
        .then(
          (result) => {
            toast.success("Thank you for your message!");
          },
          (error) => {
            toast.error(error.text);
          }
        );
      e.target.reset();
    } else {
      toast.error("Please fill out all fields");
    }
  };

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
            <form className="form__side" onSubmit={sendEmail}>
              <h2 className="form__heading">Submit Form</h2>
              <h3 className="form__subheading">
                Feel free to get in touch with me using the form below. I'd love
                to hear from you!
              </h3>
              <div className="form__container">
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    required=""
                    autoComplete="off"
                    spellCheck="false"
                    className="form__group--input"
                    placeholder="Name"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    required=""
                    spellCheck="false"
                    autoComplete="off"
                    className="form__group--input"
                    placeholder="Email"
                  />
                </div>
                <div className="form__group">
                  <textarea
                    name="subject"
                    required=""
                    autoComplete="off"
                    className="form__group--input"
                    placeholder="Leave a message"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn--submit"
                style={{ margin: 2 }}
                href="#projects"
              >
                Submit
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
