import arrowRight from "../../assets/arrow-right.png";
import downArrow from "../../assets/arrow-down.png";
import searchbox from "../../assets/Search Box.png";
import menuSvg from "../../assets/Search Box (1).png";
import { Link } from "react-router-dom";

const FrameComponent = ({productCount}) => {
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
          Real Estate
        </div>
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
            alt=""
            src={arrowRight}
          />
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "26px",
            color: "#0b0f0e",
            display: "inline-block",
            minWidth: "35px",
          }}
        >
          Villa
        </div>
      </div>
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
            Showing listings properties for “Villa”
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "10px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
            fontSize: "16px",
            color: "#818b9c",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "23.5px",
              height: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "0px 0px 0px 0px",
                gap: "4px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "26px",
                  display: "inline-block",
                  minWidth: "63px",
                  fontFamily: "Sora, sans-serif",
                  fontSize: "20px",
                  fontWeight: "normal",
                }}
              >
                Sort By:
              </div>
              <div
                style={{
                  borderRadius: "8px",
                  border: "1px solid #e4e9ee",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "15px 15px",
                  fontSize: "14px",
                  color: "#0b0f0e",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "160%",
                      fontWeight: "600",
                      fontFamily: "Sora, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Relevant Products
                  </div>
                  <img
                    style={{
                      height: "12px",
                      width: "12px",
                      position: "relative",
                    }}
                    alt=""
                    src={downArrow}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                height: "34px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "10px 0px 0px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "1px",
                  height: "25px",
                  position: "relative",
                  borderRight: "1px solid #e4e9ee",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "8px",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#1e4c2f",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "10px",
                }}
              >
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                    position: "relative",
                  }}
                  loading="lazy"
                  alt=""
                  src={searchbox}
                />
              </div>
              <div
                style={{
                  width: "44px",
                  borderRadius: "8px",
                  border: "1px solid #e4e9ee",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "8px 9px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    style={{
                      height: "32px",
                      width: "32px",
                      position: "relative",
                    }}
                    loading="lazy"
                    alt=""
                    src={menuSvg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrameComponent;
