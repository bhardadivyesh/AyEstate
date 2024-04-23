import buttonArrow from "../../assets/arrow-up-right.png"
import background from "../../assets/CTA Section.png"
const CTASection = () => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        height: "388px",
        // backgroundColor: "#1639F2",
        backgroundImage : `url(${background})`,
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
        overflow: "hidden",
        flexShrink: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 0px",
        boxSizing: "border-box",
        position: "relative",
        gap: "24px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "36px",
        color: "#fff",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          width: "623.7px",
          height: "397.2px",
          position: "absolute",
          margin: "0",
          right: "-139.7px",
          bottom: "-180.2px",
          zIndex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
      <div
        style={{
          width: "1200px",
          margin: "0 auto", 
          position: "absolute",
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          maxWidth: "100%",
        }}
      >
        <h1
          style={{
            margin: "0",
            alignSelf: "stretch",
            position: "relative",
            fontSize: "inherit",
            letterSpacing: "-0.02em",
            lineHeight: "54px",
            textTransform: "uppercase",
            fontWeight: "700",
            fontFamily: "inherit",
          }}
        >
          <p
          style={{ margin: "0", fontFamily: "Sora", fontWeight: "bold", fontSize: "36px" }}
           >Let’s start a</p>
          <p           style={{ margin: "0", fontFamily: "Sora", fontWeight: "bold", fontSize: "36px" }}>successful project</p>
        </h1>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "18px",
            letterSpacing: "-0.02em",
            lineHeight: "28px",
            color: "#f4f2ff",
          }}
        >
          <p 
          style={{ margin: "0",
          fontFamily : "Sora",
          fontWeight : "normal",
          fontSize : "18px"
         }}>
          We deliver immediate business impact and long-term ROI for your brand.</p>
          <p  style={{ margin: "0",
          fontFamily : "Sora",
          fontWeight : "normal",
          fontSize : "18px"
         }}>Find out why Astheris is Australia's trusted Digital Agency.</p>
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
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "14px 24px",
              backgroundColor: "#b7e08a",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: "18px",
                letterSpacing: "-0.02em",
                lineHeight: "28px",
                fontWeight: "600",
                fontFamily: "Sora",
                color: "#16112f",
                textAlign: "left",
              }}
            >
              Start A Project
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "2px 0px 0px",
              }}
            >
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src={buttonArrow}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
