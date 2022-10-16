import './home.css';
import img from '../props/imgmain.png';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='Display Pic' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          A software developer with 3+ years of Hands-On experience in analysis, design, coding, development, and implementation of various web, mobile, windows, and console-based applications using different technologies and programming languages. Seeking to use proven skills and looking for an opportunity to further develop my knowledge in all aspects of software programming.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
