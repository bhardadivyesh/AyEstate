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
        <div className="desktop-7">
          <div className="desktop-7-inner">
            <div className="rectangle-parent29">
              <img
                className="frame-child39"
                loading="lazy"
                alt=""
                src={sideImage}
              />
              <img className="frame-child40" alt="" src={sideImage} />
            </div>
          </div>
          <div className="desktop-7-child">
            <div className="frame-parent17">
              <button className="rectangle-parent30">
                <div className="frame-child41" />
                <div
                  className="log-in5"
                  onClick={() => value.setRegistrationForm("login")}
                >
                  Log in
                </div>
              </button>
              <button className="rectangle-parent31">
                <div className="frame-child42" />
                <div
                  className="sign-up11"
                  onClick={() => value.setRegistrationForm("register")}
                >
                  Registration
                </div>
              </button>
            </div>
          </div>
          <div className="email-field1">
            <div className="ayestate-wrapper3">
              <h1 className="ayestate6">AyEstate</h1>
            </div>
            {/* sign in form */}
            <div className="group-div">
              <div className="frame-child61" />
              <div className="log-in-wrapper">
                <h1 className="log-in6">Log in</h1>
              </div>

              <div className="email-phone-reqd-parent">
                <div className="email-phone-reqd">
                  <input
                    className="email-phone-reqd-child"
                    type="text"
                    placeholder="Email phone (Required)*"
                    {...register("email", { required: true })}
                  />
                </div>
                {continueButton == false ? (
                  <div className="continue-btn">
                    <button
                      className="rectangle-parent43 frame-child62 continue"
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
                    <div className="frame-wrapper17">
                      <div className="frame-parent42">
                        <div className="frame-parent43">
                          <div className="generate-otp-parent">
                            <div className="generate-otp">Generate OTP</div>
                          </div>
                          <div className="frame-wrapper18">
                            <input
                              type="radio"
                              name="otp"
                              className="icon-parent"
                              onChange={() => handleRadiobutton("otpGenerate")}
                            />
                          </div>
                        </div>
                        <div className="frame-parent44">
                          <div className="ive-password-parent">
                            <div className="ive-password">I’ve Password</div>
                            <div className="ive-password1">I’ve Password</div>
                          </div>
                          <input
                            type="radio"
                            name="otp"
                            className="icon-container"
                            onChange={() =>
                              handleRadiobutton("passwordGenerate")
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper19">
                      <div className="frame-parent45">
                        <div className="enter-otp-here-parent">
                          <div className="enter-otp-here-container">
                            <span>Enter</span>
                            <span className="span2">{` `}</span>
                            <span>OTP here</span>
                          </div>
                        </div>
                        {/* password */}
                        {contentStateRender == "otpGenerate" ? (
                          <div className="frame-wrapper20">
                            <div className="rectangle-parent44">
                              <input type="text" className="frame-child63" />
                              <input type="text" className="frame-child64" />
                              <input type="text" className="frame-child65" />
                              <div className="rectangle-wrapper2">
                                <input type="text" className="frame-child66" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="parentClass">
                          <input type={passwordType} className="rectangle-parent34" placeholder="Enter Password" {...register("password")} />
                          <input type="checkbox" className="checkbox" onChange={handleCheckboxChange}/>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
              {continueButton == true ? (
                <div className="frame-wrapper21">
                  <button className="rectangle-parent45">
                    <div className="frame-child67" />
                    <div className="log-in7">Log in</div>
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
