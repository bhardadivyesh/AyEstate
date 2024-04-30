import { useNavigate } from "react-router-dom";
import "./TreeLeaf.css";

const TreeLeaf = ({ popularArticles, weProvideBlogThatHelpStar }) => {
  const navigate = useNavigate()
  const handleViewAllBtnClick = () =>{
    console.log("all button click work");
    navigate('/resent-articals')
  }
  return (
    <div className="tree-leaf">
      <div className="popular-articles-parent">
        <h2 className="popular-articles">{popularArticles}</h2>
        <div className="we-provide-blog">{weProvideBlogThatHelpStar}</div>
      </div>
      <div className="dictionary-entry-key-wrapper">
        <button className="dictionary-entry-key"onClick={handleViewAllBtnClick}>
          <div className="view-all" >View All</div>
        </button>
      </div>
    </div>
  );
};

export default TreeLeaf;
