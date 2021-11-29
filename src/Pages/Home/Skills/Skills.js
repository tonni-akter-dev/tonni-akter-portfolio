import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid pb-5 p-5" data-aos="fade-up">
      <h3
        className="color"
        style={{
          textAlign: "left",
          borderBottom: "3px solid white",
          width: "200px",
        }}
      >
        My Skills
      </h3>
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex justify-content-evenly">
            <p style={{ paddingRight: "420px", paddingTop: "10px" }}>
              Html & CSS3
            </p>
            <span style={{ marginRight: "20px" }}>90%</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "95%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly">
            <p style={{ paddingRight: "470px", paddingTop: "10px" }}>
              Bootstrap
            </p>
            <span style={{ marginRight: "20px" }}>95%</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "95%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <p style={{ paddingRight: "500px" }}> Tailwind</p>
            <span>70%</span>
          </div>{" "}
          <div className="progress " style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <p style={{ paddingRight: "500px" }}>MongoDB</p>
            <span>70%</span>
          </div>{" "}
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-right">
          <div className="d-flex justify-content-evenly">
            <p style={{ paddingRight: "470px", paddingTop: "10px" }}>
              Javascript
            </p>
            <span style={{ marginRight: "20px" }}>75%</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "80%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <p style={{ paddingRight: "470px" }}>React JS</p>
            <span>80%</span>
          </div>{" "}
          <div className="progress " style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "85%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly">
            <p style={{ paddingRight: "450px", paddingTop: "10px" }}>Node JS</p>
            <span style={{ marginRight: "20px" }}>80%</span>
          </div>
          <div className="progress" style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "95%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <p style={{ paddingRight: "450px" }}>Express JS</p>
            <span>85%</span>
          </div>{" "}
          <div className="progress " style={{ height: "8px" }}>
            <div
              className="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "90%", backgroundColor: "#EF620B" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
