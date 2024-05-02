import TreeLeaf from "../TreeLeaf/TreeLeaf";
import StackElementData from "../StackElementData/StackElementData";
import "./FrameComponent1.css";
import firstImage from "../../assets/blogs/popularArticals/firstImage.png"
import secondImage from "../../assets/blogs/popularArticals/secondImage.png"
import { useState,useEffect } from "react";
import axios from 'axios'

const FrameComponent1 = () => {
  const [popularArticals,setPopularArticals] = useState([])
  useEffect(() => {
    axios.get("http://localhost:1337/articals").then((res) => {
      setPopularArticals(res.data);
    });
  }, []);
  console.log();
  console.log(`http://localhost:1337${popularArticals[1]?.image[0]?.url}`);
  return (
    <div className="tree-leaf-parent">
      <TreeLeaf
        popularArticles="Popular Articles"
        weProvideBlogThatHelpStar="We provide blog that help start your career on AyEstate"
      />
      <div className="array-element">
        <StackElementData heapElementPriority={`http://localhost:1337${popularArticals[0]?.image[0].url}`} />
        <StackElementData
          heapElementPriority={`http://localhost:1337${popularArticals[1]?.image[0]?.url}`}
          frameDivWidth="34.813rem"
          frameDivHeight="2rem"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
