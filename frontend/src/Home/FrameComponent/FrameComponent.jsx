import { useContext, useMemo, useState } from "react";
import minus from "../../assets/minus.png";
import myContext from "../../context/context";

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
        setButtonOneState(false); // Ensure other button states are reset
        setButtonThreeState(false);
        setButtonFourState(false);
        break;
      case 3:
        setButtonThreeState(!buttonThreeState);
        setButtonOneState(false); // Ensure other button states are reset
        setButtonTwoState(false);
        setButtonFourState(false);
        break;
      case 4:
        setButtonFourState(!buttonFourState);
        setButtonOneState(false); // Ensure other button states are reset
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
        style={{
          alignSelf: "stretch",
          borderRadius: "18px",
          border: "2px solid #f6f8f9",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "24px 22px 24px 24px",
          maxWidth: "100%",
          flexShrink: "0",
          textAlign: "left",
          fontSize: "20px",
          color: "#1b2124",
          fontFamily: "Sora",
          position: "relative",
          ...frameDivStyle,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          {/* Render image based on button state */}
          {value === "1" && (
            <img
              style={{ width: "24px", height: "24px" }}
              src={buttonOneState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(1)}
            />
          )}
          {value === "2" && (
            <img
              style={{ width: "24px", height: "24px" }}
              src={buttonTwoState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(2)}
            />
          )}
          {value === "3" && (
            <img
              style={{ width: "24px", height: "24px" }}
              src={buttonThreeState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(3)}
            />
          )}
          {value === "4" && (
            <img
              style={{ width: "24px", height: "24px" }}
              src={buttonFourState ? minus : add}
              alt=""
              onClick={() => handleButtonClick(4)}
            />
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto auto",
            alignItems: "center",
            gap: "20px",
            zIndex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <b
              style={{
                lineHeight: "130%",
                textTransform: "capitalize",
                fontFamily: "Sora",
                color: "#000",
              }}
            >
              {whatDoWeNeedToApplyForAJo}
            </b>
          </div>
          {value === "1" && buttonOneState && (
            <div>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "180%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#7f879e",
                  textAlign: "left",
                }}
              >
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b
                style={{
                  fontSize: "18px",
                  lineHeight: "130%",
                  textTransform: "capitalize",
                  fontFamily: "Sora",
                  color: "#3860e2",
                  textAlign: "left",
                }}
              >
                Read More
              </b>
            </div>
          )}
          {value === "2" && buttonTwoState && (
            <div>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "180%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#7f879e",
                  textAlign: "left",
                }}
              >
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b
                style={{
                  fontSize: "18px",
                  lineHeight: "130%",
                  textTransform: "capitalize",
                  fontFamily: "Sora",
                  color: "#3860e2",
                  textAlign: "left",
                }}
              >
                Read More
              </b>
            </div>
          )}
          {value === "3" && buttonThreeState && (
            <div>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "180%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#7f879e",
                  textAlign: "left",
                }}
              >
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b
                style={{
                  fontSize: "18px",
                  lineHeight: "130%",
                  textTransform: "capitalize",
                  fontFamily: "Sora",
                  color: "#3860e2",
                  textAlign: "left",
                }}
              >
                Read More
              </b>
            </div>
          )}
          {value === "4" && buttonFourState && (
            <div>
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: "180%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#7f879e",
                  textAlign: "left",
                }}
              >
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
              <b
                style={{
                  fontSize: "18px",
                  lineHeight: "130%",
                  textTransform: "capitalize",
                  fontFamily: "Sora",
                  color: "#3860e2",
                  textAlign: "left",
                }}
              >
                Read More
              </b>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default FrameComponent;
