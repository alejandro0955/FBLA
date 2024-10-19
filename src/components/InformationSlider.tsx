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
            Joining FBLA at our school offers a range of benefits that help
            students grow personally and professionally: Career Preparation:
            Gain skills in business, leadership, and technology that can set you
            up for success in any career path. Competitions: Participate in
            regional, state, and national competitions to showcase your talents
            in business-related events. Networking: Connect with peers, business
            leaders, and mentors who can help guide your future career.
            Leadership Opportunities: Take on roles within our chapter to build
            confidence and lead projects that make an impact. Scholarships:
            Access exclusive scholarships and awards that can help fund your
            education. Community Involvement: Engage in service projects that
            benefit both the school and local community, building a sense of
            responsibility.
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
