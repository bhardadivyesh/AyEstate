import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/context";
import "./DataSorter.css";


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
  // console.log(currentItems[0]?.images[0]);
 console.log(currentItems);
  const dataFinderStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", propBackgroundImage),
    };
  }, [propBackgroundImage]);
  const value = useContext(MyContext);
  const navigate = useNavigate();
  const handleProductClick = (productData) => {
    value.setDetailPropertyData(productData);

    navigate("/detailProperty");
  };
  return (
    <div className="first-div-listing-dataSorter">
      {currentItems?.map((items, index) => {
        return (
          <div
            onClick={() => handleProductClick(items)}
            key={index}
            className="second-div-listing-dataSorter"
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
                backgroundImage: `url(http://localhost:1337${items?.image?.[0]?.url})`,
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
                className="third-div-listing-dataSorter"
                alt=""
                src={placeholderImage}
              />
              <button className="feature-btn-listing-dataSorter">
                <span className="feature-btn-listing-label">Featured</span>
              </button>
              <img
                className="wishlist-icon-listing-dataSorter"
                loading="lazy"
                alt=""
                src={dataSeparater}
              />
            </div>
            <div className="items-categoryName-one-listing-dataSorter">
              <label className="items-categoryName-label-listing-dataSorter">
                {items.category} {items.name}
              </label>
              <div className="items-price-listing-dataSorter">
                <label className="items-price-label-listing-dataSorter">
                  {`$${items.price}`}
                </label>
                <label className="items-location-label-listing-dataSorter">
                  {items.location}
                </label>
              </div>
              <div className="after-location-first-div-listing-dataSorter">
                <div className="after-location-second-div-listing-dataSorter">
                  <img
                    className="after-location-first-img-listing-dataSorter"
                    alt=""
                    src={frame}
                  />
                  <label className="items-category-listing-dataSorter">
                    {items.category}
                  </label>
                </div>
                <div className="frame-img-first-div-listing-dataSorter">
                  <img
                    className="frame-img-img-listing-dataSorter"
                    alt=""
                    src={frame1}
                  />
                  <label className="washbasin-img-listing-dataSorter">
                    {items.washbasin}
                  </label>
                </div>
                <div className="bed-img-first-div-listing-dataSorter">
                  <img
                    className="bed-img-listing-dataSorter"
                    alt=""
                    src={progressBarParent}
                  />
                  <label className="bed-label-listing-dataSorter">
                    {items.bed}
                  </label>
                </div>
                <div className="size-img-first-div-listing-dataSorter">
                  <img
                    className="size-img-listing-dataSorter"
                    alt=""
                    src={radioButtonParent}
                  />
                  <label className="size-label-listing-dataSorter">
                    {items.size}
                  </label>
                </div>
                <div className="last-div-listing-dataSorter"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DataSorter;
