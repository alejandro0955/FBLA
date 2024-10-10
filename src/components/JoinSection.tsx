import "./JoinSection.css";

function JoinSection() {
  return (
    <>
      <div className="join-section">
        <h1 className="join">Join</h1>
        <div id="wa" className="button-container">
          <img className="button-icon" src="/whatsapp.svg"></img>
          <button className="sbutton">Whatsapp</button>
        </div>
        <div id="sn" className="button-container">
          <img className="button-icon" src="/sharknet.png"></img>
          <button className="sbutton">Sharknet</button>
        </div>
      </div>
    </>
  );
}

export default JoinSection;
