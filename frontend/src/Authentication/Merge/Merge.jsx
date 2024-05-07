import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "firebase/firestore";
import authContext from "../authContext";
import { useState } from "react";
const Merge = () => {
  const [registrationForm, setRegistrationForm] = useState("register");
  console.log(registrationForm);
console.log("auth",registrationForm);
  return (
    <>
    <authContext.Provider value={{registrationForm,setRegistrationForm}}>
      {registrationForm == "register" ? 
      <SignIn />
      :
      <SignUp />
    }
    </authContext.Provider >
    </>
  );
};

export default Merge;
