import React from "react";
import Container from 'react-bootstrap/Container'
import "./style.css"


function AboutMe() {
  return (
<Container>
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
                    <p className="card-text text-justify">I live in Seattle, WA and am currently enrolled in a Full-Stack
                      Web Development Boot Camp offered by the University of Washington.
                      As a web-developer my plan is to leverage my past experience in operations and business processing
                      to create/modify web applications that help
                      solve business problems and increase efficiency for the users. <br /> In my spare time I enjoy golf,
                      watching sports and playing card games.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
  );
}

export default AboutMe;
