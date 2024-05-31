import { useContext, useState } from "react";
import "./MembershipRevenue.css";
import membershipRevenue from "../MembershipRevenue";
import { useEffect } from "react";
import axios from "axios";
import moment from 'moment-timezone';

const MembershipRevenue = () => {
  const [activeMemberData, setActiveMemberData] = useState([]);
  const value = useContext(membershipRevenue);
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration").then((res) => {
      setActiveMemberData(res.data);
    });
  }, []);
  const membershipRevenueTotal = activeMemberData?.reduce((total, current) => {
    return total + Number(current.paymentValue);
  }, 0);
  const handleDetailButtonClick = (membershipData)=>{
    value.setPopUpToggle(true)
    value.setMembershipMemberData(membershipData)
    console.log(membershipData);
  }
  return (
    <>
      <div className="membership-revenue2-membership-revenue">
        <main className="membership-revenue-inner-membership-revenue">
          <div className="frame-child94-membership-revenue" />
        </main>
        <div className="revenue-summary-membership-revenue">
          <div className="rectangle-parent83-membership-revenue">
            <div className="frame-child95-membership-revenue" />
            <div className="total-revenue-membership-revenue">
              Total revenue
            </div>
            <div className="separator-content-wrapper-membership-revenue">
              <div className="separator-content-membership-revenue">{`₹${membershipRevenueTotal}`}</div>
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
                    <div className="payment-date-membership-revenue">
                      Payment Date
                    </div>
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
                <div className="payment-status-membership-revenue">
                  Payment status
                </div>
              </div>
              <div className="payment-detail-membership-revenue">
                Payment Detail
              </div>
            </div>
          </div>
          <div className="frame-parent104-membership-revenue">
            <div className="line-parent1-membership-revenue">
              <table className="frame-child170-membership-revenue">
              <tbody className="frame-wrapper61-membership-revenue">
                {activeMemberData.map((items, index) => {
                  return (
                    <>
                    <tr
                      className="frame-parent105-membership-revenue"
                      key={index}
                    >
                      {console.log(items)}
                      <td className="div43-membership-revenue">{index + 1}</td>
                      <td className="div44-membership-revenue">{moment.utc(items.createdAt).tz('Asia/Kolkata').format('YYYY-MM-DD')}</td>
                      <td className="div45-membership-revenue">{`₹${items.paymentValue}`}</td>
                      <td className="karan1-membership-revenue">{items.name}</td>
                      <td className="paid-membership-revenue">Paid</td>
                      <td className="successful-membership-revenue">
                        Successful
                      </td>
                      <td>
                        <button
                          className="rectangle-parent132-membership-revenue"
                          onClick={() => handleDetailButtonClick(items)}
                        >
                          <span className="detail-membership-revenue">
                            Detail
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <div className="frame-child172-membership-revenue" />
                      </tr>
                      </>
                  );
                })}
              </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MembershipRevenue;
