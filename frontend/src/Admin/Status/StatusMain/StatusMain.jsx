import "./StatusMain.css";
import PendingStatus from "../PendingStatus/PendingStatus"
import { useState } from "react";
import ActiveStatus from "../ActiveStatus/ActiveStatus";
import RejectStatus from "../RejectStatus/RejectStatus";
import PreviewPage from "../PreviewPage/PreviewPage";
import statusContext from "../statusContext";

const StatusMain = () => {
    const [statusRender,setStatusRender] = useState("pending")
    const [previewPageRenderPage,setPreviewPageRender] = useState(false)
  return (
    <div className="status-main">
      <div className="rectangle-parent36-main">
        <div className="group-child11-main" />
        <div className="group-parent1-main">
          <button type="submit" className="rectangle-parent37-main group-child12-main pending-main" onClick={()=>setStatusRender("pending")}>{"Pending (4)"}</button>
          <button type="submit" className="rectangle-parent38-main group-child13-main active-main" onClick={()=>setStatusRender("active")}>{"Active (5)"}</button>
          <button type="submit" className="rectangle-parent39-main group-child14-main reject-main" onClick={()=>setStatusRender("reject")}> {"Reject (7)"}</button>
        </div>
       {/* status component */}
       <statusContext.Provider value={{previewPageRenderPage,setPreviewPageRender}}>
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
