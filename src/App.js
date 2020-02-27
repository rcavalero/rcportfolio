import React from 'react';
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Container from 'react-bootstrap/Container'
import './App.css';

function App() {
  return (
    <div >
      <Container>
      <NavBar />
      <div className="container my-3">
        <Container>
        <AboutMe />
        <Projects />
        </Container>
              </div>
      </Container>
          </div>
  );
}

export default App;
