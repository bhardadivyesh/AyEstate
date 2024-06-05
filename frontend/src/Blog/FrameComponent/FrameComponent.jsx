import TreeLeaf from "../TreeLeaf/TreeLeaf";
import CardType from "../CardType/CardType";
import "./FrameComponent.css";
import axios from "axios";
import { useEffect, useState } from "react";

const FrameComponent = () => {
  const [blogArticals, setBlogArticals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/get-blogs").then((res) => {
      setBlogArticals(res.data);
    });
  }, []);
  return (
    <div className="frame-parent10-blog-frame">
      <TreeLeaf
        popularArticles="Recent Articles"
        weProvideBlogThatHelpStar="Newest update article from AyEstate"
      />
      <div className="article-listings-blog-frame">
        {blogArticals?.slice(0, 3).map((items, index) => {
          return (
            <>
              <CardType
                key={index}
                blogs={blogArticals}
                rectangle9620={`${items.images[0]}`}
                may2022={items?.date}
                careerTips={items?.suggestion}
                howIntrapreneurshipCanHel={items?.sortDescription}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FrameComponent;
