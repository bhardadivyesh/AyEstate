import "./FrameComponent1.css";
import icon from "../../assets/frameComponent1/icon.png";
import { useContext, useState, useEffect } from "react";
import MyContext from "../../context/context";

const FrameComponent = () => {
  const value = useContext(MyContext);

  const [data, setdata] = useState();
  useEffect(() => {
    if (value.detailPropertyData != "") {
      localStorage.setItem("data", JSON.stringify(value.detailPropertyData));
    }
  }, [value.detailPropertyData]);
  useEffect(() => {
    let localStorageData = localStorage.getItem("data");
    let parsedata = JSON.parse(localStorageData);
    setdata(parsedata);
  }, []);
  return (
    <section className="layout-1-wrapper-detailProperty-Frame1">
      <div className="layout-1-detailProperty-Frame1">
        <div className="container-detailProperty-Frame1">
          <div className="content21-detailProperty-Frame1">
            <div className="section-title2-detailProperty-Frame1">
              <div className="subheading4-detailProperty-Frame1">Luxury</div>
              <div className="content22-detailProperty-Frame1">
                <h1 className="heading10-detailProperty-Frame1">
                  Experience the Perfect Blend of Comfort and Style
                </h1>
                <div className="text22-detailProperty-Frame1">
                  Welcome to our stunning property! With a beautiful image
                  gallery, immersive virtual tour, and outstanding features,
                  this is the perfect place to call home. Explore the spacious
                  rooms, modern amenities, and convenient location that make
                  this property truly exceptional.
                </div>
              </div>
            </div>
            <div className="actions4-detailProperty-Frame1">
              <button className="stylesecondary-smallfalse2-detailProperty-Frame1">
                <div className="button24-detailProperty-Frame1">Learn More</div>
              </button>
              <div className="stylelink-smallfalse-dark3-detailProperty-Frame1">
                <div className="button25-detailProperty-Frame1">Contact</div>
                <img
                  className="icon-chevron-right2-detailProperty-Frame1"
                  loading="lazy"
                  alt=""
                  src={icon}
                />
              </div>
            </div>
          </div>
          <img
            className="container-child-detailProperty-Frame1"
            loading="lazy"
            alt=""
            src={`${data?.images?.[3]}`}
          />
        </div>
      </div>
    </section>
  );
};
export default FrameComponent;
