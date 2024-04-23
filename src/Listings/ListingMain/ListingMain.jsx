import NavigationBar from "../../Home/../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent from "../FrameComponent/FrameComponent ";
import DataSorter from "../DataSorter/DataSorter ";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import arrowDown from "../../assets/arrow-down.jpg";
import arrowDown1 from "../../assets/arrow-down2.png";
import rightArrow from "../../assets/rightArrow.png";
import homeFrame from "../../assets/Frame.jpg";
import vectorimg from "../../assets/Vectorimg.png";
import frames from "../../assets/Frames.png";
import vector2 from "../../assets/vector2.png";
import { useEffect, useState } from "react";
import axios from "axios";

const ListingMain = () => {
  const [productData, setProductData] = useState();
  // filtering logic
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [starMatched,setStarMatched] = useState([])
  const [LuxuryBuilding,setLuxuryBuilding] = useState([])
  const [bestSeller,setBestSeller] = useState([])
  const [discount,setDiscount] = useState([])



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

  const handleLocationChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedLocations((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedLocations((prevSelected) =>
        prevSelected.filter((loc) => loc !== value)
      );
    }
  };
  const handleStarChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setStarMatched((prevSelected) => [...prevSelected, value]);
    } else {
      setStarMatched((prevSelected) =>
        prevSelected.filter((cat) => cat !== value)
      );
    }
  };
  const handleBuldingChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLuxuryBuilding((prevSelected) => [...prevSelected, value]);
    } else {
      setLuxuryBuilding((prevSelected) =>
        prevSelected.filter((cat) => cat !== value)
      );
    }
  };
  const handleBestSeller = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setBestSeller((prevSelected) => [...prevSelected, value]);
    } else {
      setBestSeller((prevSelected) =>
        prevSelected.filter((cat) => cat !== value)
      );
    }
  };
  const handleDiscount = (e) => {
    const { value, checked } = e.target;
    if (checked && value !== "" && value !== null && value !== undefined) {
      setDiscount((prevSelected) => [...prevSelected, value]);
    } else {
      setDiscount((prevSelected) =>
        prevSelected.filter((cat) => cat !== value)
      );
    }
  };
 

  const filteredProperties = productData?.filter((property) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(property.category);
    const locationMatch =
      selectedLocations.length === 0 ||
      selectedLocations.includes(property.location);
    const starMatche =
      starMatched.length === 0 ||
      property.star >= 4 ||
      starMatched.includes(property.star); 
    const buildingmatched =
      LuxuryBuilding.length === 0 ||
      LuxuryBuilding.includes(property.LuxuryBuilding);
    const bestSellerMatched =
      bestSeller.length === 0 ||
      bestSeller.includes(property.BestSeller);
    const discountMatched =
      discount.length === 0 ||
      discount.includes(property.Discount);
    return categoryMatch && locationMatch && starMatche && buildingmatched && bestSellerMatched && discountMatched;
  });
console.log(filteredProperties);
  // pagination logic
  const firstPage = () => {
    setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  const data = productData;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Determine the indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Get the items for the current page
  const currentItems = data?.slice(startIndex, endIndex);
  
  // Conditionally render pagination controls
  const generateButtons = () => {
    const buttons = [];
    for (let i = 3; i <= currentPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{
            height: "45px",
            flex: "1",
            borderRadius: "8px",
            border: "1px solid #e4e9ee",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "11px 8px 11px 9px",
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
  // api call
  useEffect(() => {
    axios.get("http://localhost:1337/listings").then((res) => {
      setProductData(res.data);
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
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
          <FrameComponent />
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
                        onChange={handleStarChange}
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
                        onChange={handleBuldingChange}
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
                        onChange={handleBestSeller}
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
                        onChange={handleDiscount}
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
                        checked={selectedLocations.includes("Bandung")}
                        onChange={handleLocationChange}
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
                        checked={selectedLocations.includes("Jakarta")}
                        onChange={handleLocationChange}
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
                        checked={selectedLocations.includes("Bali")}
                        onChange={handleLocationChange}
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
                        checked={selectedLocations.includes("Medan")}
                        onChange={handleLocationChange}
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
                        checked={selectedLocations.includes("Surabaya")}
                        onChange={handleLocationChange}
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
                        checked={selectedLocations.includes("Jogja")}
                        onChange={handleLocationChange}
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
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      color: "#818b9c",
                      display: "inline-block",
                      minWidth: "122px",
                      zIndex: "1",
                    }}
                  >
                    Minimum price
                  </div>
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
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "26px",
                      color: "#818b9c",
                      display: "inline-block",
                      minWidth: "125px",
                      zIndex: "1",
                    }}
                  >
                    Maximum price
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
                      display: "inline-block",
                      minWidth: "98px",
                    }}
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
                  <div style={{ position: "relative", lineHeight: "26px" }}>
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
                  >{`> $50,000`}</div>
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
              {productData?.map((items, index) => {
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
                        display: "grid",
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
                          propBackgroundImage={`url(http://localhost:1337${items.image[0].url})`}
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

      <div
        style={{
          width: "2122px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 745px 29px",
          boxSizing: "border-box",
          maxWidth: "85%",
        }}
      >
        {productData?.length > 5 && (
          <div
            style={{
              height: "44px",
              width: "100pc",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
              fontFamily: "Sora, sans-serif",
              fontWeight: "regular",
              fontSize: "16px",
            }}
          >
            <button
              onClick={firstPage}
              style={{
                height: "45px",
                // flex: "0.2308",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "11px 18px 11px 19px",
                color: "#1d9e34",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              style={{
                height: "45px",
                // flex: "0.3654",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "11px 16px 11px 17.5px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
              disabled={totalPages == 1}
            >
              2
            </button>
            {currentPage !== totalPages && generateButtons()}

            <div
              style={{
                height: "45px",
                // flex: "0.4615",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "11px 15px 11px 16px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              ...
            </div>
            <button
              onClick={lastPage}
              style={{
                height: "45px",
                // flex: "1",
                borderRadius: "8px",
                border: "1px solid #e4e9ee",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "11px 8px 11px 9px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              {totalPages}
            </button>

            <div
              style={{
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "10px",
              }}
            >
              <img
                style={{
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  objectFit: "contain",
                }}
                alt=""
                src={rightArrow}
                onClick={
                  currentPage !== totalPages
                    ? () => setCurrentPage(currentPage + 1)
                    : undefined
                }
                disabled={currentPage === totalPages}
              />
            </div>
          </div>
        )}
      </div>
      <Navigation1 />
    </div>
  );
};
export default ListingMain;
