import './App.css';
import React, { useState } from 'react';

// my components
import Home from './components/Home';
import About from './components/About'

// icons
import homeicon from './components/media/homeicon.png';
import abouticon from './components/media/about.png';
import projectsicon from './components/media/projects.png';
import contacticon from './components/media/contact.png';


function App() {
  const [page, setPage] = useState('about');

  function changePage(page) {
    setPage(page);
    console.log(page);
  }

  let content;
  if (page === 'home') {
    content = <Home />;
  } else if (page === 'about') {
    content = <About />;
  } else if (page === 'projects') {
    content = <h1>Projects</h1>;
  } else if (page === 'contact') {
    content = <h1>Contact</h1>;
  } else {
    content = <h1>404</h1>;
  }

  return (
    <>
    <div className="Nav">
      <img src={homeicon} onClick={ () => changePage("home")} style={{width: 40, height: 40, margin: 5}} alt="Home Icon" />
      <img src={abouticon} onClick={ () => changePage("about")} style={{width: 40, height: 40, margin: 5}} alt="Home Icon" />
      <img src={projectsicon} onClick={ () => changePage("projects")} style={{width: 40, height: 40, margin: 5}} alt="Home Icon" />
      <img src={contacticon} onClick={ () => changePage("contact")} style={{width: 40, height: 40, margin: 5}} alt="Home Icon" />
    </div>

    {content}


    </>
  );
}

export default App;
