import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "firebase/firestore";
import authContext from "../authContext";
import { useState } from "react";
const Merge = () => {
  const [registrationForm, setRegistrationForm] = useState("register");

  return (
    <>
      <authContext.Provider value={{ registrationForm, setRegistrationForm }}>
        {registrationForm == "register" ? <SignUp /> :<SignIn /> }
      </authContext.Provider>
    </>
  );
};

export default Merge;
