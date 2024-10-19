import "./InformationSlider.css";
import { useState } from "react";

function InformationSlider() {
  const [about, changeabout] = useState("selected");
  const [why, changewhy] = useState("");
  const yellowButton = () => {
    changeabout("");
    changewhy("selected");
  };
  const blueButton = () => {
    changeabout("selected");
    changewhy("");
  };

  return (
    <>
      <div id="about-us" className="information-container">
        <div id={about} className="about-fbla">
          <h1>About FBLA</h1>
          <p>
            Future Business Leaders of America (FBLA) is a national student
            organization dedicated to preparing students for careers in business
            and leadership. FBLA offers high school and middle school students
            opportunities to develop essential skills in areas like
            communication, problem-solving, and leadership through competitive
            events, conferences, and networking opportunities. Members
            participate in business-related competitions, community service, and
            leadership workshops, allowing them to gain real-world experience
            and enhance their personal and professional growth. FBLA’s mission
            is to inspire and prepare future business leaders, fostering career
            development, civic engagement, and entrepreneurship.
          </p>
          <button onClick={blueButton} className="about-button">
            ?
          </button>
        </div>
        <div id={why} className="why-fbla">
          <h1>Why FBLA?</h1>
          <p>
            Joining FBLA at our school provides numerous opportunities for
            personal and professional growth. It prepares students for future
            careers by developing essential skills in business, leadership, and
            technology. Members can participate in regional, state, and national
            competitions to showcase their talents, while also building valuable
            networks with peers, business professionals, and mentors. FBLA
            offers leadership opportunities within the chapter, allowing
            students to take on roles that boost confidence and foster
            real-world experience. Additionally, members can access exclusive
            scholarships and engage in meaningful community service projects
            that contribute to both the school and the local area. Overall, FBLA
            is a great way to stand out on college applications while gaining
            practical skills for the future.
          </p>
          <button onClick={yellowButton} className="why-button">
            ?
          </button>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default InformationSlider;
