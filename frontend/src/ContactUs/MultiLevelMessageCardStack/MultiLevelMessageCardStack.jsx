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
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div className="multi-level-message-card-stack-contactUs-MultiForm">
      <div className="site-navigator-design-resource-contactUs-MultiForm">
        <div className="personal-identity-field-busine-contactUs-MultiForm">
          <div className="messaging-platform-contactUs-MultiForm">
            <div className="site-explorer-contactUs-MultiForm">
              <h1 className="contact-our-sales-contactUs-MultiForm">Contact our sales team</h1>
            </div>
            <div className="built-for-every-container-contactUs-MultiForm">
              <p className="built-for-every-contactUs-MultiForm">
                Built for every team across your company, Jobify Enterprise
                boosts productivity with
              </p>
              <p className="upgraded-security-and-contactUs-MultiForm">
                upgraded security and account support. Contact us today to
                unlock:
              </p>
            </div>
          </div>
        </div>
        <div className="form1-contactUs-MultiForm">
          <div className="form-listings-contactUs-MultiForm">
            <div className="form-parent-contactUs-MultiForm">
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
            <div className="form-group-contactUs-MultiForm">
              <div className="form2-contactUs-MultiForm">
                <b className="first-name1-contactUs-MultiForm">Phone Number</b>
                <input
                  className="form-child-contactUs-MultiForm"
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
              <div className="form3-contactUs-MultiForm">
                <b className="company-size-contactUs-MultiForm">
                  <span>How Can Our Sales Team Help?</span>
                  <span className="span1-contactUs-MultiForm">*</span>
                </b>
                <select
                  className="form-inner-contactUs-MultiForm"
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

            <div className="form4-contactUs-MultiForm">
              <b className="anything-else-youd-contactUs-MultiForm">
                Anything Else You’d Like Us To Know?
              </b>
              <textarea
                className="form-item-contactUs-MultiForm"
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

          <div className="form-input-first-name-contactUs-MultiForm">
            <div className="checkbox-wrapper-contactUs-MultiForm">
              <input
                className="checkbox-contactUs-MultiForm"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="privacy-policy-button-contactUs-MultiForm">
              <div className="i-agree-to-contactUs-MultiForm">
                I agree to Loom's Terms of Service and Privacy Policy.*
              </div>
            </div>
            <button
              disabled={buttonState == false}
              className="button30-contactUs-MultiForm"
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
