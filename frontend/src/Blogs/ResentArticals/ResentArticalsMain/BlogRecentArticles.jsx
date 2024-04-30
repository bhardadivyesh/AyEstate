import NavigationBar from "../../../CommanComponent/NavigationBar/NavigationBar ";
import CardType from "../CardType/CardTypes";
import Navigation1 from "../../../CommanComponent/Navigation1/Navigation1";
import "./BlogRecentArticles.css";
import axios from "axios";
import { useState, useEffect } from "react";

const BlogRecentArticles = () => {
  const [articals, setArticals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/blogs").then((res) => {
      setArticals(res.data);
    });
  }, []);
  //   console.log(articals);
  return (
    <div className="blog-recent-articles">
      <NavigationBar />
      <main className="card-type-card">
        <section className="frame-parent">
          <div className="frame-group">
            <div className="recent-articles-parent">
              <h2 className="recent-articles">Recent Articles</h2>
              <div className="newest-update-article">
                Newest update article from AyEstate
              </div>
            </div>
            <div className="card-type-parent">
              <CardType
                articals={articals}
                propWidth="unset"
                propFlex="unset"
                propDisplay="inline-block"
                propMinWidth="3.5rem"
                propFlex1="unset"
              />
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="arrow-left-wrapper">
                <img
                  className="arrow-left-icon"
                  loading="lazy"
                  alt=""
                  src="/arrowleft.svg"
                />
              </div>
              <div className="pages-container-parent">
                <div className="pages-container">
                  <div className="page-title">1</div>
                </div>
                <div className="pages-container1">
                  <div className="div">2</div>
                </div>
                <div className="pages-container2">
                  <div className="div1">3</div>
                </div>
                <div className="pages-container3">
                  <div className="div2">...</div>
                </div>
              </div>
              <div className="arrow-left-container">
                <img className="arrow-left-icon1" alt="" src="/arrowleft.svg" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default BlogRecentArticles;
