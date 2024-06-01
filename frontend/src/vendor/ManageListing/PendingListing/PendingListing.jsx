import { useContext } from "react";
import "./PendingListing.css";
import manageListingContext from "../ManageListingContext";

const PendingListing = () => {
    const value = useContext(manageListingContext)
    console.log("pending");
  return (
    <div className="managelistingvendorpending-pendingListing">
      <header className="rectangle-parent136-pendingListing">
        <div className="frame-child157-pendingListing" />
        <div className="frame-parent169-pendingListing">
          <button className="rectangle-parent212-pendingListing" onClick={()=>value.setManageListingRender("activeListing")}>
            <label className="active3-pendingListing">ACTIVE (0)</label>
          </button>
          <button className="rectangle-parent213-pendingListing" onClick={()=>value.setManageListingRender("pendingListing")}>
            <label className="pending-61-pendingListing">PENDING (6)</label>
          </button>
          <button className="rectangle-parent214-pendingListing" onClick={()=>value.setManageListingRender("rejectListing")}>
            <label className="reject1-pendingListing">REJECT (0)</label>
          </button>
        </div>
        <section className="listing13-pendingListing">
          <div className="rectangle-parent137-pendingListing">
            <div className="frame-child158-pendingListing" />
            <div className="details-pendingListing">
              <div className="listing-info-pendingListing">
                <div className="info-top-pendingListing">
                  <div className="product-pendingListing">
                    <div className="product-name-pendingListing">
                      <h3 className="id3-pendingListing">No</h3>
                      <h3 className="products-name1-pendingListing">
                        Products name
                      </h3>
                    </div>
                  </div>
                  <div className="category3-pendingListing">
                    <h3 className="categories2-pendingListing">Categories</h3>
                  </div>
                  <div className="location-price-pendingListing">
                    <h3 className="location6-pendingListing">Location</h3>
                  </div>
                  <div className="location-price1-pendingListing">
                    <h3 className="price1-pendingListing">Price</h3>
                  </div>
                  <div className="date1-pendingListing">
                    <h3 className="date2-pendingListing">Date</h3>
                  </div>
                  <div className="status1-pendingListing">
                    <h3 className="request-status1-pendingListing">
                      Action
                    </h3>
                  </div>
                </div>
              </div>
              <div className="divider1-pendingListing" />
            </div>
            <div className="listing-example-pendingListing">
              <div className="divider2-pendingListing" />
              <div className="active2-pendingListing">ACTIVE</div>
              <div className="example-data-pendingListing">16/04/2023</div>
              <div className="example-data1-pendingListing">$5,9900</div>
              <div className="bandung2-pendingListing">Bandung</div>
              <a className="ville1-pendingListing">Ville</a>
              <a className="cozy-cottage2-pendingListing">Cozy cottage</a>
              <div className="example-data2-pendingListing">1</div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default PendingListing;
