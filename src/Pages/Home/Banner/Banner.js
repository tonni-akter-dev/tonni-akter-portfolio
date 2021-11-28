import React from "react";
import "./Banner.css";
import Typewriter from "typewriter-effect/dist/core";
const Banner = () => {
  var app = document.getElementById("app");
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });
  typewriter
    .pauseFor(1000)
    .typeString("<h2>Hi, I am <br/> Web Developer</h2>")
    .pauseFor(300)
    .deleteChars(13)
    .typeString("<h2> MERN Stack Developer</h2>")
    .pauseFor(1000)
    .start();
  return (
    <div>
      <div className="row pt-5 " >
        <div className="col-lg-6">
          <div id="app" style={{ height: "160px" }}></div>
          <button
            className="btn rounded-pill"
            style={{
              backgroundColor: "#EF620B",
              color: "white",
              width: "220px",
              height: "55px",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="Tonni-Akter-Resume.pdf"
              download="proposed_file_name"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="col-lg-6">
          <img
          className="mb-3"
            style={{
              borderRadius: "70px",
              height: "350px",
              borderRight: "3px solid #EF620B",
              borderBottom: "3px solid #EF620B",
            }}
            src="https://i.ibb.co/17Wqt0x/257725618-409929277490439-4137300804144172971-n-removebg-preview.png"
            alt="profile"
          />
        </div>
      </div>
      <hr style={{color:"white",width:"800px",margin:"0 auto"}}/>
    </div>
  );
};

export default Banner;
