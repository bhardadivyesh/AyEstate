import React, { useState } from "react";
import Form from "../Form/Form";
import "./MultiLevelMessageCardStack.css";
import arrow from "../../assets/contactus/icons/arrow-down.png"

const MultiLevelMessageCardStack = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    email: "",
    phoneNumber: "",
    companySize: "",
    additionalInfo: "",
    agreeToTerms: false,
  });
  const handleFormChange = (fieldName, value) => {
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData(prevData => ({
      ...prevData,
      agreeToTerms: !prevData.agreeToTerms,
    }));
  };

  const handleSubmit = () => {
    
    console.log(formData);
  };
  return (
    <div className="multi-level-message-card-stack">
      <div className="site-navigator-design-resource">
        <div className="personal-identity-field-busine">
          <div className="messaging-platform">
            <div className="site-explorer">
              <h1 className="contact-our-sales">Contact our sales team</h1>
            </div>
            <div className="built-for-every-container">
              <p className="built-for-every">
                Built for every team across your company, Jobify Enterprise
                boosts productivity with
              </p>
              <p className="upgraded-security-and">
                upgraded security and account support. Contact us today to
                unlock:
              </p>
            </div>
          </div>
        </div>
        <div className="form1">
          <div className="form-listings">
            <div className="form-parent">
              <Form
                yourName="Your Name"
                clientEngagementPoPlaceho="Enter your name"
                onChange={(value) => handleFormChange("yourName", value)}
              />
              <Form
                yourName="Email"
                clientEngagementPoPlaceho="Enter your first name"
                propMinWidth="3.625rem"
                onChange={(value) => handleFormChange("email", value)}
              />
            </div>
            <div className="form-group">
              <div className="form2">
                <b className="first-name1">Phone Number</b>
                <input
                  className="form-child"
                  placeholder="Enter your phone number"
                  type="text"
                  value={formData.phoneNumber} // Bind value to state
                  onChange={(e) =>
                    handleFormChange("phoneNumber", e.target.value)
                  } // Update state on change
                />
              </div>
              <div className="form3">
                <b className="company-size">
                  <span>How Can Our Sales Team Help?</span>
                  <span className="span1">*</span>
                </b>
                <div className="form-inner">
                  <div className="choose-company-size-parent">
                    <select
                      className="choose-company-size"
                      value={formData.companySize} // Bind value to state
                      onChange={(e) =>
                        handleFormChange("companySize", e.target.value)
                      } // Update state on change
                    >
                      <option value="">Choose company size</option>
                      <option value="0 to 10">0 to 10</option>
                      <option value="11 to 50">11 to 50</option>
                      <option value="50 to 100">50 to 100</option>
                    </select>
                    <img
                      className="arrow-down-icon1"
                      alt=""
                      src={arrow}
                    />
                  </div>
                </div>
              </div>
            </div>
           
           <div className="form4">
          <b className="anything-else-youd">
            Anything Else You’d Like Us To Know?
          </b>
          <textarea
            className="form-item"
            placeholder="Type anything"
            rows={9}
            cols={44}
            value={formData.additionalInfo} // Bind value to state
            onChange={(e) => handleFormChange("additionalInfo", e.target.value)} // Update state on change
          />
        </div>
      </div>

      <div className="form-input-first-name">
        <div className="checkbox-wrapper">
          <input
            className="checkbox"
            type="checkbox"
            checked={formData.agreeToTerms} // Bind checked status to state
            onChange={handleCheckboxChange} // Update state on change
          />
        </div>
        <div className="privacy-policy-button">
          <div className="i-agree-to">
            I agree to Loom's Terms of Service and Privacy Policy.*
          </div>
        </div>
        <button disabled={formData.agreeToTerms == false} className="button30" onClick={handleSubmit}>Contact Sales</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLevelMessageCardStack;
