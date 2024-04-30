import Benefit from "../Benefit/Benefit";
import "./Paste.css";

const Paste = () => {
  return (
    <div className="paste">
      <div className="our-process">
        <Benefit title="Best Small Companies" />
        <Benefit title="Fast Company Growth" />
        <Benefit title="Best Developer Team" />
      </div>
      <button className="button27">
        <div className="title-button3">View All Project</div>
        <img className="arrow-up-right-icon3" alt="" src="/arrowupright1.svg" />
      </button>
    </div>
  );
};

export default Paste;
