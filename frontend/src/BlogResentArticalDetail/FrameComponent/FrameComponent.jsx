import "./FrameComponent.css";

const FrameComponent = ({parts,images}) => {
  return (
    <div className="website-info-inner2">
      <div className="frame-parent18">
        <div className="imagine-one-day-living-in-a-lu-wrapper">
          <div className="imagine-one-day-container">
            <p className="imagine-one-day">{parts?.parts?.part1}</p>
            <p className="blank-line2">&nbsp;</p>
            <p className="blank-line3">&nbsp;</p>
            <p className="by-all-accounts">{parts?.parts?.part2}</p>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="a-way-out-focusing-on-what-ca-parent">
            <h2 className="a-way-out">
              A Way Out: Focusing on What Can Be Controlled
            </h2>
            <div className="living-as-a-container">
              <p className="living-as-a">{parts?.parts?.part3}</p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper7">
          <div className="frame-parent19">
            <div className="rectangle-wrapper">
              <div className="frame-child5" />
            </div>
            <b className="preparation-meets-opportunity">
              Preparation Meets Opportunity
            </b>
          </div>
        </div>
        <div className="upon-graduating-the-harsh-rea-wrapper">
          <div className="upon-graduating-the-container">
            <p className="upon-graduating-the">{parts?.parts?.part4}</p>
          </div>
        </div>
        <div className="frame-wrapper8">
          <div className="frame-parent20">
            <div className="frame-parent21">
              <div className="rectangle-frame">
                <div className="frame-child6" />
              </div>
              <b className="luck-or-fate">
                Luck or Fate? Becoming a Wholesaler
              </b>
            </div>
            <div className="theres-a-saying-container">
              <p className="theres-a-saying">{parts?.parts?.part5}</p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper9">
          <div className="frame-parent22">
            <div className="rectangle-wrapper1">
              <div className="frame-child7" />
            </div>
            <b className="the-value-of">The Value of Active Listening</b>
          </div>
        </div>
        <div className="early-on-john-realized-that-s-wrapper">
              {parts?.parts?.part6}
          <div className="early-on-john"></div>
        </div>
        <img
          className="frame-child8"
          loading="lazy"
          alt=""
          src={`${images?.[1]}`}
        />
      </div>
    </div>
  );
};

export default FrameComponent;
