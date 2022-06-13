import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <div className="social-links">
        <a href="https://www.instagram.com/sairam_616/" target={"blank"}>
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/daaaarling" target={"blank"}>
          {" "}
          <FaFacebookF className="social" />
        </a>

        <a href="https://twitter.com/sairamavula99" target={"blank"}>
          <FiTwitter className="social" />
        </a>

        <a href="https://github.com/sairam616" target={"blank"}>
          <TiSocialGithub className="social" />
        </a>
      </div>

      <h1>
        Thank You{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
    </div>
  );
}
export default Footer;
