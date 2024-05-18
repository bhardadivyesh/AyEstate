import AlternativeWaysToGetAnswer from "../AlternativeWaysToGetAnswer/AlternativeWaysToGetAnswer";
import "./HomeListingsCompanyBlog.css";
import search from "../../assets/faqs/icons/search.png";
import myAccount from "../../assets/faqs/icons/myAccount.png";
import mail from "../../assets/faqs/icons/mail.png";
import study from "../../assets/faqs/icons/study.png";
import { useState } from "react";

const HomeListingsCompanyBlog = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    const filteredSuggestions = ["apple", "banana", "cherry", "date"].filter(
      (item) => item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };
  return (
    <div className="home-listings-company-blog-faqs-HomeListings">
      <div className="helping-you-faqs-HomeListings">
        <h1 className="helping-you-is-faqs-HomeListings">Helping you is our priority</h1>
      </div>
      <div className="search-question-faqs-HomeListings">
        <div className="button-detail-info1-faqs-HomeListings">
          <div className="collect-keywords-faqs-HomeListings">
            <div className="collect-keywords-child-faqs-HomeListings" />
            <div className="account-setup-faqs-HomeListings">
              <div className="email-campaigns-faqs-HomeListings">
                <img
                  className="search-normal-icon-faqs-HomeListings"
                  loading="lazy"
                  alt=""
                  src={search}
                />
                <div className="engage-contacts-faqs-HomeListings">
                  <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className="search-question1-faqs-HomeListings"
                    placeholder="Search question"
                  />
                  {query.length > 0 && (
                    <ul>
                      {suggestions.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <button className="button32-faqs-HomeListings">
              <div className="detail-information11-faqs-HomeListings">Search</div>
            </button>
          </div>
          <div className="property-f-a-q-faqs-HomeListings">
            <div className="we-are-collect-faqs-HomeListings">
              *We are collect your searching keywords to improve our FAQ
            </div>
          </div>
        </div>
      </div>
      <div className="support-ayestatecom-faqs-HomeListings">
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
