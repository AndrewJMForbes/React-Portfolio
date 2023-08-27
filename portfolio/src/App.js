import "./App.css";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Reference from "./pages/Reference";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";


function App() {
  return (
    <div>
<div className="bodyContainer">
    <Router>
      <div className="App">
        <Header />
        <nav className="nav-links">
          <Link to="/">About Me</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Reference">Reference Tools</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Contact">Contact</Link>

        </nav>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
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
