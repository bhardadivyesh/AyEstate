import mainImage from "../../assets/DetailProperty/firstImage.png"
const Product = ({ placeholderImage, heading, text, price }) => {
  console.log(placeholderImage);
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
  const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(numericPrice);
  return (
    <div
      style={{
        height: "522.8px",
        width: "calc(20% - 20px)", 
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        minWidth: "289px",
        textAlign: "center",
        fontSize: "18px",
        color: "#000",
        fontFamily: "Sora",
        marginBottom: "20px", 
        marginLeft : "60px"
      }}
    >
      {placeholderImage &&
      <img
        style={{
          alignSelf: "stretch",
          flex: "1",
          position: "relative",
          borderRadius: "12px",
          maxWidth: "100%",
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
        }}
        alt=""
        src={`data:image/jpeg;base64,${placeholderImage}`}
      />
    }
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
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
            {heading}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "14px",
              lineHeight: "150%",
            }}
          >
            {text}
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "20px",
            lineHeight: "150%",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          {formattedPrice}
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid #000",
          padding: "6px 20px",
          backgroundColor: "transparent",
          alignSelf: "stretch",
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
            fontFamily: "Roboto",
            fontWeight: "normal",
            color: "#000",
            textAlign: "left",
            display: "inline-block",
            minWidth: "88px",
          }}
          
        >
          View Details
        </div>
      </button>
    </div>
  );
};
export default Product;
