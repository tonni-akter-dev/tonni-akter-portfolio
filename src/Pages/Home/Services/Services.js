import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="banner">
      <div  style={{paddingTop:"100px"}}>
        <h4>MY SERVICES</h4>
      </div>
      <div className="py-5 service-1">
        <div className="container">
          {/* <!-- Row  --> */}
          <div className="row" >
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service1-box box2"  data-aos="fade-right">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-pen color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">CREATIVE DESIGN</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wrap-service1-box"  data-aos="fade-left">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-desktop color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">USER INTERFACE</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 wrap-service1-box"  data-aos="fade-right">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-toolbox color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">USER EXPERIENCE</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service1-box"  data-aos="fade-left">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-code color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">CLEAN CODE</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 wrap-service1-box"  data-aos="fade-right">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fa fa-support color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">FAST SUPPORT</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wrap-service1-box"  data-aos="fade-left">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fab fa-react color fa-2x"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">REACT JS</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our
                    customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
