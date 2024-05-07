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
    <div className="search-bar-instance-wrapper">
      <div className="search-bar-instance">
        <div className="our-blog-wrapper">
          <h1 className="our-blog">Our Blog</h1>
        </div>
        <div className="frame-parent4">
          <div className="rectangle-parent1">
            <div className="frame-child1" />
            <div className="frame-wrapper2">
              <div className="search-normal-parent">
                <img
                  className="search-normal-icon1"
                  loading="lazy"
                  alt=""
                  src={searchIcon}
                />
                <div className="search-article-name-wrapper">
                  <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    className="search-article-name"
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
            <button className="button35">
              <div className="detail-information14">Search</div>
            </button>
          </div>
          <div className="frame-wrapper3">
            <div className="frame-parent5">
              <div className="suggested-wrapper">
                <div className="suggested">Suggested:</div>
              </div>
              {articleNames.map((items,index)=>{
                return(
                  <div className="success-stories invest-strategies tips success-story" style={{marginLeft : "20px"}}>{items}</div>
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
