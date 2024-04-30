import "./PageLinks.css";
import minus from "../../assets/faqs/icons/minus.png";
import plus from "../../assets/faqs/icons/add.png";
import { useState } from "react";
const PageLinks = () => {
  const [buttonOneState, setButtonOneState] = useState(true);
  const [buttonTwoState, setButtonTwoState] = useState(false);
  const [buttonThreeState, setButtonThreeState] = useState(false);
  const [buttonFourState, setButtonFourState] = useState(false);
  const [buttonFiveState,setButtonFiveState] = useState(false)
  return (
    <div className="page-links">
      <div className="logo-and-menu">
        <div className="figma-project-settings">
          <div className="save-version">
            <div className="export-as-image">
              <h1 className="our-website">Our Website</h1>
            </div>
            <div className="frequently-asked-question1">
              Frequently asked question about our website
            </div>
          </div>
        </div>
        <div className="delete-project">
          <div className="new-project-from-template">
            <div className="duplicate-project">
              <b className="what-types-of">
                What types of properties are available on your website?
              </b>
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src={buttonOneState ? minus : plus}
                onClick={() => setButtonOneState(!buttonOneState)}
              />
            </div>
            {buttonOneState && (
              <>
                <div className="our-website-lists">
                  Our website lists a variety of properties including
                  residential homes, apartments, condos, townhouses, commercial
                  properties, vacant land, and more. You can filter your search
                  based on your preferences.
                </div>
                <b className="read-more1">Read More</b>
              </>
            )}
          </div>
        </div>
        <div className="delete-project">
          <div className="new-project-from-template">
            <div className="duplicate-project">
              <b className="what-types-of">
              How do I schedule a viewing of a property listed on your website?
              </b>
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src={buttonTwoState ? minus : plus}
                onClick={() => setButtonTwoState(!buttonTwoState)}
              />
            </div>
            {buttonTwoState && (
              <>
                <div className="our-website-lists">
                  Our website lists a variety of properties including
                  residential homes, apartments, condos, townhouses, commercial
                  properties, vacant land, and more. You can filter your search
                  based on your preferences.
                </div>
                <b className="read-more1">Read More</b>
              </>
            )}
          </div>
        </div>
        <div className="delete-project">
          <div className="new-project-from-template">
            <div className="duplicate-project">
              <b className="what-types-of">
              Can I list my property for sale or rent on your website?
              </b>
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src={buttonThreeState ? minus : plus}
                onClick={() => setButtonThreeState(!buttonThreeState)}
              />
            </div>
            {buttonThreeState && (
              <>
                <div className="our-website-lists">
                  Our website lists a variety of properties including
                  residential homes, apartments, condos, townhouses, commercial
                  properties, vacant land, and more. You can filter your search
                  based on your preferences.
                </div>
                <b className="read-more1">Read More</b>
              </>
            )}
          </div>
        </div>
        <div className="delete-project">
          <div className="new-project-from-template">
            <div className="duplicate-project">
              <b className="what-types-of">
              What should I consider when buying a home?
              </b>
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src={buttonFourState ? minus : plus}
                onClick={() => setButtonFourState(!buttonFourState)}
              />
            </div>
            {buttonFourState && (
              <>
                <div className="our-website-lists">
                  Our website lists a variety of properties including
                  residential homes, apartments, condos, townhouses, commercial
                  properties, vacant land, and more. You can filter your search
                  based on your preferences.
                </div>
                <b className="read-more1">Read More</b>
              </>
            )}
          </div>
        </div>
        <div className="delete-project">
          <div className="new-project-from-template">
            <div className="duplicate-project">
              <b className="what-types-of">
              How do I determine the value of my property?
              </b>
              <img
                className="minus-icon1"
                loading="lazy"
                alt=""
                src={buttonFiveState ? minus : plus}
                onClick={() => setButtonFiveState(!buttonFiveState)}
              />
            </div>
            {buttonFiveState && (
              <>
                <div className="our-website-lists">
                  Our website lists a variety of properties including
                  residential homes, apartments, condos, townhouses, commercial
                  properties, vacant land, and more. You can filter your search
                  based on your preferences.
                </div>
                <b className="read-more1">Read More</b>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="button-wrapper3">
        <button className="button33">
          <div className="detail-information12">Give a Quote</div>
        </button>
      </div>
    </div>
  );
};

export default PageLinks;
