import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Reference from "./pages/Reference";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
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
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Reference">Reference Tools</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Contact">Contact</Link>

        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Reference" element={<Reference />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
     
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
