import { useState } from "react";
import FrameComponent from "../FrameComponent/FrameComponent";
import add from "../../assets/add.png";
import minus from "../../assets/minus.png";
import "./Faqs.css";

const FAQs = () => {
  const [showContent, setShowContent] = useState(true);
  const showContentToggle = () => {
    setShowContent(!showContent);
  };
  return (
    <form className="form-faqs-homepage">
      <div className="div1-faqs-homepage">
        <div className="div2-faqs-homepage">
          <div className="div3-faqs-homepage">
            <div className="div4-faqs-homepage">
              <div className="div4-faqs-homepage">F A Q</div>
            </div>
            <h1 className="h1-1-faqs-homepage">frequently asked question</h1>
          </div>
          <div className="div5-faqs-homepage">
            <div className="div6-faqs-homepage">
              Did you find the question as you expected?
            </div>
          </div>
        </div>
      </div>
      <div className="div7-faqs-homepage">
        <div className="div8-faqs-homepage">
          <div className="div9-faqs-homepage">
            <div className="div10-faqs-homepage" />
            <div className="div11-faqs-homepage">
              <div className="div12-faqs-homepage">
                <b className="b1-faqs-homepage">How many steps to get a job?</b>
                <div className="div13-faqs-homepage">
                  {showContent ? (
                    <img
                      className="img1-faqs-homepage"
                      loading="lazy"
                      alt=""
                      src={minus}
                      onClick={showContentToggle}
                    />
                  ) : (
                    <img
                      className="img2-faqs-homepage"
                      loading="lazy"
                      alt=""
                      src={add}
                      onClick={showContentToggle}
                    />
                  )}
                </div>
              </div>
            </div>
            {showContent && (
              <>
                <div className="div14-faqs-homepage">
                  Et lectus viverra aenean malesuada praesent. Egestas praesent
                  quam auctor amet ac, ac vel. Euismod proin massa feugiat
                  gravida tellus auctor ac, vitae justo.
                </div>
                <b className="b2-faqs-homepage">Read More</b>
              </>
            )}
          </div>
          <FrameComponent
            whatDoWeNeedToApplyForAJo="What do we need to apply for a job?"
            add={add}
            value="1"
          />
        </div>
        <div className="div15-faqs-homepage">
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Do we get cv from jobify?"
            add={add}
            value="2"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="unset"
          />
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Can we reschedule the interview meeting?"
            add={add}
            value="3"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="unset"
          />
          <FrameComponent
            whatDoWeNeedToApplyForAJo="Can we apply for all jobs?"
            add={add}
            value="4"
            propAlignSelf="unset"
            propWidth="612px"
            propHeight="82px"
          />
        </div>
      </div>
      <div className="div16-faqs-homepage">
        <button className="btn1-faqs-homepage">
          <div className="div17-faqs-homepage">Give a Quote</div>
        </button>
      </div>
    </form>
  );
};

export default FAQs;
