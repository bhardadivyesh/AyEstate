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
  return (
    <div className="card-type2-blogCardType">
      <img
        className="rectangle-icon-blogCardType"
        loading="lazy"
        alt=""
        src={rectangle9620}
      />
      <div className="frame-parent9-blogCardType">
        <div className="may-2022-parent-blogCardType" style={frameDiv2Style}>
          <div className="may-2022-blogCardType" style={may2022Style}>
            {may2022}
          </div>
          <div className="ellipse-container-blogCardType">
            <div className="frame-child3-blogCardType" />
          </div>
          <div className="career-tips2-blogCardType" style={careerTipsStyle}>
            {careerTips}
          </div>
        </div>
        <b className="how-intrapreneurship-can-blogCardType">{howIntrapreneurshipCanHel}</b>
      </div>
    </div>
  );
};

export default CardType;
