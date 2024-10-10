import "./App.css";
import Navbar from "./components/Navbar";
import InformationSlider from "./components/InformationSlider";
import BoardMembers from "./components/BoardMembers";
import Gallery from "./components/Gallery";
import BottomSection from "./components/BottomSection";
import JoinSection from "./components/JoinSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="image-container">
        <img className="mainPic" src="/mainpicture.png"></img>
      </div>
      <InformationSlider />
      <BoardMembers />
      <Gallery />
      <JoinSection />
      <BottomSection />
    </>
  );
}

export default App;
