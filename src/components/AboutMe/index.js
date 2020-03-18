import React from "react";
// import Container from 'react-bootstrap/Container'
import "./style.css"


function AboutMe() {
  return (
      <div className="container aboutMe w-75 py-3">
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="row no-gutters align-items-center">
                <div className="col-xs-12 col-md-5 col-lg-4 h-100">
                  <img src= {require("../../assets/images/rcavalero.jpg")} className="card-img myImg" alt="Robert Cavalero"></img>
                </div>  
                <div className="col-xs-12 col-md-7 col-lg-8">
                  <div className="card-body">
                    <p className="card-text text-justify">Full-Stack Web Developer with extensive insurance business systems operations and analysis experience.  Certified in Full-Stack web development from the University of Washington.  Proven ability to solve problems and increase efficiency for the user experience.  Bringing extensive knowledge of front office business experience to the web development process that includes configuring Agency Management Systems, managing databases, writing SQL based reports, managing business processes and creating advanced level Excel spreadsheets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutMe;
