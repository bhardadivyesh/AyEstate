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
  console.log(articals);
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = articals?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let startIndex, endIndex;
  if (typeof totalItems === "number" && !isNaN(totalItems)) {
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  } else {
    startIndex = 0;
    endIndex = 0;
  }
  const currentItems = articals?.slice(startIndex, endIndex);
  const generatePageButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className="generate-pagination-btn"
          style={{
            height: "45px",
            width: "45px",
            borderRadius: "8px",
            border: "1px solid #e4e9ee",
            boxSizing: "border-box",
            cursor: "pointer",
            backgroundColor: i === currentPage ? "#f9f9f9" : "#ffffff",
          }}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
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
                articals={currentItems}
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
             {currentPage > 1 && (
            <button onClick={previousPage} className="previous-btn">
              Previous
            </button>
          )}
          {generatePageButtons()}
          {currentPage < totalPages && (
            <button className="next-btn" onClick={nextPage}>
              Next
            </button>
          )}
            </div>
          </div>
        </section>
      </main>
      <Navigation1 />
    </div>
  );
};

export default BlogRecentArticles;
