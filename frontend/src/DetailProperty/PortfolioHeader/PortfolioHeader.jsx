import "./PortfolioHeader.css";
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
    <section className="portfolio-header-7-detailProperty-PortfolioHeader">
      <div className="content13-detailProperty-PortfolioHeader">
        <div className="column6-detailProperty-PortfolioHeader">
          <div className="content14-detailProperty-PortfolioHeader">
            <h1 className="heading8-detailProperty-PortfolioHeader">Luxury Beach {data?.category}</h1>
            <div className="text15-detailProperty-PortfolioHeader">
              Experience the ultimate in beachfront luxury with breathtaking
              ocean views.
            </div>
          </div>
          <div className="tags-detailProperty-PortfolioHeader">
            <button className="tag-detailProperty-PortfolioHeader">
              <div className="tag-one-detailProperty-PortfolioHeader">Beachfront</div>
            </button>
            <button className="tag1-detailProperty-PortfolioHeader">
              <div className="tag-two-detailProperty-PortfolioHeader">Modern</div>
            </button>
            <button className="tag2-detailProperty-PortfolioHeader">
              <div className="tag-three-detailProperty-PortfolioHeader">Spacious</div>
            </button>
          </div>
        </div>
        <div className="list-detailProperty-PortfolioHeader">
          <div className="content15-detailProperty-PortfolioHeader">
            <div className="list-item-detailProperty-PortfolioHeader">
              <b className="text16-detailProperty-PortfolioHeader">Client</b>
              <div className="text17-detailProperty-PortfolioHeader">John Doe</div>
            </div>
            <div className="list-item1-detailProperty-PortfolioHeader">
              <b className="style-primary-detailProperty-PortfolioHeader">Date</b>
              <div className="style-secondary-detailProperty-PortfolioHeader">{data?.date}</div>
            </div>
          </div>
          <div className="content16-detailProperty-PortfolioHeader">
            <div className="list-item2-detailProperty-PortfolioHeader">
              <b className="text18-detailProperty-PortfolioHeader">Location</b>
              <div className="text19-detailProperty-PortfolioHeader">{data?.location}</div>
            </div>
            <div className="list-item3-detailProperty-PortfolioHeader">
              <b className="text20-detailProperty-PortfolioHeader">Price</b>
              <div className="text21-detailProperty-PortfolioHeader">{`₹${data?.price}`}</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="placeholder-image-icon3-detailProperty-PortfolioHeader"
        loading="lazy"
        alt=""
        src={`${data?.images?.[0]}`}
      />
    </section>
  );
};
export default PortfolioHeader;