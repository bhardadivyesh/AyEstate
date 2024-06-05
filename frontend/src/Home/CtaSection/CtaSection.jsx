import buttonArrow from "../../assets/arrow-up-right.png";
import background from "../../assets/CTA Section.png";
import "./CtaSection.css";
const CTASection = () => {
  return (
    <section
      className="section1-ctasection-homepage"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="div1-ctasection-homepage"></div>
      <div className="div2-ctasection-homepage">
        <h1 className="h1-1-ctasection-homepage">
          <p className="p1-ctasection-homepage">Let’s start a</p>
          <p className="p2-ctasection-homepage">successful project</p>
        </h1>
        <div className="div3-ctasection-homepage">
          <p className="p3-ctasection-homepage">
            We deliver immediate business impact and long-term ROI for your
            brand.
          </p>
          <p className="p4-ctasection-homepage">
            Find out why Astheris is Australia's trusted Digital Agency.
          </p>
        </div>
        <div className="div4-ctasection-homepage">
          <button className="btn1-ctasection-homepage">
            <div className="div5-ctasection-homepage">Start A Project</div>
            <div className="div6-ctasection-homepage">
              <img
                className="img1-ctasection-homepage"
                alt=""
                src={buttonArrow}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTASection;