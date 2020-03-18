import React from 'react';
import Container from "./components/Container"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import './App.css';

function App() {
  return (
    <div >

      <NavBar />
      <Container>
      {/* <div className="container my-3"> */}
        <AboutMe />
        <Projects />
      {/* </div> */}
      </Container>

    </div>
  );
}

export default App;
