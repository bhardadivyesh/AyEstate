import "./PaymentNew.css";
import previous from "../../assets/admin/membership/membership/previous.png"
import next from "../../assets/admin/membership/membership/next.png"

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
    <div className="package">
      <img src={previous} className="wrapper-group-1000002992-wrapper" />
        <div className="wrapper-group-1000002992">
          {/* <Home /> */}
        </div>
      {/* </img> */}
      <div className="package-inner">
        {/* <GroupComponent1 /> */}
        <div className="rectangle-parent157">
      <div className="frame-child197" />
      <div className="free-package-benefits">
        <div className="free-package-benefits-child" />
        <div className="frame-parent119">
          <div className="frame-wrapper67">
            <img
              className="frame-child198"
              loading="lazy"
              alt=""
              src="/group-1000003032.svg"
            />
          </div>
          <div className="free-packages">{`Free Packages `}</div>
        </div>
        <div className="free-3-listing-wrapper">
          <div className="free-3-container2">
            <span className="free7">
              <span>FREE</span>
            </span>
            <span className="listing7">
              <span className="span10">{` `}</span>
              <span>/ 3 Listing</span>
            </span>
          </div>
        </div>
      </div>
      <div className="frame-wrapper68">
        <div className="frame-parent120">
          <div className="frame-parent121">
            <div className="frame-parent122">
              <div className="checkmark-circle-2-wrapper">
                <img
                  className="checkmark-circle-2-icon"
                  loading="lazy"
                  alt=""
                  src="/checkmarkcircle2.svg"
                />
              </div>
              <img
                className="fi-2693507-icon5"
                loading="lazy"
                alt=""
                src="/fi-26935071.svg"
              />
              <div className="days-plan-validity-frame">
                <div className="days-plan-validity5">10 Days plan validity</div>
              </div>
            </div>
            <div className="frame-parent123">
              <div className="checkmark-circle-2-container">
                <img
                  className="checkmark-circle-2-icon1"
                  loading="lazy"
                  alt=""
                  src="/checkmarkcircle2-1.svg"
                />
              </div>
              <img
                className="fi-2668384-icon1"
                loading="lazy"
                alt=""
                src="/fi-26683841.svg"
              />
              <div className="top-slot-listing-for-5x-more-v-wrapper">
                <div className="top-slot-listing6">
                  Top slot listing for 5x more visicility
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper69">
            <div className="frame-parent124">
              <div className="checkmark-circle-2-frame">
                <img
                  className="checkmark-circle-2-icon2"
                  loading="lazy"
                  alt=""
                  src="/checkmarkcircle2.svg"
                />
              </div>
              <img
                className="fi-2889676-icon1"
                loading="lazy"
                alt=""
                src="/fi-28896761.svg"
              />
              <div className="privacy-of-your-phone-number-container">
                <div className="privacy-of-your6">
                  Privacy Of Your Phone Number
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper70">
            <div className="frame-parent125">
              <div className="checkmark-circle-2-wrapper1">
                <img
                  className="checkmark-circle-2-icon3"
                  alt=""
                  src="/checkmarkcircle2-1.svg"
                />
              </div>
              <img
                className="fi-870073-icon1"
                loading="lazy"
                alt=""
                src="/fi-8700731.svg"
              />
              <div className="relationship-manager-fast-clos-wrapper">
                <div className="relationship-manager-fast">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent126">
            <div className="frame-wrapper71">
              <div className="frame-parent127">
                <div className="checkmark-circle-2-wrapper2">
                  <img
                    className="checkmark-circle-2-icon4"
                    alt=""
                    src="/checkmarkcircle2.svg"
                  />
                </div>
                <img
                  className="fi-1239608-icon1"
                  loading="lazy"
                  alt=""
                  src="/fi-12396081.svg"
                />
                <div className="personal-field-assistant-container">
                  <div className="personal-field-assistant6">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent158">
              <div className="frame-child199" />
              <h2 className="get-started1">Get Started</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* gtoupover */}
      </div>
      <div className="package-child">
        {/* <GroupComponent /> */}
        <div className="rectangle-parent160">
      <div className="frame-child201" />
      <div className="silver-package-header">
        <div className="silver-package-header-child" />
        <div className="frame-parent140">
          <div className="group-wrapper20">
            <img
              className="group-icon18"
              loading="lazy"
              alt=""
              src="/group2.svg"
            />
          </div>
          <div className="vector-parent3">
            <img
              className="frame-child202"
              loading="lazy"
              alt=""
              src="/rectangle-130.svg"
            />
            <div className="discont6">2% Discont</div>
          </div>
        </div>
        <div className="silver-packages-wrapper">
          <div className="silver-packages">{`Silver Packages `}</div>
        </div>
        <div className="silver-package-header-inner">
          <div className="listing-group">
            <div className="listing8">
              <span className="span11">
                <span className="span12">
                  <span>₹1470</span>
                </span>
              </span>
              <span className="listing9">
                <span className="span13">
                  <span className="span14">{` `}</span>
                </span>
                <span>
                  <span className="span15">{`1,500 `}</span>
                  <span> / 10 Listing</span>
                </span>
              </span>
            </div>
            <img className="frame-child203" alt="" src="/line-66.svg" />
          </div>
        </div>
      </div>
      <div className="frame-wrapper72">
      <div className="frame-parent128">
        <div className="frame-parent129">
          <div className="frame-parent130">
            <div className="checkmark-circle-2-wrapper3">
              <img
                className="checkmark-circle-2-icon5"
                alt=""
                src={"checkmarkCircle2"}
              />
            </div>
            <img
              className="fi-2693507-icon6"
              loading="lazy"
              alt=""
              src="/fi-26935071.svg"
            />
            <div className="days-plan-validity-wrapper1">
              <div className="days-plan-validity6">{"daysPlanValidity"}</div>
            </div>
          </div>
          <div className="frame-parent131">
            <div className="frame-parent132">
              <div className="checkmark-circle-2-wrapper4">
                <img
                  className="checkmark-circle-2-icon6"
                  alt=""
                  src={"checkmarkCircle21"}
                  
                />
              </div>
              <img
                className="fi-2668384-icon2"
                loading="lazy"
                alt=""
                src={"fi2668384"}
                
              />
            </div>
            <div className="top-slot-listing-for-5x-more-v-container">
              <div className="top-slot-listing7">
                Top slot listing for 5x more visicility
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper73">
          <div className="frame-parent133">
            <div className="frame-parent134">
              <div className="checkmark-circle-2-wrapper5">
                <img
                  className="checkmark-circle-2-icon7"
                  alt=""
                  src="/checkmarkcircle2.svg"
                 
                />
              </div>
              <img
                className="fi-2889676-icon2"
                loading="lazy"
                alt=""
                src={"fi2889676"}
              
              />
            </div>
            <div className="privacy-of-your-phone-number-frame">
              <div className="privacy-of-your7">
                Privacy Of Your Phone Number
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent135">
          <div className="frame-wrapper74">
            <div className="frame-parent136">
              <div className="frame-parent137">
                <div className="checkmark-circle-2-wrapper6">
                  <img
                    className="checkmark-circle-2-icon8"
                    alt=""
                    src="/checkmarkcircle2.svg"
                   
                  />
                </div>
                <img
                  className="fi-870073-icon2"
                  loading="lazy"
                  alt=""
                  src="/fi-870073-1.svg"
                 
                />
              </div>
              <div className="relationship-manager-fast-clos-container">
                <div className="relationship-manager-fast1">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent138">
            <div className="frame-wrapper75">
              <div className="frame-parent139">
                <div className="checkmark-circle-2-wrapper7">
                  <img
                    className="checkmark-circle-2-icon9"
                    alt=""
                    src="/checkmarkcircle2.svg"
                  />
                </div>
                <img
                  className="fi-1239608-icon2"
                  loading="lazy"
                  alt=""
                  src="/fi-12396081.svg"
                />
                <div className="personal-field-assistant-frame">
                  <div className="personal-field-assistant7">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent159">
              <div className="frame-child200" />
              <h2 className="get-started2">Get Started</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        {/* <GroupComponent over /> */}

      </div>
      <div className="rectangle-parent108">
        <div className="frame-child117" />
        <div className="rectangle-parent109">
          <div className="frame-child118" />
          <div className="frame-parent65">
            <div className="frame-wrapper36">
              <div className="vector-parent1">
                <img
                  className="frame-child119"
                  loading="lazy"
                  alt=""
                  src="/rectangle-130-1.svg"
                />
                <button className="discont4">2% Discont</button>
              </div>
            </div>
            <div className="wrapper-group3">
              <img
                className="group-icon16"
                loading="lazy"
                alt=""
                src="/more1.svg"
              />
            </div>
          </div>
          <div className="gold-packages-wrapper">
            <div className="gold-packages">{`Gold Packages `}</div>
          </div>
          <div className="frame-wrapper37">
            <div className="listing-parent">
              <div className="listing3">
                <span className="span">
                  <span className="span1">
                    <span className="span2">₹2450</span>
                  </span>
                </span>
                <span className="listing4">
                  <span className="span3">
                    <span className="span4">{` `}</span>
                  </span>
                  <span className="listing5">
                    <span className="span5">{`2,500 `}</span>
                    <span className="listing6"> / 25 Listing</span>
                  </span>
                </span>
              </div>
              <img className="frame-child120" alt="" src="/line-66.svg" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper72">
      <div className="frame-parent128">
        <div className="frame-parent129">
          <div className="frame-parent130">
            <div className="checkmark-circle-2-wrapper3">
              <img
                className="checkmark-circle-2-icon5"
                alt=""
                src={"checkmarkCircle2"}
              />
            </div>
            <img
              className="fi-2693507-icon6"
              loading="lazy"
              alt=""
              src="/fi-26935071.svg"
            />
            <div className="days-plan-validity-wrapper1">
              <div className="days-plan-validity6">{"daysPlanValidity"}</div>
            </div>
          </div>
          <div className="frame-parent131">
            <div className="frame-parent132">
              <div className="checkmark-circle-2-wrapper4">
                <img
                  className="checkmark-circle-2-icon6"
                  alt=""
                  src={"checkmarkCircle21"}
                />
              </div>
              <img
                className="fi-2668384-icon2"
                loading="lazy"
                alt=""
                src={"fi2668384"}
              />
            </div>
            <div className="top-slot-listing-for-5x-more-v-container">
              <div className="top-slot-listing7">
                Top slot listing for 5x more visicility
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper73">
          <div className="frame-parent133">
            <div className="frame-parent134">
              <div className="checkmark-circle-2-wrapper5">
                <img
                  className="checkmark-circle-2-icon7"
                  alt=""
                  src="/checkmarkcircle2.svg"
                />
              </div>
              <img
                className="fi-2889676-icon2"
                loading="lazy"
                alt=""
                src={"fi2889676"}
              />
            </div>
            <div className="privacy-of-your-phone-number-frame">
              <div className="privacy-of-your7">
                Privacy Of Your Phone Number
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent135">
          <div className="frame-wrapper74">
            <div className="frame-parent136">
              <div className="frame-parent137">
                <div className="checkmark-circle-2-wrapper6">
                  <img
                    className="checkmark-circle-2-icon8"
                    alt=""
                    src="/checkmarkcircle2.svg"
                  />
                </div>
                <img
                  className="fi-870073-icon2"
                  loading="lazy"
                  alt=""
                  src="/fi-870073-1.svg"
                />
              </div>
              <div className="relationship-manager-fast-clos-container">
                <div className="relationship-manager-fast1">
                  Relationship Manager Fast Closure
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent138">
            <div className="frame-wrapper75">
              <div className="frame-parent139">
                <div className="checkmark-circle-2-wrapper7">
                  <img
                    className="checkmark-circle-2-icon9"
                    alt=""
                    src="/checkmarkcircle2.svg"
                  />
                </div>
                <img
                  className="fi-1239608-icon2"
                  loading="lazy"
                  alt=""
                  src="/fi-12396081.svg"
                />
                <div className="personal-field-assistant-frame">
                  <div className="personal-field-assistant7">
                    Personal Field Assistant
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent159">
              <div className="frame-child200" />
              <h2 className="get-started2">Get Started</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      <div className="package-inner1">
        <img
          className="frame-child121"
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
