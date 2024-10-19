import { useState } from "react";
import "./HamburgerMenu.css";

function HamburgerMenu() {
  const [open, setOpen] = useState("closed");
  const setOpenClosed = () => {
    var lines = document.getElementsByClassName("line");
    var nav = document.getElementsByClassName("navbar");
    if (open == "closed") {
      setOpen("open");
      console.log("open");
      if (lines) {
        for (let i = 0; i < lines.length; i++) {
          lines[i].id = "l" + (i + 1).toString() + "-open";
        }
      }
      if (nav) {
        nav[0].id = "small-navbar-open";
      }
    } else {
      setOpen("closed");
      console.log("closed");
      if (lines) {
        for (let i = 0; i < lines.length; i++) {
          lines[i].id = "";
        }
      }
      if (nav) {
        nav[0].id = "small-navbar-close";
      }
    }
  };
  return (
    <>
      <div onClick={setOpenClosed} className="hmenu">
        <div id="l1" className="line"></div>
        <div id="l2" className="line"></div>
        <div id="l3" className="line"></div>
      </div>
    </>
  );
}

export default HamburgerMenu;
