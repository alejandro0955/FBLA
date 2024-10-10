import "./JoinSection.css";

function JoinSection() {
  return (
    <>
      <div  id="join-fbla" className="join-section">
        <h1 className="join">Join</h1>
        <div id="wa" className="button-container">
          <img className="button-icon" src="/whatsapp.svg"></img>
          <a href="https://chat.whatsapp.com/EXpZWFM4le9JuGG8UwSnDT" className="sbutton">Whatsapp</a>
        </div>
        <div id="sn" className="button-container">
          <img className="button-icon" src="/sharknet.png"></img>
          <a  href="https://sharknet.mdc.edu/organization/pbl" className="sbutton">Sharknet</a>
        </div>
      </div>
    </>
  );
}

export default JoinSection;
