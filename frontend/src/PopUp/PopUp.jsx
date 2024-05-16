import React from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css'

const YourComponent = () => {
 
  return (
    <Popup
      open={"state"}
      onClose={() => setOpenPopup(false)}
    >
     <div className="home1">
      <section className="rectangle-parent36">
        <div className="frame-child55" />
        <div className="rectangle-parent37">
          <input className="frame-child56" type="text" placeholder='enter your name' />
          <input className="frame-child57" type='text' placeholder='enter city name' />
        </div>
        <div className="frame-parent25">
          <div className="frame-parent26">
            <div className="first-child-rect-parent">
              <input className="first-child-rect" type="text" placeholder='enter roll no' />
              <div className="second-child-rect">
                <input className="last-child-rect" type='text' placeholder='city'/>
              </div>
              <input className="first-child-rect1" type='date' />
            </div>
            <div className="compound-rects-parent">
              <div className="compound-rects" />
              <div className="crush-opponents" />
              <div className="compound-rects1" />
              <div className="compound-rects2" />
            </div>
          </div>
          <footer className="frame-child58" />
        </div>
        <div className="frame-parent27">
          <div className="rectangle-parent38">
            <div className="frame-child59" />
            <input className="frame-child60" type="text" />
          </div>
          <div className="frame-child61" />
        <button>submit</button>
        </div>
      </section>
    </div>
    </Popup>
  );
};

export default YourComponent;
