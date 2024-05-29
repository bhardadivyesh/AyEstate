import "./PaymentNew.css";
import previous from "../../assets/admin/membership/membership/membershipNew/group1.png"
import next from "../../assets/admin/membership/membership/membershipNew/group2.png"
import freeIcon from '../../assets/admin/membership/membership/membershipNew/free.png'
import goldIcon from '../../assets/admin/membership/membership/membershipNew/goldIcon.png'
import silverIcon from '../../assets/admin/membership/membership/membershipNew/silverIcon.png'
import discountIcon from "../../assets/admin/membership/membership/membershipNew/discount.png"
import checkmark from "../../assets/admin/membership/membership/membershipNew/checkmark.png"
import days from "../../assets/admin/membership/membership/membershipNew/day.png"
import topSlotBlur from "../../assets/admin/membership/membership/membershipNew/topSlotBlur.png"
import topSlot from "../../assets/admin/membership/membership/membershipNew/topSlot.png"
import privacy from "../../assets/admin/membership/membership/membershipNew/privacy.png"
import relationshipBlur from "../../assets/admin/membership/membership/membershipNew/relationshipBlur.png"
import relationship from "../../assets/admin/membership/membership/membershipNew/relationship.png"
import personal from "../../assets/admin/membership/membership/membershipNew/personal.png"
import strikeLine from "../../assets/admin/membership/membership/membershipNew/strike.png"
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
  console.log("payment screen");

  return (
   <>
    <div className="package-paymentNew">
      <img src={previous} className="wrapper-group-1000002992-wrapper-paymentNew" />
        <div className="wrapper-group-1000002992-paymentNew">
          {/* <Home /> */}
        </div>
      {/* </img> */}
      <div className="package-inner-paymentNew">
        {/* <GroupComponent1 /> */}
        <div className="rectangle-parent157-paymentNew">
      <div className="frame-child197-paymentNew" />
      <div className="free-package-benefits-paymentNew">
        <div className="free-package-benefits-child-paymentNew" />
        <div className="frame-parent119-paymentNew">
          <div className="frame-wrapper67-paymentNew">
            <img
              className="frame-child198-paymentNew"
              loading="lazy"
              alt=""
              src={freeIcon}
            />
          </div>
          <div className="free-packages-paymentNew">Free Packages</div>
        </div>
        <div className="free-3-listing-wrapper-paymentNew">
          <div className="free-3-container2-paymentNew">
            <span className="free7-paymentNew">
              <span>FREE</span>
            </span>
            <span className="listing7-paymentNew">
              <span>/ 3 Listing</span>
            </span>
          </div>
        </div>
      </div>
      <div className="frame-wrapper68-paymentNew">
        <div className="frame-parent120-paymentNew">
          <div className="frame-parent121-paymentNew">
            <div className="frame-parent122-paymentNew">
              <div className="checkmark-circle-2-wrapper-paymentNew">
                <img
                  className="checkmark-circle-2-icon-paymentNew"
                  loading="lazy"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2693507-icon5-paymentNew"
                loading="lazy"
                alt=""
                src={days}
              />
              <div className="days-plan-validity-frame-paymentNew">
                <div className="days-plan-validity5-paymentNew">10 Days plan validity</div>
              </div>
            </div>
            <div className="frame-parent123-paymentNew">
              <div className="checkmark-circle-2-container-paymentNew">
                <img
                  className="checkmark-circle-2-icon1-paymentNew"
                  loading="lazy"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2668384-icon1-paymentNew"
                loading="lazy"
                alt=""
                src={topSlotBlur}
              />
              <div className="top-slot-listing-for-5x-more-v-wrapper-paymentNew">
                <div className="top-slot-listing6-paymentNew">
                  Top slot listing for 5x more visicility
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper69-paymentNew">
            <div className="frame-parent124-paymentNew">
              <div className="checkmark-circle-2-frame-paymentNew">
                <img
                  className="checkmark-circle-2-icon2-paymentNew"
                  loading="lazy"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2889676-icon1-paymentNew"
                loading="lazy"
                alt=""
                src={privacy}
              />
              <div className="privacy-of-your-phone-number-container-paymentNew">
                <div className="privacy-of-your6-paymentNew">
                  Privacy Of Your Phone Number
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper70-paymentNew">
            <div className="frame-parent125-paymentNew">
              <div className="checkmark-circle-2-wrapper1-paymentNew">
                <img
                  className="checkmark-circle-2-icon3-paymentNew"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-870073-icon1-paymentNew"
                loading="lazy"
                alt=""
                src={relationshipBlur}
              />
              <div className="relationship-manager-fast-clos-wrapper-paymentNew">
                <div className="relationship-manager-fast-paymentNew">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent126-paymentNew">
            <div className="frame-wrapper71-paymentNew">
              <div className="frame-parent127-paymentNew">
                <div className="checkmark-circle-2-wrapper2-paymentNew">
                  <img
                    className="checkmark-circle-2-icon4-paymentNew"
                    alt=""
                    src={checkmark}
                  />
                </div>
                <img
                  className="fi-1239608-icon1-paymentNew"
                  loading="lazy"
                  alt=""
                  src={personal}
                />
                <div className="personal-field-assistant-container-paymentNew">
                  <div className="personal-field-assistant6-paymentNew">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <button className="rectangle-parent158-paymentNew">
              <span className="get-started1-paymentNew">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
        {/* gtoupover */}
      </div>
      <div className="package-child-paymentNew">
        {/* <GroupComponent /> */}
        <div className="rectangle-parent160-paymentNew">
      <div className="frame-child201-paymentNew" />
      <div className="silver-package-header-paymentNew">
        <div className="silver-package-header-child-paymentNew" />
        <div className="frame-parent140-paymentNew">
          <div className="group-wrapper20-paymentNew">
            <img
              className="group-icon18-paymentNew"
              loading="lazy"
              alt=""
              src={silverIcon}
            />
          </div>
          <div className="vector-parent3-paymentNew">
            <img
              className="frame-child202-paymentNew"
              loading="lazy"
              alt=""
              src={discountIcon}
            />
            <div className="discont6-paymentNew">2% Discont</div>
          </div>
        </div>
        <div className="silver-packages-wrapper-paymentNew">
          <div className="silver-packages-paymentNew">Silver Packages</div>
        </div>
        <div className="silver-package-header-inner-paymentNew">
          <div className="listing-group-paymentNew">
            <div className="listing8-paymentNew">
              <span className="span11-paymentNew">
                <span className="span12-paymentNew">
                  <span>₹1470</span>
                </span>
              </span>
              <span className="listing9-paymentNew">
                <span className="span13-paymentNew">
                  <span className="span14-paymentNew">{` `}</span>
                </span>
                <span>
                  <span className="span15-paymentNew">1,500</span>
                  <span> / 10 Listing</span>
                </span>
              </span>
            </div>
            <img className="frame-child203-paymentNew" alt="" src={strikeLine} />
          </div>
        </div>
      </div>
      <div className="frame-wrapper72-paymentNew">
      <div className="frame-parent128-paymentNew">
        <div className="frame-parent129-paymentNew">
          <div className="frame-parent130-paymentNew">
            <div className="checkmark-circle-2-wrapper3-paymentNew">
              <img
                className="checkmark-circle-2-icon5-paymentNew"
                alt=""
                src={checkmark}
              />
            </div>
            <img
              className="fi-2693507-icon6-paymentNew"
              loading="lazy"
              alt=""
              src={days}
            />
            <div className="days-plan-validity-wrapper1-paymentNew">
              <div className="days-plan-validity6-paymentNew">15 daysPlanValidity</div>
            </div>
          </div>
          <div className="frame-parent132-paymentNew">
            <div className="frame-parent132-paymentNew">
              <div className="checkmark-circle-2-wrapper4-paymentNew">
                <img
                  className="checkmark-circle-2-icon6-paymentNew"
                  alt=""
                  src={checkmark}
                  
                />
              </div>
              <img
                className="fi-2668384-icon2-paymentNew"
                loading="lazy"
                alt=""
                src={topSlotBlur}
              />
            </div>
            <div className="top-slot-listing-for-5x-more-v-container-paymentNew">
              <div className="top-slot-listing7-paymentNew">
                Top slot listing for 5x more visicility
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper73-paymentNew">
          <div className="frame-parent133-paymentNew">
            <div className="frame-parent134-paymentNew">
              <div className="checkmark-circle-2-wrapper5-paymentNew">
                <img
                  className="checkmark-circle-2-icon7-paymentNew"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2889676-icon2-paymentNew"
                loading="lazy"
                alt=""
                src={privacy}
              />
            </div>
            <div className="privacy-of-your-phone-number-frame-paymentNew">
              <div className="privacy-of-your7-paymentNew">
                Privacy Of Your Phone Number
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent135-paymentNew">
          <div className="frame-wrapper74-paymentNew">
            <div className="frame-parent136-paymentNew">
              <div className="frame-parent137-paymentNew">
                <div className="checkmark-circle-2-wrapper6-paymentNew">
                  <img
                    className="checkmark-circle-2-icon8-paymentNew"
                    alt=""
                    src={checkmark}
                  />
                </div>
                <img
                  className="fi-870073-icon2-paymentNew"
                  loading="lazy"
                  alt=""
                  src={relationship}
                />
              </div>
              <div className="relationship-manager-fast-clos-container-paymentNew">
                <div className="relationship-manager-fast1-paymentNew">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent138-paymentNew">
            <div className="frame-wrapper75-paymentNew">
              <div className="frame-parent139-paymentNew">
                <div className="checkmark-circle-2-wrapper7-paymentNew">
                  <img
                    className="checkmark-circle-2-icon9-paymentNew"
                    alt=""
                    src={checkmark}
                  />
                </div>
                <img
                  className="fi-1239608-icon2-paymentNew"
                  loading="lazy"
                  alt=""
                  src={personal}
                />
                <div className="personal-field-assistant-frame-paymentNew">
                  <div className="personal-field-assistant7-paymentNew">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <button className="rectangle-parent159-paymentNew" onClick={()=>handleGoldClick(1470)}>
              <span className="get-started2-paymentNew">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
        {/* <GroupComponent over /> */}
      </div>
      <div className="rectangle-parent108-paymentNew">
        <div className="frame-child117-paymentNew" />
        <div className="rectangle-parent109-paymentNew">
          <div className="frame-child118-paymentNew" />
          <div className="frame-parent65-paymentNew">
            <div className="frame-wrapper36-paymentNew">
              <div className="vector-parent1-paymentNew">
                <img
                  className="frame-child119-paymentNew"
                  loading="lazy"
                  alt=""
                  src={discountIcon}
                />
                <button className="discont4-paymentNew">2% Discont</button>
              </div>
            </div>
            <div className="wrapper-group3-paymentNew">
              <img
                className="group-icon16-paymentNew"
                loading="lazy"
                alt=""
                src={goldIcon}
              />
            </div>
          </div>
          <div className="gold-packages-wrapper-paymentNew">
            <div className="gold-packages-paymentNew">Gold Packages</div>
          </div>
          <div className="frame-wrapper37-paymentNew">
            <div className="listing-parent-paymentNew">
              <div className="listing3-paymentNew">
                <span className="span-paymentNew">
                  <span className="span1-paymentNew">
                    <span className="span2-paymentNew">₹2450</span>
                  </span>
                </span>
                <span className="listing4-paymentNew">
                  <span className="span3-paymentNew">
                    <span className="span4-paymentNew">{` `}</span>
                  </span>
                  <span className="listing5-paymentNew">
                    <span className="span5-paymentNew">2,500</span>
                    <span className="listing6-paymentNew"> / 25 Listing</span>
                  </span>
                </span>
              </div>
              <img className="frame-child120-paymentNew" alt="" src={strikeLine} />
            </div>
          </div>
        </div>
        <div className="frame-wrapper72-paymentNew">
      <div className="frame-parent128-paymentNew">
        <div className="frame-parent129-paymentNew">
          <div className="frame-parent130-paymentNew">
            <div className="checkmark-circle-2-wrapper3-paymentNew">
              <img
                className="checkmark-circle-2-icon5-paymentNew"
                alt=""
                src={checkmark}
              />
            </div>
            <img
              className="fi-2693507-icon6-paymentNew"
              loading="lazy"
              alt=""
              src={days}
            />
            <div className="days-plan-validity-wrapper1-paymentNew">
              <label className="days-plan-validity6-paymentNew">25 daysPlanValidity</label>
            </div>
          </div>
          <div className="frame-parent131-paymentNew">
            <div className="frame-parent132-paymentNew">
              <div className="checkmark-circle-2-wrapper4-paymentNew">
                <img
                  className="checkmark-circle-2-icon6-paymentNew"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2668384-icon2-paymentNew"
                loading="lazy"
                alt=""
                src={topSlot}
              />
            </div>
            <div className="top-slot-listing-for-5x-more-v-container-paymentNew">
              <div className="top-slot-listing7-paymentNew">
                Top slot listing for 5x more visicility
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper73-paymentNew">
          <div className="frame-parent133-paymentNew">
            <div className="frame-parent134-paymentNew">
              <div className="checkmark-circle-2-wrapper5-paymentNew">
                <img
                  className="checkmark-circle-2-icon7-paymentNew"
                  alt=""
                  src={checkmark}
                />
              </div>
              <img
                className="fi-2889676-icon2-paymentNew"
                loading="lazy"
                alt=""
                src={privacy}
              />
            </div>
            <div className="privacy-of-your-phone-number-frame-paymentNew">
              <div className="privacy-of-your7-paymentNew">
                Privacy Of Your Phone Number
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent135-paymentNew">
          <div className="frame-wrapper74-paymentNew">
            <div className="frame-parent136-paymentNew">
              <div className="frame-parent137-paymentNew">
                <div className="checkmark-circle-2-wrapper6-paymentNew">
                  <img
                    className="checkmark-circle-2-icon8-paymentNew"
                    alt=""
                    src={checkmark}
                  />
                </div>
                <img
                  className="fi-870073-icon2-paymentNew"
                  loading="lazy"
                  alt=""
                  src={relationship}
                />
              </div>
              <div className="relationship-manager-fast-clos-container-paymentNew">
                <div className="relationship-manager-fast1-paymentNew">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent138-paymentNew">
            <div className="frame-wrapper75-paymentNew">
              <div className="frame-parent139-paymentNew">
                <div className="checkmark-circle-2-wrapper7-paymentNew">
                  <img
                    className="checkmark-circle-2-icon9-paymentNew"
                    alt=""
                    src={checkmark}
                  />
                </div>
                <img
                  className="fi-1239608-icon2-paymentNew"
                  loading="lazy"
                  alt=""
                  src={personal}
                />
                <div className="personal-field-assistant-frame-paymentNew">
                  <div className="personal-field-assistant7-paymentNew">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <button className="rectangle-parent159-paymentNew" onClick={()=>handleGoldClick(2450)}>
              <span className="get-started2-paymentNew">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="package-inner1-paymentNew">
        <img
          className="frame-child121-paymentNew"
          loading="lazy"
          alt=""
          src={next}
        />
      </div>
    </div>
   </>
  );
};

export default PaymentNew;
