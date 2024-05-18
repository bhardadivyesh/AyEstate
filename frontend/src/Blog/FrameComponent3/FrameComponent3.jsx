import "./FrameComponent3.css";
import searchIcon from "../../assets/blogs/icons/search.jpg";
import { useEffect, useState } from "react";
import axios from "axios"
const FrameComponent3 = () => {
  const [articals,setArticals] = useState([])
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const articleNames = [];

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    const filteredSuggestions =articleNames?.filter(
      (item) => item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };
  useEffect(()=>{
    axios.get('http://localhost:1337/blogs').then((res)=>{
      setArticals(res.data)
    })
  },[])
  articals.forEach((item) => {
    if (!articleNames.includes(item.suggestion)) {
      articleNames.push(item.suggestion);
    }
  });
  return (
    <div className="search-bar-instance-wrapper-blog-Frame3">
      <div className="search-bar-instance-blog-Frame3">
        <div className="our-blog-wrapper-blog-Frame3">
          <h1 className="our-blog-blog-Frame3">Our Blog</h1>
        </div>
        <div className="frame-parent4-blog-Frame3">
          <div className="rectangle-parent1-blog-Frame3">
            <div className="frame-child1-blog-Frame3" />
            <div className="frame-wrapper2-blog-Frame3">
              <div className="search-normal-parent-blog-Frame3">
                <img
                  className="search-normal-icon1-blog-Frame3"
                  loading="lazy"
                  alt=""
                  src={searchIcon}
                />
                <div className="search-article-name-wrapper-blog-Frame3">
                  <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className="search-article-name-blog-Frame3"
                    placeholder="Search article name"
                  />
                  {query.length > 0 && (
                    <ul>
                      {suggestions.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => handleSuggestionClick(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <button className="button35-blog-Frame3">
              <div className="detail-information14-blog-Frame3">Search</div>
            </button>
          </div>
          <div className="frame-wrapper3-blog-Frame3">
            <div className="frame-parent5-blog-Frame3">
              <div className="suggested-wrapper-blog-Frame3">
                <div className="suggested-blog-Frame3">Suggested:</div>
              </div>
              {articleNames.map((items,index)=>{
                return(
                  <div className="success-stories-blog-Frame3 invest-strategies-blog-Frame3 tips-blog-Frame3 success-story-blog-Frame3" style={{marginLeft : "20px"}}>{items}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
