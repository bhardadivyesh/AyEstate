import CardType1 from "../CardType1/CardType1";
import "./FrameComponent2.css";
import axios from "axios";
import { useEffect, useState } from "react";

const FrameComponent2 = () => {
  const [blogArticals, setBlogArticals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/blogs").then((res) => {
      setBlogArticals(res.data);
    });
  }, []);
 
  let blogs = blogArticals.slice(0, 4);

  return (
    <div className="frame-parent7">
      <img
        className="frame-child2"
        alt=""
        src={`http://localhost:1337${blogs?.[0]?.images?.[0]?.url}`}
      />
      <div className="card-type-parent">
        <div className="card-type1">
          <img
            className="card-type-item"
            loading="lazy"
            alt=""
            src={`http://localhost:1337${blogs?.[1]?.images?.[0]?.url}`}
          />
          <div className="card-type-inner1">
            <div className="frame-parent8">
              <div className="sep-2022-group">
                <div className="sep-20221">{blogs[1]?.date}</div>
                <div className="ellipse-wrapper">
                  <div className="ellipse-div" />
                </div>
                <div className="career-tips1">{blogs[1]?.suggestion}</div>
              </div>
              <b className="how-to-figure1">{blogs[1]?.sortDescription}</b>
            </div>
          </div>
        </div>
        <CardType1
          rectangle9616={`http://localhost:1337${blogs[2]?.images[0]?.url}`}
          sep2022={blogs[2]?.date}
          howToFigureOutIfAPotentia={blogs[2]?.sortDescription}
          suggestion={blogs[2]?.suggestion}
        />
        <CardType1
          rectangle9616={`http://localhost:1337${blogs[3]?.images[0]?.url}`}
          sep2022={blogs[3]?.date}
          howToFigureOutIfAPotentia={blogs[3]?.sortDescription}
          suggestion={blogs[3]?.suggestion}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
