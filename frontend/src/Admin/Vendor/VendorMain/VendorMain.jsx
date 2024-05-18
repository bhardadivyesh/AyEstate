import { useContext, useState,useEffect } from "react";
import ActiveRequest from "../ActiveRequest/ActiveRequest";
import PendingRequest from "../PendingRequest/PendingRequest";
import RejectRequest from "../RejectRequest/RejectRequest";
import "./VendorMain.css";
import axios from "axios";

const VendorMain = () => {
  const [vendorRendor,setVendorManage] = useState("pending")
  const handleVendorRendorState = (renderState) =>{
    setVendorManage(renderState)
  }
  const [vendorData, setVendorData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration").then((res) => {
      setVendorData(res.data);
    });
  },[]);
  let PendingRequestData = vendorData.filter((items) => items.status == "pending");
  let ActiveRequestData = vendorData.filter((items => items.status == "active"));   
  let RejectRequestData = vendorData.filter((items => items.status == "reject"));                                                           
  return (
    <div className="group-root">
      <div className="rectangle-parent36">
        <div className="group-child10" />
        <div className="group-parent1">
            <button type="button" className="rectangle-parent37 group-child11 pending" onClick={()=>handleVendorRendorState("pending")}>{`Pending (${PendingRequestData?.length})`}</button>
            <button type="button" className="group-child12 active" onClick={()=>handleVendorRendorState("active")}>{`Active (${ActiveRequestData?.length})`}</button>
            <button type="button" className="rectangle-parent39 group-child13 reject" onClick={()=>handleVendorRendorState("reject")}>{`Reject (${RejectRequestData?.length})`}</button>
        </div>
        <div className="rectangle-parent40">
          <div className="group-child14" />
          <div className="request-status">Request status</div>
          <div className="id-parent">
            <div className="id">Id</div>
            <div className="name">Name</div>
            <div className="company-name">Company name</div>
            <div className="phone-number">Phone number</div>
            <div className="membership">Membership</div>
            <div className="date">Date</div>
            <div className="action1">Action</div>
            <div className="group-child15" />
          </div>
          {/* <vendorContext.Provider value={{vendorRendor,setVendorManage}}/> */}
          {vendorRendor === "pending" && <PendingRequest data={PendingRequestData} />}
          {vendorRendor === "active" && <ActiveRequest data={ActiveRequestData}/>}
          {vendorRendor === "reject" && <RejectRequest data={RejectRequestData}/>}
          {/* <vendorContext.Provider /> */}
        </div>
      </div>
    </div>
  );
};

export default VendorMain;
