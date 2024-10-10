import "./BottomSection.css";

function BottomSection() {
  return (
    <>
      <div className="bottom-container">
        <div className="socials-section">
          <h2>Socials</h2>
          <ul className="social-links">
            <li className="social-link">
              <img src="/instagram.svg"></img>
              <p>Instagram</p>
            </li>
            <li className="social-link"></li>
            <li className="social-link"></li>
          </ul>
        </div>
        <div className="message">
          <p>Brought to you by the FBLA team</p>
        </div>
      </div>
    </>
  );
}

export default BottomSection;
