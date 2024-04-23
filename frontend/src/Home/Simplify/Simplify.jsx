import Column from "../Column/Column";
import placeholderImage1 from "../../assets/Placeholder Image1.png"
import placeholderImage2 from "../../assets/Placeholder Image2.png"
import placeholderImage3 from "../../assets/Placeholder Image3.png"


const Simplify = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "80px 64px",
        boxSizing: "border-box",
        gap: "80px",
        maxWidth: "100%",
        textAlign: "center",
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
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "768px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
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
              gap: "16px",
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
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "inline-block",
                  minWidth: "69px",
                }}
              >
                Simplify
              </div>
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
              Streamline Your Property Buying or Selling Process
            </h1>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "18px",
              lineHeight: "150%",
            }}
          >
            Our website provides a step-by-step guide to help you seamlessly
            navigate the process of buying or selling property. From finding the
            perfect property to closing the deal, we've got you covered.
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            justifyContent: "center",
            gap: "48px",
            maxWidth: "100%",
          }}
        >
          <Column
            placeholderImage={placeholderImage1}
            heading="Find Your Dream"
            heading2 = "Property"
            text="Browse through a wide selection of properties"
            text2 =  "that match your preferences and requirements."
            
          />
          <Column
            placeholderImage={placeholderImage2}
            heading="Connect with Trusted"
            heading2 = "Agents"
            text="Our platform connects you with experienced and "
            text2 ="reliable real estate agents who will guide you"
            text3 =  "through the process."
            
          />
          <Column
            placeholderImage={placeholderImage3}
            heading="Negotiate and Close the" 
            heading2 = "Deal"
            text="Our experts will assist you in negotiating the best"
            text2 ="terms and ensuring a smooth closing process."
          />
        </div>
        <div style={{ width: "200px", display: "none" }} />
      </div>
    </div>
  );
};

export default Simplify;
