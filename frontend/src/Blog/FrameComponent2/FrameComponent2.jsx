import CardType1 from "../CardType1/CardType1";
import "./FrameComponent2.css";
import axios from "axios";
import { useEffect, useState } from "react";

const FrameComponent2 = () => {
  const [blogArticals, setBlogArticals] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/get-blogs").then((res) => {
      setBlogArticals(res.data);
    });
  }, []); 
  let blogs = blogArticals.slice(0, 4);
  return (
    <div className="frame-parent7-blog-Frame2">
      <img
        className="frame-child2-blog-Frame2"
        alt=""
        src={`${blogs?.[0]?.images?.[0]}`}
      />
      <div className="card-type-parent-blog-Frame2">
        <div className="card-type1-blog-Frame2">
          <img
            className="card-type-item-blog-Frame2"
            loading="lazy"
            alt=""
            src={`${blogs?.[1]?.images?.[0]}`}
          />
          <div className="card-type-inner1-blog-Frame2">
            <div className="frame-parent8-blog-Frame2">
              <div className="sep-2022-group-blog-Frame2">
                <div className="sep-20221-blog-Frame2">{blogs[1]?.date}</div>
                <div className="ellipse-wrapper-blog-Frame2">
                  <div className="ellipse-div-blog-Frame2" />
                </div>
                <div className="career-tips1-blog-Frame2">{blogs[1]?.suggestion}</div>
              </div>
              <b className="how-to-figure1-blog-Frame2">{blogs[1]?.sortDescription}</b>
            </div>
          </div>
        </div>
        <CardType1
          rectangle9616={`${blogs[2]?.images[0]}`}
          sep2022={blogs[2]?.date}
          howToFigureOutIfAPotentia={blogs[2]?.sortDescription}
          suggestion={blogs[2]?.suggestion}
        />
        <CardType1
          rectangle9616={`${blogs[2]?.images[1]}`}
          sep2022={blogs[2]?.date}
          howToFigureOutIfAPotentia={blogs[2]?.sortDescription}
          suggestion={blogs[2]?.suggestion}
        />
      </div>
    </div>
  );
};
export default FrameComponent2;
