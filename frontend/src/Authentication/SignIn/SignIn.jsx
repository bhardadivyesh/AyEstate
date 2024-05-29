import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./SingIn.css";
import sideImage from "../../assets/Authentication/SignIn/sideImage.png";
import { useContext, useState } from "react";
import authContext from "../authContext";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const value = useContext(authContext);
  const [continueButton, setContinueButton] = useState(false);
  const [contentStateRender, setContentStateRender] = useState("");
  console.log(contentStateRender);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password } = data;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    if (user.displayName == "vendor") {
      navigate("/home");
    }
  };
  const HandleContinueClick = () => {
    setContinueButton(true);
  };
  const handleRadiobutton = (radiostate) => {
    setContentStateRender(radiostate);
  };
  const [passwordType, setPasswordType] = useState("password");

  const handleCheckboxChange = () => {
    setPasswordType(prevType => prevType === "text" ? "password" : "text");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="desktop-7-signIn">
          <div className="desktop-7-inner-signIn">
            <div className="rectangle-parent29-signIn">
              <img
                className="frame-child39-signIn"
                loading="lazy"
                alt=""
                src={sideImage}
              />
              <img className="frame-child40-signIn" alt="" src={sideImage} />
            </div>
          </div>
          <div className="desktop-7-child-signIn">
            <div className="frame-parent17-signIn">
              <button className="rectangle-parent30-signIn">
                <div className="frame-child41-signIn" />
                <div
                  className="log-in5-signIn"
                  onClick={() => value.setRegistrationForm("login")}
                >
                  Log in
                </div>
              </button>
              <button className="rectangle-parent31-signIn">
                <label
                  className="sign-up11-signIn"
                  onClick={() => value.setRegistrationForm("register")}
                >
                  Registration
                </label>
              </button>
            </div>
          </div>
          <div className="email-field1-signIn">
            <div className="ayestate-wrapper3-signIn">
              <h1 className="ayestate6-signIn">AyEstate</h1>
            </div>
            {/* sign in form */}
            <div className="group-div-signIn">
              <div className="frame-child61-signIn" />
              <div className="log-in-wrapper-signIn">
                <h1 className="log-in6-signIn">Log in</h1>
              </div>

              <div className="email-phone-reqd-parent-signIn">
                <div className="email-phone-reqd-signIn">
                  <input
                    className="email-phone-reqd-child-signIn"
                    type="text"
                    placeholder="Email phone (Required)*"
                    {...register("email", { required: true })}
                  />
                </div>
                  {errors.email && <span style={{color:'#d92323'}}>Enter Email</span>}
                {continueButton == false ? (
                  <div className="continue-btn-signIn">
                    <button
                      className="rectangle-parent43-signIn frame-child62-signIn continue-signIn"
                      onClick={HandleContinueClick}
                    >
                      continue
                    </button>
                  </div>
                ) : (
                  ""
                )}
                {continueButton && (
                  <>
                    <div className="frame-wrapper17-signIn">
                      <div className="frame-parent42-signIn">
                        <div className="frame-parent43-signIn">
                          <div className="generate-otp-parent-signIn">
                            <div className="generate-otp-signIn">Generate OTP</div>
                          </div>
                          <div className="frame-wrapper18-signIn">
                            <input
                              type="radio"
                              name="otp"
                              className="icon-parent-signIn"
                              onChange={() => handleRadiobutton("otpGenerate")}
                            />
                          </div>
                        </div>
                        <div className="frame-parent44-signIn">
                          <div className="ive-password-parent-signIn">
                            <div className="ive-password-signIn">I’ve Password</div>
                          </div>
                          <input
                            type="radio"
                            name="otp"
                            className="icon-container-signIn"
                            onChange={() =>
                              handleRadiobutton("passwordGenerate")
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper19-signIn">
                      <div className="frame-parent45-signIn">
                        <div className="enter-otp-here-parent-signIn">
                          <div className="enter-otp-here-container-signIn">
                            {contentStateRender == "otpGenerate" && <span>Enter otp here</span>}
                            {contentStateRender == 'passwordGenerate' && <span>Enter Password Here</span>}
                          </div>
                        </div>
                        {/* password */}
                        {contentStateRender == "otpGenerate" ? (
                          <div className="frame-wrapper20-signIn">
                            <div className="rectangle-parent44-signIn">
                              <input type="text" className="frame-child63-signIn" />
                              <input type="text" className="frame-child64-signIn" />
                              <input type="text" className="frame-child65-signIn" />
                              <div className="rectangle-wrapper2-signIn">
                                <input type="text" className="frame-child66-signIn" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="parentClass-signIn">
                          <input type={passwordType} className="rectangle-parent34-signIn" placeholder="Enter Password" {...register("password")} />
                          <input type="checkbox" className="checkbox-signIn" onChange={handleCheckboxChange}/>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              {continueButton == true ? (
                <div className="frame-wrapper21-signIn">
                  <button className="rectangle-parent45-signIn">
                    <div className="frame-child67-signIn" />
                    <div className="log-in7-signIn">Log in</div>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* sign in form over */}
          </div>
        </div>
      </form>
    </>
  );
}
