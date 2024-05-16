import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignUp.css";
import sideImage from "../../assets/Authentication/SignUp/sideImage.png";
import { useContext, useState } from "react";
import authContext from "../authContext";
import axios from "axios"

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const value = useContext(authContext);
  const onSubmit = async (data) => {
    console.log(data);
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
      await axios.post('http://localhost:3000/post-Registration',data)
      console.log(userCredential);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: "vendor",
      });
      console.log("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  const changeFormState = (state) => {
    setRegistrationForm(state);
  };
  // console.log(registrationForm);
  return (
    <>
      <form className="desktop-62" onSubmit={handleSubmit(onSubmit)}>
        <div className="rectangle-parent19">
          <img className="frame-child27" alt="" src={sideImage} />
          <img
            className="frame-child28"
            loading="lazy"
            alt=""
            src={sideImage}
          />
        </div>
        <div className="desktop-6-inner1">
          <div className="frame-parent12">
            <button
              className="rectangle-parent20"
              onClick={() => value.setRegistrationForm("login")}
            >
              <div className="frame-child29" />
              <div className="log-in4">Log in</div>
            </button>
            <div className="frame-wrapper5">
              <button
                className="rectangle-parent21"
                onClick={() => value.setRegistrationForm("register")}
              >
                <div className="frame-child30" />
                <div className="sign-up8">Registration</div>
              </button>
            </div>
          </div>
        </div>
        <div className="frame-parent13">
          <div className="ayestate-wrapper2">
            <h1 className="ayestate5">AyEstate</h1>
          </div>
          <div className="rectangle-parent22">
            <div className="frame-child31" />
            <div className="password-input">
              <div className="sign-up-container">
                <h1 className="sign-up9">Registration</h1>
              </div>
              <div className="frame-parent14">
                <div className="rectangle-parent23">
                  <div className="frame-child32" />
                  <div className="frame-parent15">
                    <div>
                      <select
                        className="empty-space-parent"
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
                    className="e-m-p-t-y-wrapper"
                    placeholder="Enter Phone Number"
                    {...register("phone", { required: true })}
                  />
                </div>
                {errors.phoneNumber && (
                  <p style={{ color: "red" }}>PhoneNumber is required</p>
                )}
                <input
                  className="rectangle-parent24"
                  placeholder="Full name (Required)*"
                  {...register("name", { required: true })}
                />
                {errors.fullName && <p style={{color : "red"}}>Name is required</p>}
                <input
                  className="rectangle-parent24"
                  placeholder="Company name (Required)*"
                  {...register("company", { required: true })}
                />
                {errors.company && <p style={{color : "red"}}>companyName is required</p>}
                <input
                  className="rectangle-parent24"
                  placeholder="Email address (Required)*"
                  {...register("email", { required: true })}
                />
                {errors.email && <p style={{color : "red"}}>email is required</p>}
                <input
                  className="rectangle-parent24"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <p style={{color : "red"}}>password is required</p>}
              </div>
            </div>
            <div className="frame-wrapper7">
              <button className="rectangle-parent28 frame-child38 sign-up10">
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
