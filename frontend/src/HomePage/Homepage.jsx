import Hero from "../Home/Hero/Hero";
import Discover from "../Home/Discover/Discover";
import Simplify from "../Home/Simplify/Simplify";
import Innovative from "../Home/Innovative/Innovative";
import Properties from "../Home/Properties/Properties";
import Testimonials from "../Home/Testimonials/Testimonials";
import FAQs from "../Home/Faqs/Faqs";
import CTASection from "../Home/CtaSection/CtaSection";
import NavigationBar from "../CommanComponent/NavigationBar/NavigationBar ";
import Navigation1 from "../CommanComponent/Navigation1/Navigation1";

const Homepage = () => {
  return (
    <>
      <div className="div1-outer-homepage">
        <Hero />
        <Discover />
        <section className="section-outer-homepage">
          <Simplify />
          <Innovative />
        </section>
        <Properties />
        <Testimonials />
        <FAQs />
        <CTASection />
        <NavigationBar />
        <Navigation1 />
      </div>
    </>
  );
};

export default Homepage;
