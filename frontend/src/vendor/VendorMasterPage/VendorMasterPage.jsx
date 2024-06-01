// VendorDashboard.jsx

import React, { useState } from 'react';
import moment from 'moment-timezone';
import emailIcon from "../../assets/admin/vendordashboard/MasterPage/email.png";
import notificationIcon from "../../assets/admin/vendordashboard/MasterPage/notification.png";
import avatarIcon from "../../assets/admin/vendordashboard/MasterPage/avatar.png";
import viewMoreIcon from "../../assets/admin/vendordashboard/MasterPage/viewMore.png";
import dashboardIcon from "../../assets/admin/vendordashboard/MasterPage/dashboard.png";
import listingIcon from "../../assets/admin/vendordashboard/MasterPage/listing.png";
import manageListingIcon from "../../assets/admin/vendordashboard/MasterPage/manageListing.png";
import inquiryIcon from "../../assets/admin/vendordashboard/MasterPage/inquiry.png";
import membershipIcon from "../../assets/admin/vendordashboard/MasterPage/membership.png";
import logoutIcon from "../../assets/admin/vendordashboard/MasterPage/logout.png";
import AddListingMain from "../AddListing/AddListingMain/AddListingMain";
import "./VendorMasterPage.css";
import vendorDashboardContext from '../VendorDashboardContext';
import ManageListingMain from '../ManageListing/ManageListingMain/ManageListingMain';
import VendorMembership from '../VendorMembership/VendorMembership';
import VendorDashboard from '../VendorDashboard/VendorDashboard/VendorDashboard';
import Inquiry from '../Inquiry/Inquiry';

const VendorMasterPage = () => {
  const [vendorDashboardRender,setVendorDashboardRender] = useState("dashboard")
  console.log(vendorDashboardRender);

  const handleDashboardRenderClick = (renderState) =>{
    setVendorDashboardRender(renderState)
  }
  return (
    <div className="vendor-listingdata-vendorDashboard">
      <div className="vendor-listingdata-inner-vendorDashboard">
        <header className="top-bar-bg-parent-vendorDashboard">
          <div className="top-bar-bg2-vendorDashboard" />
          <div className="frame-wrapper84-vendorDashboard">
            <div className="email-3-1-parent-vendorDashboard">
              <img
                className="email-3-12-vendorDashboard"
                loading="lazy"
                alt=""
                src={emailIcon}
              />
              <img
                className="active-1-32-vendorDashboard"
                loading="lazy"
                alt=""
                src={notificationIcon}
              />
            </div>
          </div>
          <img className="more-icon2-vendorDashboard" loading="lazy" alt="" src={viewMoreIcon} />
          <div className="man-438081-960-720-parent-vendorDashboard">
            <img
              className="man-438081-960-720-icon2-vendorDashboard"
              loading="lazy"
              alt=""
              src={avatarIcon}
            />
            <div className="frame-wrapper85-vendorDashboard">
              <main className="jone-aly-parent-vendorDashboard">
                <label className="jone-aly2-vendorDashboard"> josey Roy</label>
                <label className="admin2-vendorDashboard">Vendor</label>
              </main>
            </div>
          </div>
          <section className="rectangle-parent189-vendorDashboard">
            <vendorDashboardContext.Provider value={{vendorDashboardRender,setVendorDashboardRender}}>
            {vendorDashboardRender == 'dashboard' && <VendorDashboard />}
            {vendorDashboardRender == "addListing" && <AddListingMain />}
            {vendorDashboardRender == "manageListing" && <ManageListingMain />}
            {vendorDashboardRender == "membership" && <VendorMembership />}
            {vendorDashboardRender == "inquiry" && <Inquiry />}
            </vendorDashboardContext.Provider>
          </section>
        </header>
      </div>
      <div className="side-bar-bg-group-vendorDashboard">
        <div className="side-bar-bg3-vendorDashboard" />
        <div className="ayestate-wrapper8-vendorDashboard">
          <h1 className="ayestate23-vendorDashboard">AyEstate</h1>
        </div>
        <div className="dashboard-parent-vendorDashboard">
          <button className="dashboard-vendorDashboard" onClick={()=>handleDashboardRenderClick("dashboard")}>
            <img
              className="fi-5880895-icon-vendorDashboard"
              loading="lazy"
              alt=""
              src={dashboardIcon}
            />
            <div className="dashboard-wrapper-vendorDashboard">
              <span className="dashboard1-vendorDashboard">Dashboard</span>
            </div>
          </button>
          <button className="add-listing-vendorDashboard" onClick={()=>handleDashboardRenderClick("addListing")}>
            <img
              className="bxbxlfacebook-icon-vendorDashboard"
              loading="lazy"
              alt=""
              src={listingIcon}
            />
            <div className="add-listing-wrapper-vendorDashboard">
              <span className="add-listing1-vendorDashboard"> Add Listing</span>
            </div>
          </button>
          <button className="manage-vendorDashboard" onClick={()=>handleDashboardRenderClick("manageListing")}>
            <img
              className="image-57-icon-vendorDashboard"
              loading="lazy"
              alt=""
              src={manageListingIcon}
            />
            <div className="manage-listing-wrapper-vendorDashboard">
              <span className="manage-listing-vendorDashboard">Manage Listing</span>
            </div>
          </button>
          <button className="inquriry-vendorDashboard" onClick={()=>handleDashboardRenderClick("inquiry")}>
            <img
              className="carbonlogoyoutube-icon-vendorDashboard"
              loading="lazy"
              alt=""
              src={inquiryIcon}
            />
            <div className="inquiry-wrapper-vendorDashboard">
              <div className="inquiry-vendorDashboardMasterPage">Inquiry</div>
            </div>
          </button>
          <button className="membership1-vendorDashboard" onClick={()=>handleDashboardRenderClick("membership")}>
            <img
              className="fi-1865429-icon-vendorDashboard"
              loading="lazy"
              alt=""
              src={membershipIcon}
            />
            <div className="membership-container-vendorDashboard">
              <div className="membership2-vendorDashboard">Membership</div>
            </div>
          </button>
        </div>
        <div className="contact-us-parent-vendorDashboard">
          <button className="contact-us9-vendorDashboard" >
          <div className="products40-vendorDashboard">
            <div className="exit-1-wrapper-vendorDashboard">
              <img
                className="exit-1-icon1-vendorDashboard"
                loading="lazy"
                alt=""
                src={logoutIcon}
              />
            </div>
            <span className="products41-vendorDashboard">Logout</span>
          </div>
          </button>
        </div>
      </div>
      {/* frame1 over */}
    </div>
  );
};

export default VendorMasterPage;
