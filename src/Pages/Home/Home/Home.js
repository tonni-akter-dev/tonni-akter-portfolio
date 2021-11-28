import React from "react";
import NavBar from "../../NavBar/NavBar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
const Home = () => {
  return (
    <div style={{ backgroundColor: "black" ,color:"white",overflow:"hidden"}}>
      <NavBar />
      <Banner/>
      <About/>
      <Skills/>
      <Services/>
    </div>
  );
};

export default Home;
