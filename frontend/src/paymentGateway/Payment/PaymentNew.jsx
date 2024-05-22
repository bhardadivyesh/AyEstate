import "./Payment.css";
import background from "../../assets/admin/payment/background.png"
import vector from "../../assets/admin/payment/vector.png"
import days from "../../assets/admin/payment/45days.png"
import topSlot from "../../assets/admin/payment/topSlot.png"
import privacy from "../../assets/admin/payment/privacy.png"
import relationship from "../../assets/admin/payment/relationship.png"
import personal from "../../assets/admin/payment/personal.png"
import gold from "../../assets/admin/payment/gold.png"
import silver from "../../assets/admin/payment/silver.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PaymentNew = () => {
  const navigate = useNavigate();
  const [gold_amount, setGold_amount] = useState(0);

  const handleGoldClick = (price) => {
    setGold_amount(price);
    
    if (!window.Razorpay) {
      return;
    }

    const options = {
      key: "rzp_test_afA1UpXOWaKZPn",
      amount: price * 100, 
      name: "Payments",
      description: "Donate yourself some time",
      handler: (response) => {
        const paymentId = response.razorpay_payment_id;
        const url =
          "http://localhost:3000/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          price; 

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            navigate("/paymentSuccess");
          })
          .catch((error) => {
            navigate("/paymenterror");
          });
      },
      prefill: {
        name: "Bharada Divyesh",
        email: "divyeshtechrabbit@gmail.com",
      },
      notes: {
        address: "Ahmedabad, India",
      },
      theme: {
        color: "#9D50BB",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    rzp1.on('payment.failed', function (response){
      rzp1.close();
      navigate("/paymentFail");
    });
  };

  return (
    <div className="free-paid-payment-screen">
      <div className="group-parent10-payment-screen">
        <div className="vector-parent-payment-screen">
          <img className="group-child43-payment-screen" alt="" src={background} />
          <div className="rectangle-parent56-payment-screen">
            <div className="group-child44-payment-screen" />
            <div className="group-wrapper2-payment-screen">
              <div className="group-parent11-payment-screen">
                <div className="rectangle-parent57-payment-screen">
                  <div className="group-child45-payment-screen-payment-screen" />
                  <div className="discont-payment-screen">2% Discont%</div>
                </div>
                <div className="vat-and-local-taxes-may-apply-parent-payment-screen">
                  <div className="vat-and-local-payment-screen">
                    *VAT and local taxes may apply
                  </div>
                  <div className="inr-25-container-payment-screen">
                    <span className="inr-payment-screen"> 2500 Billed</span>
                    <span className="listing2-payment-screen"> - 2450</span>
                  </div>
                  <div className="inr-container-payment-screen">
                    <span className="inr1-payment-screen"> 2,500 INR *</span>
                    <span> / 25 Listing</span>
                  </div>
                </div>
                <div className="wrapper-group-payment-screen">
                  <img className="group-icon-payment-screen" alt="" src={gold}/>
                </div>
              </div>
            </div>
          </div>
          <div className="group-parent12-payment-screen">
            <div className="group-parent13-payment-screen">
              <div className="fi-1828739-parent-payment-screen">
                <img className="fi-1828739-icon-payment-screen" alt="" src={vector} />
                <img className="fi-2693507-icon-payment-screen" alt="" src={days} />
                <div className="days-plan-validity-payment-screen">45 Days plan validity</div>
              </div>
              <div className="fi-1828739-group-payment-screen">
                <img
                  className="fi-1828739-icon1-payment-screen"
                  alt=""
                  src={vector}
                />
                <img className="fi-1239608-icon-payment-screen" alt="" src={personal} />
                <div className="personal-field-assistant-payment-screen">
                  Personal Field Assistant
                </div>
              </div>
              <div className="fi-1828739-container-payment-screen">
                <img
                  className="fi-1828739-icon2-payment-screen"
                  alt=""
                  src={vector}
                />
                <img className="fi-2889676-icon-payment-screen" alt="" src={privacy} />
                <div className="privacy-of-your-payment-screen">
                  Privacy Of Your Phone Number
                </div>
              </div>
              <div className="fi-870073-parent-payment-screen">
                <img className="fi-870073-icon-payment-screen" alt="" src={relationship} />
                <img
                  className="fi-1828739-icon3-payment-screen"
                  alt=""
                  src={vector}
                />
                <div className="relationship-manager-fast-payment-screen">
                  Relationship Manager Fast Closure
                </div>
              </div>
              <div className="fi-1828739-parent1-payment-screen">
                <img
                  className="fi-1828739-icon4-payment-screen"
                  alt=""
                  src={vector}
                />
                <img className="fi-2668384-icon-payment-screen" alt="" src={topSlot} />
                <div className="top-slot-listing-payment-screen">
                  Top slot listing for 5x more visicility
                </div>
              </div>
            </div>
            <button className="rectangle-parent58-payment-screen group-child46-payment-screen" onClick={()=>handleGoldClick(2500)}>
              <span className="get-started-payment-screen">Get Started</span>
            </button>
          </div>
        </div>
        <div className="group-parent14-payment-screen">
          <img className="group-child47-payment-screen" alt="" src={background}/>
          <div className="rectangle-parent59-payment-screen">
            <div className="group-child48-payment-screen" />
            <div className="vat-and-local-taxes-may-apply-group-payment-screen">
              <div className="vat-and-local1-payment-screen">
                *VAT and local taxes may apply
              </div>
              <div className="free-3-container-payment-screen">
                <b>FREE</b>
                <span>/ 3 Listing</span>
              </div>
              <div className="free-3-listing-container-payment-screen">
                <span>FREE*</span>
                <span className="span-payment-screen"></span>
                <span>3 Listing</span>
              </div>
            </div>
          </div>
          <div className="group-parent15-payment-screen">
            <div className="group-parent16-payment-screen">
              <div className="fi-1828739-parent2-payment-screen">
                <img
                  className="fi-1828739-icon5-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2693507-icon1-payment-screen"
                  alt=""
                  src={days}
                />
                <div className="days-plan-validity1-payment-screen">45 Days plan validity</div>
              </div>
              <div className="fi-1828739-parent3-payment-screen">
                <img
                  className="fi-1828739-icon6-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-1239608-icon1-payment-screen"
                  alt=""
                  src={personal}
                />
                <div className="personal-field-assistant1-payment-screen">
                  Personal Field Assistant
                </div>
              </div>
              <div className="fi-1828739-parent4-payment-screen">
                <img
                  className="fi-1828739-icon7-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2889676-icon1-payment-screen"
                  alt=""
                  src={privacy}
                />
                <div className="privacy-of-your1-payment-screen">
                  Privacy Of Your Phone Number
                </div>
              </div>
              <div className="fi-870073-group-payment-screen">
                <img className="fi-870073-icon1-payment-screen" alt="" src={relationship} />
                <img
                  className="fi-1828739-icon8-payment-screen"
                  alt=""
                  src={vector}
                />
                <div className="relationship-manager-fast1-payment-screen">
                  Relationship Manager Fast Closure
                </div>
              </div>
              <div className="fi-1828739-parent5-payment-screen">
                <img
                  className="fi-1828739-icon9-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2668384-icon1-payment-screen"
                  alt=""
                  src={topSlot}
                />
                <div className="top-slot-listing1-payment-screen">
                  Top slot listing for 5x more visicility
                </div>
              </div>
            </div>
            <button className="rectangle-parent60-payment-screen group-child49-payment-screen">
              <span className="get-started1-payment-screen">Get Started</span>
            </button>
          </div>
        </div>
        <div className="vector-group-payment-screen">
          <img className="group-child50-payment-screen" alt="" src={background} />
          <div className="group-wrapper3-payment-screen">
            <div className="rectangle-parent61-payment-screen">
              <div className="group-child51-payment-screen" />
              <div className="group-parent17-payment-screen">
                <div className="group-wrapper4-payment-screen">
                  <div className="rectangle-parent62-payment-screen">
                    <div className="group-child52-payment-screen" />
                    <div className="discont1-payment-screen">2% Discont%</div>
                  </div>
                </div>
                <div className="vat-and-local-taxes-may-apply-container-payment-screen">
                  <div className="vat-and-local2-payment-screen">
                    *VAT and local taxes may apply
                  </div>
                  <div className="inr-container1-payment-screen">
                    <span className="inr2-payment-screen"> 1,200 INR *</span>
                    <span> / 15 Listing</span>
                  </div>
                  <div className="inr-15-container-payment-screen">
                    <span className="inr3-payment-screen"> 1200 Billed</span>
                    <span className="listing3-payment-screen"> - 2450</span>
                  </div>
                </div>
                <div className="wrapper-group1-payment-screen">
                  <img className="group-icon1-payment-screen" alt="" src={silver} />
                </div>
              </div>
            </div>
          </div>
          <div className="group-parent18-payment-screen">
            <div className="group-parent19-payment-screen">
              <div className="fi-1828739-parent6-payment-screen">
                <img
                  className="fi-1828739-icon10-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2693507-icon2-payment-screen"
                  alt=""
                  src={days}
                />
                <div className="days-plan-validity2-payment-screen">45 Days plan validity</div>
              </div>
              <div className="fi-1828739-parent7-payment-screen">
                <img
                  className="fi-1828739-icon11-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-1239608-icon2-payment-screen"
                  alt=""
                  src={personal}
                />
                <div className="personal-field-assistant2-payment-screen">
                  Personal Field Assistant
                </div>
              </div>
              <div className="fi-1828739-parent8-payment-screen">
                <img
                  className="fi-1828739-icon12-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2889676-icon2-payment-screen"
                  alt=""
                  src={privacy}
                />
                <div className="privacy-of-your2-payment-screen">
                  Privacy Of Your Phone Number
                </div>
              </div>
              <div className="fi-870073-container-payment-screen">
                <img className="fi-870073-icon2-payment-screen" alt="" src={relationship} />
                <img
                  className="fi-1828739-icon13-payment-screen"
                  alt=""
                  src={vector}
                />
                <div className="relationship-manager-fast2-payment-screen">
                  Relationship Manager Fast Closure
                </div>
              </div>
              <div className="fi-1828739-parent9-payment-screen">
                <img
                  className="fi-1828739-icon14-payment-screen"
                  alt=""
                  src={vector}
                />
                <img
                  className="fi-2668384-icon2-payment-screen"
                  alt=""
                  src={topSlot}
                />
                <div className="top-slot-listing2-payment-screen">
                  Top slot listing for 5x more visicility
                </div>
              </div>
            </div> 
            <button className="rectangle-parent63-payment-screen group-child53-payment-screen" onClick={()=>handleGoldClick(1200)}>
              <span className="get-started2-payment-screen">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentNew;
