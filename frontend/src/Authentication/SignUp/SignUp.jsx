import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignUp.css";
import sideImage from "../../assets/Authentication/SignUp/sideImage.png";
import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/context";
import authContext from "../authContext";

function SignUp() {
  const navigate = useNavigate()
  const values = useContext(authContext)
  const value = useContext(MyContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password, companyName, countryCode, fullName, phoneNumber } =
      data;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        companyName,
        countryCode,
        fullName,
        phoneNumber
      );
      await axios.post('http://localhost:3000/post-Registration',data).then((res)=>{
        value.setSignUpData(data)
      })

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: "vendor",
      });
      navigate('/paymentScreen')
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const changeFormState = (state) => {
    setRegistrationForm(state);
  };
  return (
    <>
      <form className="desktop-62-registration" onSubmit={handleSubmit(onSubmit)}>
        <div className="rectangle-parent19-registration">
          <img className="frame-child27-registration" alt="" src={sideImage} />
          <img
            className="frame-child28-registration"
            loading="lazy"
            alt=""
            src={sideImage}
          />
        </div>
        <div className="desktop-6-inner1-registration">
          <div className="frame-parent12-registration">
            <button
              className="rectangle-parent20-registration"
              onClick={() => values.setRegistrationForm("login")}
            >
              <div className="frame-child29-registration" />
              <div className="log-in4-registration">Log in</div>
            </button>
            <div className="frame-wrapper5-registration">
              <button
                className="rectangle-parent21-registration"
                onClick={() => value.setRegistrationForm("register")}
              >
                <div className="frame-child30-registration" />
                <div className="sign-up8-registration">Registration</div>
              </button>
            </div>
          </div>
        </div>
        <div className="frame-parent13-registration">
          <div className="ayestate-wrapper2-registration">
            <h1 className="ayestate5-registration">AyEstate</h1>
          </div>
          <div className="rectangle-parent22-registration">
            <div className="frame-child31-registration" />
            <div className="password-input-registration">
              <div className="sign-up-container-registration">
                <h1 className="sign-up9-registration">Registration</h1>
              </div>
              <div className="frame-parent14-registration">
                <div className="rectangle-parent23-registration">
                  <div className="frame-child32-registration" />
                  <div className="frame-parent15-registration">
                    <div>
                      <select
                        className="empty-space-parent-registration"
                        {...register("countryCode", { required: true })}
                      >
                        <option value="+91">+91</option>
                        <option value="+91">+91</option>
                        <option value="+91">+91</option>
                        <option value="+91">+91</option>
                        <option value="+91">+91</option>
                      </select>
                    </div>
                  </div>
                  <input
                    className="e-m-p-t-y-wrapper-registration"
                    placeholder="Enter Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                {errors.phone && (
                  <p style={{ color: "red" }}>PhoneNumber is required</p>
                )}
                <input
                  className="rectangle-parent24-registration"
                  placeholder="Full name (Required)*"
                  {...register("name", { required: true })}
                />
                {errors.name && <p style={{color : "red"}}>Name is required</p>}
                <input
                  className="rectangle-parent24-registration"
                  placeholder="Company name (Required)*"
                  {...register("company", { required: true })}
                />
                {errors.company && <p style={{color : "red"}}>companyName is required</p>}
                <input
                  className="rectangle-parent24-registration"
                  placeholder="Email address (Required)*"
                  {...register("email", { required: true })}
                />
                {errors.email && <p style={{color : "red"}}>email is required</p>}
                <input
                  className="rectangle-parent24-registration"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p style={{color : "red"}}>password is required</p>}
              </div>
            </div>
            <div className="frame-wrapper7-registration">
              <button className="rectangle-parent28-registration frame-child38-registration sign-up10-registration">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
