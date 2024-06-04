import "./StatusMain.css";
import PendingStatus from "../PendingStatus/PendingStatus"
import { useEffect, useState } from "react";
import ActiveStatus from "../ActiveStatus/ActiveStatus";
import RejectStatus from "../RejectStatus/RejectStatus";
import PreviewPage from "../PreviewPage/PreviewPage";
import statusContext from "../statusContext";
import axios from "axios";

const StatusMain = () => {
    const [statusRender,setStatusRender] = useState("pending")
    const [previewPageRenderPage,setPreviewPageRender] = useState(false)
    const [vendorListingData,setVendorListingData] = useState([])
    const [vendorRendor,setVendorManage] = useState("pending")
    const [requestPending,setRequestPending] = useState([])
    const [requestActive,setRequestActive] = useState([])
    const [requestReject,setRequestReject] = useState([])
    
    const handleVendorRendorState = (renderState) =>{
      setVendorManage(renderState)
    }
    const [statusData, setStatusData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/get-vendorListing").then((res) => {
        setStatusData(res.data);
      });
    },[requestReject,requestActive,requestPending]);   
    const PendingRequestData = statusData.filter(items => items.status == "pending");
    const ActiveRequestData = statusData.filter(items => items.status == "active");                                                   
    const RejectRequestData = statusData.filter(items => items.status == "reject");
  return (
    <div className="status-main">
      <div className="rectangle-parent36-main">
        <div className="group-child11-main" />
        <div className="group-parent1-main">
          <button type="submit" className="rectangle-parent37-main group-child12-main pending-main" onClick={()=>setStatusRender("pending")}>{`Pending (${PendingRequestData.length})`}</button>
          <button type="submit" className="rectangle-parent38-main group-child13-main active-main" onClick={()=>setStatusRender("active")}>{`Active (${ActiveRequestData.length})`}</button>
          <button type="submit" className="rectangle-parent39-main group-child14-main reject-main" onClick={()=>setStatusRender("reject")}>{`Reject (${RejectRequestData.length})`}</button>
        </div>
       <statusContext.Provider value={{previewPageRenderPage,vendorListingData,setPreviewPageRender,setVendorListingData,setRequestPending,setRequestActive,setRequestReject}}>
       {statusRender == "pending" && <PendingStatus />}
       {statusRender == "active" && <ActiveStatus />}
       {statusRender == "reject" && <RejectStatus />}
       {previewPageRenderPage == true && <PreviewPage />}
       </statusContext.Provider >
      </div>
    </div>
  );
};

export default StatusMain;
