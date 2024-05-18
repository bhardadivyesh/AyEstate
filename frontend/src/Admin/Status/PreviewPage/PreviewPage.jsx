import "./PreviewPage.css";
import homeIcon from "../../../assets/admin/status/preview/home.png"
import washbasin from "../../../assets/admin/status/preview/washbasin.png"
import bed from "../../../assets/admin/status/preview/bed.png"
import size from "../../../assets/admin/status/preview/size.png"
import dummyImage from "../../../assets/admin/status/preview/dummyImage.png"
import line from "../../../assets/admin/status/preview/line.png"
const PreviewPage = () => {
  return (
    <div className="preview1-main">
      <div className="group-parent3-main">
        <div className="rectangle-frame-main">
          <div className="group-child19-main" />
        </div>
        <div className="rectangle-parent43-main">
          <div className="group-child20-main" />
          <div className="group-parent4-main">
            <div className="group-parent5-main">
              <div className="rectangle-parent44-main">
                <div className="group-child21-main" />
                <label className="medan-main">Medan</label>
              </div>
              <div className="group-child22-main" />
            </div>
            <label className="category-main">Category</label>
          </div>
          <div className="group-wrapper-main">
            <div className="group-parent6-main">
              <div className="rectangle-parent45-main">
                <div className="group-child23-main" />
                <div className="morbi-sed-imperdiet-in-ipsum-parent-main">
                  <div className="morbi-sed-imperdiet-main">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus</div>
                  <div className="morbi-sed-imperdiet1-main">Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.</div>
                </div>
              </div>
              <img
                className="placeholder-image-icon-main"
                alt=""
                src={dummyImage}
              />
            </div>
          </div>
          <div className="group-parent7-main">
            <div className="rectangle-parent46-main">
              <div className="group-child24-main" />
              <img className="frame-icon-main" alt="" src={homeIcon} />
              <img className="group-child25-main" alt="" src={line}/>
              <div className="villa-main">villa</div>
            </div>
            <div className="rectangle-parent47-main">
              <div className="group-child26-main" />
              <img className="vector-icon-main" alt="" src={bed} />
              <img className="group-child27-main" alt="" src={line} />
              <div className="div31-main">4</div>
            </div>
            <div className="rectangle-parent48-main">
              <div className="group-child28-main" />
              <img className="vector-icon1-main" alt="" src={size} />
              <img className="group-child29-main" alt="" src={line} />
              <div className="div32-main">5</div>
            </div>
            <div className="rectangle-parent49-main">
              <div className="group-child30-main" />
              <img className="group-child31-main" alt="" src={line} />
              <div className="div33-main">3</div>
              <img className="vector-icon3-main" alt="" src={washbasin} />
            </div>
          </div>
          <div className="group-parent8-main">
            <div className="group-parent9-main">
              <div className="group-frame-main">
                <div className="rectangle-parent50-main">
                  <div className="group-child32-main" />
                  <label className="cozy-cottage-main">Cozy Cottage</label>
                </div>
              </div>
              <div className="group-child33-main" />
            </div>
            <label className="div34-main">2024-02-11</label>
          </div>
          <div className="group-parent10-main">
            <label className="group-wrapper1-main rectangle-parent51-main group-child34-main ">
              <div className="rectangle-parent51-main">
                <div className="group-child34-main" />
                <label className="karan1-main">Karan</label>
              </div>
            </label>
            <div className="rectangle-parent52-main">
              <div className="group-child35-main" />
              <label className="div35-main">$300,000,000</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
