import Vector from "../../assets/Vector.png";
import Avatar from "../../assets/Avatar Image.png";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <section className="section1-Testimonials-homepage">
      <div className="div1-Testimonials-homepage">
        <h1 className="h1-1-Testimonials-homepage">Customer Testimonials</h1>
      </div>
      <div className="div2-Testimonials-homepage">
        <div className="div3-Testimonials-homepage">
          <img
            className="img1-Testimonials-homepage"
            loading="lazy"
            alt=""
            src={Vector}
          />
          <img className="img2-Testimonials-homepage" alt="" src={Vector} />
          <img className="img3-Testimonials-homepage" alt="" src={Vector} />
          <img className="img4-Testimonials-homepage" alt="" src={Vector} />
        </div>
        <b className="b1-Testimonials-homepage">
          Our experience with this real estate website design has been nothing
          short of amazing. The team was professional, responsive, and delivered
          beyond our expectations.
        </b>
        <div className="div4-Testimonials-homepage">
          <img
            className="img5-Testimonials-homepage"
            loading="lazy"
            alt=""
            src={Avatar}
          />
          <div className="div5-Testimonials-homepage">
            <div className="div6-Testimonials-homepage">John Doe</div>
            <div className="div7-Testimonials-homepage">CEO, ABC Realty</div>
          </div>
          <div className="div8-Testimonials-homepage" />
          <img
            className="img6-Testimonials-homepage"
            alt=""
            src="/logo2-colordark.svg"
          />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
