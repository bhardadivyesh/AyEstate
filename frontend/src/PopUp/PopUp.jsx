import React from 'react';
import Popup from 'reactjs-popup';
import './PopUp.css'

const YourComponent = () => {
 
  return (
    <Popup
      open={"state"}
      onClose={() => setOpenPopup(false)}
    >
     <div className="home1-popup">
      <section className="rectangle-parent36-popup">
        <div className="frame-child55-popup" />
        <div className="rectangle-parent37-popup">
          <input className="frame-child56-popup" type="text" placeholder='enter your name' />
          <input className="frame-child57-popup" type='text' placeholder='enter city name' />
        </div>
        <div className="frame-parent25-popup">
          <div className="frame-parent26-popup">
            <div className="first-child-rect-parent-popup">
              <input className="first-child-rect-popup" type="text" placeholder='enter roll no' />
              <div className="second-child-rect-popup">
                <input className="last-child-rect-popup" type='text' placeholder='city'/>
              </div>
              <input className="first-child-rect1-popup" type='date' />
            </div>
            <div className="compound-rects-parent-popup">
              <div className="compound-rects-popup" />
              <div className="crush-opponents-popup" />
              <div className="compound-rects1-popup" />
              <div className="compound-rects2-popup" />
            </div>
          </div>
          <footer className="frame-child58-popup" />
        </div>
        <div className="frame-parent27-popup">
          <div className="rectangle-parent38-popup">
            <div className="frame-child59-popup" />
            <input className="frame-child60-popup" type="text" />
          </div>
          <div className="frame-child61-popup" />
        <button>submit</button>
        </div>
      </section>
    </div>
    </Popup>
  );
};

export default YourComponent;
