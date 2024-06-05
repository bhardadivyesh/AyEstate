import { useContext, useMemo, useState } from "react";
import minus from "../../assets/minus.png";
import myContext from "../../context/context";
import "./FrameComponent.css";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent = ({
  whatDoWeNeedToApplyForAJo,
  add,
  propAlignSelf,
  propWidth,
  propHeight,
  value,
}) => {
  const values = useContext(myContext);
  const frameDivStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propAlignSelf, propWidth, propHeight]);

  const [buttonOneState, setButtonOneState] = useState(false);
  const [buttonTwoState, setButtonTwoState] = useState(false);
  const [buttonThreeState, setButtonThreeState] = useState(false);
  const [buttonFourState, setButtonFourState] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        setButtonOneState(!buttonOneState);
        setButtonTwoState(false);
        setButtonThreeState(false);
        setButtonFourState(false);
        break;
      case 2:
        setButtonTwoState(!buttonTwoState);
        setButtonOneState(false);
        setButtonThreeState(false);
        setButtonFourState(false);
        break;
      case 3:
        setButtonThreeState(!buttonThreeState);
        setButtonOneState(false);
        setButtonTwoState(false);
        setButtonFourState(false);
        break;
      case 4:
        setButtonFourState(!buttonFourState);
        setButtonOneState(false);
        setButtonTwoState(false);
        setButtonThreeState(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="div1-FrameComponent-homepage"
        style={{
          ...frameDivStyle,
        }}
      >
        <div className="div2-FrameComponent-homepage">
          {value === "1" && (
            <img
              className="img1-FrameComponent-homepage"
              src={buttonOneState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(1)}
            />
          )}
          {value === "2" && (
            <img
              className="img2-FrameComponent-homepage"
              src={buttonTwoState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(2)}
            />
          )}
          {value === "3" && (
            <img
              className="img3-FrameComponent-homepage"
              src={buttonThreeState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(3)}
            />
          )}
          {value === "4" && (
            <img
              className="img4-FrameComponent-homepage"
              src={buttonFourState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(4)}
            />
          )}
        </div>

        <div className="div3-FrameComponent-homepage">
          <div className="div4-FrameComponent-homepage">
            <b className="b1-FrameComponent-homepage">
              {whatDoWeNeedToApplyForAJo}
            </b>
          </div>
          {value === "1" && buttonOneState && (
            <div>
              <div className="div5-FrameComponent-homepage">
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b className="b2-FrameComponent-homepage">Read More</b>
            </div>
          )}
          {value === "2" && buttonTwoState && (
            <div>
              <div className="div6-FrameComponent-homepage">
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b className="b3-FrameComponent-homepage">Read More</b>
            </div>
          )}
          {value === "3" && buttonThreeState && (
            <div>
              <div className="div7-FrameComponent-homepage">
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b className="b4-FrameComponent-homepage">Read More</b>
            </div>
          )}
          {value === "4" && buttonFourState && (
            <div>
              <div className="div8-FrameComponent-homepage">
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b className="b5-FrameComponent-homepage">Read More</b>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FrameComponent;
