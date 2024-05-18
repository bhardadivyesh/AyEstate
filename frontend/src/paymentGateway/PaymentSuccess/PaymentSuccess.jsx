import "./PaymentSuccess.css";
import successGif from "../../assets/payment/successGif.gif"
import { useNavigate } from "react-router-dom";
const PaymentSuccess = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/requestUnderReview")  
    }, 5000);

  return (
    <div className="desktop-18-payment-paymentSuccess">
      <div className="desktop-18-inner-payment-paymentSuccess">
        <div className="frame-parent26-payment-paymentSuccess">
          <div className="cbd3594bb5e8d90924a105d4aae924-wrapper-payment-paymentSuccess">
            <img
              className="cbd3594bb5e8d90924a105d4aae924-icon-payment-paymentSuccess"
              loading="lazy"
              alt=""
              src={successGif}
            />
          </div>
          <div className="your-payment-was-payment-paymentSuccess">your payment was successful</div>
        </div>
      </div>
      <div className="thank-you-for-container-payment-paymentSuccess">
        <p className="thank-you-for-payment-paymentSuccess">Thank you for your payment we will</p>
        <p className="be-in-contact-payment-paymentSuccess">{`be in contact with more details shortiy `}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;