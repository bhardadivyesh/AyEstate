import "./PaymentSuccess.css";
import successGif from "../../assets/payment/successGif.gif"
import { useNavigate } from "react-router-dom";
const PaymentSuccess = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate("/requestUnderReview")  
    }, 5000);

  return (
    <div className="desktop-18">
      <div className="desktop-18-inner">
        <div className="frame-parent26">
          <div className="cbd3594bb5e8d90924a105d4aae924-wrapper">
            <img
              className="cbd3594bb5e8d90924a105d4aae924-icon"
              loading="lazy"
              alt=""
              src={successGif}
            />
          </div>
          <div className="your-payment-was">your payment was successful</div>
        </div>
      </div>
      <div className="thank-you-for-container">
        <p className="thank-you-for">Thank you for your payment we will</p>
        <p className="be-in-contact">{`be in contact with more details shortiy `}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;