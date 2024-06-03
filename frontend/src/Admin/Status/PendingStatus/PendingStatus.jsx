import React, { useEffect, useState } from "react";
import { useContext } from "react";
import statusContext from "../statusContext";
import axios from "axios";

const PendingStatus = () => {
  const [vendorListingData, setVendorListingData] = useState([]);
  const value = useContext(statusContext);
  const handleActiveStatusClick = (listingData,items) => {
    value.setVendorListingData(items)
    value.setPreviewPageRender(true);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-vendorListing").then((res) => {
      setVendorListingData(res.data);
    });
  }, []);
  return (
    <>
      <div className="rectangle-parent40-main">
        <div className="group-child15-main" />
        {vendorListingData?.map((items, index) => {
          return (
            <div className="div27-main">
              <div className="child-main" />
              <div className="div28-main">{index + 1}</div>
              <div className="home2-main">{items.category}</div>
              <div className="jakarta1-main">{items.location}</div>
              <div className="cozy-xcottage-main">{items.listingTitle}</div>
              <div className="div29-main">{`₹${items.price}`}</div>
              <div className="div30-main">{items.date}</div>
              <div className="karan-main">Karan</div>
              <select className="rectangle-parent41-main">
                <option value="" className="option">
                  change status
                </option>
                <option value="" className="option">
                  pending
                </option>
                <option value="" className="option">
                  active
                </option>
                <option value="" className="option">
                  reject
                </option>
              </select>
              <div className="pending1-main">pending</div>
              <button
                type="submit"
                className="rectangle-parent42-main group-child18-main"
                onClick={() => handleActiveStatusClick("data",items)}
              >
                <span className="preview-main">Preview</span>
              </button>
            </div>
          );
        })}

        <div className="id-main">
          <div className="id1-main">No</div>
          <div className="categories1-main">Categories</div>
          <div className="location1-main">Location</div>
          <div className="products40-main">Products</div>
          <div className="price-main">Price</div>
          <div className="date-main">Date</div>
          <div className="id-child-main" />
          <div className="vendor2-main">Vendor</div>
          <div className="request-status-main">Request status</div>
          <div className="more-detail-main">More detail</div>
          <div className="action1-main">Action</div>
        </div>
      </div>
    </>
  );
};

export default PendingStatus;
