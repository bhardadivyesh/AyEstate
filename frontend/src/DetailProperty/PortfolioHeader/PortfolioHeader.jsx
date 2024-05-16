import "./PortfolioHeader.css";
import mainImage from "../../assets/DetailProperty/mainImage.png";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/context";

const PortfolioHeader = () => {
  const value = useContext(MyContext);
const [data,setdata] = useState() 
useEffect(() => {
  if (value.detailPropertyData != "") {
    localStorage.setItem("data", JSON.stringify(value.detailPropertyData));
  }
}, [value.detailPropertyData]);
useEffect(()=>{
  let localStorageData = localStorage.getItem("data")
  let parsedata = JSON.parse(localStorageData)
  setdata(parsedata)
},[]) 
  return (
    <section className="portfolio-header-7">
      <div className="content13">
        <div className="column6">
          <div className="content14">
            <h1 className="heading8">Luxury Beach {data?.category}</h1>
            <div className="text15">
              Experience the ultimate in beachfront luxury with breathtaking
              ocean views.
            </div>
          </div>
          <div className="tags">
            <button className="tag">
              <div className="tag-one">Beachfront</div>
            </button>
            <button className="tag1">
              <div className="tag-two">Modern</div>
            </button>
            <button className="tag2">
              <div className="tag-three">Spacious</div>
            </button>
          </div>
        </div>
        <div className="list">
          <div className="content15">
            <div className="list-item">
              <b className="text16">Client</b>
              <div className="text17">John Doe</div>
            </div>
            <div className="list-item1">
              <b className="style-primary">Date</b>
              <div className="style-secondary">{data?.date}</div>
            </div>
          </div>
          <div className="content16">
            <div className="list-item2">
              <b className="text18">Location</b>
              <div className="text19">{data?.location}</div>
            </div>
            <div className="list-item3">
              <b className="text20">Price</b>
              <div className="text21">{data?.price}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="placeholder-image-icon3"
        loading="lazy"
        alt=""
        src={`http://localhost:1337${data?.image?.[0].url}`}
      />
    </section>
  );
};

export default PortfolioHeader;
