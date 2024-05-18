import "./Benefit.css";
import medalIcon from "../../assets/aboutUs/medal images/medalstar.png"

const Benefit = ({ title }) => {
  return (
    <div className="benefit-1-aboutBenefit">
      <img
        className="medal-star-icon-aboutBenefit"
        loading="lazy"
        alt=""
        src={medalIcon}
      />
      <div className="shape-set-aboutBenefit">
        <h3 className="title6-aboutBenefit">{title}</h3>
        <div className="subtitle3-aboutBenefit">
          Elit ornare nibh dictum viverra quam placerat. Lobortis eleifend risus
          pretium consectetur eros.
        </div>
      </div>
    </div>
  );
};

export default Benefit;
