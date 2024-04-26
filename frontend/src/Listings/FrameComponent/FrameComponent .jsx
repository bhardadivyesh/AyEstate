import arrowRight from "../../assets/arrow-right.png";
import downArrow from "../../assets/arrow-down.png";
import searchbox from "../../assets/Search Box.png";
import menuSvg from "../../assets/Search Box (1).png";
import { Link } from "react-router-dom";

const FrameComponent = ({ productCount, category, location }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "32px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#1d9e34",
        fontFamily: "Sora",
        marginTop: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <Link
          to="/"
          style={{
            position: "relative",
            lineHeight: "26px",
            display: "inline-block",
            minWidth: "49px",
          }}
        >
          Home
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "7px 0px 0px",
          }}
        >
          <img
            style={{ width: "12px", height: "12px", position: "relative" }}
            loading="lazy"
            alt=""
            src={arrowRight}
          />
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "26px",
            display: "inline-block",
            minWidth: "89px",
          }}
        >
          {category}
        </div>
      </div>
      {(category !== "" || location !== "") && (
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            maxWidth: "100%",
            gap: "20px",
            fontSize: "24px",
            color: "#0b0f0e",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
              maxWidth: "100%",
            }}
          >
            <h2
              style={{
                margin: "0",
                position: "relative",
                fontSize: "inherit",
                letterSpacing: "-0.2px",
                lineHeight: "34px",
                fontWeight: "600",
                fontFamily: "inherit",
              }}
            >
              {`Showing listings property ${category ? `for ${category}` : ""}${
                category && location ? " " : ""
              }${location ? ` in ${location}` : ""}`}
            </h2>
            <div
              style={{
                position: "relative",
                fontSize: "16px",
                lineHeight: "26px",
                color: "#818b9c",
                fontFamily: "Sora, sans-serif",
                fontWeight: "normal",
              }}
            >
              {`Showing 1 - ${productCount} Properties`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FrameComponent;
