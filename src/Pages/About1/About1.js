import React from "react";

import NavBar from "../NavBar/NavBar";
const About1 = () => {
  return (
    <>
      <NavBar />
      <div className="banner container">
    <div className="icon">
      <div className="row pt-5 pb-3">
        <div className="col-lg-6">
          <img
            style={{ width: "350px" }}
            className=" pb-5"
            src="https://i.ibb.co/N2n21PY/graph-2-3.png"
            alt=""
          />
        </div>
        <div
          className="col-lg-6 p-3 "
          style={{ textAlign: "justify" }}
          data-aos="fade-up"
        >
          <h5 className="color">ABOUT ME</h5>
          <h4 style={{ borderBottom: "2px solid /EF620B" }}>
            I am Tonni Akter
          </h4>
          <p>
            I'm a passionate web designer and developer.I believe in hard
            work.I am doing my work honestly.I like to learn different
            things and want to build a foundation of my knowledge
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <span>
                <span className="color ">--Name:</span> Tonni AKter
              </span>{" "}
              <br />
              <span>
                <span className="color">--Phone:</span>(+88)01825332448
              </span>
            </div>
            <div>
              <span>
                <span className="color">--Age:</span> 22
              </span>{" "}
              <br />
              <span>
                <span className="color">--Address:</span> Dhaka,Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






    </>
  );
};

export default About1;
