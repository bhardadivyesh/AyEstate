import React, { useEffect } from 'react'
import { useContext } from 'react';
import statusContext from '../statusContext';
import axios from 'axios';

const ActiveStatus = () => {
    const value = useContext(statusContext)
    const handleActiveStatusClick = (listingData) =>{
        value.setPreviewPageRender(true)
    }
    console.log("active call");
  return (
    <>
     <div className="rectangle-parent40-main">
          <div className="group-child15-main" />
          <div className="div27-main">
            <div className="child-main" />
            <div className="div28-main">1</div>
            <div className="home2-main">Home</div>
            <div className="jakarta1-main">Jakarta</div>
            <div className="cozy-xcottage-main">Cozy xCottage</div>
            <div className="div29-main">$20021</div>
            <div className="div30-main">2024-04-02</div>
            <div className="karan-main">Karan</div>
            <select className="rectangle-parent41-main">
                <option value="" className='option'>change status</option>
                <option value="" className='option'>pending</option> 
                <option value="" className='option'>active</option>
                <option value="" className='option'>reject</option>
            </select>
            <div className="pending1-main">active</div>
            <button className="rectangle-parent42-main group-child18-main" onClick={()=>handleActiveStatusClick("data")}>
              <span className="preview-main">Preview</span>
            </button>
          </div>
          <div className="id-main">
            <div className="id1-main">Id</div>
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
  )
}

export default ActiveStatus