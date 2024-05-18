import { useNavigate } from "react-router-dom";
import "./TreeLeaf.css";

const TreeLeaf = ({ popularArticles, weProvideBlogThatHelpStar }) => {
  const navigate = useNavigate()
  const handleViewAllBtnClick = () =>{
    console.log("all button click work");
    navigate('/resent-articals')
  }
  return (
    <div className="tree-leaf-blog-TreeLeaf">
      <div className="popular-articles-parent-blog-TreeLeaf">
        <h2 className="popular-articles-blog-TreeLeaf">{popularArticles}</h2>
        <div className="we-provide-blog-blog-TreeLeaf">{weProvideBlogThatHelpStar}</div>
      </div>
      <div className="dictionary-entry-key-wrapper-blog-TreeLeaf">
        <button className="dictionary-entry-key-blog-TreeLeaf"onClick={handleViewAllBtnClick}>
          <div className="view-all-blog-TreeLeaf" >View All</div>
        </button>
      </div>
    </div>
  );
};

export default TreeLeaf;
