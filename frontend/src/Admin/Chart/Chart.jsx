import "./Chart.css";

const Chart = () => {
  return (
    <div>
      <section className="vector-parent">
        <img className="rectangle-icon" alt="" src="/rectangle-1.svg" />
        <div className="frame-wrapper9">
          <div className="frame-parent17">
            <div className="r281000-parent">
              <div className="r281000">R2,810.00</div>
              <div className="caption-wrapper">
                <div className="caption">(+8.26%)</div>
              </div>
              <div className="rectangle-wrapper2">
                <div className="frame-child39" />
              </div>
            </div>
            <div className="r161000-parent">
              <div className="r161000">R1,610.00</div>
              <div className="frame-wrapper10">
                <div className="frame-parent18">
                  <div className="success-caption-parent">
                    <div className="success-caption">(+8.26%)</div>
                    <input className="success-shape" type="checkbox" />
                  </div>
                  <div className="frame-parent19">
                    <div className="frame-parent20">
                      <div className="failed-shape-wrapper">
                        <input className="failed-shape" type="checkbox" />
                      </div>
                      <div className="successful">successful</div>
                    </div>
                    <div className="failed-shape-parent">
                      <input className="failed-shape1" type="checkbox" />
                      <div className="failed">Failed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graphrows">
          <div className="rowsection">
            <div className="row">
              <div className="k">6k</div>
              <img
                className="values-icon"
                loading="lazy"
                alt=""
                src="/vector-21.svg"
              />
            </div>
          </div>
          <div className="rowsection1">
            <div className="row1">
              <div className="k1">4k</div>
              <img className="row-child" alt="" src="/vector-2-1.svg" />
            </div>
          </div>
          <div className="rowsection2">
            <div className="row2">
              <div className="k2">2k</div>
              <img className="row-item" alt="" src="/vector-2-2.svg" />
            </div>
          </div>
          <div className="rowsection3">
            <div className="row3">
              <div className="k3">0k</div>
              <img
                className="row-inner"
                loading="lazy"
                alt=""
                src="/vector-2-2.svg"
              />
            </div>
          </div>
          <img
            className="graphrows-child"
            loading="lazy"
            alt=""
            src="/group-4.svg"
          />
        </div>
        <div className="frame-wrapper11">
          <div className="mon-parent">
            <div className="mon">4 Mon</div>
            <div className="tue">5 Tue</div>
            <div className="wed">6 Wed</div>
            <div className="sun">3 Sun</div>
            <div className="thu">7 Thu</div>
            <div className="fri">8 Fri</div>
            <div className="sat">9 Sat</div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Chart;