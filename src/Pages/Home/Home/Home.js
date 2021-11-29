import React from "react";
import NavBar from "../../NavBar/NavBar";
// import Projects from "../../Projects/Projects";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", overflow: "hidden" }}
    >
      <NavBar />
      <Banner />
      <About />
      <Skills />
      {/* <Projects/> */}
      <h3
        className="color"
        style={{
          textAlign: "left",
          borderBottom: "3px solid white",
          width: "200px",
          marginLeft: "50px",
        }}
      >
        My Projects
      </h3>
      <div class="team-grid">
        <div class="container">
          <div class="row people d-flex justify-content-center">
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{
                  width: "100%",
                  backgroundImage: "url(https://i.ibb.co/FmYFqkm/travesia.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Travesia</h3>
                  <div class="social">
                    <a href="https://github.com/tonni-akter-dev/assignment-11-client-site">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="https://assignment-11-72aaf.web.app/">
                      <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{
                  width: "100%",
                  backgroundImage:
                    "url(https://i.ibb.co/zx9BWdL/flourish-2.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Flourish Pottery</h3>
                  <div class="social">
                    <a href="https://github.com/tonni-akter-dev/assignment-12-client-site">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="https://flourish-pottery.web.app/">
                      <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 item">
              <div
                class="box"
                style={{
                  width: "100%",
                  backgroundImage: "url(https://i.ibb.co/1rXYcFd/medicare.png)",
                }}
              >
                <div class="cover">
                  <h3 class="name">Medicare</h3>
                  <div class="social">
                    <a href="https://github.com/tonni-akter-dev/assignment-10">
                      <i class="fab fa-github"></i>
                    </a>
                    <a href="https://medicare-83639.web.app/">
                      <i class="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
