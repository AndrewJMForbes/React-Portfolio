import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
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
          <Link to="/Home">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Reference">Reference Tools</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Contact">Contact</Link>

        </nav>
      </div>
    <Switch>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Reference" element={<Reference />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Resume" element={<Resume />} />
      </Switch>
    </Router>

    </div>
    </div>
  );
}

export default App;
