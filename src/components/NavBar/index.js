import React from "react";
import Resume from "../../assets/documents/resumeRobertCavalero.pdf"
import "./style.css"


function Navbar() {
  return (

    //  <div className="container">
    <nav className="navbar fixed-top py-0">
      <div className="container">
        <div className="row w-100">
          <div className="col-sm-12 col-md-3 col-lg-4">
            <div
              className="container navCont h-100 pl-3 pr-0 flex-row navbar-nav justify-content-sm-center justify-content-md-start">
              <a className="nav-link pr-2" href="mailto:r.cavalero@comcast.net">Email</a>
              <a className="nav-link pl-2" href="tel:+12066013046" title="(206) 601-3046">Phone</a>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="container h-100 p-0 justify-content-center">
              <h4 className="navbar-text text-white mb-0">Robert Cavalero</h4>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div
              className="container navCont h-100 pr-3 flex-row navbar-nav justify-content-sm-center justify-content-md-end">
              <a className="nav-link pr-2" href="https://github.com/rcavalero" target="_blank">GitHub</a>
              <a className="nav-link p-2" href="https://www.linkedin.com/in/robert-cavalero" target="_blank">LinkedIn</a>
              <a className="nav-link pl-2" href={Resume} target="_blank">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    // </div>
  );
}

export default Navbar;
