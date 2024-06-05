import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import statusContext from '../statusContext';
import "./PendingStatus.css"

const PendingStatus = () => {
  const [pendingListings, setPendingListings] = useState([]);
  const [updateState, setUpdateState] = useState(false);
  const value = useContext(statusContext);

  const handleChange = (listing, e) => {
    const updatedStatus = e.target.value;
    if (updatedStatus !== "") {
      const updatedListing = { ...listing, status: updatedStatus };
      axios.put('http://localhost:3000/put-vendorListing', updatedListing)
        .then((res) => {
          setUpdateState(!updateState);
        });
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/get-vendorListing-pending").then((res) => {
      setPendingListings(res.data);
      value.setRequestPending(updateState)
    });
  }, [updateState]);

  const handleActiveStatusClick = (listingData) => {
    value.setVendorListingData(listingData)
    value.setPreviewPageRender(true);
  };

  return (
    <>
      <div className="rectangle-parent40-main">
        <div className="id-main">
          <div className="id1-main">No</div>
          <div className="categories1-main">Categories</div>
          <div className="location1-main">Location</div>
          <div className="products40-main">Products</div>
          <div className="price-main">Price</div>
          <div className="date-main">Date</div>
          <div className="vendor2-main">Vendor</div>
          <div className="request-status-main">Request status</div>
          <div className="more-detail-main">More detail</div>
          <div className="action1-main">Action</div>
        </div>
        {pendingListings.map((listing, index) => (
          <tr className="listing-row-status" key={index}>
            <div className="listing-div-status" />
            <td className="listing-no-status">{index + 1}</td>
            <td className="listing-category-status">{listing.category}</td>
            <td className="listing-location-status">{listing.location}</td>
            <td className="listing-product-status">{listing.product}</td>
            <td className="listing-price-status">{`₹${listing.price}`}</td>
            <td className="listing-date-status">{listing.date}</td>
            <td className="listing-vendor-status">{listing.vendor}</td>
            <td>
            <select
              className="listing-dropdown-status"
              onChange={(e) => handleChange(listing, e)}
              value=""
            >
              <option value="" className='option'>change status</option>
              <option value="pending" className='option'>pending</option>
              <option value="active" className='option'>active</option>
              <option value="reject" className='option'>reject</option>
            </select>
            </td>
            <td className="listing-status">{listing.status}</td>
            <td>
            <button className="listing-preview-btn" onClick={() => handleActiveStatusClick(listing)}>
              <span className="listing-preview-lbl">Preview</span>
            </button>
            </td>
          </tr>
        ))}
      </div>
    </>
  );
}

export default PendingStatus;
