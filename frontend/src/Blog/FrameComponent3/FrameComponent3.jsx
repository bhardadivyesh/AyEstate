import "./FrameComponent3.css";
import searchIcon from "../../assets/blogs/icons/search.jpg"

const FrameComponent3 = () => {
  return (
    <div className="search-bar-instance-wrapper">
      <div className="search-bar-instance">
        <div className="our-blog-wrapper">
          <h1 className="our-blog">Our Blog</h1>
        </div>
        <div className="frame-parent4">
          <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="frame-wrapper2">
              <div className="search-normal-parent">
                <img
                  className="search-normal-icon1"
                  loading="lazy"
                  alt=""
                  src={searchIcon}
                />
                <div className="search-article-name-wrapper">
                  <div className="search-article-name">Search article name</div>
                </div>
              </div>
            </div>
            <button className="button35">
              <div className="detail-information14">Search</div>
            </button>
          </div>
          <div className="frame-wrapper3">
            <div className="frame-parent5">
              <div className="suggested-wrapper">
                <div className="suggested">Suggested:</div>
              </div>
              <div className="success-stories">Success Stories</div>
              <div className="invest-strategies">Invest Strategies</div>
              <div className="tips">Tips</div>
              <div className="success-story">Success Story</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
