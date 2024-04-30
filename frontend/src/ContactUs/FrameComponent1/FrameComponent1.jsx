import MapComponent from "../Map/MapComponent ";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="style-guide-changelog-licensin-parent">
      <div className="style-guide-changelog-licensin">
        <div className="copyright-ay-estate-designed-b">
          <div className="excelent-customer-service-wrapper">
            <h1 className="excelent-customer-service">
              Excelent customer service
            </h1>
          </div>
          <div className="if-you-have">
            If you have any questions you can report them below with the
            following information, so that it is easy for us to reply to your
            message.
          </div>
        </div>
      </div>
      <div className="rectangle-container">
        <MapComponent />
        {/* <img className="frame-inner" alt="" src="/rectangle-9620@2x.png" />
        <img
          className="frame-icon"
          loading="lazy"
          alt=""
          src="/frame-162971.svg"
        /> */}
      </div>
    </div>
  );
};

export default FrameComponent1;
