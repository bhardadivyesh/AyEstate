import { useContext } from "react";
import "./RejectListing.css";
import manageListingContext from "../ManageListingContext";

const RejectListing = () => {
    const value = useContext(manageListingContext)
    console.log('reject');
  return (
    <div className="managelistingvendorpending-rejectListing">
      <header className="rectangle-parent136-rejectListing">
        <div className="frame-child157-rejectListing" />
        <div className="frame-parent169-rejectListing">
          <button className="rectangle-parent212-rejectListing" onClick={()=>value.setManageListingRender("activeListing")}>
            <label className="active3-rejectListing">ACTIVE (0)</label>
          </button>
          <button className="rectangle-parent213-rejectListing" onClick={()=>value.setManageListingRender("pendingListing")}>
            <label className="pending-61-rejectListing">PENDING (6)</label>
          </button>
          <button className="rectangle-parent214-rejectListing" onClick={()=>value.setManageListingRender("rejectListing")}>
            <label className="reject1-rejectListing">REJECT (0)</label>
          </button>
        </div>
        <section className="listing13-rejectListing">
          <div className="rectangle-parent137-rejectListing">
            <div className="frame-child158-rejectListing" />
            <div className="details-rejectListing">
              <div className="listing-info-rejectListing">
                <div className="info-top-rejectListing">
                  <div className="product-rejectListing">
                    <div className="product-name-rejectListing">
                      <h3 className="id3-rejectListing">No</h3>
                      <h3 className="products-name1-rejectListing">
                        Products name
                      </h3>
                    </div>
                  </div>
                  <div className="category3-rejectListing">
                    <h3 className="categories2-rejectListing">Categories</h3>
                  </div>
                  <div className="location-price-rejectListing">
                    <h3 className="location6-rejectListing">Location</h3>
                  </div>
                  <div className="location-price1-rejectListing">
                    <h3 className="price1-rejectListing">Price</h3>
                  </div>
                  <div className="date1-rejectListing">
                    <h3 className="date2-rejectListing">Date</h3>
                  </div>
                  <div className="status1-rejectListing">
                    <h3 className="request-status1-rejectListing">
                      Action
                    </h3>
                  </div>
                </div>
              </div>
              <div className="divider1-rejectListing" />
            </div>
            <div className="listing-example-rejectListing">
              <div className="divider2-rejectListing" />
              <div className="active2-rejectListing">ACTIVE</div>
              <div className="example-data-rejectListing">16/04/2023</div>
              <div className="example-data1-rejectListing">$5,9900</div>
              <div className="bandung2-rejectListing">Bandung</div>
              <a className="ville1-rejectListing">Ville</a>
              <a className="cozy-cottage2-rejectListing">Cozy cottage</a>
              <div className="example-data2-rejectListing">1</div>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default RejectListing;
