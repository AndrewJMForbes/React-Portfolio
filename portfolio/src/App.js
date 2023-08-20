import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Img /> */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;
