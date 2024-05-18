import "./PaymentFail.css";
import failGif from "../../assets/payment/failGif.gif"

const PaymentFail = () => {
  return (
    <div className="desktop-19-payment-PaymentFail">
      <div className="desktop-19-inner-payment-PaymentFail">
        <div className="error-alert-parent-payment-PaymentFail">
          <div className="error-alert-payment-PaymentFail">
            <img
              className="sign-for-error-or-explanation-icon-payment-PaymentFail"
              loading="lazy"
              alt=""
              src={failGif}
            />
          </div>
          <div className="payment-failed-payment-PaymentFail">{`Payment  Failed `}</div>
        </div>
      </div>
      <section className="the-payment-was-container-payment-PaymentFail">
        <p className="the-payment-was-payment-PaymentFail">
          The payment was unsuccessful due to an abnormality. please try
        </p>
        <p className="again-later-or-payment-PaymentFail">
          again later or use another payment method
        </p>
      </section>
      <div className="form-structure-wrapper-payment-PaymentFail">
        <button className="form-structure-payment-PaymentFail">
          <div className="form-structure-child-payment-PaymentFail" />
          <div className="try-agan-payment-PaymentFail">Try Agan</div>
        </button>
      </div>
    </div>
  );
};

export default PaymentFail;
