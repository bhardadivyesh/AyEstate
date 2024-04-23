const Column1 = ({ frame162767, heading,heading2, text,text2,text3 }) => {
    return (
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          minWidth: "304px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "32px",
          color: "#000",
          fontFamily: "Sora",
        }}
      >
        <img
          style={{ width: "76px", height: "76px", position: "relative" }}
          loading="lazy"
          alt=""
          src={frame162767}
        />
        <h2
         style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "32px",
          lineHeight: "130%",
          fontWeight: "bold", 
          fontFamily: "Sora", 
        }}
        
        >
          {heading}
        </h2>
        <h2
            style={{
              margin: "0",
              alignSelf: "stretch",
              position: "relative",
              fontSize: "32px",
              lineHeight: "130%",
              fontWeight: "bold", 
              fontFamily: "Sora", 
            }}
            
        >
          {heading2}
        </h2>
        <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          fontSize: "16px", 
          lineHeight: "100%",
          fontWeight: "normal", 
          fontFamily: "Sora", 
        }}
        >
          {text}
        </div>
        <div
         style={{
          alignSelf: "stretch",
          position: "relative",
          fontSize: "16px", 
          lineHeight: "100%",
          fontWeight: "normal", 
          fontFamily: "Sora", 
        }}
        >
          {text2}
        </div>
        <div
         style={{
          alignSelf: "stretch",
          position: "relative",
          fontSize: "16px", 
          lineHeight: "100%",
          fontWeight: "normal", 
          fontFamily: "Sora", 
        }}
        >
          {text3}
        </div>
      </div>
    )}
export default Column1;