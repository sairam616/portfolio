import "./projects.css";

const projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">Projects</h1>

      <div className="project project-1">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">Capstone Project</h1>
          <h3 className="position">(Mongo,Express,React,Node)</h3>
          <h4 className="about">
            E-Commerce Website to shop for your favorite sunglasses, lenses, prescription glasses & to track your orders. You can book appointment for your eye checkup. Admin has instore sales information and can manage the products on shop page.
          </h4>

          <a href="https://github.com/sairam616/client-capstone" className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">E-Commerce Website</h1>
          <h3 className="position">(Mongo,Express,React,Node)</h3>
          <h3 className="about">
            E-commerce website to shop for sports accessories. One can keep track of all of orders, can see their profile, orders summary by logging in.
          </h3>

          <a href="https://team-callback-sportstore.herokuapp.com" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">The Food App</h1>
          <h3 className="position">(Windows forms using C#.Net,SqlServer)</h3>
          <h3 className="about">
            This is a food Ordering app, where one can order food and beverages, check the total and confirm the payment. The order summary is displayed at the end of the process. The user & food information is stored in the database.
          </h3>

          <a href="https://github.com/sairam616/theFoodApp" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>
      <div className="project project-3">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">Tax Calculator</h1>
          <h3 className="position">(c#, Data Structures and Design Patterns)</h3>
          <h3 className="about">
            Console-based application where tax is calculated based on location, price etc. (Singleton method, Factory method,
            Flyweight model, Strategy method, Decorator method, Stack, Array list, Sorted
            Set, HashMap, Dictionary)
          </h3>

          <a href="https://github.com/sairam616/TaxCalculator" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>
      <div className="project project-3">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">College Management System</h1>
          <h3 className="position">(.NET Core MVC, SQL Server)</h3>
          <h3 className="about">
            college management website where students, professors and admin can manage their work responsibilities like regestering to courses, grading students, giving reviews on proffessors etc.
          </h3>

          <a href="https://github.com/sairam616/CollegeManagementFinal" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-4">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">Car Share</h1>
          <h3 className="position">(Android Studio, Java, Google Firebase)</h3>
          <h3 className="about">
            This application will provide access to all kinds of cars. The user will be allowed to book a car for a round trip by the hour or the day and pay only for the time they have booked for. The User and car information is stored in google firebase privately.
          </h3>

          <a href="https://github.com/sairam616/carshare-androidproj" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-5">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">SHELFIE</h1>
          <h3 className="position">(XCode,SwiftUI,Google Firebase)</h3>
          <h3 className="about">
            Shelfie is a Board Game Collection app for iOS. Build your virtual collection with stats in moments just by taking a photo of your board game shelf.
          </h3>

          <a href="https://github.com/sairam616/shelfie" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-6">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">Anime App</h1>
          <h3 className="position">(Storyboard,CoreData,API)</h3>
          <h3 className="about">
            ANIME Details are retrieved from api and displayed in a user friendly interface. The user can add an anime to their favorite list and keep track of the live information of ranking, new releases etc
          </h3>

          <a href="https://github.com/sairam616/animelistfinal" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-6">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">JSON Data Management</h1>
          <h3 className="position">(XML,JAVASCRIPT,AJAX,JQUERY)</h3>
          <h3 className="about">
            Managed huge amount of JSON data retrieved from API to display the required data to user in a appealing UI.
          </h3>

          <a href="https://github.com/sairam616/FinalXMLProject" target={"_blank"} className="link-project">
            <span>Git-Link</span>
          </a>
        </div>
      </div>

      <div className="project project-7">
        {/* <div className="project-img"></div> */}
        <div className="project-info">
          <h1 className="name">TCS Interactive</h1>
          <h3 className="position">Full-Stack Developer(HTML,JAVASCRIPT,CSS,MySQL,REACT,NODE,DATABASES)</h3>
          <h3 className="about">
            Responsive Fitness Web Application for where users and trainers can contact each other for appointments. Dashboards for capturing Customer & trainer Information like program, booking Information, Accessibility etc. Coordinated testing and validation procedures through the software development lifecycle making the website 30% faster.
          </h3>
        </div>
      </div>

    </div>
  );
};

export default projects;
