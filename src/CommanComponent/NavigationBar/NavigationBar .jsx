import { Link } from "react-router-dom";
// const NavigationBar = () => {
//     return (
//       <>
//       <header
//         style={{
//           width: "100%",
//           margin: "0",
//           position: "absolute",
//           top: "0px",
//           right: "0px",
//           left: "10px",
//           overflow: "hidden",
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "flex-start",
//           justifyContent: "center",
//           padding: "22px 20px",
//           boxSizing: "border-box",
//           gap: "370px",
//           maxWidth: "100%",
//           zIndex: "1",
//           textAlign: "left",
//           fontSize: "32px",
//           color: "#111",
//           fontFamily: "Playball",
//         }}
//       >
//         <div
//           style={{
//             width: "159px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             padding: "7px 20px 0px 0px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h1
//             style={{
//               marginLeft: "32px",
//               position: "relative",
//               fontSize: "inherit",
//               lineHeight: "42px",
//               fontWeight: "400",
//               fontFamily: "inherit",
//               display: "inline-block",
//               minWidth: "113px",
//               gap : "20px"
//             }}
//           >
//             AyEstate
//           </h1>
//         </div>
//         <nav
//           style={{
//             margin: "0",
//             width: "549px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             padding: "16px 0px 0px",
//             boxSizing: "border-box",
//             maxWidth: "100%",
//           }}
//         >
//           <nav
//             style={{
//               margin: "0",
//               alignSelf: "stretch",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "flex-start",
//               justifyContent: "space-between",
//               gap: "20px",
//               whiteSpace: "nowrap",
//               textAlign: "left",
//               fontSize: "18px",
//               color: "#7f879e",
//               fontFamily: "Sora",
//             }}
//           >
//             <Link 
//             to="/"
//               style={{
//                 position: "relative",
//                 lineHeight: "130%",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "56px",
//               }}
//             >
//               Home
//             </Link>
//             <Link
//             to="/listing"
//               style={{
//                 position: "relative",
//                 lineHeight: "130%",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "74px",
//               }}
//             >
//               Listings
//             </Link>
//             <div
//               style={{
//                 position: "relative",
//                 lineHeight: "130%",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "90px",
//               }}
//             >
//               Company
//             </div>
//             <div
//               style={{
//                 position: "relative",
//                 lineHeight: "130%",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "43px",
//               }}
//             >
//               Blog
//             </div>
//             <div
//               style={{
//                 position: "relative",
//                 lineHeight: "130%",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "86px",
//               }}
//             >
//               About Us
//             </div>
//           </nav>
//         </nav>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "flex-start",
//             justifyContent: "flex-start",
//             fontSize: "16px",
//             fontFamily: "Sora",
//           }}
//         >
//           <div
//             style={{
//               borderRadius: "12px",
//               backgroundColor: "#b7e08a",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "flex-start",
//               justifyContent: "flex-start",
//               padding: "17.5px 34px",
//               whiteSpace: "nowrap",
//               marginLeft : "100px"
//             }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 lineHeight: "21px",
//                 fontWeight: "600",
//                 display: "inline-block",
//                 minWidth: "92px",
//                 // paddingLeft : "10px"
//               }}
//             >
//               Contact Us
//             </div>
//           </div>
//         </div>
//       </header>
//       </>
//     );
//   };
const NavigationBar = () => {
  return (
    <header
    style={{
       width: "100%",
       margin: "0",
       position: "absolute",
       top: "0px",
       right: "0px",
       left: "10px",
       overflow: "hidden",
       display: "flex",
       flexDirection: "row",
       alignItems: "flex-start",
       justifyContent: "center",
       padding: "22px 20px",
       boxSizing: "border-box",
       gap: "370px",
       maxWidth: "100%",
       zIndex: "1",
       textAlign: "left",
       fontSize: "32px",
       color: "#111",
       fontFamily: "Playball",
      }}
    >
      <div
        style={{
          width: "159px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "7px 20px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            lineHeight: "42px",
            fontWeight: "400",
            fontFamily: "inherit",
            display: "inline-block",
            minWidth: "113px",
            whiteSpace: "nowrap",
          }}
        >
          AyEstate
        </h1>
      </div>
      <nav
        style={{
          margin: "0",
          width: "549px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "16px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <nav
          style={{
            margin: "0",
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
            textAlign: "left",
            fontSize: "18px",
            color: "#7f879e",
            fontFamily: "Sora",
          }}
        >
          <Link
          to="/"
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "56px",
            }}
          >
            Home
          </Link>
          <Link
          to="/listing"
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "74px",
            }}
          >
            Listings
          </Link>
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "90px",
            }}
          >
            Company
          </div>
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "43px",
            }}
          >
            Blog
          </div>
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "86px",
              whiteSpace: "nowrap",
            }}
          >
            About Us
          </div>
        </nav>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          fontSize: "16px",
          fontFamily: "Sora",
        }}
      >
        <div
          style={{
            borderRadius: "12px",
            backgroundColor: "#b7e08a",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "17.5px 34px",
            whiteSpace: "nowrap",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "21px",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "92px",
            }}
          >
            Contact Us
          </div>
        </div>
      </div>
    </header>
  )}
  // export default   
  export default NavigationBar 