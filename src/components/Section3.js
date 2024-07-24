import React from "react";
import IMAGES from "./Files.js";

export default function Section3() {
  function jsboot() {
    window.open(
      "https://drive.google.com/file/d/1rNiNK-a0QghRd_KuJ9H1DWs0MT2STYSE/view?usp=drive_link"
      ,'_blank');
  }
  function css_js () {
    window.open("https://drive.google.com/file/d/1vipRqIRGwQ2553UJlWqyW7tJe8pQrQHv/view?usp=drive_link",'_blank');
  }
  function js_cc () {
    window.open("https://drive.google.com/file/d/1eqa056qkfPwhk3gg-HrJ0tSVY75dVM1H/view?usp=sharing",'_blank');
  }
  function python () {
    window.open("https://www.linkedin.com/posts/dev-tarunsingh_1000-free-courses-with-free-certificates-activity-7024773000365256704-P5BZ?utm_source=share&utm_medium=member_desktop", '_blank');
  }
  function cpp () {
    window.open("https://www.linkedin.com/posts/dev-tarunsingh_1000-free-courses-with-free-certificates-activity-7081905746451271680-8CZ8?utm_source=share&utm_medium=member_desktop",'_blank');
  }
  return (
    <section className="section_3" id="certificates">
      <div className="cont_head">
        <h1>
          <b>Certifcations</b>
        </h1>
      </div>
      <div className="allcertificates">
        <div className="cerifi_1" id="1">
          <img src={IMAGES.JSbootcamp} alt="certificate_1" />
          <div className="details">
            <p1>Javascript Bootcamp</p1>
            <button class="view" onClick={jsboot}>
              View
            </button>
          </div>
        </div>
        <div className="cerifi_1" id="2">
          <img src={IMAGES.CSS_JS} alt="certificate_1" />
          <div className="details">
            <p1>CSS and JS Crash Course</p1>
            <button class="view" onClick={css_js}>View</button>
          </div>
        </div>
        <div className="cerifi_1" id="3">
          <img src={IMAGES.JS_CC} alt="certificate_1" />
          <div className="details">
            <p1>Javascript Crash Course</p1>
            <button class="view" onClick={js_cc}>View</button>
          </div>
        </div>
        <div className="cerifi_1" id="4">
          <img src={IMAGES.Python} alt="certificate_1" />
          <div className="details">
            <p1>Python</p1>
            <button class="view" onClick={python}>View</button>
          </div>
        </div>
        <div className="cerifi_1" id="4">
          <img src={IMAGES.Cpp} alt="certificate_1" />
          <div className="details">
            <p1>C++</p1>
            <button class="view" onClick={cpp}>View</button>
          </div>
        </div>
      </div>
    </section>
  );
}

