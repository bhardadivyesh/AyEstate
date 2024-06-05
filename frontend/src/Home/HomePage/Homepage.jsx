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
import myContext from "../../context/context";
import { useState } from "react";
import "./Homepage.css";
const Homepage = () => {
  const [buttonstate, setbuttonstate] = useState();

  return (
    <myContext.Provider value={{ buttonstate, setbuttonstate }}>
      <div className="div1-homepage">
        <NavigationBar />
        <Hero />
        <Discover />
        <section className="section-homepage">
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
  );
};

export default Homepage;
