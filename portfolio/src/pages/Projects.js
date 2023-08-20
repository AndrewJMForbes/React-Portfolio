import React from "react";
import Screenshot1 from "../images/Screenshot pre work site.png";
import Screenshot2 from "../images/moviemixers.png";
import Screenshot3 from "../images/corkboardherokusite.png";
import Screenshot4 from "../images/comingsoon.jpg";


function Projects() {
  return (
    <div> 
      <h1 className="page-title">Projects</h1>

    <div className="projectMainContainer">
      <div className="projectContainer1">  
      <a className="sites" href="https://forbes85.github.io/prework-study-guide/">My Bootcamp Prework Site 1</a>
      <img className="demoPhoto" src={Screenshot1} alt='something'/>
    </div>

      <div className="projectContainer2">  
      <a className="sites" href="https://github.com/Project01Team02/movie-mixers">Movie Mixers</a>
      <img className="demoPhoto" src={Screenshot2} alt='something'/>
      </div>

      <div className="projectContainer3">  
      <a className="sites" href="https://corkboard-1d9df6d8e0e1.herokuapp.com/">Cork Board</a>
      <img className="demoPhoto" href="" src={Screenshot3} alt='something'/>
      </div>

      <div className="projectContainer4">  
      <a className="sites" href="#">RJD Machining LLC</a>
      <img className="demoPhoto" src={Screenshot4} alt='something'/>
      </div>
      
      <div className="projectContainer4">  
      <a className="sites" href="#">Future Project</a>
      <img className="demoPhoto" src={Screenshot4} alt='something'/>
      </div>

      <div className="projectContainer4">  
      <a className="sites" href="#">Future Project</a>
      <img className="demoPhoto" src={Screenshot4} alt='something'/>
      </div>

    </div>
    </div>
    
  )
}
export default Projects;