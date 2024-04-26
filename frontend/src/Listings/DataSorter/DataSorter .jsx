import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/context";

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
  currentItems,
}) => {
  const dataFinderStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", propBackgroundImage),
    };
  }, [propBackgroundImage]);
  const value = useContext(MyContext)
  const navigate = useNavigate();
  const handleProductClick = (productData) => {
    console.log();
    value.setDetailPropertyData(productData)

    navigate("/detailProperty");
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "16px",
        width: "100%",
      }}
    >
      {currentItems?.map((items, index) => {
        return (
          <div
            onClick={() => handleProductClick(items)}
            key={index}
            style={{
              flexBasis: "calc(50% - 8px)",
              boxSizing: "border-box",
              marginBottom: "16px",
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
                backgroundImage: `url(http://localhost:1337${items?.image[0]?.url})`,
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
                // gap: "8px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "120%",
                  fontWeight: "600",
                  fontFamily: "Sora",
                  fontSize: "32px",
                }}
              >
                {`$${items.price}`}
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
                    fontFamily: "Sora",
                    fontSize: "26px",
                  }}
                >
                  {items.category} {items.name}
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: "14px",
                    lineHeight: "150%",
                    color: "#333",
                    fontFamily: "Sora",
                    fontWeight: "normal",
                    fontSize: "14px",
                  }}
                >
                  {items.location}
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
                    {items.category}
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
                    {items.washbasin}
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
                    {items.bed}
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
                    {items.size}
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
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DataSorter;
