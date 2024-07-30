import React from "react";
import "./About.css";
import skillIcons from "./skill-icons";

function About() {
  return (
    <>
      <div className="About-container">
        <h1>About Me</h1>
        <div className="about">
          <p1>
            Fast-paced learner and results-oriented, with a strong grasp of the
            MERN stack Developer. Proven ability to quickly acquire new skills
            and apply them to build high-quality web applications. Eager to
            contribute to a collaborative team environment and continuously
            improve my development expertise.
          </p1>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {skillIcons.map((skill, index) => (
              <div className="skill-item" key={index}>
                <img
                  src={skill.src}
                  alt={skill.name}
                  style={{ width: 40, height: 40, margin: 5 }}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
