import "./FrameComponent.css";
import facebook from "../../assets/aboutUs/logos/Facebook.png"
import netflix from "../../assets/aboutUs/logos/Netflix.png"
import amazon from "../../assets/aboutUs/logos/Amazon.png"
import youtube from "../../assets/aboutUs/logos/YouTube.png"
import google from "../../assets/aboutUs/logos/Google.png"

const FrameComponent = () => {
  return (
    <div className="title-parent-aboutFrame">
      <div className="title7-aboutFrame">
        We’ve built with the most growth company around the world
      </div>
      <div className="facebook-logowine-parent-aboutFrame">
        <img
          className="facebook-logowine-icon-aboutFrame"
          loading="lazy"
          alt=""
          src={facebook}
        />
        <img
          className="netflix-logowine-icon-aboutFrame"
          loading="lazy"
          alt=""
          src={netflix}
        />
        <div className="amazon-company-logowine-wrapper-aboutFrame">
          <img
            className="amazon-company-logowine-icon-aboutFrame"
            loading="lazy"
            alt=""
            src={amazon}
          />
        </div>
        <div className="amazon-company-logowine-wrapper-aboutFrame">
          <img
            className="amazon-company-logowine-icon-aboutFrame"
            loading="lazy"
            alt=""
            src={youtube}
          />
        </div>
        <img
          className="google-logowine-1-icon-aboutFrame"
          loading="lazy"
          alt=""
          src={google}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
