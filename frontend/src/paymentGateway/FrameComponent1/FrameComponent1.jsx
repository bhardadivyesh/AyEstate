import { useCallback } from "react";
import "./FrameComponent1.css";
import line from "../../assets/paymentGetway/line.png"
import sadow from "../../assets/paymentGetway/curveImage.jpg"

const FrameComponent1 = () => {
  const onInfoClick = useCallback(() => {
    // Please sync "package free paid" to the project
  }, []);

  const onDigitalMarketingClick = useCallback(() => {
    // Please sync "package free paid" to the project
  }, []);

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
              <div className="info" onClick={onInfoClick} />
              <b className="subscribe-now">Subscribe now</b>
            </div>
          </div>
        </div>
        <img
          className="group-icon"
          loading="lazy"
          alt=""
          src={line}
        />
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
                <b className="free">{`1,200 INR* `}</b>
                <span className="month1">/month</span>
              </div>
            </div>
          </div>
          <div className="inr-every-month-wrapper">
            <div className="inr-every-month-container">
              <span className="inr">1,200 INR*</span>
              <b className="b3">{` `}</b>
              <span className="every-month1">every month</span>
            </div>
          </div>
          <div className="vat-and-local-taxes-may-apply-container">
            <div className="vat-and-local1">*VAT and local taxes may apply</div>
          </div>
          <div className="digital-marketing-parent">
            <div
              className="digital-marketing"
              onClick={onDigitalMarketingClick}
            />
            <b className="subscribe-now1">Subscribe now</b>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FrameComponent1;
