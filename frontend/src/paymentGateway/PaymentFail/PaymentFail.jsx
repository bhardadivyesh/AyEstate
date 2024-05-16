import "./PaymentFail.css";
import failGif from "../../assets/payment/failGif.gif"

const PaymentFail = () => {
  return (
    <div className="desktop-19">
      <div className="desktop-19-inner">
        <div className="error-alert-parent">
          <div className="error-alert">
            <img
              className="sign-for-error-or-explanation-icon"
              loading="lazy"
              alt=""
              src={failGif}
            />
          </div>
          <div className="payment-failed">{`Payment  Failed `}</div>
        </div>
      </div>
      <section className="the-payment-was-container">
        <p className="the-payment-was">
          The payment was unsuccessful due to an abnormality. please try
        </p>
        <p className="again-later-or">
          again later or use another payment method
        </p>
      </section>
      <div className="form-structure-wrapper">
        <button className="form-structure">
          <div className="form-structure-child" />
          <div className="try-agan">Try Agan</div>
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
