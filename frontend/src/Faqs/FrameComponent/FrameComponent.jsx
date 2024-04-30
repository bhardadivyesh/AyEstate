import AlternativeWaysToGetAnswer from "../AlternativeWaysToGetAnswer/AlternativeWaysToGetAnswer";
import "./FrameComponent.css";
import contact from "../../assets/faqs/icons/contact.png"
import secondMail from "../../assets/faqs/icons/secondMail.png"
import website from "../../assets/faqs/icons/website.png"

const FrameComponent = () => {
  return (
    <div className="listings-properties-official-parent">
      <div className="listings-properties-official">
        <div className="f-a-q-about-us">
          <div className="property-types-available">
            <h1 className="still-have-a">Still Have a question?</h1>
          </div>
          <div className="if-you-cannot-container">
            <p className="if-you-cannot">
              If you cannot find answer to your question in our FAQ, you can
              always contact us.
            </p>
            <p className="we-wil-answer">We wil answer to you shortly!</p>
          </div>
        </div>
      </div>
      <div className="can-list-property">
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={contact}
          myAccount="+(+1) 2345 6789"
          fromHowToSetupYourAccount="Our 24/7 Customer Services"
          propTextTransform="capitalize"
          propLineHeight="1.813rem"
        />
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={secondMail}
          myAccount="support@ayestate.com"
          fromHowToSetupYourAccount="Alternative way to get anwser faster."
          propTextTransform="unset"
          propLineHeight="1.813rem"
        />
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={website}
          myAccount="Real Estate Management"
          fromHowToSetupYourAccount="Our community ready to help you"
          propTextTransform="capitalize"
          propLineHeight="1.813rem"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
