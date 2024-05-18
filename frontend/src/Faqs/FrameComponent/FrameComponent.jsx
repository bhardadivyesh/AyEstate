import AlternativeWaysToGetAnswer from "../AlternativeWaysToGetAnswer/AlternativeWaysToGetAnswer";
import "./FrameComponent.css";
import contact from "../../assets/faqs/icons/contact.png"
import secondMail from "../../assets/faqs/icons/secondMail.png"
import website from "../../assets/faqs/icons/website.png"

const FrameComponent = () => {
  return (
    <div className="listings-properties-official-parent-faqs-Frame">
      <div className="listings-properties-official-faqs-Frame">
        <div className="f-a-q-about-us-faqs-Frame">
          <div className="property-types-available-faqs-Frame">
            <h1 className="still-have-a-faqs-Frame">Still Have a question?</h1>
          </div>
          <div className="if-you-cannot-container-faqs-Frame">
            <p className="if-you-cannot-faqs-Frame">
              If you cannot find answer to your question in our FAQ, you can
              always contact us.
            </p>
            <p className="we-wil-answer-faqs-Frame">We wil answer to you shortly!</p>
          </div>
        </div>
      </div>
      <div className="can-list-property-faqs-Frame">
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