import "./Column1.css";
const Column1 = ({ heading, text, frame162767, heading2, text2, text3 }) => {
  console.log(text);
  return (
    <div className="divs1-column1-homepage">
      <img className="imgs1-column1-homepage" alt="" src={frame162767} />
      <b className="b1-column1-homepage">{heading}</b>
      <b className="b2-column1-homepage">{heading2}</b>
      <div className="divs2-column1-homepage">{text}</div>
      <div className="divs3-column1-homepage">{text2}</div>
      <div className="divs4-column1-homepage">{text3}</div>
    </div>
  );
};
export default Column1;