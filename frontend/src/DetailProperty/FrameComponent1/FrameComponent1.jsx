import "./FrameComponent1.css";
import icon from "../../assets/frameComponent1/icon.png"
import { useContext,useState,useEffect } from "react";
import MyContext from "../../context/context";


const FrameComponent = () => {
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
    <section className="layout-1-wrapper">
      <div className="layout-1">
        <div className="container">
          <div className="content21">
            <div className="section-title2">
              <div className="subheading4">Luxury</div>
              <div className="content22">
                <h1 className="heading10">
                  Experience the Perfect Blend of Comfort and Style
                </h1>
                <div className="text22">
                  Welcome to our stunning property! With a beautiful image
                  gallery, immersive virtual tour, and outstanding features,
                  this is the perfect place to call home. Explore the spacious
                  rooms, modern amenities, and convenient location that make
                  this property truly exceptional.
                </div>
              </div>
            </div>
            <div className="actions4">
              <button className="stylesecondary-smallfalse2">
                <div className="button24">Learn More</div>
              </button>
              <div className="stylelink-smallfalse-dark3">
                <div className="button25">Contact</div>
                <img
                  className="icon-chevron-right2"
                  loading="lazy"
                  alt=""
                  src={icon}
                />
              </div>
            </div>
          </div>
          <img
            className="container-child"
            loading="lazy"
            alt=""
            src={`http://localhost:1337${data?.image?.[4]?.url}`}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;