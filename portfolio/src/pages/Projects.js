import React from "react";
import Screenshot1 from "../images/1stportfolio.png";
import Screenshot2 from "../images/moviemixers.png";
import Screenshot3 from "../images/corkboardherokusite.png";
import Screenshot4 from "../images/comingsoon.jpg";
import Screenshot5 from "../images/ecommerce.png";
import Screenshot6 from "../images/notetaker.png";
import Screenshot7 from "../images/employeetracker.png";
import Screenshot8 from "../images/dayplanner.png";
import Screenshot9 from "../images/mrsforbes.png";
import Screenshot10 from "../images/sc-bconsult.png";



import { Link } from "react-router-dom"


function Projects() {
  return (
    <div> 

      <h2>Take a look at the sites I've worked on! 👀</h2>
    <div className="mainContainer">
      <div className="projectContainer">  
      <a className="sites" href="https://andrewjmforbes.github.io/My-Portfolio-/">My Very First Web Portfolio </a>
      <Link to="https://andrewjmforbes.github.io/My-Portfolio-/"><img className="demoPhoto" src={Screenshot1} alt='something'/></Link>
    </div>
    <div className="projectContainer">  
      <a className="sites" href=" https://andrewjmforbes.github.io/Daily-planner/">Work Day Scheduler using Javascript</a>
      <Link to=" https://andrewjmforbes.github.io/Daily-planner/"><img className="demoPhoto" src={Screenshot8} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="https://project01team02.github.io/movie-mixers/">Movie Mixers</a>
      <Link to="https://github.com/Project01Team02/movie-mixers"><img className="demoPhoto" src={Screenshot2} alt='something'/></Link>
      </div>

      <div className="projectContainer">  
      <a className="sites" href="https://corkboard-1d9df6d8e0e1.herokuapp.com/">Cork Board</a>
      <Link to="https://corkboard-1d9df6d8e0e1.herokuapp.com/"><img className="demoPhoto" href="" src={Screenshot3} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="#">Mrs.Forbes' Room (Future Project)</a>
      <Link to="#"><img className="demoPhoto" src={Screenshot9} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="#">SC-B Consulting (Future Project)</a>
      <Link to="#"><img className="demoPhoto" src={Screenshot10} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="#">RJD Machining LLC (Future Project)</a>
      <Link to="#"><img className="demoPhoto" src={Screenshot4} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="#">Future Project</a>
      <Link to="#"><img className="demoPhoto" src={Screenshot4} alt='something'/></Link>
      </div>
      <div className="projectContainer">  
      <a className="sites" href="#">Future Project</a>
      <Link to="#"><img className="demoPhoto" src={Screenshot4} alt='something'/></Link>
      </div>
    </div>
    <h1 className="page-title">Videos</h1>

    <div className="mainContainer">
    <div className="videoContainer">  
      <a className="sites" href="https://drive.google.com/file/d/15RxVI3cqOJfld5btsilTrPpM1H6MQFy-/view">E-commerce app using Object-Relational Mapping</a>
      <Link to="https://drive.google.com/file/d/15RxVI3cqOJfld5btsilTrPpM1H6MQFy-/view"><img className="demoPhoto" src={Screenshot5} alt='something'/></Link>
      </div>
      <div className="videoContainer">  
      <a className="sites" href="https://drive.google.com/file/d/1rlIscZa3ORFmZWW-1OU5NzP5m_qnw376/view">Note Taking App using Express.js</a>
      <Link to="https://drive.google.com/file/d/1rlIscZa3ORFmZWW-1OU5NzP5m_qnw376/view"><img className="demoPhoto" src={Screenshot6} alt='something'/></Link>
      </div>
      <div className="videoContainer">  
      <a className="sites" href="https://drive.google.com/file/d/1d4LGeu0KiF9y7bs6KzWzN0TlSyYaHcWP/view">Employee Tracker using MySQL</a>
      <Link to="https://drive.google.com/file/d/1d4LGeu0KiF9y7bs6KzWzN0TlSyYaHcWP/view"><img className="demoPhoto" src={Screenshot7} alt='something'/></Link>
      </div>
   
    </div>
    </div>
  )
}
export default Projects;