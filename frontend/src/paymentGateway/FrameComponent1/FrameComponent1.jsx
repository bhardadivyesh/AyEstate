import "./FrameComponent1.css";
import line from "../../assets/paymentGetway/line.png";
import sadow from "../../assets/paymentGetway/curveImage.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FrameComponent1 = () => {
  const navigate = useNavigate();
  const [payment_amount, setPaymentAmount] = useState(1200);
  const HandlePaymentClick = () => {
    navigate("/razorpay");
  };
  const handleSubscribeClick = () => {
    if (!window.Razorpay) {
      return;
    }

    const options = {
      key: "rzp_test_afA1UpXOWaKZPn",
      amount: payment_amount * 100,
      name: "Payments",
      description: "Donate yourself some time",
      handler: (response) => {
        const paymentId = response.razorpay_payment_id;
        const url =
          "http://localhost:3000/api/v1/rzp_capture/" +
          paymentId +
          "/" +
          payment_amount;

        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((resp) => {
            resp.json()
          })
          .then((data) => {
            navigate("/paymentSuccess")
          })
          .catch((error) => {
            navigate("/paymenterror")
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
      // Navigate to payment failure page
      navigate("/paymentFail");
    });
  };

  return (
    <section className="frame-wrapper28-payment-Frame1">
      <main className="frame-main-payment-Frame1">
        <div className="rectangle-parent50-payment-Frame1">
          <div className="frame-child80-payment-Frame1" />
          <div className="frame-parent52-payment-Frame1">
            <div className="free-month-wrapper-payment-Frame1">
              <h1 className="free-month-payment-Frame1">
                <b className="free-payment-Frame1">{`FREE `}</b>
                <span className="month1-payment-Frame1">/month</span>
              </h1>
            </div>
            <div className="subscribe-button-payment-Frame1">
              <div className="free-every-month-container-payment-Frame1">
                <span className="free-payment-Frame1">FREE*</span>
                <b className="b2-payment-Frame1">{` `}</b>
                <span className="every-month-payment-Frame1">every month</span>
              </div>
              <div className="vat-and-local-taxes-may-apply-wrapper-payment-Frame1">
                <div className="vat-and-local-payment-Frame1">
                  *VAT and local taxes may apply
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper29-payment-Frame1">
            <div className="info-parent-payment-Frame1">
              <div className="info-payment-Frame1" />
              <b className="subscribe-now-payment-Frame1">Subscribe now</b>
            </div>
          </div>
        </div>
        <img className="group-icon-payment-Frame1" loading="lazy" alt="" src={line} />
        <div className="rectangle-parent51-payment-Frame1">
          <div className="frame-child81-payment-Frame1" />
          <div className="abstract-curved-shapes-white-c-parent-payment-Frame1">
            <img
              className="abstract-curved-shapes-white-c-icon-payment-Frame1"
              loading="lazy"
              alt=""
              src={sadow}
            />
            <div className="graphics-designing-payment-Frame1" />
          </div>
          <div className="month-parent-payment-Frame1">
            <b className="month-payment-Frame1">1 MONTH</b>
            <div className="inr-month-wrapper-payment-Frame1">
              <div className="inr-month-payment-Frame1">
                <b className="free-payment-Frame1">{`₹ 1,200 INR* `}</b>
                {/* <span className="month1">/month</span> */}
              </div>
            </div>
          </div>
          <div className="inr-every-month-wrapper-payment-Frame1">
            <div className="inr-every-month-container-payment-Frame1">
              <span className="inr-payment-Frame1">₹ 1,200 INR*</span>
              <b className="b3-payment-Frame1">{` `}</b>
              <span className="every-month1-payment-Frame1">every month</span>
            </div>
          </div>
          <div className="vat-and-local-taxes-may-apply-container-payment-Frame1">
            <div className="vat-and-local1-payment-Frame1">*VAT and local taxes may apply</div>
          </div>
          <div className="digital-marketing-parent-payment-Frame1">
            <div className="digital-marketing-payment-Frame1" onClick={handleSubscribeClick} />
            <b className="subscribe-now1-payment-Frame1" onClick={handleSubscribeClick}>
              Subscribe now
            </b>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FrameComponent1;
