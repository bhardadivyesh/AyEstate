import "./PaymentNew.css";
import previous from "../../assets/admin/membership/membership/membershipNew/group1.png";
import next from "../../assets/admin/membership/membership/membershipNew/group2.png";
import discountIcon from "../../assets/admin/membership/membership/membershipNew/discount.png";
import checkmark from "../../assets/admin/membership/membership/membershipNew/checkmark.png";
import strikeLine from "../../assets/admin/membership/membership/membershipNew/strike.png";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import MyContext from "../../context/context";
import { useEffect } from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const PaymentNew = () => {
  const [membershipData, setMembershipData] = useState();
  const values = useContext(MyContext);
  useEffect(() => {
    axios.get("http://localhost:3000/get-membership").then((res) => {
      setMembershipData(res.data);
    });
  }, []);

  const navigate = useNavigate();
  const [gold_amount, setGold_amount] = useState(0);

  const handleGoldClick = async (price) => {
    let paymentValue = price;
    let data = values.signUpData;
    data.paymentValue = paymentValue;
    if (data.paymentValue == 0) {
      navigate("/home");
    } else {
      await axios
        .put("http://localhost:3000/put-Registration", data)
        .then((res) => {});
      setGold_amount(price);
    }

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
          "http://localhost:3000/api/v1/rzp_capture/" + paymentId + "/" + price;

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
    rzp1.on("payment.failed", function (response) {
      rzp1.close();
      navigate("/paymentFail");
    });
  };

  return (
    <>
      <div className="package-paymentNew">
        <img
          src={previous}
          className="wrapper-group-1000002992-wrapper-paymentNew"
        />
        <div className="wrapper-group-1000002992-paymentNew"></div>
        <AwesomeSlider>
          {membershipData?.map((items, index) => {
            return (
              <div className="rectangle-parent108-paymentNew">
                {console.log(items)}
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
                        <button className="discont4-paymentNew">
                          {`${items.discount}% Discont`}
                        </button>
                      </div>
                    </div>
                    <div className="wrapper-group3-paymentNew">
                      <img
                        className="group-icon16-paymentNew"
                        loading="lazy"
                        alt=""
                        src={items.images[5]}
                      />
                    </div>
                  </div>
                  <div className="gold-packages-wrapper-paymentNew">
                    <div className="gold-packages-paymentNew">
                      {items.title}
                    </div>
                  </div>
                  <div className="frame-wrapper37-paymentNew">
                    <div className="listing-parent-paymentNew">
                      <div className="listing3-paymentNew">
                        <span className="span-paymentNew">
                          <span className="span1-paymentNew">
                            <span className="span2-paymentNew">{`₹${items.discountPrice}`}</span>
                          </span>
                        </span>
                        <span className="listing4-paymentNew">
                          <span className="span3-paymentNew">
                            <span className="span4-paymentNew">{` `}</span>
                          </span>
                          <span className="listing5-paymentNew">
                            <span className="span5-paymentNew">
                              {items.price}
                            </span>
                            <span className="listing6-paymentNew">{` / ${items.listingNumber} Listing`}</span>
                          </span>
                        </span>
                      </div>
                      <img
                        className="frame-child120-paymentNew"
                        alt=""
                        src={strikeLine}
                      />
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
                          src={items.images[0]}
                        />
                        <div className="days-plan-validity-wrapper1-paymentNew">
                          <label className="days-plan-validity6-paymentNew">
                            {items.membershipdescription1}
                          </label>
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
                            src={items.images[1]}
                          />
                        </div>
                        <div className="top-slot-listing-for-5x-more-v-container-paymentNew">
                          <div className="top-slot-listing7-paymentNew">
                            {items.membershipdescription2}
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
                            src={items.images[2]}
                          />
                        </div>
                        <div className="privacy-of-your-phone-number-frame-paymentNew">
                          <div className="privacy-of-your7-paymentNew">
                            {items.membershipdescription3}
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
                              src={items.images[3]}
                            />
                          </div>
                          <div className="relationship-manager-fast-clos-container-paymentNew">
                            <div className="relationship-manager-fast1-paymentNew">
                              {items.membershipdescription4}
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
                              src={items.images[4]}
                            />
                            <div className="personal-field-assistant-frame-paymentNew">
                              <div className="personal-field-assistant7-paymentNew">
                                {items.membershipdescription5}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="rectangle-parent159-paymentNew"
                          onClick={() => handleGoldClick(items.discountPrice)}
                        >
                          <span className="get-started2-paymentNew">
                            Get Started
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
         </AwesomeSlider>
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
