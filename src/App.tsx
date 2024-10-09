import "./App.css";
import Navbar from "./components/Navbar";
import InformationSlider from "./components/InformationSlider";
import BoardMembers from "./components/BoardMembers";
import MiddleBanner from "./components/MiddleBanner";
import Gallery from "./components/Gallery";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="image-container">
        <img className="mainPic" src="src\public\mainpicture.png"></img>
      </div>
      <MiddleBanner />
      <InformationSlider />
      <BoardMembers />
      <Gallery />
      <BottomSection />
    </>
  );
}

export default App;
