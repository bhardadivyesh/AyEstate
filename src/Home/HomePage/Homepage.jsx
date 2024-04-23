import Hero from "../Hero/Hero";
import Discover from "../Discover/Discover";
import Simplify from "../Simplify/Simplify";
import Innovative from "../Innovative/Innovative";
import Properties from "../Properties/Properties";
import Testimonials from "../Testimonials/Testimonials";
import FAQs from "../Faqs/Faqs";
import CTASection from "../CtaSection/CtaSection";
import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import myContext from "../../context/context"
import { useState } from "react";
const Homepage = () => {
  const [buttonstate,setbuttonstate] = useState()
  
  return (
    <myContext.Provider value={{buttonstate,setbuttonstate}}>
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <NavigationBar />
      <Hero />
      <Discover />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 5px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <Simplify />
        <Innovative />
      </section>
      <Properties />
       <Testimonials /> 
       <FAQs /> 
      <CTASection />
      <Navigation1 />  
    </div>
    </myContext.Provider>
  )}

export default Homepage