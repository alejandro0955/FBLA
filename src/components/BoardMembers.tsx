import "./BoardMembers.css";

function BoardMembers() {
  return (
    <>
      <div className="member-container">
        <h1>Meet the board</h1>
        <div className="card-container">
          <div className="member-card">
            <img src="/Melanie.jpg" className="memberHeadshot"></img>
            <div className="name-role">
              <h2>Melanie Garcia</h2>
              <p>President</p>
            </div>
          </div>
          <div className="member-card">
            <img src="/Daniela.jpg" className="memberHeadshot"></img>
            <div className="name-role">
              <h2>Daniella Padron</h2>
              <p>1st Vice President</p>
            </div>
          </div>
          <div className="member-card">
            <img src="/Alejandro.jpg" className="memberHeadshot"></img>
            <div className="name-role">
              <h2>Alejandro Salza</h2>
              <p> 2nd Vice President</p>
            </div>
          </div>
          <div className="member-card">
            <img src="/Maggie.jpg" className="memberHeadshot"></img>
            <div className="name-role">
              <h2>Maggie Curiel</h2>
              <p>Chief Communications Officer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardMembers;
