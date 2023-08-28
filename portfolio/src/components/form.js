import { useState } from "react";


function ContactForm() {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
// const [textarea, setTextarea] = useState("");

const handleFormSubmit = (e) => {
  e.preventDefault();
  alert(`Thank you for your submission ${name}!
  Your email ${email} has been added! Thank you for your message!`)
  setName("");
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
}
  
//   return name === "name" ? setName(value) : email === "email" ?
//   setEmail(value) : textarea === "textarea" ? setTextarea(value) : setTextarea(value) 

// };
  return (
    <div className="formContainer">
      <form>
      <label className="name">Name</label>
      <input 
      type="text" 
      value={name}
      onChange={handleInputChange}
      placeholder="Enter your name"/>
      <label className="email">Email</label>
      <input 
      type="email" 
      value={email}
      // onChange={handleInputChange}
      placeholder="Enter your email"/>
      <label className="message">Message</label>
      <textarea 
      type="text"
      // value={textarea} 
      // onChange={handleInputChange}
      placeholder="Enter your message here"
      ></textarea>
     <input type="submit" onClick={handleFormSubmit} className="submit"/>

     </form>
    </div>
  )
}
export default ContactForm;