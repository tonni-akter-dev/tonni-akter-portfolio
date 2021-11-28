import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container">
      <div className="row mt-5 pb-5">
        <div className="col-lg-6">
          <img style={{width:"350px"}} className=" pb-5" src="https://i.ibb.co/N2n21PY/graph-2-3.png" alt="" />
        </div>
        <div className="col-lg-6 pt-3" style={{textAlign:"justify"}}>
          <h5 className="color">ABOUT ME</h5>
          <h4 style={{borderBottom:"2px solid #EF620B"}}>I am Tonni Akter</h4>
          <p>
             I'm a passionate web designer and developer.I
            believe in hard work.I am doing my work honestly.I like to learn
            different things and want to build a foundation of my knowledge
          </p>
          <div className="d-flex justify-content-between">
            <div className="">
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
  );
};

export default About;
