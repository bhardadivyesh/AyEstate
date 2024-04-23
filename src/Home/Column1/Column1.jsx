const Column1 = ({ heading, text,frame162767,heading2,text2,text3 }) => {
    return (
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "9px",
          textAlign: "left",
          fontSize: "32px",
          color: "#000",
          fontFamily: "Sora",
        }}
      >
        <img
          style={{ width: "76px", position: "relative", height: "76px" }}
          alt=""
          src={frame162767}
        />
        <b
         styles = {{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "130%",
            fontFamily: "Sora",
            fontWeight: "bold",
            fontSize: 32
          }}
        >
          {heading}
        </b>
        <b
         style = {{
            alignSelf: "stretch",
            position: "relative",
            lineHeight: "130%",
            fontFamily: "Sora",
            fontWeight: "bold",
            fontSize: 32,
            marginBottom : "30px"
          }}
        >
          {heading2}
        </b>
        <div
         style = {{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "20px",
            lineHeight: "100%",
            fontFamily: "Sora",
            fontWeight: "regular" 
          }}
        >
          {text}
        </div>
        <div
          style = {{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "20px",
            lineHeight: "100%",
            fontFamily: "Sora",
            fontWeight: "regular"
          }}
        >
          {text2}
        </div>
        <div
           style = {{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "20px",
            lineHeight: "100%",
            fontFamily: "Sora",
            fontWeight: "regular"
          }}
        >
          {text3}
        </div>
      </div>
    );
  };
  
  export default Column1;