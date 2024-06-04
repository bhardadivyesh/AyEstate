import React, { useState } from "react";
import FrameComponent2 from "../FrameComponent2/FrameComponent2";
import MembershipPriceContext from "../MembershipPricing"; 
import "./MembershipPricing.css";
import Subscription from "../Subscription/Subscription";
const MembershipPricing = () => {
  const [pricingDetail, setPricingDetail] = useState([]);
  return (
    <div className="membership-pricing">
      <main className="membership-pricing-inner">
        <div className="frame-child" />
      </main>
      <MembershipPriceContext.Provider value={{ pricingDetail, setPricingDetail }}>
        <FrameComponent2 />
        <Subscription />
      </MembershipPriceContext.Provider>
    </div>
  );
};
export default MembershipPricing;