import "./App.css";
import Navbar from "./components/Navbar";
import InformationSlider from "./components/InformationSlider";

function App() {
  return (
    <>
      <Navbar />
      <img className="mainPic" src="src\public\mainpicture.png"></img>
      <InformationSlider />
    </>
  );
}

export default App;
