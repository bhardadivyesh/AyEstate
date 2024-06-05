import "./Column1.css";
const Column1 = ({ frame162767, heading, heading2, text, text2, text3 }) => {
  console.log(heading);
  return (
    <div className="div1-column1-homepage">
      <img
        className="img1-column1-homepage"
        loading="lazy"
        alt=""
        src={frame162767}
      />
      <h2 className="h2-1-column1-homepage">{heading}</h2>
      <h2 className="h2-2-column1-homepage">{heading2}</h2>
      <div className="div2-column1-homepage">{text}</div>
      <div className="div3-column1-homepage">{text2}</div>
      <div className="div4-column1-homepage">{text3}</div>
    </div>
  );
};
export default Column1;
