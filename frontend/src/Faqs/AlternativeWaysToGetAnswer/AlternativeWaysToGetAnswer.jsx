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
    <div className="alternative-ways-to-get-answer">
      <div className="our-community">
        <img
          className="copyright-ay-estate"
          loading="lazy"
          alt=""
          src={copyrightAyEstate}
        />
        <div className="designed-by-a-y-studio">
          <div className="style-guide-changelog-licensin1">
            <b className="my-account" style={myAccountStyle}>
              {myAccount}
            </b>
            <div className="from-how-to" style={fromHowToStyle}>
              {fromHowToSetupYourAccount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeWaysToGetAnswer;
