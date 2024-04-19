const Column = ({ placeholderImage, heading,heading2, text,text2,text3 }) => {
    return (
      <div
        style={{
          flex: "1",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
          minWidth: "304px",
          maxWidth: "100%",
          textAlign: "center",
          fontSize: "32px",
          color: "#000",
          fontFamily: "Sora",
        }}
      >
        <img
          style={{
            alignSelf: "stretch",
            height: "240px",
            position: "relative",
            borderRadius: "12px",
            maxWidth: "100%",
            overflow: "hidden",
            flexShrink: "0",
            objectFit: "cover",
          }}
          alt=""
          src={placeholderImage}
        />
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "7px",
          }}
        >
          
          <h2
           style={{
            margin: "0",
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "50%",
            fontFamily: "Sora", 
            fontWeight: "bold", 
          }}
          
          >
            {heading}
          </h2>
          <h2
           style={{
            margin: "0",
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "170%",
            fontFamily: "Sora",
            fontWeight: "bold", 
            paddingBottom : "20px"
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
            fontFamily: "Sora", 
            fontWeight: "normal",
            gap : "1px"
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
                fontFamily: "Sora", 
                fontWeight: "normal",
              }}
          >
            {text2}
          </div>
          <div
             style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "16px", 
              lineHeight: "60%", 
              fontFamily: "Sora", 
              fontWeight: "normal",
            }}
          >
            {text3}
          </div>
        </div>
      </div>

        )}
        export default Column;