
import "./VendorDashboard.css";
import arrow from "../../../assets/admin/vendordashboard/dashboard/arrow.png"

const Home = () => {
  return (
    <div className="home3">
      <main className="rectangle-parent170">
        <div className="frame-child202" />
        <section className="rectangle-parent171">
          <div className="frame-child203" />
          <div className="frame-parent96">
      <div className="frame-wrapper55">
        <div className="frame-parent97">
          <div className="active-wrapper">
            <div className="active3">Active</div>
          </div>
          <div className="wrapper3">
            <div className="div81">21</div>
          </div>
          <div className="view-all-details-parent">
            <div className="view-all-details">View all Details</div>
            <img className="frame-child198" alt="" src={arrow} />
          </div>
        </div>
      </div>
      <div className="frame-wrapper56">
        <div className="frame-parent98">
          <div className="pending-wrapper">
            <div className="pending">Pending</div>
          </div>
          <div className="wrapper4">
            <div className="div82">06</div>
          </div>
          <div className="view-all-details-group">
            <div className="view-all-details1">View all Details</div>
            <img className="frame-child199" alt="" src={arrow} />
          </div>
        </div>
      </div>
      <div className="frame-wrapper57">
        <div className="frame-parent99">
          <div className="reject-wrapper">
            <div className="reject1">Reject</div>
          </div>
          <div className="wrapper5">
            <div className="div83">02</div>
          </div>
          <div className="view-all-details-container">
            <div className="view-all-details2">View all Details</div>
            <img className="frame-child200" alt="" src={arrow} />
          </div>
        </div>
      </div>
      <div className="frame-wrapper58">
        <div className="frame-parent100">
          <div className="inquiry-wrapper">
            <div className="inquiry">Inquiry</div>
          </div>
          <div className="wrapper6">
            <div className="div84">10</div>
          </div>
          <div className="view-all-details-parent1">
            <div className="view-all-details3">View all Details</div>
            <img className="frame-child201" alt="" src={arrow} />
          </div>
        </div>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
