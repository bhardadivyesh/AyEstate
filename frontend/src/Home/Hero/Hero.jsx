import HeroImage from "../../assets/heroimage.png";
import "./Hero.css";
import {useNavigate} from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate()
  const handleNavigation = (navigationPath) =>{
    navigate(navigationPath)
  }
  return (
    <section className="section-Hero-homepage">
      <div className="div1-Hero-homepage">
        <div className="div2-Hero-homepage">
          <div className="div3-Hero-homepage">
            <h1 className="h1-1-Hero-homepage">
              Discover Your Dream <br /> Home Today
            </h1>

            <div className="div4-Hero-homepage">
              <span>
                Find the perfect property that suits your lifestyle. Our real
                estate <br />
                service offers unique selling propositions that set us apart
                from the <br />
                competition. Find your perfect home today!
              </span>
            </div>
          </div>
          <div className="div5-Hero-homepage">
            <button className="btn1-Hero-homepage" onClick={()=>handleNavigation("/listing")}>
              <div className="div6-Hero-homepage">Explore Now</div>
            </button>
            <button className="btn2-Hero-homepage" onClick={()=>handleNavigation("/contact")}>
              <div className="div7-Hero-homepage">Learn More</div>
            </button>
          </div>
        </div>
      </div>
      <img
        className="img1-Hero-homepage"
        loading="lazy"
        alt=""
        src={HeroImage}
      />
    </section>
  );
};

export default Hero;
