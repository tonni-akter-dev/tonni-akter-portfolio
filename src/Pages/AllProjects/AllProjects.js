import React from "react";
import "./AllProjects.css";
const AllProjects = () => {
  return (
    <div>
      <h2>All Projects</h2>
      <div class="team-grid">
        <div class="container">
          <div class="row people d-flex justify-content-center">
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{width:"100%",
                  backgroundImage: "url(https://i.ibb.co/FmYFqkm/travesia.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Travesia</h3>
                  <p>Technologies</p>
                  <span></span>
                  <div class="social">
                    <a href="https://github.com/tonni-akter-dev">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{   width:"100%",
                  backgroundImage: "url(https://i.ibb.co/zx9BWdL/flourish-2.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Flourish Pottery</h3>
                  <p class="title">Cricker</p>
                  <div class="social">
                  <a href="https://github.com/tonni-akter-dev">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{
                    width:"100%",
                  backgroundImage: "url(https://i.ibb.co/1rXYcFd/medicare.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Medicare</h3>
                  <p class="title">Business Analyst</p>
                  <div class="social">
                  <a href="https://github.com/tonni-akter-dev">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="/">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
