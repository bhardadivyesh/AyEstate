import { useContext } from "react";
import "./MembershipRevenue.css";
import membershipRevenue from "../MembershipRevenue"

const MembershipRevenue = () => {
    const value = useContext(membershipRevenue)
    console.log(value);
  return (
    <>
    <div className="membership-revenue2-membership-revenue">
      <main className="membership-revenue-inner-membership-revenue">
        <div className="frame-child94-membership-revenue" />
      </main>
      <div className="revenue-summary-membership-revenue">
        <div className="rectangle-parent83-membership-revenue">
          <div className="frame-child95-membership-revenue" />
          <div className="total-revenue-membership-revenue">Total revenue</div>
          <div className="separator-content-wrapper-membership-revenue">
            <div className="separator-content-membership-revenue">0</div>
          </div>
        </div>
        <div className="rectangle-parent84-membership-revenue">
          <div className="frame-child96-membership-revenue" />
          <div className="total-refund-membership-revenue">Total refund</div>
          <div className="container-membership-revenue">
            <div className="div37-membership-revenue">0</div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent85-membership-revenue">
        <div className="frame-child97-membership-revenue" />
        <div className="payment-details-wrapper-membership-revenue">
          <div className="payment-details-membership-revenue">
            <div className="payment-info-membership-revenue">
              <div className="payment-entry-membership-revenue">
                <div className="id-membership-revenue">Id</div>
                <div className="payment-date-wrapper-membership-revenue">
                  <div className="payment-date-membership-revenue">Payment Date</div>
                </div>
                <div className="amount-wrapper-membership-revenue">
                  <div className="amount-membership-revenue">Amount</div>
                </div>
              </div>
            </div>
            <div className="vendor-wrapper-membership-revenue">
              <div className="vendor2-membership-revenue">Vendor</div>
            </div>
            <div className="item-wrapper-membership-revenue">
              <div className="item-membership-revenue">ITEM</div>
            </div>
            <div className="payment-status-wrapper-membership-revenue">
              <div className="payment-status-membership-revenue">Payment status</div>
            </div>
            <div className="payment-detail-membership-revenue">Payment Detail</div>
          </div>
        </div>
        <div className='frame-parent104-membership-revenue'>
      <div className="line-parent1-membership-revenue">
        <div className="frame-child170-membership-revenue" />
        <div className="frame-wrapper61-membership-revenue">
          <div className="frame-parent105-membership-revenue">
            <div className="wrapper2-membership-revenue">
              <div className="div43-membership-revenue">1</div>
            </div>
            <div className="wrapper3-membership-revenue">
              <div className="div44-membership-revenue">17/05/2024</div>
            </div>
            <div className="wrapper4-membership-revenue">
              <div className="div45-membership-revenue">₹1200</div>
            </div>
            <div className="karan-wrapper-membership-revenue">
              <div className="karan1-membership-revenue">Karan</div>
            </div>
            <div className="paid-wrapper-membership-revenue">
              <div className="paid-membership-revenue">Paid</div>
            </div>
            <div className="successful-wrapper-membership-revenue">
              <div className="successful-membership-revenue">Successful</div>
            </div>
            <button className="rectangle-parent132-membership-revenue" onClick={()=>value.setPopUpToggle(true)}>
              <span className="detail-membership-revenue">Detail</span>
            </button>
          </div>
        </div>
      </div>
      <div className="frame-child172-membership-revenue" />
    </div>
      </div>
    </div>
    </>
  );
};
export default MembershipRevenue;