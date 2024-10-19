import { useState } from "react";
import "./HamburgerMenu.css";


function HamburgerMenu() {
  const [open,setOpen] = useState(false)
  const setOpenClosed = () => {
    if (!open) {
      setOpen(true);
      var l1id = document.getElementById("l1")
      var l2id = document.getElementById("l2")
      var l3id = document.getElementById("l3")
      var nav = document.getElementsByClassName("navbar")
      if (l1id && l2id && l3id ){
        l1id.id = "l1-open"
        l2id.id = "l2-open"
        l3id.id = "l3-open"
        if (nav) {
          nav[0].id = "small-navbar"
        }

    } else {
      setOpen(false)
      console.log("Test")
    }
  }
}
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
