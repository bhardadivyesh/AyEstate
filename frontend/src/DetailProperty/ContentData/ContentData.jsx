import "./ContentData.css";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/context";
const ContentData = () => {
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
  // slice description
  let text = data?.Discription;
  const totalLength = text?.length;
  const partLength = Math.floor(totalLength / 3);

  // Slicing the text into three parts
  const part1 = text?.slice(0, partLength);
  const part2 = text?.slice(partLength, 2 * partLength);
  const part3 = text?.slice(2 * partLength);
  console.log(data);
  return (
    <section className="content-5">
      <div className="content17">
        <div className="column7">
          <h1 className="heading9">
            Stunning Property with {data?.category}
          </h1>
          <div className="rich-text">
            <div className="content18">
              <div className="paragraph">{part1}</div>
            </div>
            <div className="content19">
              <div className="paragraph1">{part2}</div>
            </div>
            <div className="content20">
              <div className="paragraph2">{part3}</div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <img
            className="placeholder-image-icon4"
            alt=""
            src={`http://localhost:1337${data?.image?.[1]?.url}`}
          />
          <img
            className="placeholder-image-icon5"
            alt=""
            src={`http://localhost:1337${data?.image?.[2]?.url}`}
          />
          <img
            className="placeholder-image-icon6"
            alt=""
            src={`http://localhost:1337${data?.image?.[4]?.url}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentData;
