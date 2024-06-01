
import "./VendorDashboard.css";
import arrow from "../../../assets/admin/vendordashboard/dashboard/arrow.png"
import { useContext } from "react";
import vendorDashboardContext from "../../VendorDashboardContext";

const Home = () => {
  const value = useContext(vendorDashboardContext)
  const handleVendorNavigation = (navigationPath) =>{
   value.setVendorDashboardRender(navigationPath)
  }
  return (
    <div className="homes3-vendorDashboard">
      <main className="rectangle-parent170-vendorDashboard">
        <div className="frame-child202-vendorDashboard" />
        <section className="rectangle-parent171-vendorDashboard">
          <div className="frame-child203-vendorDashboard" />
          <div className="frame-parent96-vendorDashboard">
      <div className="frame-wrapper55-vendorDashboard">
        <div className="frame-parent97-vendorDashboard">
          <div className="active-wrapper-vendorDashboard">
            <div className="active3-vendorDashboard">Active</div>
          </div>
          <div className="wrapper3-vendorDashboard">
            <div className="div81-vendorDashboard">21</div>
          </div>
          <button className="view-all-details-parent-vendorDashboard" onClick={()=>handleVendorNavigation("manageListing")}>
            <span className="view-all-details-vendorDashboard">View all Details</span>
            <img className="frame-child198-vendorDashboard" alt="" src={arrow} />
          </button>
        </div>
      </div>
      <div className="frame-wrapper56-vendorDashboard">
        <div className="frame-parent98-vendorDashboard">
          <div className="pending-wrapper-vendorDashboard">
            <div className="pending-vendorDashboard">Pending</div>
          </div>
          <div className="wrapper4-vendorDashboard">
            <div className="div82-vendorDashboard">06</div>
          </div>
          <button className="view-all-details-group-vendorDashboard" onClick={()=>handleVendorNavigation("manageListing")}>
            <span className="view-all-details1-vendorDashboard">View all Details</span>
            <img className="frame-child199-vendorDashboard" alt="" src={arrow} />
          </button>
        </div>
      </div>
      <div className="frame-wrapper57-vendorDashboard">
        <div className="frame-parent99-vendorDashboard">
          <div className="reject-wrapper-vendorDashboard">
            <div className="reject1-vendorDashboard">Reject</div>
          </div>
          <div className="wrapper5-vendorDashboard">
            <div className="div83-vendorDashboard">02</div>
          </div>
          <button className="view-all-details-container-vendorDashboard" onClick={()=>handleVendorNavigation("manageListing")}>
            <span className="view-all-details2-vendorDashboard">View all Details</span>
            <img className="frame-child200-vendorDashboard" alt="" src={arrow} />
          </button>
        </div>
      </div>
      <div className="frame-wrapper58-vendorDashboard">
        <div className="frame-parent100-vendorDashboard">
          <div className="inquiry-wrapper-vendorDashboard">
            <div className="inquiry-vendorDashboard">Inquiry</div>
          </div>
          <div className="wrapper6-vendorDashboard">
            <div className="div84-vendorDashboard">10</div>
          </div>
          <button className="view-all-details-parent1-vendorDashboard" onClick={()=>handleVendorNavigation("inquiry")}>
            <div className="view-all-details3-vendorDashboard">View all Details</div>
            <img className="frame-child201-vendorDashboard" alt="" src={arrow} />
          </button>
        </div>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
