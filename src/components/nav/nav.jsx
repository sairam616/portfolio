import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <GiSkills className="icon" />
      </a>
      <a href="#projects">
        <AiOutlineProject className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
