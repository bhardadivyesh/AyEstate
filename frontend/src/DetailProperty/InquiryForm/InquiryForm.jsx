import React from "react";
import "./InquiryForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InquiryForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) =>{
     await axios.post('http://localhost:3000/post-Inquiry',data).then((res)=>{
        toast.success(res.data.message)
        reset()
       })
      }
  return (
    <>
      <div className="form-main-div-InquiryForm">
        <form className="inquiryformscreen-InquiryForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="inquiryformscreen-child-InquiryForm" />
          <div className="input-fields-InquiryForm">
            <div className="full-name1-InquiryForm">
              <span className="full-name2-InquiryForm">Full Name</span>
              <span className="span9-InquiryForm">*</span>
            </div>
            <input
              className="rectangle-parent187-InquiryForm"
              placeholder="Enter your Full Name"
              {...register("name",{required : true})}
            />
          </div>
          <div className="input-fields1-InquiryForm">
            <div className="email2-InquiryForm">
              <span>email</span>
              <span className="span18-InquiryForm">*</span>
            </div>
            <input
              className="input-fields-child-InquiryForm"
              placeholder="Enter Your Email"
              type="text"
              {...register("email",{required : true})}
            />
          </div>
          <div className="input-fields1-InquiryForm">
            <div className="email2-InquiryForm">
              <span>Phone Number</span>
              <span className="span18-InquiryForm">*</span>
            </div>
            <input
              className="input-fields-child-InquiryForm"
              placeholder="Enter Your PhoneNumber"
              type="text"
              {...register("phoneNumber",{required : true})}
            />
          </div>
          <div className="submit-button-container-wrapper-InquiryForm">
            <button type="submit" className="submit-button-container-InquiryForm">
              <span className="submit4-InquiryForm">Submit</span>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default InquiryForm;
