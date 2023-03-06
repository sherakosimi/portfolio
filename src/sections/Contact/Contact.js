import React, { useState } from "react";

export default function Contact() {
  return (
    <section id="contact">
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
                Feel free to get in touch with me using the form below. I'd love
                to hear from you!
              </h3>

              <div></div>
            </div>
            <div className="form__side">
              <h2 className="form__heading">Submit Form</h2>

              <div class="form__group">
                <input
                  type="text"
                  required=""
                  autocomplete="off"
                  className="form__group--input"
                />
                <label for="name" className="form__group--label"></label>
              </div>
              <div class="form__group">
                <input
                  type="text"
                  required=""
                  autocomplete="off"
                  className="form__group--input"
                />
                <label for="name" className="form__group--label"></label>
              </div>
              <div class="form__group">
                <input
                  type="text"
                  required=""
                  autocomplete="off"
                  className="form__group--input"
                />
                <label for="name" className="form__group--label"></label>
              </div>
              <button className="btn btn--contact" href="#projects">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
