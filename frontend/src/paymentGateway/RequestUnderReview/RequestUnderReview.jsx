import "./RequestUnderReview.css";
import requestUnderReview from "../../assets/payment/requestUnderReview.gif"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequestUnderReview = () => {
  const navigate = useNavigate()
 setTimeout(() => {
   navigate('/home')
 }, 5000);
  
  return (
    <div className="desktop-18-payment-requestUnderReview">
      <div className="desktop-18-inner-payment-requestUnderReview">
        <div className="frame-parent26-payment-requestUnderReview">
          <div className="cbd3594bb5e8d90924a105d4aae924-wrapper-payment-requestUnderReview">
            <img
              className="cbd3594bb5e8d90924a105d4aae924-icon-payment-requestUnderReview"
              loading="lazy"
              alt=""
              src={requestUnderReview}
            />
          </div>
          <div className="your-payment-payment-requestUnderReview">Request under review </div>
        </div>
      </div>
      <div className="thank-you-for-container-payment-requestUnderReview">
        <p className="thank-you-for-payment-requestUnderReview">Request Under Review" signifies active </p>
        <p className="be-in-contact-payment-requestUnderReview">be in contact with more details shortiy</p>
      </div>
    </div>
  );
};

export default RequestUnderReview;