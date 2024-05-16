import React from 'react'
import FrameComponent1 from "../FrameComponent1/FrameComponent1";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./PaymentMain.css";
import polygon from "../../assets/paymentGetway/Polygon.png"

const PaymentMain = () => {
  return (
    <div className="package-free-paid">
      <div className="wrapper-bentoflexbox">
        <img
          className="bentoflexbox-icon"
          loading="lazy"
          alt=""
          src={polygon}
        />
      </div>
      <div className="frame-parent23">
        <FrameComponent1 />
        <FrameComponent />
      </div>
      <div className="jobinfo-wrapper">
        <div className="jobinfo" />
      </div>
    </div>
  )
}

export default PaymentMain