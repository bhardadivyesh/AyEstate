import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import "./MultiLevelMessageCardStack.css";
import arrow from "../../assets/contactus/icons/arrow-down.png";
import axios from "axios";

const MultiLevelMessageCardStack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companySize: "",
    additionalInfo: "",
    agreeToTerms: false,
  });
  const [buttonState, setButtonState] = useState(false);

  const handleFormChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      agreeToTerms: !prevData.agreeToTerms,
    }));
  };
  useEffect(() => {
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.phoneNumber == "" ||
      formData.companySize == "" ||
      formData.additionalInfo == "" ||
      formData.agreeToTerms == false
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [formData]);

  const handleSubmit = () => {
    try {
      axios.post("http://localhost:3000/post-contact", formData);
      axios.post("http://localhost:1337/contactuses", formData);
      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
                name="Your Name"
                type="text"
                clientEngagementPoPlaceho="Enter your name"
                onChange={(value) => handleFormChange("name", value)}
              />
              <Form
                name="Email"
                type="email"
                clientEngagementPoPlaceho="Enter your email"
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
                  type="number"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    let phoneNumber = e.target.value;
                    phoneNumber = phoneNumber.slice(0, 10);
                    handleFormChange("phoneNumber", phoneNumber);
                  }}
                />
              </div>
              <div className="form3">
                <b className="company-size">
                  <span>How Can Our Sales Team Help?</span>
                  <span className="span1">*</span>
                </b>
                <select
                  className="form-inner"
                  value={formData.companySize}
                  onChange={(e) =>
                    handleFormChange("companySize", e.target.value)
                  }
                >
                  <option value="">Select company size</option>
                  <option value="0 to 10">0 to 10</option>
                  <option value="11 to 50">11 to 50</option>
                  <option value="50 to 100">50 to 100</option>
                </select>
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
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleFormChange("additionalInfo", e.target.value)
                }
              />
            </div>
          </div>

          <div className="form-input-first-name">
            <div className="checkbox-wrapper">
              <input
                className="checkbox"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="privacy-policy-button">
              <div className="i-agree-to">
                I agree to Loom's Terms of Service and Privacy Policy.*
              </div>
            </div>
            <button
              disabled={buttonState == false}
              className="button30"
              onClick={handleSubmit}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLevelMessageCardStack;
