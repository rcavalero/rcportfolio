import React from "react";
import "./style.css"


function Projects() {
  return (
    <div className="container pt-3">
    <div className="row row-cols-1 row-cols-md-3">
      <div className="col mb-4">
        <div className="card">
          <a href="https://rcavalero.github.io/dashboard/" target="_blank"><img src={require("../../assets/images/dashboard.png")}
              className="card-img-top" alt="..."></img></a>
          <h5 className="card-title p-2 mb-0">My Dash <span>
              <a href="https://github.com/rcavalero/dashboard/" target="_blank">
                <i className="fab fa-github"></i></a></span></h5>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <a href="https://rcavalero.github.io/dailytasks/" target="_blank"><img src={require("../../assets/images/dailyTasks.png")}
              className="card-img-top" alt="My Dash"></img></a>
          <h5 className="card-title p-2 mb-0">Daily Task Schedule <span>
              <a href="https://github.com/rcavalero/dailytasks/" target="_blank">
                <i className="fab fa-github"></i></a></span></h5>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <a href="https://webgen2020.herokuapp.com/" target="_blank"><img src={require("../../assets/images/webgen.PNG")}
              className="card-img-top" alt="..."></img></a>
          <h5 className="card-title p-2 mb-0">WebGen  <span>
              <a href="https://github.com/rafaykhawar09/WebGen" target="_blank">
                <i className="fab fa-github"></i></a></span></h5>
        </div>
      </div>
    </div>
  </div>


  );
}

export default Projects;
