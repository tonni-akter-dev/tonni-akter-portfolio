import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './Pages/Home/Contact/ContactForm'
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Projects/Projects";
import AllProjects from "./Pages/AllProjects/AllProjects";
import ReactProjects from "./Pages/ReactProjects/ReactProjects";
import JavaProjects from './Pages/JavaProjects/JavaProjects';
import MernStack from './Pages/MernStack/MernStack';
import FullStack from './Pages/FullStack/FullStack';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import Blog from "./Pages/Blog/Blog";
import About1 from "./Pages/About1/About1";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "black", color: "white" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About1/>} />
          <Route path="project/:id" element={<ProjectDetails />}/>
          {/* nested router */}
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects/all" element={<AllProjects />}></Route>
            <Route path="/projects/react" element={<ReactProjects />}></Route>
            <Route path="/projects/java" element={<JavaProjects />}></Route>
            <Route path="/projects/mernstack" element={<MernStack />}></Route>
            <Route path="/projects/fullstack" element={<FullStack />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
