import "./Dashboard.css";
import manage from "../../assets/admin/dashboard/product.png";
import status from "../../assets/admin/dashboard/status.png";
import membership from "../../assets/admin/dashboard/membership.png";
import vendor from "../../assets/admin/dashboard/user.png";
import logout from "../../assets/admin/dashboard/exit.png";
import emailImg from "../../assets/admin/dashboard/email.png";
import notification from "../../assets/admin/dashboard/alert.png";
import avatarImg from "../../assets/admin/dashboard/avatar.png";
import downArrow from "../../assets/admin/dashboard/More.png";
import { useState } from "react";
import dashboardContext from "../admin";
import StatusMain from "../Status/StatusMain/StatusMain";
import VendorMain from "../Vendor/VendorMain/VendorMain";
import ManageMain from "../Manage/ManageMain/ManageMain";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [renderManage, setRenderManage] = useState("Manage");
  const handleManageClick = (state) => {
    setRenderManage(state);
  };
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
  };
  return (
    <div className="categories">
      <div className="navigation-top-bar-1">
        <div className="top-bar-bg" />
        <div className="side-bar-bg" />
      </div>
      <img className="active-1-3" alt="" src={notification} />
      <img className="email-3-1" alt="" src={emailImg} />
      <div className="ayestate">AyEstate</div>
      <button className="rectangle-parent" onClick={handleLogoutClick}>
        <div className="products">
          <div className="products1">Logout</div>
          <img className="exit-1-icon" alt="" src={logout} />
        </div>
      </button>
      <div className="profile">
        <img className="more-icon" alt="" src={downArrow} />
        <div className="jone-aly"> josey Roy</div>
        <div className="admin">Admin</div>
        <img className="man-438081-960-720-icon" alt="" src={avatarImg} />
      </div>
      <button
        className="rectangle-group"
        onClick={() => handleManageClick("Manage")}
      >
        <img className="product-3-icon" alt="Manage Icon" src={manage} />
        <span className="manage">Manage</span>
      </button>
      <div className="rectangle-container">
        <div className="group-inner" />
        {/* body part */}
        <dashboardContext.Provider value={{ renderManage, setRenderManage }}>
          {renderManage == "Manage" && <ManageMain />}
          {renderManage == "status" && <StatusMain />}
          {renderManage == "vendor" && <VendorMain />}
        </dashboardContext.Provider>
      </div>
      <button
        className="rectangle-parent4"
        onClick={() => handleManageClick("status")}
      >
        <span className="status">Status</span>
        <img className="check-list-1-icon" alt="Status Icon" src={status} />
      </button>
      <button
        className="rectangle-parent5"
        onClick={() => handleManageClick("membership")}
      >
        <span className="membershipAdmin">Membership</span>
        <img className="membership-1-icon" alt="" src={membership} />
      </button>
      <button
        className="rectangle-parent6"
        onClick={() => handleManageClick("vendor")}
      >
        <span className="vendor">Vendor</span>
        <img className="user-1-3" alt="" src={vendor} />
      </button>
    </div>
  );
};

export default Dashboard;
