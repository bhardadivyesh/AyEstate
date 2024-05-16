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
    <section className="frame-wrapper28">
      <main className="frame-main">
        <div className="rectangle-parent50">
          <div className="frame-child80" />
          <div className="frame-parent52">
            <div className="free-month-wrapper">
              <h1 className="free-month">
                <b className="free">{`FREE `}</b>
                <span className="month1">/month</span>
              </h1>
            </div>
            <div className="subscribe-button">
              <div className="free-every-month-container">
                <span className="free">FREE*</span>
                <b className="b2">{` `}</b>
                <span className="every-month">every month</span>
              </div>
              <div className="vat-and-local-taxes-may-apply-wrapper">
                <div className="vat-and-local">
                  *VAT and local taxes may apply
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper29">
            <div className="info-parent">
              {/* onClick={HandlePaymentClick} */}
              <div className="info" />
              <b className="subscribe-now">Subscribe now</b>
            </div>
          </div>
        </div>
        <img className="group-icon" loading="lazy" alt="" src={line} />
        <div className="rectangle-parent51">
          <div className="frame-child81" />
          <div className="abstract-curved-shapes-white-c-parent">
            <img
              className="abstract-curved-shapes-white-c-icon"
              loading="lazy"
              alt=""
              src={sadow}
            />
            <div className="graphics-designing" />
          </div>
          <div className="month-parent">
            <b className="month">1 MONTH</b>
            <div className="inr-month-wrapper">
              <div className="inr-month">
                <b className="free">{`₹ 1,200 INR* `}</b>
                {/* <span className="month1">/month</span> */}
              </div>
            </div>
          </div>
          <div className="inr-every-month-wrapper">
            <div className="inr-every-month-container">
              <span className="inr">₹ 1,200 INR*</span>
              <b className="b3">{` `}</b>
              <span className="every-month1">every month</span>
            </div>
          </div>
          <div className="vat-and-local-taxes-may-apply-container">
            <div className="vat-and-local1">*VAT and local taxes may apply</div>
          </div>
          <div className="digital-marketing-parent">
            <div className="digital-marketing" onClick={handleSubscribeClick} />
            <b className="subscribe-now1" onClick={handleSubscribeClick}>
              Subscribe now
            </b>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FrameComponent1;
