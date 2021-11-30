import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../NavBar/NavBar";
import "./ProjectDetails.css";
const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState({});
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/tonni-akter-dev/Api-hot-onion/main/projectsData.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const findData = data.find((project) => project.id == parseInt(id));
        if (findData) {
          setProjects(findData);
        }
      });
  }, [id]);
  return (
    <div>
      <NavBar />
      <div className="row p-5 container">
        <div className="col-lg-6 col-sm-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={projects.img1} style={{ height: "500px" }} alt="" />
              </div>
              <div class="carousel-item">
                <img src={projects.img2} style={{ height: "500px" }} alt="" />
              </div>
              <div class="carousel-item">
                <img src={projects.img3} style={{ height: "500px" }} alt="" />
              </div>
              {projects.img4 ? (
                <div class="carousel-item">
                  <img src={projects.img4} style={{ height: "500px" }} alt="" />
                </div>
              ) : (
                <div class="carousel-item">
                  <img src={projects.img1} style={{ height: "500px" }} alt="" />
                </div>
              )}
              {projects.img5 ? (
                <div class="carousel-item">
                  <img src={projects.img5} style={{ height: "500px" }} alt="" />
                </div>
              ) : (
                <div class="carousel-item">
                  <img src={projects.img1} style={{ height: "500px" }} alt="" />
                </div>
              )}
              {projects.img6 ? (
                <div class="carousel-item">
                  <img src={projects.img6} style={{ height: "500px" }} alt="" />
                </div>
              ) : (
                <div class="carousel-item">
                  <img src={projects.img1} style={{ height: "500px" }} alt="" />
                </div>
              )}
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="col-lg-6 col-sm-12 mt-5">
          <h2
            className=""
            style={{ borderBottom: "2px solid #EF620B", textAlign: "left" }}
          >
            {projects.title}
          </h2>
          <p style={{ textAlign: "left" }}>{projects.details}</p>
          <div className="d-flex ">
            <div class="container1 me-5">
              <a href={projects.clientcode} target="_blank" class="btn1 a">
                View Client Code
              </a>
            </div>{" "}
            <br />
            {/* <div class="container1 me-5">
              <a href={projects.clientcode} target="_blank" class="btn1 a">
                View server Code
              </a>
            </div>{" "}
            <br /> */}
            <div class="container1">
              <a href={projects.livesite} target="_blank" class="btn1 a">
                View Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
