import React from 'react'
import FrameComponent1 from "../FrameComponent1/FrameComponent1";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./PaymentMain.css";
import polygon from "../../assets/paymentGetway/Polygon.png"

const PaymentMain = () => {
  return (
    <div className="package-free-paid-payment-paymentMain">
      <div className="wrapper-bentoflexbox-payment-paymentMain">
        <img
          className="bentoflexbox-icon-payment-paymentMain"
          loading="lazy"
          alt=""
          src={polygon}
        />
      </div>
      <div className="frame-parent23-payment-paymentMain">
        <FrameComponent1 />
        <FrameComponent />
      </div>
      <div className="jobinfo-wrapper-payment-paymentMain">
        <div className="jobinfo-payment-paymentMain" />
      </div>
    </div>
  )
}

export default PaymentMain