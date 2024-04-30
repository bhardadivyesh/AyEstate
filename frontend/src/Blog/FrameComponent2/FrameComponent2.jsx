import CardType1 from "../CardType1/CardType1";
import "./FrameComponent2.css";
import mainImage from "../../assets/blogs/headerimages/main.png"
import firstImage from "../../assets/blogs/headerimages/first.png"
import secondImage from "../../assets/blogs/headerimages/second.png"
import thirdImage from "../../assets/blogs/headerimages/third.png"

const FrameComponent2 = () => {
  return (
    <div className="frame-parent7">
      <img className="frame-child2" alt="" src={mainImage} />
      <div className="card-type-parent">
        <div className="card-type1">
          <img
            className="card-type-item"
            loading="lazy"
            alt=""
            src={firstImage}
          />
          <div className="card-type-inner1">
            <div className="frame-parent8">
              <div className="sep-2022-group">
                <div className="sep-20221">2 Feb 2024</div>
                <div className="ellipse-wrapper">
                  <div className="ellipse-div" />
                </div>
                <div className="career-tips1">Invest Strategies</div>
              </div>
              <b className="how-to-figure1">
                The Quick Guide to Virtual House Flipping
              </b>
            </div>
          </div>
        </div>
        <CardType1
          rectangle9616={secondImage}
          sep2022="20 January 2024"
          howToFigureOutIfAPotentia="Expert Home price Forecasts for 2024 revised up"
        />
        <CardType1
          rectangle9616={thirdImage}
          sep2022="15 January 2024"
          howToFigureOutIfAPotentia="How to Choose the Right Real Estate Agent for Your Needs"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
