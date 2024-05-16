import StatusBar from "../StatusBar/StatusBar";
import PendingStatus from "../PendingStatus/PendingStatus";
import "./StatusMain.css";

const StatusMain = () => {
  return (
    <form className="home2">
      <header className="group-header">
        <div className="frame-child55" />
        <div className="frame-wrapper13">
          <StatusBar />
        </div>
        <div className="rectangle-parent36">
          <div className="frame-child56" />
          <div className="frame-parent28">
            <div className="frame-wrapper14">
              <div className="frame-parent29">
                <div className="id-parent">
                  <div className="id">Id</div>
                  <div className="vendor2">Vendor</div>
                </div>
                <div className="categories-wrapper">
                  <div className="categories1">Categories</div>
                </div>
                <div className="location-wrapper">
                  <div className="location1">Location</div>
                </div>
                <div className="products-wrapper">
                  <div className="products40">Products</div>
                </div>
                <div className="price-wrapper">
                  <div className="price">Price</div>
                </div>
                <div className="date-wrapper">
                  <div className="date">Date</div>
                </div>
                <div className="request-status-wrapper">
                  <div className="request-status">Request status</div>
                </div>
                <div className="more-detail-wrapper">
                  <div className="more-detail">More detail</div>
                </div>
                <div className="action-wrapper">
                  <div className="action1">Action</div>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
          <PendingStatus />
        </div>
      </header>
    </form>
  );
};

export default StatusMain;
