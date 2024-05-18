import { useMemo } from "react";
import "./AlternativeWaysToGetAnswer.css";

const AlternativeWaysToGetAnswer = ({
  copyrightAyEstate,
  myAccount,
  fromHowToSetupYourAccount,
  propTextTransform,
  propLineHeight,
}) => {
  const myAccountStyle = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  const fromHowToStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="alternative-ways-to-get-answer-faqs-alternative-ways-to-get-answer">
      <div className="our-community-faqs-alternative-ways-to-get-answer">
        <img
          className="copyright-ay-estate-faqs-alternative-ways-to-get-answer"
          loading="lazy"
          alt=""
          src={copyrightAyEstate}
        />
        <div className="designed-by-a-y-studio-faqs-alternative-ways-to-get-answer">
          <div className="style-guide-changelog-licensin1-faqs-alternative-ways-to-get-answer">
            <b className="my-account-faqs-alternative-ways-to-get-answer" style={myAccountStyle}>
              {myAccount}
            </b>
            <div className="from-how-to-faqs-alternative-ways-to-get-answer" style={fromHowToStyle}>
              {fromHowToSetupYourAccount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeWaysToGetAnswer;
