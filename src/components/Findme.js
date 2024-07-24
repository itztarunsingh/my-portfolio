import React from "react";

export default function Header() {
  function github() {
    window.open("https://github.com/dev-TarunSingh", '_blank');
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/dev-tarunsingh/", '_blank');
  }

  function mail() {
    window.open("mailto:tarunsinghchauhan75@gmail.com",'_blank');
  }

  function instagram() {
    window.open("https://www.instagram.com/oops_tarun/");
  }

  function snapchat() {
    window.open("https://www.snapchat.com/add/itz_tarunsingh");
  }
  return (
    <section className="findme" id="findme">
      <div className="box">
        <div className="head">
          <h1>Find me on...</h1>
        </div>
        <div className="all-links">
          <button onClick={github} class="button">
            <i class="fi fi-brands-github"></i>
          </button>
          <button onClick={linkedin} class="button">
            <i class="fi fi-brands-linkedin"></i>
          </button>
          <button onclick={mail} class="button">
            <i class="fi fi-br-envelope"></i>
          </button>
          <button onClick={instagram} class="button">
            <i class="fi fi-brands-instagram"></i>
          </button>
          <button onClick={snapchat} class="button">
            <i class="fi fi-brands-snapchat"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
