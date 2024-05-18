import "./CardType1.css";

const CardType1 = ({ rectangle9616, sep2022, howToFigureOutIfAPotentia,suggestion }) => {
  return (
    <div className="card-type-blogCartType1">
      <img className="card-type-child-blogCartType1" alt="" src={rectangle9616} />
      <div className="card-type-inner-blogCartType1">
        <div className="frame-parent6-blogCartType1">
          <div className="sep-2022-parent-blogCartType1">
            <div className="sep-2022-blogCartType1">{sep2022}</div>
            <div className="pages-menu-blogCartType1">
              <div className="pages-menu-child-blogCartType1" />
            </div>
            <div className="career-tips-blogCartType1">{suggestion}</div>
          </div>
          <b className="how-to-figure-blogCartType1">{howToFigureOutIfAPotentia}</b>
        </div>
      </div>
    </div>
  );
};

export default CardType1;
