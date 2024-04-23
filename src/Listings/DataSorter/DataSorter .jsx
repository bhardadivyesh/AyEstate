import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const DataSorter = ({
  placeholderImage,
  dataSeparater,
  frame,
  frame1,
  progressBarParent,
  radioButtonParent,
  propBackgroundImage,
  category,
  washbasin,
  bed,
  size,
  price,
  name,
  location
}) => {

  const dataFinderStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", propBackgroundImage),
    };
  }, [propBackgroundImage]);

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        maxWidth: "50%",
        textAlign: "left",
        fontSize: "22px",
        color: "#000",
        fontFamily: "Sora",
        
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "16px 24px",
          boxSizing: "border-box",
          backgroundImage: "url('/data-finder@3x.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          minHeight: "400px",
          maxWidth: "100%",
          gap: "20px",
          ...dataFinderStyle,
        }}
      >
        <img
          style={{
            height: "400px",
            width: "429px",
            position: "relative",
            borderRadius: "12px",
            objectFit: "cover",
            display: "none",
            maxWidth: "100%",
          }}
          alt=""
          src={placeholderImage}
        />
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "8px 20px",
            backgroundColor: "rgba(17, 17, 17, 0.75)",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "14px",
              lineHeight: "160%",
              fontWeight: "600",
              fontFamily: "Sora",
              color: "#fff",
              textAlign: "left",
              display: "inline-block",
              minWidth: "64px",
            }}
          >
            Featured
          </div>
        </button>
        <img
          style={{
            height: "36px",
            width: "36px",
            position: "relative",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src={dataSeparater}
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
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
          {price}
          {/* $300,000,000 / year / leasehold */}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "4px",
            fontSize: "18px",
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
            {category} {name}
            
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "14px",
              lineHeight: "150%",
              color: "#333",
            }}
          >
            {location}
            {/* Bali, Indonesia */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "14px",
            maxWidth: "100%",
            fontSize: "14px",
            color: "#a9a9a9",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={frame}
            />
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "31px",
              }}
            >
              {category}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={frame1}
            />
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "9px",
              }}
            >
              {washbasin}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={progressBarParent}
            />
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "9px",
              }}
            >
              {bed}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <img
              style={{
                height: "24px",
                width: "24px",
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={radioButtonParent}
            />
            <div
              style={{
                position: "relative",
                display: "inline-block",
                minWidth: "58px",
              }}
            >
              {size}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  )}
  export default DataSorter;