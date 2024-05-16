import "./RequestUnderReview.css";
import requestUnderReview from "../../assets/payment/requestUnderReview.gif"

const RequestUnderReview = () => {

    // setTimeout(() => {
       
    // }, 5000);

  return (
    <div className="desktop-18">
      <div className="desktop-18-inner">
        <div className="frame-parent26">
          <div className="cbd3594bb5e8d90924a105d4aae924-wrapper">
            <img
              className="cbd3594bb5e8d90924a105d4aae924-icon"
              loading="lazy"
              alt=""
              src={requestUnderReview}
            />
          </div>
          <div className="your-payment">Request under review </div>
        </div>
      </div>
      <div className="thank-you-for-container">
        <p className="thank-you-for">Request Under Review" signifies active </p>
        <p className="be-in-contact">{`be in contact with more details shortiy `}</p>
      </div>
    </div>
  );
};

export default RequestUnderReview;