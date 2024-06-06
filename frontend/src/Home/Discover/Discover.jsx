import Column1 from "../Column1/Column1";
import frame from "../../assets/Frame 162767.png";
import buttonIcon from "../../assets/chevron-right.png";
import "./Discover.css";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigation = useNavigate();
  const handleNavigation = (navigationPath) =>{
    navigation(navigationPath)
  } 
  return (
    <section className="section1-discover-homepage">
      <div className="div1-discover-homepage">
        <div className="div2-discover-homepage">
          <div className="div3-discover-homepage">Discover</div>
          <h1 className="h1-1-discover-homepage">
            Find Your Dream <br /> Property with Us
          </h1>
        </div>
        <div className="div4-discover-homepage">
          At our real estate agency, we offer a range of services to help you
          <br />
          with your property needs. Whether you're looking to buy, sell, or get
          <br />
          a valuation, our experienced team is here to assist you every step of
          <br />
          the way.
        </div>
      </div>
      <div className="div5-discover-homepage">
        <div className="div6-discover-homepage">
          <Column1
            frame162767={frame}
            heading="Property Buying and"
            heading2="Selling"
            text="We provide expert guidance for buying and "
            text2="selling properties, ensuring a smooth and"
            text3="successful transaction."
          />
          <Column1
            frame162767={frame}
            heading="Property Valuation"
            heading2="Services"
            text="Our team of certified appraisers offers accurate"
            text2="property valuations to help you make informed"
            text3="decisions."
          />
          <Column1
            frame162767={frame}
            heading="Real Estate Investment"
            heading2="Advice"
            text="Get expert advice on real estate investment "
            text2="strategies to maximize your returns."
          />
        </div>
        <div className="div7-discover-homepage">
          <button className="btn1-discover-homepage" onClick={()=>handleNavigation("/listing")}>
            <div className="div8-discover-homepage">Learn More</div>
          </button>
          <div className="div9-discover-homepage" onClick={()=>handleNavigation("/contact")}>
            <div className="div10-discover-homepage">Contact</div>
            <img
              className="img1-discover-homepage"
              loading="lazy"
              alt=""
              src={buttonIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discover;
