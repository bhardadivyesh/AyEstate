import { useEffect, useMemo, useState } from "react";
import "./CardTypes.css";

const CardType = ({
  propWidth,
  propFlex,
  propDisplay,
  propMinWidth,
  propFlex1,
  articals,
}) => {
  const buttonInstanceStyle = useMemo(() => {
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
    <>
      {articals.map((items) => {
        return (
          <div className="card-type">
            {console.log(items)}
            <img
              className="card-type-child"
              loading="lazy"
              alt=""
              src={`http://localhost:1337${items.images[0].url}`}
            />
            <div className="button-instance-parent">
              <div className="button-instance" style={buttonInstanceStyle}>
                <div className="may-20221" style={may2022Style}>
                  {items.date}
                </div>
                <div className="career-tips-header">
                  <div className="career-tips-header-child" />
                </div>
                <div className="career-tips1" style={careerTipsStyle}>
                  {items.suggestion}
                </div>
              </div>
              <b className="how-intrapreneurship-can1">
                {items.sortDescription}
              </b>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardType;
