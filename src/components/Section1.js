import React from "react";
import pic from "./mypic.jpg";

export default function Section1() {
  function dwnldcv() {
    window.location.href =
      "https://drive.google.com/file/d/1O0FehKcLSuApdqMny7KEgkyhoAhBpQAN/view?usp=sharing";
  }
  return (
    <section className="section_1" id="Home">
      <div class="flex-box">
        <div class="imagearea">
          <div class="myimage">
            <img src={pic} alt="profile_pic" />
          </div>
        </div>
        <div class="about">
          <div class="name">
            <p1>Hi, myself</p1>
            <h1>
              <i>Tarun singh Chauhan</i>
            </h1>
            <br />
            <div className="about-lines">
              <p2>
                Code Enthusiast || C/C++ || Python || MySQL || content Writing
                ✍️ || Web Developer <br />
              </p2>
              <p3>
                <br />
                With a passion for problem-solving and a deep understanding of
                programming languages such as Python, Java, and C++, crafting
                efficient and elegant solutions to complex challenges. I
                thrive in dynamic environments, deliver high-quality code on
                time, and adapt quickly to emerging technologies. My strong
                interpersonal skills and ability to bridge technical concepts
                with business objectives makes me a valuable team player. I am
                committed to continuous growth, embracing new technologies. I am an exceptional programmer,
                blending technical expertise, creative, and gives attention to
                detail to deliver outstanding results.
              </p3>
            </div>
          </div>
        </div>
      </div>
      <div className="download">
        <button onClick={dwnldcv} class="button">
          <i class="fi fi-sr-cloud-download-alt"></i>
          Download resume
        </button>
      </div>
    </section>
  );
}
