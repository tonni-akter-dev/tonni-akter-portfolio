import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
const ReactProject = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/tonni-akter-dev/Api-hot-onion/main/react.json"
      )
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);
    return (
        <div>
              {/* <!--projects--> */}
      <div class="container-fluid banner">
      <div class="container">
        {/* <h3
          style={{
            textAlign: "left",
            borderBottom: "3px solid #EF620B",
            width: "200px",
            marginLeft: "50px",
          }}
        >
          My Projects
        </h3> */}
        <div class="row">
          {projects.map((project) => (
            <div class="col-sm-6 col-md-3 mb-5"  data-aos="fade-right">
              <div class="profile-card">
                <div class="profile-img">
                  <img
                    style={{ height: "400px" }}
                    src={project.img1}
                    alt="Team"
                  />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    {project.title} {project.id}
                  </h2>
                  <ul class="social-link">
                    <li>
                      {/* <a href="/"><button className="btn">View Details</button></a> */}
                      <Link
                        to={`/project/${project.id}`}
                        class="cta rounded-pill"
                      >
                        <span>Details</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
        </div>
    );
};

export default ReactProject;