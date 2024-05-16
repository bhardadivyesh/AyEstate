import React from 'react'
import "./PendingStatus.css"

const PendingStatus = () => {
  return (
    <div className="frame-wrapper37">
    <div className="frame-parent70">
      <div className="blank-wrapper">
        <div className="blank">{`1  `}</div>
      </div>
      <div className="karan-home">
        <div className="karan">Karan</div>
      </div>
      <div className="karan-home1">
        <div className="home11">Home</div>
      </div>
      <div className="frame-wrapper38">
        <div className="jakarta-parent">
          <div className="jakarta1">Jakarta</div>
          <div className="frame-parent71">
            <div className="cozy-xcottage-wrapper">
              <div className="cozy-xcottage">Cozy xCottage</div>
            </div>
            <div className="div31">$20021</div>
            <div className="wrapper2">
              <div className="div32">2024-04-02</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pending-wrapper">
        <div className="pending1">PENDING</div>
      </div>
      <div className="frame-parent72">
        <div className="frame-wrapper39">
          <div className="rectangle-parent64">
            <div className="frame-child103" />
            <div className="preview">Preview</div>
          </div>
        </div>
        <div className="frame-parent73">
            <select className="rectangle-parent65">
                <option value="" className='frame-wrapper40'>CHANGE STATUS</option>
                <option value="" className='frame-wrapper40'>PENDING</option>
                <option value="" className='frame-wrapper40'>ACTIVE</option>
                <option value="" className='frame-wrapper40'>REJECT</option>
                </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PendingStatus