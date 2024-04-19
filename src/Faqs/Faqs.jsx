import { useState } from "react";
import FrameComponent from "../FrameComponent/FrameComponent";
import add from "../assets/add.png"
import minus from "../assets/minus.png"

const FAQs = () => {
  const [showContent,setShowContent] = useState(true)
  const showContentToggle = () => {
    setShowContent(!showContent);
  };
  return (
    <form
      style={{
        margin: "0",
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "100px 400px",
        boxSizing: "border-box",
        gap: "51.5px",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          width: "1202px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "618px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "30px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "20px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "0px 20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "18px",
                  lineHeight: "130%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#f59a74",
                  textAlign: "center",
                  display: "inline-block",
                  minWidth: "48px",
                }}
              >
                F A Q
              </div>
            </div>
            <h1
              style={{
                margin: "0",
                position: "relative",
                fontSize: "44px",
                lineHeight: "130%",
                textTransform: "capitalize",
                fontWeight: "700",
                fontFamily: "Sora",
                color: "#1b2124",
                textAlign: "center",
              }}
            >
              frequently asked question
            </h1>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: "18px",
                lineHeight: "29px",
                fontFamily: "Sora",
                color: "#7f879e",
                textAlign: "left",
              }}
            >
              Did you find the question as you expected?
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "610px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "18px",
              border: "2px solid #f6f8f9",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "24px 22px 24px 0px",
              gap: "24px",
              maxWidth: "100%",
              flexShrink: "0",
            }}
          >
            <div
              style={{
                width: "612px",
                height: "241px",
                position: "relative",
                borderRadius: "18px",
                border: "2px solid #f6f8f9",
                boxSizing: "border-box",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                  zIndex: "1",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    fontSize: "20px",
                    lineHeight: "130%",
                    textTransform: "capitalize",
                    fontFamily: "Sora",
                    color: "#1b2124",
                    textAlign: "left",
                    paddingLeft : "20px"
                  }}
                >
                  How many steps to get a job?
                </b>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "1px 0px 0px",
                  }}
                >
                  {showContent ? 
                  <img
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "relative",
                    }}
                    loading="lazy"
                    alt=""
                    src={minus}
                    onClick={showContentToggle}
                  />
                  : 
                  <img
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                  }}
                  loading="lazy"
                  alt=""
                  src={add}
                  onClick={showContentToggle}
                />
}
                </div>
              </div>
              </div>
              {showContent &&
              <>
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "18px",
                  lineHeight: "180%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  color: "#7f879e",
                  textAlign: "left",
                  zIndex: "1",
                  paddingLeft : "20px"
                }}
              >
                Et lectus viverra aenean malesuada praesent. Egestas praesent
                quam auctor amet ac, ac vel. Euismod proin massa feugiat gravida
                tellus auctor ac, vitae justo.
              </div>
            <b
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "18px",
                lineHeight: "130%",
                textTransform: "capitalize",
                fontFamily: "Sora",
                color: "#3860e2",
                textAlign: "left",
                zIndex: "1",
                paddingLeft : "20px"
              }}
            >
              Read More
            </b>
            </>
            }
          </div>
          <FrameComponent
            whatDoWeNeedToApplyForAJo="What do we need to apply for a job?"
            add={add}
            value ="1"
          />
        </div>
        <div
          style={{
            height: "280px",
            width: "610px",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
            maxWidth: "100%",
          }}
        >
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Do we get cv from jobify?"
            add={add}
            value = "2"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="82px"
          />
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Can we reschedule the interview meeting?"
            add={add}
            value = "3"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="unset"
          />
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Can we apply for all jobs?"
            add={add}
            value = "4"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="82px"
          />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "16.5px 35.5px",
            backgroundColor: "#b7e08a",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "18px",
              lineHeight: "130%",
              fontWeight: "600",
              fontFamily: "Sora",
              color: "#111",
              textAlign: "left",
              display: "inline-block",
              minWidth: "119px",
            }}
          >
            Give a Quote
          </div>
        </button>
      </div>
    </form>
  );
};

export default FAQs;

