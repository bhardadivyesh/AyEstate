import "./Inquiry.css";
import FilterIcon from "../../assets/admin/vendordashboard/inquiry/filterIcon.png"
import lineIcon from "../../assets/admin/vendordashboard/inquiry/line.png"
import dropdownIcon from "../../assets/admin/vendordashboard/inquiry/dropdown.png"
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment-timezone';

const Inquiry = () => {
  const [inquiryData,setInquiryData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/get-Inquiry").then((res)=>{
      setInquiryData(res.data)
    })
  },[])
  return (
    <div className="group-parent-vendorInquiry">
      <div className="rectangle-parent-vendorInquiry">
        <div className="group-child-vendorInquiry" />
        <div className="group-container-vendorInquiry">
          <select className="rectangle-group-vendorInquiry">
            <option value="">
            <div className="group-item-vendorInquiry" />
            <div className="filter-vendorInquiry">Filter</div>
            <img className="vector-icon-vendorInquiry" alt="" src={dropdownIcon} />
            <img className="fi-12358772-icon-vendorInquiry" alt="" src={FilterIcon} />
            </option>
            <option value="newInquiry">New Inquiry</option>
            <option value="siteVisit">Site Visit</option>
            <option value="negotiation">Negotiation</option>
            <option value="attorneyReview">Attorney Review</option>
            <option value="paperWork">Paperwork</option>
            <option value="closedWon">Closed Won</option>
            <option value="closedLost">Closed Lost</option>
          </select>
          <div className="rectangle-container-vendorInquiry">
            <div className="group-inner-vendorInquiry" />
            <div className="line-parent-vendorInquiry">
              <div className="line-div-vendorInquiry" />
              <div className="no-vendorInquiry">No.</div>
              <div className="date-vendorInquiry">Date</div>
              <div className="full-name-vendorInquiry">Full Name</div>
              <div className="phone-number-vendorInquiry">Phone number</div>
              <div className="status-vendorInquiry">Status</div>
              <div className="email-vendorInquiry">Email</div>
            </div>
            {inquiryData.map((items,index)=>{
              return(
                <tr className="row-vendorInquiry" key={index}>
              <td className="dateData-vendorInquiry">{moment.utc(items.createdAt).tz('Asia/Kolkata').format('YYYY-MM-DD')}</td>
              <select className="dropdown-div-vendorInquiry">
                <option value="">Pending</option>
                <option value="">Approved</option>
                <option value="">Blocked</option>
              </select>
              <img className="line-icon-vendorInquiry" alt="" src={lineIcon} />
              <td className="noData-vendorInquiry">{index + 1}</td>
              <td className="nameData-vendorInquiry">{items.name}</td>
              <td className="phoneNumberData-vendorInquiry">{items.phoneNumber}</td>
              <td className="emailData-vendorInquiry">{items.email}</td>
            </tr>
              )
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
