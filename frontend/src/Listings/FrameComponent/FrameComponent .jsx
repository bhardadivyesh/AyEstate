import arrowRight from "../../assets/arrow-right.png";
import "./FrameComponent.css";

import { Link } from "react-router-dom";

const FrameComponent = ({ productCount, category, location }) => {
  return (
    <div className="first-div-listing-Frame">
      <div className="second-div-listing-Frame">
        <Link to="/" className="home-link-listing-Frame">
          Home
        </Link>
        <div className="third-div-listing-Frame">
          <img
            className="arrowRight-listing-Frame"
            loading="lazy"
            alt=""
            src={arrowRight}
          />
        </div>
        <div className="category-listing-Frame">{category}</div>
      </div>
      {(category !== "" || location !== "") && (
        <div className="forth-div-listing-Frame">
          <div className="fifth-div-listing-Frame">
            <h2 className="showing-listing-property-listing-Frame">
              {`Showing listings property ${category ? `for ${category}` : ""}${
                category && location ? " " : ""
              }${location ? ` in ${location}` : ""}`}
            </h2>
            <div
            className="last-div-listing-Frame"
             
            >
              {`Showing 1 - ${productCount} Properties`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FrameComponent;
