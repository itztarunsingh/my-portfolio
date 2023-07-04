import React from "react";

export default function Header() {
  return (
    <div class="header-content">
      <div class="home">
        <a href="#Home">
          <i class="fi fi-rr-home"></i> Home
        </a>
      </div>
      <div class="abouthead">
        <a href="#about">
          <i class="fi fi-rr-info"></i>About
        </a>
      </div>
      <div class="certificates">
        <a href="#certificates">
          <i class="fi fi-rr-badge"></i>Certificates
        </a>
      </div>
      <div class="find-me" id="find-me">
        <a href="#findme">
          <i class="fi fi-rr-search"></i>Find me
        </a>
      </div>
    </div>
  );
}
