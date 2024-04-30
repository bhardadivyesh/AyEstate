import AlternativeWaysToGetAnswer from "../AlternativeWaysToGetAnswer/AlternativeWaysToGetAnswer";
import "./HomeListingsCompanyBlog.css";
import search from "../../assets/faqs/icons/search.png"
import myAccount from "../../assets/faqs/icons/myAccount.png"
import mail from "../../assets/faqs/icons/mail.png"
import study from "../../assets/faqs/icons/study.png"

const HomeListingsCompanyBlog = () => {
  return (
    <div className="home-listings-company-blog">
      <div className="helping-you">
        <h1 className="helping-you-is">Helping you is our priority</h1>
      </div>
      <div className="search-question">
        <div className="button-detail-info1">
          <div className="collect-keywords">
            <div className="collect-keywords-child" />
            <div className="account-setup">
              <div className="email-campaigns">
                <img
                  className="search-normal-icon"
                  loading="lazy"
                  alt=""
                  src={search}
                />
                <div className="engage-contacts">
                  <input className="search-question1" placeholder="Search question" />
                </div>
              </div>
            </div>
            <button className="button32">
              <div className="detail-information11">Search</div>
            </button>
          </div>
          <div className="property-f-a-q">
            <div className="we-are-collect">
              *We are collect your searching keywords to improve our FAQ
            </div>
          </div>
        </div>
      </div>
      <div className="support-ayestatecom">
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={myAccount}
          myAccount="My Account"
          fromHowToSetupYourAccount="From how to setup your account to how to apply for a job"
        />
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={mail}
          myAccount="Email Campaigns"
          fromHowToSetupYourAccount="Engage your contacts using th ebest mobile- friendly email design tools"
          propTextTransform="capitalize"
          propLineHeight="160%"
        />
        <AlternativeWaysToGetAnswer
          copyrightAyEstate={study}
          myAccount="Jobify Academy"
          fromHowToSetupYourAccount="Learn everything about client declaration and partner management"
          propTextTransform="capitalize"
          propLineHeight="160%"
        />
      </div>
    </div>
  );
};

export default HomeListingsCompanyBlog;
