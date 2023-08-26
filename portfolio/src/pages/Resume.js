import github from "../images/github.png";


function Resume(props) {
  return (
    <div className="box">
      <h1 className="page-title"><a className="resumeLink" href="https://drive.google.com/file/d/1EglTyyTMHu1oUShwUGEr2kGzdOLTxut9/view" download="Resume.pdf">Download my resume Here! 📄</a></h1>

      <div className="resumeContainer">
        <div className="basicInfo">
          <h1 className="resumeName">Andrew Forbes</h1>
          <h3>Full Stack Web Developer</h3>
          <a href="mailto:vudo8585@gmail.com"><h5 >✉️vudo8585@gmail.com</h5></a>
          <h5><span className="phone">📞</span>(217)480-0408</h5>
          <h5><span className="location">📍</span>Champaign, IL</h5>
          <a href="https://github.com/AndrewJMForbes"><h5><img className="resumeContact" src={github} alt="something" />GitHub</h5></a>
          </div>
          <div className="careerEd">
            <h2>Career Summary</h2>
            <p>Current Career: I'm a full time union carpenter who specializes in flooring. I'm versed as a Fullstack Developer but I excel with UI/UX.</p>
            <h2>Career Objective</h2>
            <p>My career objective is to find a job in the web development field. I would like to work for a company that I can grow with and learn from. I would like to work with a team of developers that I can learn from and also help teach. I am willing to do freelance work in order to grow my portfolio in order to show off my development skills.</p>

            <h2>Education</h2>
            <p>I have a certficate of completion from The University of Northwestern Fullstack Coding Bootcamp. I am primarily self taught with the exception of the Bootcamp I have also recieved help from collegues in the web development field.</p>
            <h2>Experience</h2>
            <p>I am currently Looking for a job in the Web Developer/Design field.

              I currently haven't had any experience in a professional setting but I have worked on a few projects with a team of from my bootcamp cohort. I have also worked on a few projects of my own.
            </p>
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