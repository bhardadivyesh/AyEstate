import "./Benefit.css";
import medalIcon from "../../assets/aboutUs/medal images/medalstar.png"

const Benefit = ({ title }) => {
  return (
    <div className="benefit-1">
      <img
        className="medal-star-icon"
        loading="lazy"
        alt=""
        src={medalIcon}
      />
      <div className="shape-set">
        <h3 className="title6">{title}</h3>
        <div className="subtitle3">
          Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus
          pretium consectetur eros.
        </div>
      </div>
    </div>
  );
};

export default Benefit;
