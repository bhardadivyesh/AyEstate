import { useContext, useEffect, useState } from "react";
import "./ActiveListing.css";
import manageListingContext from "../ManageListingContext";
import axios from "axios";
import vendorDashboardContext from "../../VendorDashboardContext";

const ActiveListing = () => {
    const value = useContext(manageListingContext)
    const vendorMasterpageContext = useContext(vendorDashboardContext)
    const [activeListingData,setActiveListingData] = useState([])
    const [pendingListingData, setPendingListingData] = useState([]);
    const [rejectListingData, setRejectListingData] = useState([]);
console.log(activeListingData);
    useEffect(()=>{
      axios.get('http://localhost:3000/get-vendorListing-active').then((res)=>{
        setActiveListingData(res.data)
      })
      axios.get("http://localhost:3000/get-vendorListing-pending").then((res) => {
        setPendingListingData(res.data);
      });
      axios.get("http://localhost:3000/get-vendorListing-reject").then((res) => {
        setRejectListingData(res.data);
      });
    },[])
    const handleEditBtnClick = (items) =>{
      vendorMasterpageContext.setActiveListingValue(items)
      vendorMasterpageContext.setVendorDashboardRender("addListing")
    }
  return (
    <div className="managelistingvendor-activeListing">
      <header className="group-header-activeListing">
        <div className="frame-child151-activeListing" />
        <div className="management-panel-activeListing">
          <div className="frame-parent75-activeListing">
            <button className="rectangle-parent131-activeListing" onClick={()=>value.setManageListingRender("activeListing")}>
              <span className="active-activeListing">{`ACTIVE (${activeListingData.length})`}</span>
            </button>
            <button className="rectangle-parent132-activeListing" onClick={()=>value.setManageListingRender("pendingListing")}>
              <span className="pending-6-activeListing">{`PENDING (${pendingListingData.length})`}</span>
            </button>
            <button className="rectangle-parent133-activeListing" onClick={()=>value.setManageListingRender("rejectListing")}>
              <span className="reject-activeListing">{`REJECT (${rejectListingData.length})`}</span>
            </button>
          </div>
        </div>
        <section className="rectangle-parent134-activeListing">
          <div className="frame-child155-activeListing" />
          <div className="details-panel-activeListing">
            <div className="product-info-activeListing">
              <div className="id-container-activeListing">
                <label className="id2-activeListing">No</label>
              </div>
              <div className="info-headers-activeListing">
                <label className="products-name-activeListing">Product Name</label>
              </div>
              <div className="info-headers1-activeListing">
                <label className="categories1-activeListing">Category</label>
              </div>
              <div className="location-container-activeListing">
                <label className="location5-activeListing">Location</label>
              </div>
              <div className="info-headers2-activeListing">
                <label className="price-activeListing">Price</label>
              </div>
              <div className="info-headers3-activeListing">
                <label className="date-activeListing">Date</label>
              </div>
              <div className="info-headers4-activeListing">
                <label className="request-status-activeListing">Status</label>
              </div>
              <div className="info-headers5-activeListing">
                <label className="listing-edit-activeListing">Action</label>
              </div>
            </div>
          </div>
          {activeListingData?.map((items,index)=>{
            return(
              <div className="listing-preview-activeListing">
              <div className="preview-container1-activeListing">
                <div className="preview-details-activeListing">
                  <div className="preview-fields-activeListing">
                    <label className="preview-values-activeListing">{index + 1}</label>
                  </div>
                  <div className="preview-fields1-activeListing">
                    <label className="cozy-cottage1-activeListing">{items?.name}</label>
                  </div>
                  <label className="ville-activeListing">{items.category}</label>
                  <div className="preview-fields2-activeListing">
                    <label className="bandung1-activeListing">{items.location}</label>
                  </div>
                  <div className="preview-fields3-activeListing">
                    <label className="div78-activeListing">{`₹${items.price}`}</label>
                  </div>
                  <div className="preview-fields4-activeListing">
                    <label className="a-activeListing">{items.date}</label>
                  </div>
                  <div className="preview-fields5-activeListing">
                    <label className="active1-activeListing">{items.status}</label>
                  </div>
                  <div className="edit-action-activeListing">
                    <button className="rectangle-parent135-activeListing" onClick={()=>handleEditBtnClick(items)}>
                      <div className="frame-child156-activeListing" />
                      <label className="edit-activeListing">Edit</label>
                    </button>
                  </div>
                </div>
                {/* <div className="top-divider-activeListing" /> */}
              </div>
              <div className="bottom-divider-activeListing" />
            </div>
            )
          })}
         
        </section>
      </header>
    </div>
  );
};

export default ActiveListing;
