import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const PendingRequest = ({ data }) => {
  const [statusData, setStatusData] = useState();
  const [vendorData,setVendorData] = useState([])
  const handleChange = (items,e) => {
    setVendorData(items)
    if(e.target.value != ""){
      setStatusData(e.target.value);
    }
  };

  useEffect(()=>{
     vendorData.status = statusData
     if(statusData != undefined){
      axios.put('http://localhost:3000/put-Registration',vendorData).then((res)=>{
         console.log("update status");
       })
     }
    
  },[statusData])
  return (
    <>
      <table>
        <tbody>
          {data?.map((items, index) => {
            return (
              <tr className="group" key={index}>
                <td className="div27">{index + 1}</td>
                <td className="karan">{items.name}</td>
                <td className="resumedust">{items.company}</td>
                <td className="div28">{items.phone}</td>
                <td className="free">FREE</td>
                <td className="div29">2024-04-02</td>
                <td className="pending1">{items.status}</td>
                <td className="group-child16"></td>
                <td className="rectangle-parent41">
                  <select className="group-child17" value={statusData} onChange={(e)=>handleChange(items,e)} >
                    <option value="" className="change-status">
                      change status
                    </option>
                    <option value="pending" className="change-status">
                      pending
                    </option>
                    <option value="active" className="change-status">
                      active
                    </option>
                    <option value="reject" className="change-status">
                      reject
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default PendingRequest;
