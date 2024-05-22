import "./MembershipRevenuePopUp.css";
import closeIcon from "../../../assets/admin/membershipRevenueStatus/deleteIcon.png";
import line from "../../../assets/admin/membershipRevenueStatus/line.png";
import membershipRevenue from "../MembershipRevenue";
import { useContext } from "react";
const MembershipRevenuePopup = () => {
  const value = useContext(membershipRevenue);
  console.log(value);
  return (
    <div className="membership-revenue-popup-membership-revenue-popup">
      <section className="rectangle-parent86-membership-revenue-popup">
        <div className="frame-child98-membership-revenue-popup" />
        <header className="frame-parent53-membership-revenue-popup">
          <img
            onClick={() => value.setPopUpToggle(false)}
            className="frame-child99-membership-revenue-popup"
            loading="lazy"
            alt=""
            src={closeIcon}
          />
          <div className="transaction-details-membership-revenue-popup">
            <div className="rectangle-parent87-membership-revenue-popup">
              <div className="frame-child100-membership-revenue-popup" />
              <div className="transaction-id-field-membership-revenue-popup">
                <label className="transaction-id-membership-revenue-popup">Transaction id</label>
              </div>
              <img
                className="frame-child101-membership-revenue-popup"
                alt=""
                src={line}
              />
              <div className="empty-transaction-detail-membership-revenue-popup">
                <label className="empty-space1-membership-revenue-popup">
                  4588 4674 897
                </label>
              </div>
            </div>
          </div>
        </header>
        <div className="rectangle-parent88-membership-revenue-popup">
          <div className="frame-child102-membership-revenue-popup" />
          <div className="membership-entry-fields-membership-revenue-popup">
            <label className="vendor3-membership-revenue-popup">Vendor</label>
          </div>
          <img
            className="frame-child103-membership-revenue-popup"
            loading="lazy"
            alt=""
            src={line}
          />
          <div className="member-info-membership-revenue-popup">
            <label className="karan1-membership-revenue-popup">karan</label>
          </div>
        </div>
        <div className="rectangle-parent89-membership-revenue-popup">
          <div className="frame-child104-membership-revenue-popup" />
          <label className="frame-child105-membership-revenue-popup">
            Vendor email
          </label>
          <img
            className="frame-child106-membership-revenue-popup"
            alt=""
            src={line}
          />
          <div className="kar23gmailcom-wrapper-membership-revenue-popup">
            <label className="kar23gmailcom-membership-revenue-popup">
              kar23@gmail.com
            </label>
          </div>
        </div>
        <div className="rectangle-parent90-membership-revenue-popup">
          <div className="frame-child107-membership-revenue-popup" />
          <div className="payment-data-wrapper-membership-revenue-popup">
            <label className="payment-data-membership-revenue-popup">Payment data</label>
          </div>
          <img
            className="frame-child108-membership-revenue-popup"
            alt=""
            src={line}
          />
          <div className="frame-membership-revenue-popup">
            <label className="div38-membership-revenue-popup">12/05/2023</label>
          </div>
        </div>
        <div className="rectangle-parent91-membership-revenue-popup">
          <div className="frame-child109-membership-revenue-popup" />
          <div className="status-wrapper-membership-revenue-popup">
            <label className="status-membership-revenue-popup">Status</label>
          </div>
          <img
            className="frame-child110-membership-revenue-popup"
            alt=""
            src={line}
          />
          <div className="successful-wrapper-membership-revenue-popup">
            <label className="successful-membership-revenue-popup">Successful</label>
          </div>
        </div>
        <div className="rectangle-parent92-membership-revenue-popup">
          <div className="frame-child111-membership-revenue-popup" />
          <div className="amount-container-membership-revenue-popup">
            <label className="amount1-membership-revenue-popup">Amount</label>
          </div>
          <div className="vector-group-membership-revenue-popup">
            <img
              className="frame-child112-membership-revenue-popup"
              loading="lazy"
              alt=""
              src={line}
            />
            <div className="payment-details1-membership-revenue-popup">
              <div className="payment-status1-membership-revenue-popup">
                <label className="empty-payment-status-membership-revenue-popup">
                ₹12000
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipRevenuePopup;
