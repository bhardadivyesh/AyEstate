import { useMemo } from "react";
import "./CardType.css";

const CardType = ({
  rectangle9620,
  may2022,
  careerTips,
  howIntrapreneurshipCanHel,
  propWidth,
  propFlex,
  propDisplay,
  propMinWidth,
  propFlex1,
  blogs
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const may2022Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const careerTipsStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      flex: propFlex1,
    };
  }, [propDisplay, propMinWidth, propFlex1]);
console.log(blogs);
  return (
    <div className="card-type2">
      <img
        className="rectangle-icon"
        loading="lazy"
        alt=""
        src={rectangle9620}
      />
      <div className="frame-parent9">
        <div className="may-2022-parent" style={frameDiv2Style}>
          <div className="may-2022" style={may2022Style}>
            {may2022}
          </div>
          <div className="ellipse-container">
            <div className="frame-child3" />
          </div>
          <div className="career-tips2" style={careerTipsStyle}>
            {careerTips}
          </div>
        </div>
        <b className="how-intrapreneurship-can">{howIntrapreneurshipCanHel}</b>
      </div>
    </div>
  );
};

export default CardType;
