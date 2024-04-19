import HeroImage from "../assets/heroimage.png";
const Hero = () => {
  return (
    <section
      style={{
        marginLeft: "-11px",
        width: "100%",
        backgroundColor: "#f6f3f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "130px 80px 70px",
        boxSizing: "border-box",
        gap: "85px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "56px",
        color: "#000",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 55px",
          boxSizing: "border-box",
          minWidth: "400px",
          minHeight: "444px",
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
            gap: "64px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "40px",
            }}
          >
            <h1
              style={{
                margin: "0",
                alignSelf: "stretch",
                position: "relative",
                fontSize: "inherit",
                lineHeight: "120%",
                fontWeight: "700",
                fontFamily: "inherit",
              }}
            >
              Discover Your Dream <br /> Home Today
            </h1>

            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "18px",
                lineHeight: "160%",
              }}
            >
              <span>
                Find the perfect property that suits your lifestyle. Our real
                estate <br />
                service offers unique selling propositions that set us apart
                from the <br />
                competition. Find your perfect home today!
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "16px 0px 0px",
              gap: "16px",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "12px 24px",
                backgroundColor: "#b7e08a",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  fontFamily: "Sora, sans-serif",
                  color: "#111",
                  textAlign: "left",
                  display: "inline-block",
                  minWidth: "105px",
                }}
              >
                Explore Now
              </div>
            </button>

            <button
              style={{
                cursor: "pointer",
                border: "1px solid #000",
                padding: "10px 23px",
                backgroundColor: "transparent",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "16px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  fontFamily: "Sora, sans-serif",
                  color: "#000",
                  textAlign: "left",
                  display: "inline-block",
                  minWidth: "81px",
                }}
              >
                Learn More
              </div>
            </button>
          </div>
        </div>
      </div>
      <img
        style={{
          width: "579px",
          position: "relative",
          borderRadius: "16px",
          maxHeight: "100%",
          objectFit: "cover",
          maxWidth: "100%",
        }}
        loading="lazy"
        alt=""
        src={HeroImage}
      />
    </section>
  );
};

export default Hero;
