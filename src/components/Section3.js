import React from "react";
import IMAGES from "./Files.js";

export default function Section3() {
  function showpopup() {
    document.getElementById("popup").style.display = "block";
  }

  function closepopup() {
    document.getElementById("popup").style.display = "none";
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
            <button
              class="view"
              onClick={() => {
                showpopup();
              }}
            >
              View
            </button>
          </div>
        </div>
        <div className="cerifi_1" id="2">
          <img src={IMAGES.CSS_JS} alt="certificate_1" />
          <div className="details">
            <p1>CSS and JS Crash Course</p1>
            <button class="view">View</button>
          </div>
        </div>
        <div className="cerifi_1" id="3">
          <img src={IMAGES.JS_CC} alt="certificate_1" />
          <div className="details">
            <p1>Javascript Crash Course</p1>
            <button class="view">View</button>
          </div>
        </div>
        <div className="cerifi_1" id="4">
          <img src={IMAGES.Python} alt="certificate_1" />
          <div className="details">
            <p1>Python</p1>
            <button class="view">View</button>
          </div>
        </div>
      </div>
      <div id="popup" class="popup">
        <span class="close" onClick={closepopup}>
          &times;
        </span>
        {/* image source */}
        <button class="view">View details</button>
      </div>
    </section>
  );
}
