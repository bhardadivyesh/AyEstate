import TreeLeaf from "../TreeLeaf/TreeLeaf";
import StackElementData from "../StackElementData/StackElementData";
import "./FrameComponent1.css";
import firstImage from "../../assets/blogs/popularArticals/firstImage.png"
import secondImage from "../../assets/blogs/popularArticals/secondImage.png"

const FrameComponent1 = () => {
  return (
    <div className="tree-leaf-parent">
      <TreeLeaf
        popularArticles="Popular Articles"
        weProvideBlogThatHelpStar="We provide blog that help start your career on AyEstate"
      />
      <div className="array-element">
        <StackElementData heapElementPriority={firstImage} />
        <StackElementData
          heapElementPriority={secondImage}
          frameDivWidth="34.813rem"
          frameDivHeight="2rem"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
