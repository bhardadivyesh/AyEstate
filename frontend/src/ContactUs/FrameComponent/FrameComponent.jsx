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
    <div className="email-us-askus-a-question-by-e-inner">
      <div className="askusaquestionbyemailandwewill-parent">
        <img
          className="askusaquestionbyemailandwewill-icon"
          loading="lazy"
          alt=""
          src={askusaquestionbyemailandw}
        />
        <div className="listings-properties-official-w">
          <div className="email-us-parent">
            <b className="email-us1" style={emailUsStyle}>
              {emailUs}
            </b>
            <div className="ask-us-a">{askUsAQuestionByEmailAndW}</div>
          </div>
          <b className="leave-a-messages" style={leaveAMessagesStyle}>
            {leaveAMessages}
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
