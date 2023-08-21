// import { Link } from "react-router-dom";
// import github from "../images/github.png";
// import linkedin from "../images/LinkedIn_logo_initials.png";
// import email from "../images/gmail.png";
// import indeed from "../images/indeed.png";
// import twitter from "../images/twitter.png";
function Contact() {
  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <div className="contactContainer">
     <form>
      <label className="name">Name</label>
      <input type="text" placeholder="Enter your name"/>
      <label className="email">Email</label>
      <input type="email" placeholder="Enter your email"/>
      <label className="message">Messages</label>
      <textarea placeholder="Enter your message here"></textarea>
     </form>
      </div>
    </div>
  );
}
export default Contact;
