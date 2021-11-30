import React from "react";
import "./Progress.css";
const Progress = () => {
  return (
       <div class="row">
                <div class="col-12">
                    <h3
                        class="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                        My Skills</h3>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p90">
                        <span>90%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">html</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p85">
                        <span>85%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">javascript</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p80">
                        <span>80%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">css</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p80">
                        <span>80%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">react</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p60">
                        <span>60%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-3 mt-sm-4">MONGODB</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p50">
                        <span>50%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">node</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p40">
                        <span>40%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">jquery</h6>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-sm-5">
                    <div class="c100 p30">
                        <span>30%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">BOOTSTRAP</h6>
                </div>

            </div>
            // <!-- Skills Ends -->
  );
};

export default Progress;






    //  <div className="row">
    //     <div className="col-lg-6">
    //       <div className="d-flex justify-content-evenly">
    //         <p style={{ paddingRight: "420px", paddingTop: "10px" }}>
    //           Html & CSS3
    //         </p>
    //         <span style={{ marginRight: "20px" }}>90%</span>
    //       </div>
    //       <div className="progress" style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "95%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly">
    //         <p style={{ paddingRight: "470px", paddingTop: "10px" }}>
    //           Bootstrap
    //         </p>
    //         <span style={{ marginRight: "20px" }}>95%</span>
    //       </div>
    //       <div className="progress" style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "95%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly mt-3">
    //         <p style={{ paddingRight: "500px" }}> Tailwind</p>
    //         <span>70%</span>
    //       </div>{" "}
    //       <div className="progress " style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "90%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly mt-3">
    //         <p style={{ paddingRight: "500px" }}>MongoDB</p>
    //         <span>70%</span>
    //       </div>{" "}
    //       <div className="progress" style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "90%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //     </div>
    //     <div className="col-lg-6" data-aos="fade-right">
    //       <div className="d-flex justify-content-evenly">
    //         <p style={{ paddingRight: "470px", paddingTop: "10px" }}>
    //           Javascript
    //         </p>
    //         <span style={{ marginRight: "20px" }}>75%</span>
    //       </div>
    //       <div className="progress" style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "80%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly mt-3">
    //         <p style={{ paddingRight: "470px" }}>React JS</p>
    //         <span>80%</span>
    //       </div>{" "}
    //       <div className="progress " style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "85%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly">
    //         <p style={{ paddingRight: "450px", paddingTop: "10px" }}>Node JS</p>
    //         <span style={{ marginRight: "20px" }}>80%</span>
    //       </div>
    //       <div className="progress" style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "95%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //       <div className="d-flex justify-content-evenly mt-3">
    //         <p style={{ paddingRight: "450px" }}>Express JS</p>
    //         <span>85%</span>
    //       </div>{" "}
    //       <div className="progress " style={{ height: "8px" }}>
    //         <div
    //           className="progress-bar progress-bar-striped"
    //           role="progressbar"
    //           style={{ width: "90%", backgroundColor: "#EF620B" }}
    //           aria-valuenow="25"
    //           aria-valuemin="0"
    //           aria-valuemax="100"
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
