import React from 'react';
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div >
      <NavBar />
      <div className="container my-3">
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
