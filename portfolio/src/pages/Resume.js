import github from "../images/github.png";


function Resume() {
  return (
    <div>
      <h1 className="page-title">Resume</h1>
      <div className="resumeContainer">
        <div className="basicInfo">
          <h1 className="resumeName">Andrew Forbes</h1>
          <h3>Full Stack Web Developer</h3>
          <a href="mailto:vudo8585@gmail.com"><h5 >✉️vudo8585@gmail.com</h5></a>
          <h5><span className="phone">📞</span>(217)480-0408</h5>
          <h5><span className="location">📍</span>Champaign, IL</h5>
          <a href="https://github.com/AndrewJMForbes"><h5><img className="resumeContact" src={github} alt="something" />GitHub</h5></a>
          </div>
          <div className="resume">
          <h2>Technical Skills</h2>
          <h3>Front End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Materialize</li>
            <li>Responsive Design</li>
            <li>Mobile-First Design</li>
            </ul>  
            <h3>Back End</h3>
            <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
            <li>JSON</li>
            <li>Web APIs</li>
            <li>Authentication</li>
            <li>Progressive Web Applications</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
export default Resume;