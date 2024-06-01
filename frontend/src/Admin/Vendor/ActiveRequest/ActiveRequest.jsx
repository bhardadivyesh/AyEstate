import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import vendorContext from "../Vendor";

const ActiveRequest = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  console.log(activeUsers);
  const [updateState, setUpdateState] = useState(false);
  const value = useContext(vendorContext)
  const handleChange = (vendor, e) => {
    const updatedStatus = e.target.value;
    if (updatedStatus !== "") {
      const updatedVendor = { ...vendor, status: updatedStatus };
      axios.put('http://localhost:3000/put-Registration', updatedVendor)
        .then((res) => {
          setUpdateState(!updateState);
        });
    }
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration-active").then((res) => {
      setActiveUsers(res.data);
      value.setActiveUsers(updateState)
    });
  }, [updateState]);

  return (
    <>
      <div className="table-container">
        <table>
          <tbody>
            {activeUsers?.map((vendor, index) => (
              <>
              <tr className="table-row" key={index}>
                <td className="row-id">{index + 1}</td>
                <td className="row-name">{vendor.name}</td>
                <td className="row-company">{vendor.company}</td>
                <td className="row-phone">{vendor.phone}</td>
                <td className="row-membershiptype">{`₹${vendor.paymentValue}`}</td>
                <td className="row-date">2024-04-02</td>
                <td className="row-status">{vendor.status}</td>
                <td>
                  <select
                    onChange={(e) => handleChange(vendor, e)}
                    className="row-status-dropdown"
                    value=""
                  >
                    <option value="">Change status</option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="reject">Reject</option>
                  </select>
                </td>
              </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActiveRequest;
