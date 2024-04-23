import Vector from "../../assets/Vector.png"
import Avatar from "../../assets/Avatar Image.png"
const Testimonials = () => {
    return (
      <section
        style={{
          alignSelf: "stretch",
          backgroundColor: "#ffeeee",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "50px 20px 52px",
          boxSizing: "border-box",
          gap: "50px",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "48px",
          color: "#000",
          fontFamily: "Sora",
        }}
      >
        <div
          style={{
            width: "768px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 0px 0px 1px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              position: "relative",
              fontSize: "inherit",
              lineHeight: "58px",
              fontWeight: "700",
              fontFamily: "inherit",
            }}
          >
            Customer Testimonials
          </h1>
        </div>
        <div
          style={{
            width: "768px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "32px",
            maxWidth: "100%",
            fontSize: "24px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
            }}
          >
            <img
              style={{
                height: "18.9px",
                width: "20px",
                position: "relative",
                minHeight: "19px",
              }}
              loading="lazy"
              alt=""
              src={Vector}
            />
            <img
              style={{
                height: "18.9px",
                width: "20px",
                position: "relative",
                minHeight: "19px",
              }}
              alt=""
              src={Vector}
            />
            <img
              style={{
                height: "18.9px",
                width: "20px",
                position: "relative",
                minHeight: "19px",
              }}
              alt=""
              src={Vector}
            />
            <img
              style={{
                height: "18.9px",
                width: "20px",
                position: "relative",
                minHeight: "19px",
              }}
              alt=""
              src={Vector}
            />
            <img
              style={{
                height: "18.9px",
                width: "20px",
                position: "relative",
                minHeight: "19px",
              }}
              alt=""
              src={Vector}
            />
          </div>
          <b
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "140%",
            }}
          >
            Our experience with this real estate website design has been nothing
            short of amazing. The team was professional, responsive, and delivered
            beyond our expectations.
          </b>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "20px",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            <img
              style={{
                height: "56px",
                width: "56px",
                position: "relative",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              loading="lazy"
              alt=""
              src={Avatar}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "inline-block",
                  minWidth: "79px",
                }}
              >
                John Doe
              </div>
              <div style={{ position: "relative", lineHeight: "150%" }}>
                CEO, ABC Realty
              </div>
            </div>
            <div
              style={{
                height: "62px",
                width: "1px",
                position: "relative",
                borderRight: "1px solid #000",
                boxSizing: "border-box",
                display: "none",
              }}
            />
            <img
              style={{
                alignSelf: "stretch",
                width: "140px",
                position: "relative",
                maxHeight: "100%",
                overflow: "hidden",
                flexShrink: "0",
                display: "none",
                minHeight: "56px",
              }}
              alt=""
              src="/logo2-colordark.svg"
            />
          </div>
        </div>
      </section>
    );
  };
  export default Testimonials;