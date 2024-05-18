import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  askusaquestionbyemailandw,
  emailUs,
  askUsAQuestionByEmailAndW,
  leaveAMessages,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const emailUsStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const leaveAMessagesStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className="email-us-askus-a-question-by-e-inner-contactUs-Frame">
      <div className="askusaquestionbyemailandwewill-parent-contactUs-Frame">
        <img
          className="askusaquestionbyemailandwewill-icon-contactUs-Frame"
          loading="lazy"
          alt=""
          src={askusaquestionbyemailandw}
        />
        <div className="listings-properties-official-w-contactUs-Frame">
          <div className="email-us-parent-contactUs-Frame">
            <b className="email-us1-contactUs-Frame" style={emailUsStyle}>
              {emailUs}
            </b>
            <div className="ask-us-a-contactUs-Frame">{askUsAQuestionByEmailAndW}</div>
          </div>
          <b className="leave-a-messages-contactUs-Frame" style={leaveAMessagesStyle}>
            {leaveAMessages}
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
