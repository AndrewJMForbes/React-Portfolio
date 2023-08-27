import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Reference from "./pages/Reference";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import family1 from "../src/images/FamilyNew.jpg";
import family2 from "../src/images/family.jpg";



function App() {
  return (
    <div>
<div className="bodyContainer">
<div className="about">
    <p>
      My name is Andrew Forbes I am a proud Husband and father. I've been
      working on websites for about 10 years off and on but 5 months ago I started a coding Bootcamp through Northwestern University in order to find a job as a Frontend/Fullstack web developer. I've been
      working a manual labor job for more than half my life but when it
      comes to expressing my creative side I try and open up to new
      experiences. I've dabbled in things from altering Magic the
      Gathering playing cards to drawing anime characters on shoes for my
      wife and I and I DO NOT consider myself a professional in either of
      those areas but I have done it for fun. I've made vinyl decals,
      shirts with heat transfer vinyl, and even dabbled in sublimation
      printing. This page is aimed towards what I can do as a Web
      Developer so I thought I would add some of my other creative hobbies
      using HTML, CSS, and Javascript while also using ReactJS to showcase what I can do on a webpage. I just
      love to express myself creatively regardless of the outlet and I
      love learning new things that's one of the main reasons I'm pursuing
      Web development because it is an ever changing environment.
    </p>
  </div>
  <img className="family2" src={family2} alt="something" />
    <Router>
      <div className="App">
        <Header />
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Reference">Reference Tools</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <h1 className="page-title">About Me</h1>

<div className="aboutContainer">
  <img className="family" src={family1} alt="something" />

  
</div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/Reference" element={<Reference />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/Resume" element={<Resume />} />
      </Routes>
     
    </Router>

    </div>
    </div>
  );
}

export default App;
