import { useNavigate } from "react-router-dom";
import "./ArticleContainer.css";

const ArticleContainer = () => {
  const navigate = useNavigate()
  const handleViewAllBtnClick = () =>{
    navigate('/resent-articals')
  }
  return (
    <div className="article-container1">
      <div className="card-list1">
        <div className="recently-articles-parent">
          <h2 className="recently-articles">Recently Articles</h2>
          <div className="newest-update-article1">
            Newest update article from AyEstate
          </div>
        </div>
        <div className="view-all-button">
          <button className="article-listings2" onClick={handleViewAllBtnClick}>
            <div className="view-all1">View All</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleContainer;
