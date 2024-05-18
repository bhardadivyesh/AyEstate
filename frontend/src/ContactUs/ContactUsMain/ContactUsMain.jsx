import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent1 from "../FrameComponent1/FrameComponent1";
import FrameComponent from "../FrameComponent/FrameComponent";
import MultiLevelMessageCardStack from "../MultiLevelMessageCardStack/MultiLevelMessageCardStack";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import "./ContactUsMain.css";
import emailIcon from "../../assets/contactus/icons/email.png"
import contactIcon from "../../assets/contactus/icons/support.png"
import location from "../../assets/contactus/icons/location.png"


const ContactUsMain = () => {
  return (
    <div className="contact-us-contactUsMain">
      <NavigationBar />
      <main className="email-us-contactUsMain">
        <section className="contact-our-sales-team-contactUsMain">
          <FrameComponent1 />
          <div className="email-us-askus-a-question-by-e-contactUsMain">
            <FrameComponent
              askusaquestionbyemailandw={emailIcon}
              emailUs="Email Us"
              askUsAQuestionByEmailAndW="Ask us a question by email and we will respond within a few days."
              leaveAMessages="Leave a Messages"
            />
            <FrameComponent
              askusaquestionbyemailandw={location}
              emailUs="Official Office"
              askUsAQuestionByEmailAndW="You can meet us at our office and discuss the details of your question."
              leaveAMessages="Get Directions"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="inline-block"
              propMinWidth1="7.563rem"
            />
            <FrameComponent
              askusaquestionbyemailandw={contactIcon}
              emailUs="Customer Support"
              askUsAQuestionByEmailAndW="Call us if your question requires an immediate response."
              leaveAMessages="+(632) 3892402"
              propDisplay="unset"
              propMinWidth="unset"
              propDisplay1="unset"
              propMinWidth1="unset"
            />
          </div>
          <MultiLevelMessageCardStack />
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default ContactUsMain;
