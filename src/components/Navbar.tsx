import HamburgerMenu from "./HamburgerMenu";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
          <img className="logo" src="/logo.png"></img>
          <img src="/SmallLogo.png" className="small-logo"></img>
          <ul className="navbar-options">
            <li className="navbar-option">
              <a href="#about-us">About Us</a>
            </li>
            <li className="navbar-option">
              <a href="#our-board">Our Board</a>
            </li>
            <li className="navbar-option">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="navbar-option">
              <a href="#join-fbla">Join FBLA</a>
            </li>
            <li className="navbar-option">
              <a href="#socials">Socials</a>
            </li>
          </ul>
          <HamburgerMenu />
        </div>
    </>
  );
}

export default Navbar;
