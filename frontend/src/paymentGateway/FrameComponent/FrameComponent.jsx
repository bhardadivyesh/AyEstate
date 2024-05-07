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
    <footer className="frame-footer">
      <div className="days-plan-validity-parent">
        <div className="days-plan-validity-container">
          <p className="days">45 Days</p>
          <p className="plan-validity">plan validity</p>
        </div>
        <div className="frame-wrapper30">
          <div className="frame-parent53">
            <div className="top-slot-listing-for-5x-more-v-wrapper">
              <div className="top-slot-listing-container">
                <p className="top-slot-listing">Top slot listing for</p>
                <p className="x-more-visicility">5x more visicility</p>
              </div>
            </div>
            <div className="relationship-manager-super-container">
              <p className="relationship-manager">{`Relationship Manager `}</p>
              <p className="super-fast-closure">Super Fast Closure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper31">
        <div className="frame-parent54">
          <div className="guaranteed-tenants-or-100-mon-wrapper">
            <div className="guaranteed-tenants-or-100-container">
              <p className="guaranteed-tenants">Guaranteed Tenants</p>
              <p className="or-100-moneyback">Or 100% Moneyback</p>
            </div>
          </div>
          <div className="frame-parent55">
            <div className="property-promotion-on-website-wrapper">
              <div className="property-promotion-on-website-container">
                <p className="property-promotion-on">Property Promotion On</p>
                <p className="website">Website</p>
              </div>
            </div>
            <div className="photoshoot-of-your-property-container">
              <p className="photoshoot-of">Photoshoot Of</p>
              <p className="your-property">Your Property</p>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper32">
        <div className="frame-parent56">
          <div className="personal-field-assistant-wrapper">
            <div className="personal-field-assistant">
              <p className="personal">Personal</p>
              <p className="field-assistant">Field Assistant</p>
            </div>
          </div>
          <div className="rental-agreement-home-delivere-container">
            <p className="rental-agreement">Rental Agreement</p>
            <p className="home-delivered">Home Delivered</p>
          </div>
          <div className="privacy-of-your-container">
            <p className="privacy-of-your">Privacy Of Your Phone</p>
            <p className="number">Number</p>
          </div>
        </div>
      </div>
      <div className="subscription-services-containe">
        <div className="profileimg" />
        <img
          className="schedule-1-icon"
          loading="lazy"
          alt=""
          src={calendor}
        />
        <img
          className="customer-service-3-1"
          loading="lazy"
          alt=""
          src={customer}
        />
        <img
          className="money-back-1-icon"
          loading="lazy"
          alt=""
          src={moneyBack}
        />
        <img
          className="megaphone-1-icon"
          loading="lazy"
          alt=""
          src={megaPhone}
        />
        <img
          className="photoshoot-1-icon"
          loading="lazy"
          alt=""
          src={camera}
        />
        <img
          className="rent-1-icon"
          loading="lazy"
          alt=""
          src={rent}
        />
        <img
          className="networking-1-icon"
          loading="lazy"
          alt=""
          src={network}
        />
        <img
          className="smart-home-1-icon"
          loading="lazy"
          alt=""
          src={house}
        />
        <img
          className="padlock-1-icon"
          loading="lazy"
          alt=""
          src={lock}
        />
      </div>
    </footer>
  );
};

export default FrameComponent;
