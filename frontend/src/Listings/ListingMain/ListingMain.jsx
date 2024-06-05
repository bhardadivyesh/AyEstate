import NavigationBar from "../../Home/../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent from "../FrameComponent/FrameComponent ";
import DataSorter from "../DataSorter/DataSorter ";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import heart from "../../assets/heart.png";
import arrowDown from "../../assets/arrow-down.jpg";
import homeFrame from "../../assets/Frame.jpg";
import vectorimg from "../../assets/Vectorimg.png";
import frames from "../../assets/Frames.png";
import vector2 from "../../assets/vector2.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./ListingMain.css";
import MyContext from "../../context/context";
const ListingMain = () => {
  const value = useContext(MyContext);
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
  const [allLocationToggle, setAllLocationToggle] = useState(false);
  const [allCategoryToggle, setAllCategoryToggle] = useState(false);
  const handleShowAllClick = () => {
    setAllLocationToggle(!allLocationToggle);
  };
  const handlaAllCateforiesClick = () => {
    setAllCategoryToggle(!allCategoryToggle);
  };
  const [productData, setProductData] = useState();
  const [locationData, setLocationData] = useState([]);
  const [categoryData,setCategoryData] = useState([])
  const [listingData, setListingData] = useState([]);
  // api call
  useEffect(() => {
    axios.get("http://localhost:3000/get-vendorListing").then((res) => {
      setProductData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/get-location").then((res) => {
      setLocationData(res.data);
    });
    axios.get("http://localhost:3000/get-category").then((res) => {
      setCategoryData(res.data);
    });
    axios.get("http://localhost:3000/get-vendorListing-active").then((res) => {
      setListingData(res.data);
    });
  }, []);
  // filtering logic
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const handleCheckboxChange = (value) => {
    setSelectedLocation(value === selectedLocation ? "" : value);
  };
  const handleCategoryChange = (value) => {
    setSelectedCategories(value == selectedCategories ? "" : value);
  };
  const filteredProperties = listingData?.filter((property) => {
    const locationMatch =
      selectedLocation?.length === 0 ||
      selectedLocation?.includes(property.location);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(property.category);
    const priceMatched =
      isNaN(minPriceValue) ||
      isNaN(maxPriceValue) ||
      (minPriceValue <= property.price && maxPriceValue >= property.price);
    return categoryMatch && locationMatch && priceMatched;
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
          className="generate-pagination-btn"
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
    <div className="main-div-listing-listingMain">
      <NavigationBar />
      <main className="main-tag-listingMain">
        <section className="section-tag-listingMain">
          <FrameComponent
            productCount={productData?.length}
            category={selectedCategories}
            location={selectedLocation}
          />
          <div className="section-firstDiv-listingMain">
            <div
              className="filter-option-firstDiv-listingMain"
              style={{
                height:
                  allCategoryToggle && allLocationToggle
                    ? "1047px"
                    : allCategoryToggle
                    ? "930px"
                    : allLocationToggle
                    ? "980px"
                    : "860px",
              }}
            >
              <div className="filter-option-secondDiv-listingMain" />
              <h3 className="filter-option-listingMain">Filter Option</h3>
              <div className="filter-after-first-div-listingMain">
                <div className="filter-after-second-div-listingMain" />
              </div>
              <div className="filter-after-third-div-listingMain" />
              <div className="filter-after-fourth-div-listingMain">
                <div className="filter-after-fifth-div-listingMain">
                  <div className="filter-after-sixth-div-listingMain">
                    <b className="location-listingMain">Location</b>
                    <img
                      className="down-arrow-listingMain"
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                  <div className="location-after-first-div-listingMain">
                    <div className="location-after-second-div-listingMain">
                      <input
                        className="checkbox-listingMain"
                        type="checkbox"
                        value="Bandung"
                        checked={selectedLocation === "Bandung"}
                        onChange={() => handleCheckboxChange("Bandung")}
                      />
                      <div className="Bandung-div-listingMain">Bandung</div>
                    </div>
                    <div className="Bandung-after-first-div-listingMain">
                      <input
                        className="checkbox-listingMain"
                        type="checkbox"
                        value="Jakarta"
                        checked={selectedLocation === "Jakarta"}
                        onChange={() => handleCheckboxChange("Jakarta")}
                      />
                      <div className="jakarta-div-listingMain">Jakarta</div>
                    </div>
                    <div className="jakarta-afiter-first-div-listingMain">
                      <input
                        className="checkbox-listingMain"
                        type="checkbox"
                        value="Bali"
                        checked={selectedLocation === "Bali"}
                        onChange={() => handleCheckboxChange("Bali")}
                      />
                      <div className="bali-after-first-div-listingMain">
                        Bali
                      </div>
                    </div>
                    {allLocationToggle &&
                      locationData
                        ?.slice(3)
                        .reduce((uniqueLocations, item) => {
                          if (
                            !uniqueLocations.includes(item.locationName) &&
                            item.locationName !== "Bandung" &&
                            item.locationName !== "Jakarta" &&
                            item.locationName !== "Bali"
                          ) {
                            uniqueLocations.push(item.locationName);
                          }
                          return uniqueLocations;
                        }, [])
                        .map((location, index) => {
                          return (
                            <div
                              className="location-loop-first-div-listingMain"
                              key={index}
                            >
                              <input
                                className="checkbox-listingMain"
                                type="checkbox"
                                value={location}
                                checked={selectedLocation === location}
                                onChange={() => handleCheckboxChange(location)}
                              />
                              <div className="location-loop-second-loop-listingMain">
                                {location}
                              </div>
                            </div>
                          );
                        })}
                  </div>
                  <div
                    className="showAll-btn-listingMain"
                    onClick={handleShowAllClick}
                  >
                    {allLocationToggle == true ? "Hide" : "Show All"}
                  </div>
                </div>
              </div>
              <div className="showAll-btn-after-first-div-listingMain">
                <div className="showAll-btn-after-second-div-listingMain" />
              </div>
              <div className="showAll-btn-after-third-div-listingMain">
                <div className="showAll-btn-after-fourth-div-listingMain">
                  <b className="category-listingMain">Category</b>
                  <div className="category-after-first-div-listingMain">
                    <img
                      className="down-arrow-listingMain"
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                </div>
                <div className="category-after-first-div-listingMain">
                  <input
                    className="checkbox-listingMain"
                    type="checkbox"
                    value="House"
                    checked={selectedCategories === "House"}
                    onChange={() => handleCategoryChange("House")}
                  />
                  <div className="house-after-first-div-listingMain">
                    <div className="house-listingMain">House</div>
                  </div>
                </div>
                <div className="house-after-second-div-listingMain">
                  <input
                    className="checkbox-listingMain"
                    type="checkbox"
                    value="Villa"
                    checked={selectedCategories === "Villa"}
                    onChange={() => handleCategoryChange("Villa")}
                  />
                  <div className="villa-after-first-div-listingMain">
                    <div className="villa-listingMain">Villa</div>
                  </div>
                </div>
                <div className="villa-after-second-div-listingMain">
                  <input
                    className="checkbox-listingMain"
                    type="checkbox"
                    value="Apartment"
                    checked={selectedCategories === "Apartment"}
                    onChange={() => handleCategoryChange("Apartment")}
                  />
                  <div className="appartment-after-first-div-listingMain">
                    <div className="appartment-listingMain">Apartment</div>
                  </div>
                </div>
                {allCategoryToggle &&
                  categoryData
                    ?.slice(3)
                    .reduce((uniqueCategory, item) => {
                      if (
                        !uniqueCategory.includes(item.category) &&
                        item.category !== "House" &&
                        item.category !== "Villa" &&
                        item.category !== "Apartment"
                      ) {
                        uniqueCategory.push(item.category);
                      }

                      return uniqueCategory;
                    }, [])
                    .map((category, index) => {
                      return (
                        <div
                          key={index}
                          className="allCategory-toggle-listingMain"
                        >
                          <input
                            className="checkbox-listingMain"
                            type="checkbox"
                            value={category}
                            checked={selectedCategories === category}
                            onChange={() => handleCategoryChange(category)}
                          />
                          <div className="allCategory-after-first-div-listingMain">
                            {category}
                          </div>
                        </div>
                      );
                    })}
                <div
                  className="allCategort-btn-listingMain"
                  onClick={handlaAllCateforiesClick}
                >
                  {allCategoryToggle ? "Hide" : "Show All Categories"}
                </div>
              </div>
              <div className="allCategort-btn-after-first-div-listingMain">
                <div className="allCategort-btn-after-second-div-listingMain" />
              </div>
              <div className="allCategort-btn-after-third-div-listingMain">
                <div className="allCategort-btn-after-fourth-div-listingMain">
                  <b className="priceRange-listingMain">Price Range</b>
                  <div className="priceRange-after-first-div-listingMain">
                    <img
                      className="down-arrow-listingMain"
                      alt=""
                      src={arrowDown}
                    />
                  </div>
                </div>
                <div className="down-arrow-after-first-div-listingMain">
                  <div className="down-arrow-after-second-div-listingMain" />
                  <div className="down-arrow-after-third-div-listingMain">
                    <div className="usd-one-listingMain">USD</div>
                    <div className="usd-after-first-div-listingMain">
                      <img
                        className="down-arrow-listingMain"
                        alt=""
                        src={arrowDown}
                      />
                    </div>
                    <div className="usd-after-second-div-listingMain">
                      <div className="usd-after-third-div-listingMain" />
                    </div>
                  </div>
                  <input
                    className="minprice-input-listingMain"
                    type="number"
                    step="1"
                    placeholder="Minimum price"
                    value={minPrice}
                    onChange={handleMinInputChange}
                  />
                </div>
                <div className="minprice-input-after-first-div-listingMain">
                  <div className="minprice-input-after-second-div-listingMain" />
                  <div className="minprice-input-after-third-div-listingMain">
                    <div className="usd-two-listingMain">USD</div>
                    <div className="minprice-input-after-fifth-div-listingMain">
                      <img
                        className="down-arrow-listingMain"
                        alt=""
                        src={arrowDown}
                      />
                    </div>
                    <div className="max-input-first-div-listingMain">
                      <div className="max-input-second-div-listingMain" />
                    </div>
                  </div>
                  <input
                    className="maxnumber-input-listingMain"
                    type="number"
                    step="1"
                    placeholder="Maximum price"
                    value={maxPrice}
                    onChange={handleMaxChange}
                  />
                </div>
                <div className="first-price-filter-first-div-listingMain">
                  <div
                    className="first-price-filter-listingMain"
                    onClick={() => handlePriceClick(0, 5000)}
                  >
                    $0 - $5,000
                  </div>
                </div>
                <div className="second-price-filter-first-div-listingMain">
                  <div
                    className="second-price-filter-listingMain"
                    onClick={() => handlePriceClick(5000, 50000)}
                  >
                    $5,000 - $50,000
                  </div>
                </div>
                <button className="third-price-filter-first-div-listingMain">
                  <div
                    className="third-price-filter-listingMain"
                    onClick={() => handlePriceClick(50000)}
                  >
                    {`> $50,000`}
                  </div>
                </button>
              </div>
            </div>
            <DataSorter
              currentItems={currentItems}
              dataSeparater={heart}
              frame={homeFrame}
              frame1={vectorimg}
              progressBarParent={frames}
              radioButtonParent={vector2}
            />
          </div>
        </section>
      </main>
      <div>
        <div className="pagination-listingMain">
          {currentPage > 1 && (
            <button onClick={previousPage} className="previous-btn-listingMain">
              Previous
            </button>
          )}
          {generatePageButtons()}
          {currentPage < totalPages && (
            <button className="next-btn-listingMain" onClick={nextPage}>
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
