import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import HomeListingsCompanyBlog from "../HomeListingsCompanyBlog/HomeListingsCompanyBlog";
import PageLinks from "../PageLinks/PageLinks";
import FrameComponent from "../FrameComponent/FrameComponent";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import "./FaqsMain.css";

const FaqsMain = () => {
  return (
    <div className="faqs-faqsMain">
      <NavigationBar />
      <main className="faqs-inner-faqsMain">
        <section className="home-listings-company-blog-parent-faqsMain">
          <HomeListingsCompanyBlog />
          <PageLinks />
          <FrameComponent />
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default FaqsMain;
