import "./CardType1.css";

const CardType1 = ({ rectangle9616, sep2022, howToFigureOutIfAPotentia }) => {
  return (
    <div className="card-type">
      <img className="card-type-child" alt="" src={rectangle9616} />
      <div className="card-type-inner">
        <div className="frame-parent6">
          <div className="sep-2022-parent">
            <div className="sep-2022">{sep2022}</div>
            <div className="pages-menu">
              <div className="pages-menu-child" />
            </div>
            <div className="career-tips">Tips</div>
          </div>
          <b className="how-to-figure">{howToFigureOutIfAPotentia}</b>
        </div>
      </div>
    </div>
  );
};

export default CardType1;
