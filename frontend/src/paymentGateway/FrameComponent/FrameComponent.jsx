import "./FrameComponent.css";
import calendor from "../../assets/paymentGetway/second/calendar.png"
import house from "../../assets/paymentGetway/second/smart-home 1.png"
import customer from "../../assets/paymentGetway/second/customer-services.png"
import moneyBack from "../../assets/paymentGetway/second/money-back.png"
import megaPhone from "../../assets/paymentGetway/second/megaphone.png"
import camera from "../../assets/paymentGetway/second/photoshoot.png"
import network from "../../assets/paymentGetway/second/networking.png"
import rent from "../../assets/paymentGetway/second/rent.png"
import lock from "../../assets/paymentGetway/second/padlock.png"

const FrameComponent = () => {
  return (
    <footer className="frame-footer-payment-Frame">
      <div className="days-plan-validity-parent-payment-Frame">
        <div className="days-plan-validity-container-payment-Frame">
          <p className="days-payment-Frame">45 Days</p>
          <p className="plan-validity-payment-Frame">plan validity</p>
        </div>
        <div className="frame-wrapper30-payment-Frame">
          <div className="frame-parent53-payment-Frame">
            <div className="top-slot-listing-for-5x-more-v-wrapper-payment-Frame">
              <div className="top-slot-listing-container-payment-Frame">
                <p className="top-slot-listing-payment-Frame">Top slot listing for</p>
                <p className="x-more-visicility-payment-Frame">5x more visicility</p>
              </div>
            </div>
            <div className="relationship-manager-super-container-payment-Frame">
              <p className="relationship-manager-payment-Frame">{`Relationship Manager `}</p>
              <p className="super-fast-closure-payment-Frame">Super Fast Closure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper31-payment-Frame">
        <div className="frame-parent54-payment-Frame">
          <div className="guaranteed-tenants-or-100-mon-wrapper-payment-Frame">
            <div className="guaranteed-tenants-or-100-container-payment-Frame">
              <p className="guaranteed-tenants-payment-Frame">Guaranteed Tenants</p>
              <p className="or-100-moneyback-payment-Frame">Or 100% Moneyback</p>
            </div>
          </div>
          <div className="frame-parent55-payment-Frame">
            <div className="property-promotion-on-website-wrapper-payment-Frame">
              <div className="property-promotion-on-website-container-payment-Frame">
                <p className="property-promotion-on-payment-Frame">Property Promotion On</p>
                <p className="website-payment-Frame">Website</p>
              </div>
            </div>
            <div className="photoshoot-of-your-property-container-payment-Frame">
              <p className="photoshoot-of-payment-Frame">Photoshoot Of</p>
              <p className="your-property-payment-Frame">Your Property</p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper32-payment-Frame">
        <div className="frame-parent56-payment-Frame">
          <div className="personal-field-assistant-wrapper-payment-Frame">
            <div className="personal-field-assistant-payment-Frame">
              <p className="personal-payment-Frame">Personal</p>
              <p className="field-assistant-payment-Frame">Field Assistant</p>
            </div>
          </div>
          <div className="rental-agreement-home-delivere-container-payment-Frame">
            <p className="rental-agreement-payment-Frame">Rental Agreement</p>
            <p className="home-delivered-payment-Frame">Home Delivered</p>
          </div>
          <div className="privacy-of-your-container-payment-Frame">
            <p className="privacy-of-your-payment-Frame">Privacy Of Your Phone</p>
            <p className="number-payment-Frame">Number</p>
          </div>
        </div>
      </div>
      <div className="subscription-services-containe-payment-Frame">
        <div className="profileimg-payment-Frame" />
        <img
          className="schedule-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={calendor}
        />
        <img
          className="customer-service-3-1-payment-Frame"
          loading="lazy"
          alt=""
          src={customer}
        />
        <img
          className="money-back-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={moneyBack}
        />
        <img
          className="megaphone-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={megaPhone}
        />
        <img
          className="photoshoot-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={camera}
        />
        <img
          className="rent-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={rent}
        />
        <img
          className="networking-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={network}
        />
        <img
          className="smart-home-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={house}
        />
        <img
          className="padlock-1-icon-payment-Frame"
          loading="lazy"
          alt=""
          src={lock}
        />
      </div>
    </footer>
  );
};

export default FrameComponent;
