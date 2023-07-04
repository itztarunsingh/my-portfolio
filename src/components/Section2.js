import React from "react";

export default function Section2() {
  return (
    <section className="section_2" id="about">
      <div className="head">
        <h1>Peronal Information</h1>
      </div>
      <div className="data">
        <p>
          <i class="fi fi-rr-id-card-clip-alt"></i>
          <b>Name: </b> Tarun Singh Chauhan
        </p>
        <p>
          <i class="fi fi-rr-hastag"></i>
          <b>Age: </b> 19
        </p>
        <p>
          <i class="fi fi-rr-calendar"></i>
          <b>date of birth: </b> 28 January 2004
        </p>
        <p>
          <i class="fi fi-br-at"></i>
          <b>Email: </b> tarunsinghchauhan75@gmail.com
        </p>
        <p>
          <i class="fi fi-rr-marker"></i>
          <b>Address: </b> : Jhanjeri, near government school, Jhanjeri, SH 12A,
          Mohali pin- 140307{" "}
        </p>
      </div>
      <div className="skill-head">
        <h1>Skills</h1>
      </div>
      <div className="skills">
        <div className="btn1">
          <button class="button">
            <i class="fi fi-rr-square-code"></i>HTML
          </button>
        </div>
        <div className="btn2">
          <button class="button">
            <i class="fi fi-brands-css3"></i>CSS
          </button>
        </div>
        <div className="btn3">
          <button class="button">
            <i class="fi fi-brands-js"></i>Javascript
          </button>
        </div>
        <div className="btn4">
          <button class="button">
            <i class="fi fi-ss-physics"></i>React.js
          </button>
        </div>
        <div className="btn5">
          <button class="button">
            <i class="fi fi-brands-python"></i>Python
          </button>
        </div>
        <div className="btn6">
          <button class="button">
            <i class="fi fi-br-c"></i>C/C++
          </button>
        </div>
        <div className="btn7">
          <button class="button">
            <i class="fi fi-brands-mysql"></i>MySQL
          </button>
        </div>
        <div className="btn8">
          <button class="button">
            <i class="fi fi-brands-android"></i>Android
          </button>
        </div>
        <div className="btn9">
          <button class="button">
            <i class="fi fi-brands-ubuntu"></i>Linux
          </button>
        </div>
        <div className="btn10">
          <button class="button">
            <i class="fi fi-rs-clip"></i>MS Office
          </button>
        </div>
      </div>
      <div className="spoken languages">
        <div className="lang-box">
          <h1>Languages comfortable with</h1>
        </div>
        <div className="box">
          <div className="btn1">
            <button class="button">English: written and spoken</button>
          </div>
          <div className="btn1">
            <button class="button">Hindi: written and spoken</button>
          </div>
        </div>
      </div>
      <div className="qual-head">
        <h1>Qualifications</h1>
      </div>
      <div className="qualf">
        <div className="school">
          <p1>2019</p1>
          <p2>
            <br />
            <b>Army public School No. 1, Roorkee</b>
            <br />
            Secured 75%
          </p2>
        </div>
        <div className="high-school">
          <p1>2021</p1>
          <p2>
            <br />
            <b>Army public School No. 1, Roorkee</b>
            <br />
            Secured 87%
          </p2>
        </div>
        <div className="graduation">
          <p1>currently</p1>
          <p2>
            <br />
            <b>Chandigarh group of colleges, Jhanjeri</b>
            <br />
            last semester score: 7.8 SCGPA
          </p2>
        </div>
      </div>
    </section>
  );
}
