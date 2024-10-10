import "./InformationSlider.css";
import { useState } from "react";

function InformationSlider() {
  const [about, changeabout] = useState("selected")
  const [why, changewhy] = useState("")
  const yellowButton = () => {
    changeabout("")
    changewhy("selected")
  }
  const blueButton = () => {
    changeabout("selected")
    changewhy("")
  }
  
  
  return (
    <>
      <div id="about-us" className="information-container">
        <div id={about} className="about-fbla">
          <h1>About FBLA</h1>
          <p>
            The Future Business Leaders of America (FBLA) is a nonprofit
            educational association that prepares students for careers in
            business and business-related fields1 . Founded in 1937, it's the
            largest business Career and Technical Student Organization in the
            world2 . FBLA has four divisions: Middle School FBLA, High School
            FBLA, Phi Beta Lambda (PBL) for post-secondary students, and a
            Professional Division for businesspeople and educators3 . Each year,
            FBLA helps over 230,000 members develop leadership skills and
            prepare for the business world through competitive events,
            educational programs, and community service opportunities4 . The
            organization's mission is to inspire and prepare students to become
            community-minded business leaders in a global society.
          </p>
          <button onClick={blueButton} className="about-button">?</button>
        </div>
        <div id={why} className="why-fbla">
          <h1>Why FBLA?</h1>
          <p>
            The Future Business Leaders of America (FBLA) is a nonprofit
            educational association that prepares students for careers in
            business and business-related fields1 . Founded in 1937, it's the
            largest business Career and Technical Student Organization in the
            world2 . FBLA has four divisions: Middle School FBLA, High School
            FBLA, Phi Beta Lambda (PBL) for post-secondary students, and a
            Professional Division for businesspeople and educators3 . Each year,
            FBLA helps over 230,000 members develop leadership skills and
            prepare for the business world through competitive events,
            educational programs, and community service opportunities4 . The
            organization's mission is to inspire and prepare students to become
            community-minded business leaders in a global society.
          </p>
          <button onClick={yellowButton} className="why-button">?</button>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default InformationSlider;
