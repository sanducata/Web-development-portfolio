import "./style.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logoDiv">
          <div className="logo">CATALIN SANDU</div>
        </div>
        <div className="buttonsDiv">
          <div className="link">Home</div>
          <div className="link">Work</div>
          <div className="link">Contact</div>
        </div>
        <div className="cvDiv">
          <div className="downloadCvButton">Download CV</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
