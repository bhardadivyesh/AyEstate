// Form.js
import React, { useMemo } from "react";
import "./Form.css";

const Form = ({ yourName, clientEngagementPoPlaceho, propMinWidth, onChange }) => {
  const firstNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="form">
      <b className="first-name" style={firstNameStyle}>
        <span>{yourName}</span>
        <span className="span">*</span>
      </b>
      <input
        className="client-engagement-point"
        placeholder={clientEngagementPoPlaceho}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
