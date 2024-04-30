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
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const may20222Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const careerTips2Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      flex: propFlex1,
    };
  }, [propDisplay, propMinWidth, propFlex1]);

  return (
    <div className="card-type4">
      <img className="card-type-child3" alt="" src={rectangle9620} />
      <div className="frame-parent23">
        <div className="may-2022-container" style={frameDiv3Style}>
          <div className="may-20223" style={may20222Style}>
            {may2022}
          </div>
          <div className="career-tips5">
            <div className="how-intrapreneurship" />
          </div>
          <div className="career-tips6" style={careerTips2Style}>
            {careerTips}
          </div>
        </div>
        <b className="how-intrapreneurship-can3">{howIntrapreneurshipCanHel}</b>
      </div>
    </div>
  );
};

export default CardType;
