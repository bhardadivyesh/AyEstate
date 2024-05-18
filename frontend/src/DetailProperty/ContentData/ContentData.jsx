import "./ContentData.css";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/context";
import SimpleImageSlider from "react-simple-image-slider";
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
  const images = [
    { url: `http://localhost:1337${data?.image?.[1]?.url}` },
    { url: `http://localhost:1337${data?.image?.[3]?.url}` },
    { url: `http://localhost:1337${data?.image?.[4]?.url}` },
  ];
  return (
    <section className="content-5-detailProperty-contantData">
      <div className="content17-detailProperty-contantData">
        <div className="column7-detailProperty-contantData">
          <h1 className="heading9-detailProperty-contantData">Stunning Property with {data?.category}</h1>
          <div className="rich-text-detailProperty-contantData">
            <div className="content18-detailProperty-contantData">
              <div className="paragraph-detailProperty-contantData">{part1}</div>
            </div>
            <div className="content19-detailProperty-contantData">
              <div className="paragraph1-detailProperty-contantData">{part2}</div>
            </div>
            <div className="content20-detailProperty-contantData">
              <div className="paragraph2-detailProperty-contantData">{part3}</div>
            </div>
          </div>
        </div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </section>
  );
};
export default ContentData;