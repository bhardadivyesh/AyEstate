import TreeLeaf from "../TreeLeaf/TreeLeaf";
import CardType from "../CardType/CardType";
import "./FrameComponent.css";
import firstImage from "../../assets/blogs/resentArticals/first.png";
import secondImage from "../../assets/blogs/resentArticals/second.png";
import thirdImage from "../../assets/blogs/resentArticals/third.png";
import axios from "axios";
import { useEffect, useState } from "react";

const FrameComponent = () => {
  const [blogArticals, setBlogArticals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/blogs").then((res) => {
      setBlogArticals(res.data);
    });
  }, []);
  // console.log(blogArticals);
  return (
    <div className="frame-parent10">
      <TreeLeaf
        popularArticles="Recent Articles"
        weProvideBlogThatHelpStar="Newest update article from AyEstate"
      />
      <div className="article-listings">
        {blogArticals?.slice(0,3).map((items, index) => {
          console.log(items);
          return (
            <>
              <CardType
              key={index}
              blogs={blogArticals}
                rectangle9620={`http://localhost:1337${items?.images?.[0]?.url}`}
                may2022={items?.date}
                careerTips={items?.suggestion}
                howIntrapreneurshipCanHel={items?.sortDescription}
              />
            </>
          );
        })}
        {/* <CardType
          rectangle9620={firstImage}
          may2022="4 February 2024"
          careerTips="Tips"
          howIntrapreneurshipCanHel="15 Reasons Why Real Estate is the Best Investment"
        />
        <CardType
          rectangle9620={secondImage}
          may2022="24 January 2024"
          careerTips="Success Stories"
          howIntrapreneurshipCanHel="Renters Are Still Moving—These Markets Are Where You Should Be Investing"
          propWidth="20.25rem"
          propFlex="1"
          propDisplay="unset"
          propMinWidth="unset"
          propFlex1="1"
        />
        <CardType
          rectangle9620={thirdImage}
          may2022="21 January 2024"
          careerTips="Invest"
          howIntrapreneurshipCanHel="Every Major U.S. City Where It’s More Expensive to Rent Than Buy"
          propWidth="unset"
          propFlex="unset"
          propDisplay="inline-block"
          propMinWidth="3.5rem"
          propFlex1="unset"
        /> */}
      </div>
    </div>
  );
};

export default FrameComponent;
