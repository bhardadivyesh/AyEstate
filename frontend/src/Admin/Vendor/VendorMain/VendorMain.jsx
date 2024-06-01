import {useState,useEffect } from "react";
import ActiveRequest from "../ActiveRequest/ActiveRequest";
import PendingRequest from "../PendingRequest/PendingRequest";
import RejectRequest from "../RejectRequest/RejectRequest";
import "./VendorMain.css";
import axios from "axios";
import vendorContext from "../Vendor"

const VendorMain = () => {
  const [vendorRendor,setVendorManage] = useState("pending")
  const [pendingUsers,setPendingUsers] = useState([])
  const [activeUsers,setActiveUsers] = useState([])
  const [rejectUsers,setRejectUsers] = useState([])
  console.log(rejectUsers);
  const handleVendorRendorState = (renderState) =>{
    setVendorManage(renderState)
  }
  const [vendorData, setVendorData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration").then((res) => {
      setVendorData(res.data);
      console.log(res.data);
    });
  },[rejectUsers,activeUsers,pendingUsers]);   
  const PendingUsersData = vendorData.filter(items => items.status == "pending");
  const ActiveUsersData = vendorData.filter(items => items.status == "active");                                                   
  const RejectUsersData = vendorData.filter(items => items.status == "reject");                                                   
  return (
    <div className="group-root">
      <div className="rectangle-parent36">
        <div className="group-child10" />
        <div className="group-parent1">
            <button type="button" className="rectangle-parent37 group-child11 pending" onClick={()=>handleVendorRendorState("pending")}>{`Pending (${PendingUsersData.length})`}</button>
            <button type="button" className="group-child12 active" onClick={()=>handleVendorRendorState("active")}>{`Active (${ActiveUsersData.length})`}</button>
            <button type="button" className="rectangle-parent39 group-child13 reject" onClick={()=>handleVendorRendorState("reject")}>{`Reject (${RejectUsersData.length})`}</button>
        </div>
        <div className="rectangle-parent40">
          <div className="group-child14" />
          <div className="request-status">Request status</div>
          <div className="id-parent">
            <div className="id">No</div>
            <div className="name">Name</div>
            <div className="company-name">Company name</div>
            <div className="phone-number">Phone number</div>
            <div className="membership">Membership</div>
            <div className="date">Date</div>
            <div className="action1">Action</div>
            <div className="group-child15" />
          </div>
          <vendorContext.Provider value={{pendingUsers,activeUsers,rejectUsers,setPendingUsers,setActiveUsers,setRejectUsers}}>
          {vendorRendor === "pending" && <PendingRequest  />}
          {vendorRendor === "active" && <ActiveRequest />}
          {vendorRendor === "reject" && <RejectRequest />}
          </vendorContext.Provider >
        </div>
      </div>
    </div>
  );
};

export default VendorMain;
