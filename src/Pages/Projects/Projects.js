import React from "react";
import { Outlet } from "react-router";
import {Link } from "react-router-dom";
import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link
            className="nav-link active navDesign"
            aria-current="page"
            to="/projects/all"
          >
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navDesign" to="/projects/java">
            Javascript
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navDesign" to="/projects/react">
            React js
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navDesign" to="/projects/mernstack">
            Mern Stack
          </Link>
        </li>
       
      </ul>
      <Outlet />

    </div>
  );
};

export default Projects;
