import github from "../images/github.png";
import linkedin from "../images/LinkedIn_logo_initials.png";
import email from "../images/gmail.png";
import indeed from "../images/indeed.png";
import twitter from "../images/twitter.png";
import contactRing from "../images/bluering.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a href="https://github.com/AndrewJMForbes"><img className="contact" src={github} alt="something" /><img  className="contactRing" src={contactRing} alt="something" /></a>
        
        <a href="https://www.linkedin.com/in/andrew-forbes-a94a92265/"><img className="contact" src={linkedin} alt="something" /><img  className="contactRing" src={contactRing} alt="something" /></a>
        
        <a href="https://profile.indeed.com/"><img className="contact" src={indeed} alt="something" /><img  className="contactRing" src={contactRing} alt="something" /></a>
        
        <a href="https://twitter.com/Sebr0f"><img className="contact" src={twitter} alt="something" /><img  className="contactRing" src={contactRing} alt="something" /></a>
        
        <a href="mailto:vudo8585@gmail.com"><img className="contact" src={email} alt="something" /><img  className="contactRing" src={contactRing} alt="something" /></a>
        
      </div>
    </div>
  )
}

export default Footer;