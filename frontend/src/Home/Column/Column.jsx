import "./Column.css";
const Column = ({
  placeholderImage,
  heading,
  heading2,
  text,
  text2,
  text3,
}) => {
  return (
    <div className="div1-column-homepage">
      <img className="img1-column-homepage" alt="" src={placeholderImage} />
      <div className="div2-column-homepage">
        <h2 className="h2-1-column-homepage">{heading}</h2>
        <h2 className="h2-2-column-homepage">{heading2}</h2>
        <div className="div3-column-homepage">{text}</div>
        <div className="div4-column-homepage">{text2}</div>
        <div className="div5-column-homepage">{text3}</div>
      </div>
    </div>
  );
};
export default Column;
