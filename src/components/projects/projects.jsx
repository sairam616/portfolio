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
            An E-Commerce Website to shop for your favorite glasses, lenses, and sunglasses, and to track your past and present orders. One can book appointments,
            check the location, and contact the shop owner with their queries. The website owners have special admin login to manage complete website.
          </h4>

          <a href="https://github.com/sairam616/client-capstone" className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">E-Commerce Website</h1>
          <h3 className="position">(Mongo,Express,React,Node)</h3>
          <h4 className="about">
            An E-commerce website to shop for sports accessories. One can keep track of their past and present orders, can see their profile for orders summary by logging in.
          </h4>

          <a href="https://team-callback-sportstore.herokuapp.com" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">The Food App</h1>
          <h3 className="position">(Windows forms using C#.Net,SqlServer)</h3>
          <h4 className="about">
            This is a food delivery app, where one can order food and beverages, check the total and confirm the payment. The order summary is displayed at the end of the process.
          </h4>

          <a href="https://github.com/sairam616/theFoodApp" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-4">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Car Share</h1>
          <h3 className="position">(Android Studio, Java, Google Firebase)</h3>
          <h4 className="about">
            This application will provide access to all kinds of cars. The user will be allowed to book a car for a round trip by the hour or the day and pay only for the time they have booked for.
          </h4>

          <a href="https://github.com/sairam616/carshare-androidproj" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-5">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">SHELFIE</h1>
          <h3 className="position">(XCode,SwiftUI,Google Firebase)</h3>
          <h4 className="about">
            Shelfie is a Board Game Collection app for iOS. Build your virtual collection with stats in moments just by taking a photo of your board game shelf.
          </h4>

          <a href="https://github.com/sairam616/shelfie" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-6">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Anime Details-IOS App</h1>
          <h3 className="position">(Storyboard,CoreData,API)</h3>
          <h4 className="about">
            The ANIME Details are retrieved from an api and displayed in a User Friendly interface. The user can add their favorite anime to their list and keep track of the live information of ranking, releases, no.of episodes and latest anime etc
          </h4>

          <a href="https://github.com/sairam616/animelistfinal" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

      <div className="project project-7">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">TCS Interactive</h1>
          <h3 className="position">Full-Stack Developer(Html,Css,Javascript,Sql,SqlServer)</h3>
          <h4 className="about">
            Developed Responsive Fitness Web Application for TCS INTERACTIVE where users and trainers can contact each other for appointments. Developed dashboards for capturing Customer Information, program, and booking Information and to capture the Trainer’s Location, Accessibility, and Hours of Operation details.
          </h4>

          <a href="https://www.tcs.com/" target={"_blank"} className="link-project">
            <span>Link</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default projects;
