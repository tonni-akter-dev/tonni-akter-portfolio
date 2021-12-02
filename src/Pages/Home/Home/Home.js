import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import "./Home.css";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Link } from "react-router-dom";
import Project from "../../Project/Project";
const Home = () => {
  const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/tonni-akter-dev/Api-hot-onion/main/projectsData.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProjects(data));
  // }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundColor: "#02022962",
        color: "white",
        overflow: "hidden",
      }}
    >
      <NavBar />
      <Banner />
      <About />
      {/* <!--projects--> */}
      <Project/>
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
