import React from 'react';
import PropTypes from "prop-types";
// import { Link, Outlet } from 'react-router-dom';

export default function Navber(props) {
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to='/'>
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to='/'>
                Home
              </Link>  */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check form-switch text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
              htmlFor="flexRadioCheckedDisabled"
            > Dark Mode
            </label> 
          </div>
        </div>
      </div>
      
    </nav>
        {/* <Outlet/> */}
    
    </>
  );
}
Navber.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navber.defaultProps = {
  title: "Write your title here",
  aboutText: "Write your aboutText here",
};
