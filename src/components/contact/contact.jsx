import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/sairamavala/"
          className="contact linkedin"
          target={"blank"}
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span>Sairam Avala</span>
          </h2>
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=16475108856&text=Hi"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+1 647 510 8856</span>
          </h2>
        </a>

        <a href="mailto:sairamavula99@gmail.com" className="contact mail" target={"blank"}>
          <AiOutlineMail className="icon" />
          <h2>
            e-mail <span>sairamavula99@gmail.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
