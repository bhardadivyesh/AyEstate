import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const RejectRequest = () => {
  const [statusData, setStatusData] = useState();
  const [vendorData,setVendorData] = useState([])
  const [rejectUser,setRejectUser] = useState([])
  const [updateState,setUpdateState] = useState(false)
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

         setUpdateState(!updateState)
       })
     }
  },[statusData])
  useEffect(() => {
  axios.get("http://localhost:3000/get-Registration-reject").then((res) => {
    setRejectUser(res.data);
    });
  },[updateState]);
  return (
    <>
      <div className="table-container"> 
       <table>
        <tbody>
          {rejectUser?.map((items, index) => {
            return (
              <tr className="table-row " key={index}>
                <td className="row-id">{index + 1}</td>
                <td className="row-name">{items.name}</td>
                <td className="row-company">{items.company}</td>
                <td className="row-phone">{items.phone}</td>
                <td className="row-membershiptype">FREE</td>
                <td className="row-date">2024-04-02</td>
                <td className="row-status">{items.status}</td>
                <td>
                  <select  className="row-status-dropdown"  value={statusData} onChange={(e)=>handleChange(items,e)}>
                    <option value="">
                      change status
                    </option>
                    <option value="pending" >
                      pending
                    </option>
                    <option value="active" >
                      active
                    </option>
                    <option value="reject">
                      reject
                    </option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default RejectRequest;
