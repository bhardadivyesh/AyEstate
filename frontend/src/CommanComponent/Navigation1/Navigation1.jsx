import { useNavigate } from "react-router-dom";
import "./Navigation1.css";

const Navigation1 = () => {
  const navigation = useNavigate()
  const handleNavigationClick = (navigationPath) =>{
    navigation(navigationPath)
  }
  return (
    <footer className="navigation2">
      <div className="navigation-inner" />
      <div className="network-navigator">
        <div className="matrix-mixer">
          <h2 className="ayestate6">AyEstate</h2>
          <div className="calculation-controller">
            <div className="helloayestateexamplecom-12">
              <p className="helloayestateexamplecom2">
                hello.ayestate@example.com
              </p>
              <p className="p2">(+1) 2345 6789</p>
            </div>
            <div className="parker-rd-allentown-container2">
              <p className="parker-rd-allentown2">4140 Parker Rd. Allentown,</p>
              <p className="new-mexico-311342">New Mexico 31134</p>
            </div>
          </div>
        </div>
        <div className="variable-vault">
          <div className="script-scribe">
            <div className="pages2">Pages</div>
            <div className="event-emitter">
              <div className="listings6" onClick={()=>handleNavigationClick("/listing")}>Listings</div>
              <div className="about-us7" onClick={()=>handleNavigationClick("/aboutus")}>About us</div>
              <div className="blog6" onClick={()=>handleNavigationClick("/blog")}>Blog</div>
            </div>
          </div>
          <div className="script-scribe1">
            <div className="support2">Support</div>
            <div className="properties-container">
              <div className="properties3"  onClick={()=>handleNavigationClick("/listing")}>Properties</div>
              <div className="faq2" onClick={()=>handleNavigationClick("/faqs")}>FAQ</div>
              <div className="contact-us2" onClick={()=>handleNavigationClick("/contact")}>Contact Us</div>
            </div>
          </div>
          <div className="webflow-stuff-container">
            <div className="webflow-stuff2">Webflow Stuff</div>
            <div className="style-guide-container">
              <div className="style-guide2">Style Guide</div>
              <div className="changelog2">Changelog</div>
              <div className="licensing2">Licensing</div>
              <div className="instructions2">Instructions</div>
            </div>
          </div>
          <div className="script-scribe2">
            <div className="platform2">Platform</div>
            <div className="official-website-container">
              <div className="official-website2">Official Website</div>
              <div className="play-store2">Play Store</div>
              <div className="app-store2">App Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-ayestate-designe-container">
        <div className="copyright-ayestate2">
          Copyright © AyEstate | Designed by AY Studio
        </div>
      </div>
    </footer>
  );
};

export default Navigation1;
