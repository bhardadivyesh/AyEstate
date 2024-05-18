import TreeLeaf from "../TreeLeaf/TreeLeaf";
import StackElementData from "../StackElementData/StackElementData";
import "./FrameComponent1.css";
import { useState,useEffect } from "react";
import axios from 'axios'

const FrameComponent1 = () => {
  const [popularArticals,setPopularArticals] = useState([])
  useEffect(() => {
    axios.get("http://localhost:1337/articals").then((res) => {
      setPopularArticals(res.data);
    });
  }, []);
  return (
    <div className="tree-leaf-parent-blog-Frame1">
      <TreeLeaf
        popularArticles="Popular Articles"
        weProvideBlogThatHelpStar="We provide blog that help start your career on AyEstate"
      />
      <div className="array-element-blog-Frame1">
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
