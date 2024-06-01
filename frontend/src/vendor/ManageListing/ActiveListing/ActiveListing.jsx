import { useContext } from "react";
import "./ActiveListing.css";
import manageListingContext from "../ManageListingContext";

const ActiveListing = () => {
    const value = useContext(manageListingContext)
    console.log(value);
  return (
    <div className="managelistingvendor-activeListing">
      <header className="group-header-activeListing">
        <div className="frame-child151-activeListing" />
        <div className="management-panel-activeListing">
          <div className="frame-parent75-activeListing">
            <button className="rectangle-parent131-activeListing" onClick={()=>value.setManageListingRender("activeListing")}>
              <span className="active-activeListing">ACTIVE (5)</span>
            </button>
            <button className="rectangle-parent132-activeListing" onClick={()=>value.setManageListingRender("pendingListing")}>
              <span className="pending-6-activeListing">PENDING (6)</span>
            </button>
            <button className="rectangle-parent133-activeListing" onClick={()=>value.setManageListingRender("rejectListing")}>
              <span className="reject-activeListing">REJECT (5)</span>
            </button>
          </div>
        </div>
        <section className="rectangle-parent134-activeListing">
          <div className="frame-child155-activeListing" />
          <div className="details-panel-activeListing">
            <div className="product-info-activeListing">
              <div className="id-container-activeListing">
                <div className="id2-activeListing">No</div>
              </div>
              <div className="info-headers-activeListing">
                <div className="products-name-activeListing">Project Name</div>
              </div>
              <div className="info-headers1-activeListing">
                <a className="categories1-activeListing">Category</a>
              </div>
              <div className="location-container-activeListing">
                <a className="location5-activeListing">Location</a>
              </div>
              <div className="info-headers2-activeListing">
                <div className="price-activeListing">Price</div>
              </div>
              <div className="info-headers3-activeListing">
                <a className="date-activeListing">Date</a>
              </div>
              <div className="info-headers4-activeListing">
                <div className="request-status-activeListing">Status</div>
              </div>
              <div className="info-headers5-activeListing">
                <a className="listing-edit-activeListing">Action</a>
              </div>
            </div>
          </div>
          <div className="listing-preview-activeListing">
            <div className="preview-container1-activeListing">
              <div className="preview-details-activeListing">
                <div className="preview-fields-activeListing">
                  <a className="preview-values-activeListing">1</a>
                </div>
                <div className="preview-fields1-activeListing">
                  <a className="cozy-cottage1-activeListing">Cozy cottage</a>
                </div>
                <a className="ville-activeListing">Ville</a>
                <div className="preview-fields2-activeListing">
                  <a className="bandung1-activeListing">Bandung</a>
                </div>
                <div className="preview-fields3-activeListing">
                  <div className="div78-activeListing">$5,9900</div>
                </div>
                <div className="preview-fields4-activeListing">
                  <a className="a-activeListing">16/04/2023</a>
                </div>
                <div className="preview-fields5-activeListing">
                  <div className="active1-activeListing">ACTIVE</div>
                </div>
                <div className="edit-action-activeListing">
                  <button className="rectangle-parent135-activeListing">
                    <div className="frame-child156-activeListing" />
                    <a className="edit-activeListing">Edit</a>
                  </button>
                </div>
              </div>
              <div className="top-divider-activeListing" />
            </div>
            <div className="bottom-divider-activeListing" />
          </div>
        </section>
      </header>
    </div>
  );
};

export default ActiveListing;
