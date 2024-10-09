import "./BoardMembers.css";

function BoardMembers() {
  return (
    <>
      <div className="member-container">
        <h1>Meet the board</h1>
        <div className="card-container">
          <div className="member-card">
            <img
              src="public\melanieHeadshot.jpg"
              className="memberHeadshot"
            ></img>
            <h2>Melanie Garcia</h2>
            <p>President</p>
          </div>
          <div className="member-card">
            <img
              src="public\melanieHeadshot.jpg"
              className="memberHeadshot"
            ></img>
            <h2>Daniella Padron</h2>
            <p>Vice President</p>
          </div>
          <div className="member-card">
            <img
              src="public\melanieHeadshot.jpg"
              className="memberHeadshot"
            ></img>
            <h2>Alejandro Salza</h2>
            <p>Vice President</p>
          </div>
          <div className="member-card">
            <img
              src="public\melanieHeadshot.jpg"
              className="memberHeadshot"
            ></img>
            <h2>Maggie</h2>
            <p>Communications</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardMembers;
