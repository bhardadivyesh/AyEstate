import { useContext } from "react";
import "./RejectListing.css";
import manageListingContext from "../ManageListingContext";
import { useState, useEffect } from "react";
import axios from "axios";

const RejectListing = () => {
  const value = useContext(manageListingContext);
  const [rejectListingData, setRejectListingData] = useState([]);
  const [pendingListingData, setPendingListingData] = useState([]);
  const [activeListingData, setActiveListingData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get-vendorListing-active").then((res) => {
      setActiveListingData(res.data);
    });
    axios.get("http://localhost:3000/get-vendorListing-pending").then((res) => {
      setPendingListingData(res.data);
    });
    axios.get("http://localhost:3000/get-vendorListing-reject").then((res) => {
      setRejectListingData(res.data);
    });
  }, []);
  return (
    <div className="managelistingvendorpending-rejectListing">
      <header className="rectangle-parent136-rejectListing">
        <div className="frame-child157-rejectListing" />
        <div className="frame-parent169-rejectListing">
          <button
            className="rectangle-parent212-rejectListing"
            onClick={() => value.setManageListingRender("activeListing")}
          >
            <label className="active3-rejectListing">{`ACTIVE (${activeListingData?.length})`}</label>
          </button>
          <button
            className="rectangle-parent213-rejectListing"
            onClick={() => value.setManageListingRender("pendingListing")}
          >
            <label className="pending-61-rejectListing">{`PENDING (${pendingListingData?.length})`}</label>
          </button>
          <button
            className="rectangle-parent214-rejectListing"
            onClick={() => value.setManageListingRender("rejectListing")}
          >
            <label className="reject1-rejectListing">{`REJECT (${rejectListingData?.length})`}</label>
          </button>
        </div>
        <section className="listing13-rejectListing">
          <div className="rectangle-parent137-rejectListing">
            <div className="frame-child158-rejectListing" />
            <div className="details-rejectListing">
              <div className="listing-info-rejectListing">
                <div className="info-top-rejectListing">
                  <div className="product-rejectListing">
                    <div className="product-name-rejectListing">
                      <h3 className="id3-rejectListing">No</h3>
                      <h3 className="products-name1-rejectListing">
                        Products name
                      </h3>
                    </div>
                  </div>
                  <div className="category3-rejectListing">
                    <h3 className="categories2-rejectListing">Categories</h3>
                  </div>
                  <div className="location-price-rejectListing">
                    <h3 className="location6-rejectListing">Location</h3>
                  </div>
                  <div className="location-price1-rejectListing">
                    <h3 className="price1-rejectListing">Price</h3>
                  </div>
                  <div className="date1-rejectListing">
                    <h3 className="date2-rejectListing">Date</h3>
                  </div>
                  <div className="status1-rejectListing">
                    <h3 className="request-status1-rejectListing">Action</h3>
                  </div>
                </div>
              </div>
              <div className="divider1-rejectListing" />
            </div>
            {rejectListingData?.map((items, index) => {
              return (
                <div className="listing-example-rejectListing">
                  <div className="divider2-rejectListing" />
                  <label className="active2-rejectListing">
                    {items?.status}
                  </label>
                  <label className="example-data-rejectListing">
                    {items?.date}
                  </label>
                  <label className="example-data1-rejectListing">{`₹${items.price}`}</label>
                  <label className="bandung2-rejectListing">
                    {items?.location}
                  </label>
                  <label className="ville1-rejectListing">
                    {items?.category}
                  </label>
                  <label className="cozy-cottage2-rejectListing">
                    {items?.name}
                  </label>
                  <label className="example-data2-rejectListing">
                    {index + 1}
                  </label>
                </div>
              );
            })}
          </div>
        </section>
      </header>
    </div>
  );
};

export default RejectListing;
