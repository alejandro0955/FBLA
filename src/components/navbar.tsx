import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="src\public\logo.png"></img>
        <ul className="navbar-options">
          <li className="navbar-option">About Us</li>
          <li className="navbar-option">Gallery</li>
          <li className="navbar-option">Socials</li>
          <li className="navbar-option">Join FBLA</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
