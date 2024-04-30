import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent2 from "../FrameComponent2/FrameComponent2";
import FrameComponent1 from "../FrameComponent1/FrameComponent1";
import Paste from "../Paste/Paste";
import FrameComponent from "../FrameComponent/FrameComponent";
import CTASection from "../../Home/CtaSection/CtaSection";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import "./AboutUsMain.css";
import frameImage from "../../assets/aboutUs/frameimage.png"
const AboutUs = () => {
  return (
    <div className="about-us1">
      <NavigationBar />
      <section className="summarizer-wrapper">
        <img
          className="summarizer-icon"
          loading="lazy"
          alt=""
          src={frameImage}
        />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <section className="benefits-section">
        <button className="label">
          <div className="label-title">Achievement</div>
        </button>
        <div className="frame-parent">
          <div className="title-wrapper">
            <h1 className="title1">Our award this year</h1>
          </div>
          <div className="description">
            We’re happy to receive this award so that it motivates us to grow
            and provide the best service for you.
          </div>
        </div>
        <Paste />
        <div className="divider" />
        <FrameComponent />
      </section>
      <CTASection />
      <Navigation1 />
    </div>
  );
};

export default AboutUs;
