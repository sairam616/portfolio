import "./projects.css";

const projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Projects</h1>
      <div className="project project-1">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Brampton's Main Optician-Capstone</h1>
          <h3 className="position">Software Intern(Mongo,Express,React,Node)</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="#contact" className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">E-Commerce Website</h1>
          <h3 className="position">Mongo,Express,React,Node</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="https://team-callback-sportstore.herokuapp.com" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">The Food App</h1>
          <h3 className="position">Windows forms using C#.Net,SqlServer</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="https://github.com/sairam616/theFoodApp" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-4">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Car Share</h1>
          <h3 className="position">Android Studio, Java, Google Firebase</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="https://www.tcs.com/" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-5">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">SHELFIE</h1>
          <h3 className="position">XCode,SwiftUI,Google Firebase</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="https://www.tcs.com/" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-6">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">TCS Interactive</h1>
          <h3 className="position">Full-Stack Developer(Html,Css,Javascript,Sql,SqlServer)</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          {/* <a href="#contact" className="details-project">
            <span>Details</span>
          </a> */}
          <a href="https://www.tcs.com/" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default projects;
