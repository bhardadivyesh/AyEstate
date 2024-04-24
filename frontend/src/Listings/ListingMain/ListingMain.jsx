import NavigationBar from "../../Home/../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent from "../FrameComponent/FrameComponent ";
import DataSorter from "../DataSorter/DataSorter ";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import arrowDown from "../../assets/arrow-down.jpg";
import arrowDown1 from "../../assets/arrow-down2.png";
import homeFrame from "../../assets/Frame.jpg";
import vectorimg from "../../assets/Vectorimg.png";
import frames from "../../assets/Frames.png";
import vector2 from "../../assets/vector2.png";
import { useEffect, useState } from "react";
import axios from "axios";

const ListingMain = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  let minPriceValue = parseInt(minPrice);
  let maxPriceValue = parseInt(maxPrice);

  const handleMinInputChange = (event) => {
    setMinPrice(event.target.value);
  };
  const handleMaxChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const handlePriceClick = (...args) => {
    if (args.length == 2) {
      setMinPrice(args[0]);
      setMaxPrice(args[1]);
    } else {
      setMinPrice(args[0]);
    }
  };
  const [productData, setProductData] = useState();
  // api call
  useEffect(() => {
    axios.get("http://localhost:1337/listings").then((res) => {
      setProductData(res.data);
    });
  }, []);
  // filtering logic
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [starMatched, setStarMatched] = useState([]);
  const [LuxuryBuilding, setLuxuryBuilding] = useState([]);
  const [bestSeller, setBestSeller] = useState([]);
  const [discount, setDiscount] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((cat) => cat !== value)
      );
    }
  };
  const handleCheckboxChange = (value) => {
    setStarMatched(value === "Star" ? value : []);
    setLuxuryBuilding(value === "Luxury Building" ? value : []);
    setBestSeller(value === "Best Seller" ? value : []);
    setDiscount(value === "discount" ? value : []);
    setSelectedLocation(value === selectedLocation ? null : value);
  };
  const filteredProperties = productData?.filter((property) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(property.category);
    const locationMatch =
      selectedLocation?.length === 0 ||
      selectedLocation?.includes(property.location);
      const starMatche =
      starMatched.length === 0 ||
      property.star >= 4 ||
      starMatched.includes(property.star);
      console.log(starMatche.length);
    const buildingmatched =
      LuxuryBuilding.length === 0 ||
      LuxuryBuilding.includes(property.LuxuryBuilding);
    const bestSellerMatched =
      bestSeller.length === 0 || bestSeller.includes(property.BestSeller);
    const discountMatched =
      discount.length === 0 || discount.includes(property.Discount);
    const priceMatched =
      isNaN(minPriceValue) ||
      isNaN(maxPriceValue) ||
      (minPriceValue <= property.price && maxPriceValue >= property.price);
    return (
      categoryMatch &&
      locationMatch &&
      starMatche &&
      buildingmatched &&
      bestSellerMatched &&
      discountMatched &&
      priceMatched
    );
  });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalItems = filteredProperties?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  let startIndex, endIndex;
  if (typeof totalItems === "number" && !isNaN(totalItems)) {
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  } else {
    startIndex = 0;
    endIndex = 0;
  }
  const currentItems = filteredProperties?.slice(startIndex, endIndex);
  const generatePageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className="specificHeightButton"
          style={{
            height: "45px",
            width: "45px",
            borderRadius: "8px",
            border: "1px solid #e4e9ee",
            boxSizing: "border-box",
            cursor: "pointer",
            backgroundColor: i === currentPage ? "#f9f9f9" : "#ffffff",
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "48px",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center",
        fontSize: "14px",
        color: "#818b9c",
        fontFamily: "Sora",
      }}
    >
      <NavigationBar />
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 20px 35px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            width: "1521px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "52px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "16px",
            color: "#0b0f0e",
            fontFamily: "Sora",
          }}
        >
          <FrameComponent productCount={productData?.length} />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "40px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                height: "1239px",
                width: "300px",
                borderRadius: "12px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "24px 23px 323px 24px",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "279px",
                  height: "1239px",
                  position: "relative",
                  borderRadius: "12px",
                  border: "1px solid #e4e9ee",
                  boxSizing: "border-box",
                  display: "none",
                }}
              />
              <h3
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "24px",
                  letterSpacing: "-0.2px",
                  lineHeight: "140%",
                  fontWeight: "600",
                  fontFamily: "'Sora",
                  display: "inline-block",
                  minWidth: "112px",
                  zIndex: "1",
                }}
              >
                Filter Option
              </h3>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 7px",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: "1",
                    position: "relative",
                    borderTop: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    zIndex: "1",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 8px",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "12px",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                    }}
                  >
                    <b
                      style={{
                        position: "relative",
                        letterSpacing: "-0.2px",
                        lineHeight: "140%",
                        display: "inline-block",
                        minWidth: "82px",
                        fontFamily: "Sora, sans-serif",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      Best Filter
                    </b>
                    <img
                      style={{
                        height: "12px",
                        width: "12px",
                        position: "relative",
                      }}
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "12px",
                      color: "#818b9c",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: "normal",
                      fontSize: "16px",
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Star"
                        checked={starMatched.includes("Star")}
                        onChange={() => handleCheckboxChange("Star")}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "4px",
                        }}
                      >
                        <img
                          style={{
                            height: "18px",
                            width: "18px",
                            position: "relative",
                          }}
                          loading="lazy"
                          alt=""
                          src={star}
                        />
                        <div
                          style={{
                            position: "relative",
                            lineHeight: "26px",
                            display: "inline-block",
                            minWidth: "127px",
                          }}
                        >
                          4 stars or upper
                        </div>
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Luxury Building"
                        checked={LuxuryBuilding.includes("Luxury Building")}
                        onChange={() => handleCheckboxChange("Luxury Building")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "125px",
                        }}
                      >
                        Luxury Building
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Best Seller"
                        checked={bestSeller.includes("Best Seller")}
                        onChange={() => handleCheckboxChange("Best Seller")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "86px",
                        }}
                      >
                        Best Seller
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="discount"
                        checked={discount.includes("discount")}
                        onChange={() => handleCheckboxChange("discount")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "74px",
                        }}
                      >
                        Discount
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 7px",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: "1",
                    position: "relative",
                    borderTop: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    zIndex: "1",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 8px",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "12px",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                    }}
                  >
                    <b
                      style={{
                        position: "relative",
                        letterSpacing: "-0.2px",
                        lineHeight: "140%",
                        display: "inline-block",
                        minWidth: "72px",
                        fontFamily: "Sora, sans-serif",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      Location
                    </b>
                    <img
                      style={{
                        height: "12px",
                        width: "12px",
                        position: "relative",
                      }}
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "12px",
                      color: "#818b9c",
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Bandung"
                        checked={selectedLocation === "Bandung"}
                        onChange={() => handleCheckboxChange("Bandung")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "73px",
                        }}
                      >
                        Bandung
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Jakarta"
                        checked={selectedLocation === "Jakarta"}
                        onChange={() => handleCheckboxChange("Jakarta")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "61px",
                        }}
                      >
                        Jakarta
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Bali"
                        checked={selectedLocation === "Bali"}
                        onChange={() => handleCheckboxChange("Bali")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "30px",
                        }}
                      >
                        Bali
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Medan"
                        checked={selectedLocation === "Medan"}
                        onChange={() => handleCheckboxChange("Medan")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "55px",
                        }}
                      >
                        Medan
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Surabaya"
                        checked={selectedLocation === "Surabaya"}
                        onChange={() => handleCheckboxChange("Surabaya")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "75px",
                        }}
                      >
                        Surabaya
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
                      <input
                        style={{
                          margin: "0",
                          height: "24px",
                          width: "24px",
                          position: "relative",
                        }}
                        type="checkbox"
                        value="Jogja"
                        checked={selectedLocation === "Jogja"}
                        onChange={() => handleCheckboxChange("Jogja")}
                      />
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "26px",
                          display: "inline-block",
                          minWidth: "47px",
                        }}
                      >
                        Jogja
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      fontWeight: "500",
                      fontFamily: "'Clash Grotesk'",
                      color: "#1d9e34",
                      display: "inline-block",
                      minWidth: "61px",
                    }}
                  >
                    Show All
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 7px",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: "1",
                    position: "relative",
                    borderTop: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    zIndex: "1",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 8px",
                  gap: "10.3px",
                  color: "#818b9c",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "20px",
                    zIndex: "1",
                    color: "#0b0f0e",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      letterSpacing: "-0.2px",
                      lineHeight: "140%",
                      display: "inline-block",
                      minWidth: "76px",
                    }}
                  >
                    Category
                  </b>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                      }}
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <input
                    style={{ margin: "0", height: "25px", width: "24px" }}
                    type="checkbox"
                    value="House"
                    checked={selectedCategories.includes("House")}
                    onChange={handleCategoryChange}
                  />
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 20px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "53px",
                        zIndex: "1",
                      }}
                    >
                      House
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "6px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      alt=""
                      src={arrowDown1}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <input
                    style={{ margin: "0", height: "25px", width: "24px" }}
                    type="checkbox"
                    value="Villa"
                    checked={selectedCategories.includes("Villa")}
                    onChange={handleCategoryChange}
                  />
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 20px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "35px",
                        zIndex: "1",
                      }}
                    >
                      Villa
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      alt=""
                      src={arrowDown1}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <input
                    style={{ margin: "0", height: "25px", width: "24px" }}
                    type="checkbox"
                    value="Apartment"
                    checked={selectedCategories.includes("Apartment")}
                    onChange={handleCategoryChange}
                  />
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 20px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "89px",
                        zIndex: "1",
                      }}
                    >
                      Apartment
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      alt=""
                      src={arrowDown1}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <input
                    style={{ margin: "0", height: "25px", width: "24px" }}
                    type="checkbox"
                    value="Hotel"
                    checked={selectedCategories.includes("Hotel")}
                    onChange={handleCategoryChange}
                  />
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 20px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "45px",
                        zIndex: "1",
                      }}
                    >
                      Hotel
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      alt=""
                      src={arrowDown1}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "8px",
                  }}
                >
                  <input
                    style={{ margin: "0", height: "25px", width: "24px" }}
                    type="checkbox"
                    value="Real Estate"
                    checked={selectedCategories.includes("Real Estate")}
                    onChange={handleCategoryChange}
                  />
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 20px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "89px",
                        zIndex: "1",
                      }}
                    >
                      Real Estate
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                        zIndex: "1",
                      }}
                      alt=""
                      src={arrowDown1}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    lineHeight: "26px",
                    fontWeight: "500",
                    fontFamily: "'Clash Grotesk'",
                    color: "#1d9e34",
                    zIndex: "1",
                  }}
                >
                  All Categories
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 7px",
                }}
              >
                <div
                  style={{
                    height: "1px",
                    flex: "1",
                    position: "relative",
                    borderTop: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    zIndex: "1",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "20px",
                    zIndex: "1",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      letterSpacing: "-0.2px",
                      lineHeight: "140%",
                      display: "inline-block",
                      minWidth: "97px",
                    }}
                  >
                    Price Range
                  </b>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "5px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: "12px",
                        height: "12px",
                        position: "relative",
                      }}
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "9px 16px",
                    gap: "11px",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      height: "45px",
                      width: "231px",
                      position: "relative",
                      borderRadius: "12px",
                      border: "1px solid #e4e9ee",
                      boxSizing: "border-box",
                      display: "none",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "37px",
                        zIndex: "1",
                        fontFamily: "Sora, sans-serif",
                        fontWeight: "normal",
                        fontSize: "16px",
                      }}
                    >
                      USD
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 0px 0px",
                      }}
                    >
                      <img
                        style={{
                          width: "12px",
                          height: "12px",
                          position: "relative",
                          zIndex: "1",
                        }}
                        alt=""
                        src={arrowDown}
                      />
                    </div>
                    <div
                      style={{
                        height: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "1px 0px 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          width: "1px",
                          height: "25px",
                          position: "relative",
                          borderRight: "1px solid #e4e9ee",
                          boxSizing: "border-box",
                          zIndex: "1",
                        }}
                      />
                    </div>
                  </div>
                  <input
                    type="number"
                    step="1"
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      color: "#818b9c",
                      display: "inline-block",
                      minWidth: "122px",
                      zIndex: "1",
                      border: "none",
                      appearance: "textfield",
                    }}
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div
                  style={{
                    height: "45px",
                    borderRadius: "12px",
                    border: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "9px 16px",
                    gap: "11px",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      height: "45px",
                      width: "231px",
                      position: "relative",
                      borderRadius: "12px",
                      border: "1px solid #e4e9ee",
                      boxSizing: "border-box",
                      display: "none",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "26px",
                        display: "inline-block",
                        minWidth: "37px",
                        zIndex: "1",
                      }}
                    >
                      USD
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 0px 0px",
                      }}
                    >
                      <img
                        style={{
                          width: "12px",
                          height: "12px",
                          position: "relative",
                          zIndex: "1",
                        }}
                        alt=""
                        src={arrowDown}
                      />
                    </div>
                    <div
                      style={{
                        height: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "1px 0px 0px",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          width: "px",
                          height: "25px",
                          position: "relative",
                          borderRight: "1px solid #e4e9ee",
                          boxSizing: "border-box",
                          zIndex: "1",
                        }}
                      />
                    </div>
                  </div>
                  <input
                    type="number"
                    step="1"
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      color: "#818b9c",
                      display: "inline-block",
                      minWidth: "146px",
                      zIndex: "1",
                      width: "146px",
                    }}
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={handleMaxChange}
                  />
                </div>
                <div
                  style={{
                    height: "49px",
                    borderRadius: "12px",
                    border: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "11px 15px 11px 16px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      display: "inline-block",
                      minWidth: "98px",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePriceClick(0, 5000)}
                  >
                    $0 - $5,000
                  </div>
                </div>
                <div
                  style={{
                    height: "49px",
                    borderRadius: "12px",
                    border: "1px solid #e4e9ee",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "11px 15px 11px 16px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePriceClick(5000, 50000)}
                  >
                    $5,000 - $50,000
                  </div>
                </div>
                <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid #e4e9ee",
                    padding: "11px 15px 11px 16px",
                    backgroundColor: "transparent",
                    height: "49px",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: "16px",
                      lineHeight: "26px",
                      fontFamily: "Sora",
                      color: "#0b0f0e",
                      textAlign: "left",
                      display: "inline-block",
                      minWidth: "86px",
                    }}
                    onClick={() => handlePriceClick(50000)}
                  >
                    {`> $50,000`}
                  </div>
                </button>
              </div>
            </div>
            <div
              style={{
                width: "1190px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "24px",
              }}
            >
              {currentItems?.map((items, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={index}
                      style={{
                        flex: "1",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "40.9px",
                        maxWidth: "calc(100% - 319px)",
                        fontSize: "22px",
                        color: "#000",
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <div
                        style={{
                          width: "1190px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "24px",
                        }}
                      >
                        <DataSorter
                          key={items}
                          placeholderImage="/placeholder-image@2x.png"
                          dataSeparater={heart}
                          frame={homeFrame}
                          frame1={vectorimg}
                          progressBarParent={frames}
                          radioButtonParent={vector2}
                          category={items.category}
                          washbasin={items.washbasin}
                          bed={items.bed}
                          size={items.size}
                          name={items.name}
                          location={items.location}
                          propBackgroundImage={`url(http://localhost:1337${items?.image[0]?.url})`}
                          price={`$${items.price}`}
                        />
                        {productData[index + 1] && (
                          <DataSorter
                            key={productData[index + 1].name}
                            placeholderImage="/placeholder-image@2x.png"
                            dataSeparater={heart}
                            frame={homeFrame}
                            frame1={vectorimg}
                            progressBarParent={frames}
                            radioButtonParent={vector2}
                            category={productData[index + 1].category}
                            washbasin={productData[index + 1].washbasin}
                            bed={productData[index + 1].bed}
                            size={productData[index + 1].size}
                            name={productData[index + 1].name}
                            location={productData[index + 1].location}
                            propBackgroundImage={`url(http://localhost:1337${
                              productData[index + 1].image[0].url
                            })`}
                            price={`$${productData[index + 1].price}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </main>
      <div>
        <div
          style={{
            height: "44px",
            width: "1000px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          {currentPage > 1 && (
            <button
              onClick={previousPage}
              style={{
                height: "45px",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                padding: "11px 18px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              Previous
            </button>
          )}

          {generatePageButtons()}

          {currentPage < totalPages && (
            <button
              onClick={nextPage}
              style={{
                height: "45px",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                padding: "11px 18px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
      <Navigation1 />
    </div>
  );
};
export default ListingMain;
