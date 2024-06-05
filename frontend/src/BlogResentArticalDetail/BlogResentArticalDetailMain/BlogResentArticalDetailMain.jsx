import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent from "../FrameComponent/FrameComponent";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import CardType from "../CardType/CardType";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import "./BlogResentArticalDetailMain.css";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/context";
import axios from "axios"

const BlogRecentlyArticlesDet = () => {
  const value = useContext(MyContext);
  const [data, setdata] = useState([]);
  const [articalData,setArticalData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/get-blogs").then((res)=>{
        setArticalData(res.data)
    })
  },[])
  useEffect(() => {
    if (value.resentArticalData != "") {
      localStorage.setItem(
        "articalData",
        JSON.stringify(value.resentArticalData)
      );
    }
  }, [value.resentArticalData]);
  useEffect(() => {
    let localStorageData = localStorage.getItem("articalData");
    let parsedata = JSON.parse(localStorageData);
    setdata(parsedata);
  }, []);
  const totalLength = data.longDescription?.length;
  const partLength = Math.ceil(totalLength / 8);
  const part1 = data?.longDescription?.substring(0, partLength);
  const part2 = data?.longDescription?.substring(partLength, partLength * 2);
  const part3 = data?.longDescription?.substring(partLength * 2, partLength * 3);
  const part4 = data?.longDescription?.substring(partLength * 3, partLength * 4);
  const part5 = data?.longDescription?.substring(partLength * 4, partLength * 5);
  const part6 = data?.longDescription?.substring(partLength * 5, partLength * 6);
  const part7 = data?.longDescription?.substring(partLength * 6, partLength * 7);
  const part8 = data?.longDescription?.substring(partLength * 7);
  

  return (
    <div className="blog-recently-articles-det-blog-recentArticalDetailMain">
      <NavigationBar />
      <main className="main-navigation-blog-recentArticalDetailMain">
        <section className="website-info-blog-recentArticalDetailMain">
          <div className="website-info-inner-blog-recentArticalDetailMain">
            <div className="frame-parent2-blog-recentArticalDetailMain">
              <div className="frame-wrapper1-blog-recentArticalDetailMain">
                <div className="february-2024-parent-blog-recentArticalDetailMain">
                  <div className="february-2024-blog-recentArticalDetailMain">{data.date}</div>
                  <div className="ellipse-wrapper-blog-recentArticalDetailMain">
                    <div className="frame-item-blog-recentArticalDetailMain" />
                  </div>
                  <div className="success-stories-blog-recentArticalDetailMain">{data.suggestion}</div>
                </div>
              </div>
              <div className="from-0-to-40-million-how-a-parent-blog-recentArticalDetailMain">
                <h1 className="from-0-to-blog-recentArticalDetailMain">
                  From $0 to $40 Million: How a 10-Year Old Orphan Became a
                  Successful Investor
                </h1>
                <div className="it-can-be-a-challenge-to-maint-wrapper-blog-recentArticalDetailMain">
                  <div className="it-can-be-blog-recentArticalDetailMain">{data.sortDescription}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="website-info-child-blog-recentArticalDetailMain">
            <img
              className="frame-inner-blog-recentArticalDetailMain"
              loading="lazy"
              alt=""
              src={`${data.images?.[0]}`}
            />
          </div>
          <FrameComponent parts={{part1,part2,part3,part4,part5,part6}} images={data?.images} />
          <div className="website-info-inner1-blog-recentArticalDetailMain">
            <div className="from-0-to-40-million-in-asse-parent-blog-recentArticalDetailMain">
              <h2 className="from-0-to1-blog-recentArticalDetailMain">From $0 to $40 Million in Assets</h2>
              <div className="taking-down-this-container-blog-recentArticalDetailMain">
                <p className="taking-down-this-blog-recentArticalDetailMain">
                  {part7}
                </p>
                <p className="blank-line-blog-recentArticalDetailMain">&nbsp;</p>
                <p className="blank-line1-blog-recentArticalDetailMain">&nbsp;</p>
                <p className="the-journey-was-one-of-bootstr-blog-recentArticalDetailMain">
                 {part8}
                </p>
              </div>
            </div>
          </div>
          <ArticleContainer />
          <div className="article-listings-blog-recentArticalDetailMain">
            <CardType
              rectangle9620={`${articalData?.[0]?.images[0]}`}
              may2022={articalData[0]?.date}
              careerTips={articalData[0]?.suggestion}
              howIntrapreneurshipCanHel={articalData[0]?.sortDescription}
            />
            <CardType
              rectangle9620={`${articalData[1]?.images[1]}`}
              may2022={articalData[1]?.date}
              careerTips={articalData[1]?.suggestion}
              howIntrapreneurshipCanHel={articalData[1]?.sortDescription}
              propWidth="20.25rem"
              propFlex="1"
              propDisplay="unset"
              propMinWidth="unset"
              propFlex1="1"
            />
            <CardType
              rectangle9620={`${articalData[2]?.images[1]}`}
              may2022={articalData[2]?.date}
              careerTips={articalData[2]?.suggestion}
              howIntrapreneurshipCanHel={articalData[2]?.sortDescription}
              propWidth="unset"
              propFlex="unset"
              propDisplay="inline-block"
              propMinWidth="3.5rem"
              propFlex1="unset"
            />
          </div>
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default BlogRecentlyArticlesDet;
