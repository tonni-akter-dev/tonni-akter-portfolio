import React from "react";
import "./Banner.css";
// import Typewriter from "typewriter-effect/dist/core";
const Banner = () => {
  // var app = document.getElementById("app");
  // var typewriter = new Typewriter(app, {
  //   loop: true,
  //   delay: 75,
  // });
  // typewriter
  //   .pauseFor(1000)
  //   .typeString("<h2>Hi, I am <br/> Web Developer</h2>")
  //   .pauseFor(300)
  //   .deleteChars(13)
  //   .typeString("<h2> MERN Stack Developer</h2>")
  //   .pauseFor(1000)
  //   .start();
  return (
    <div className="banner">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="row pt-5 ">
        <div
          className="col-lg-6 mt-5"
          data-aos-anchor-placement="center-center"
        >
          {/* <div id="app" style={{ height: "160px" }}></div> */}
          <h4 class="wordCarousel">
            <span
              class="wordCarousel1 heading"
              style={{ marginRight: "-230px", marginBottom: "10px" }}
            >
              Hi I Am a ,
            </span>
            <div>
              <ul class="flip4">
                <li>Graphics Designer</li>
                <li>Web Developer</li>
              </ul>
            </div>
          </h4>{" "}
          <br />
          <a
            className="btn rounded-pill"
            style={{
              backgroundColor: "#EF620B",
              color: "white",
              width: "220px",
            }}
            href="https://drive.google.com/file/d/1cYQERMgzBRU10WesUT9XCkrFGMD86i6e/view?fbclid=IwAR2n_CZxrBnJoG3WVDP9MwzVeOF2EBKxllnyPYtTtdSPKT9r5kshGUy70kM"
            download
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
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
      <hr style={{ color: "white", width: "800px", margin: "0 auto" }} />
    </div>
  );
};

export default Banner;
