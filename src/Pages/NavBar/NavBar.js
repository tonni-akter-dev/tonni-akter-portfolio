import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="banner">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Tonni Akter
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  <button class="button type1">Home</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  <button class="button type1">About</button>
                </Link>
              </li>
          
              <li className="nav-item">
                <Link className="nav-link active" to="/blog">
                  <button class="button type1">Blog</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  <button class="button type1">Projects</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  <button class="button type1"> Contact me</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
