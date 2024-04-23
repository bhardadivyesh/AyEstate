import Column1 from "../Column1/Column1";
import frame from "../../assets/Frame 162767.png";
import buttonIcon from "../../assets/chevron-right.png";

const Discover = () => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "80px 64px 44px",
        boxSizing: "border-box",
        gap: "80px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "80px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
            minWidth: "400px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "150%",
              fontWeight: "600",
            }}
          >
            Discover
          </div>
          <h1
            style={{
              margin: "0",
              alignSelf: "stretch",
              position: "relative",
              fontSize: "48px",
              lineHeight: "120%",
              fontWeight: "700",
              fontFamily: "inherit",
            }}
          >
            Find Your Dream <br /> Property with Us
          </h1>
        </div>
        <div
          style={{
            flex: "1",
            position: "relative",
            fontSize: "18px",
            lineHeight: "150%",
            display: "inline-block",
            minWidth: "400px",
            maxWidth: "100%",
          }}
        >
          At our real estate agency, we offer a range of services to help you
          <br />
          with your property needs. Whether you're looking to buy, sell, or get
          <br />
          a valuation, our experienced team is here to assist you every step of
          <br />
          the way.
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "48px",
          maxWidth: "100%",
          fontSize: "32px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "48px",
            maxWidth: "100%",
          }}
        >
          <Column1
            frame162767={frame}
            heading="Property Buying and"
            heading2="Selling"
            text="We provide expert guidance for buying and "
            text2="selling properties, ensuring a smooth and"
            text3="successful transaction."
          />
          <Column1
            frame162767={frame}
            heading="Property Valuation"
            heading2="Services"
            text="Our team of certified appraisers offers accurate"
            text2="property valuations to help you make informed"
            text3="decisions."
          />
          <Column1
            frame162767={frame}
            heading="Real Estate Investment"
            heading2="Advice"
            text="Get expert advice on real estate investment "
            text2="strategies to maximize your returns."
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "16px 0px 0px",
            gap: "24px",
            fontSize: "16px",
            fontFamily: "Roboto",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "17.5px 34px",
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
                lineHeight: "21px",
                fontWeight: "600",
                fontFamily: "Sora",
                color: "#111",
                textAlign: "left",
                display: "inline-block",
                minWidth: "92px",
              }}
            >
              Learn More
            </div>
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "150%",
                display: "inline-block",
                minWidth: "56px",
                fontFamily: "Roboto, sans-serif",
                fontSize: "16px",
                fontWeight: "400", 
              }}
            >
              Contact
            </div>
            <img
              style={{
                height: "24px",
                width: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                minHeight: "24px",
              }}
              loading="lazy"
              alt=""
              src={buttonIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discover;
