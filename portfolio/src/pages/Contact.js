import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/LinkedIn_logo_initials.png";
import email from "../images/gmail.png";
import indeed from "../images/indeed.png";
import twitter from "../images/twitter.png";
function Contact() {
  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <div className="contactContainer">
        <div className="contactLinks">
          <Link to="https://github.com/AndrewJMForbes">
            <img className="github" src={github} alt="something" />
            My GitHub Profile
          </Link>
          <Link to="https://www.linkedin.com/in/andrew-forbes-a94a92265/">
            <img className="linkedin" src={linkedin} alt="something" />
            My Linkedin Profile
          </Link>
          <Link to="https://profile.indeed.com/">
            <img className="indeed" src={indeed} alt="something" />
            My Indeed Profile
          </Link>
          <Link to="https://twitter.com/Sebr0f">
            <img className="twitter" src={twitter} alt="something" />
            My Twitter Profile
          </Link>
          <a href="mailto:vudo8585@gmail.com">
            <img className="email" src={email} alt="something" />
            Email me
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
