import edit from "../../../assets/admin/dashboard/edit.png";
import deleteImg from "../../../assets/admin/dashboard/delete.png";
import { useContext, useState } from "react";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import line from "../../../assets/admin/manage/line.png"

const Location = () => {
  const value = useContext(manageContext)
  const handleFilterClick = (manageRenderState) =>{
    value.setManageRenderState(manageRenderState)
  }
  const [locationData,setLocationData] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/post-location", data)
      .then((res) => {
        toast(res.data.message);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-location").then((res) => {
      setLocationData(res.data);
    });
  }, []);
  const handleEditClick = (editData) =>{
    console.log(editData);
  }
  const handleDeleteClick = (deleteData) =>{
    console.log(deleteData.locationName);
    let locationName = deleteData.locationName;

   axios.delete('http://localhost:3000/delete-location',{ data: { locationName: locationName } }).then((res)=>{
    console.log(res.data);
   })
  }
  return (
    <>
      <button
        type="submit"
        onClick={() => handleFilterClick("Categories")}
        className="rectangle-div categories1"
      >
        Categories
      </button>
      <button
        type="submit"
        className="group-child1 location rectangle-parent1"
        onClick={() => handleFilterClick("Location")}
      >
        Location
      </button>
      <div className="rectangle-parent2">
        <div className="group-child2" />
        <div className="categories-id-parent">
          <div className="categories-id">Location-id</div>
          <div className="categories-name">Location name</div>
          <div className="action">Action</div>
          <img className="line-icon" alt="" src={line} />
        </div>
          <table className="line-parent">
          <tbody>
            {locationData.map((items, index) => {
              return (
                <tr key={index} className="tableRow">
                  <td className="locationIndex">{index + 1}</td>
                  <td className="locationName">{items.locationName}</td>
                  <td className="editIcon">
                    <FontAwesomeIcon icon={faPenToSquare} className="iconEdit" onClick={()=>handleEditClick(items)} />
                  </td>
                  <td className="deleteIcon centerImages">
                  <FontAwesomeIcon icon={faTrash} className="iconDelete"  onClick={()=>handleDeleteClick(items)} />
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <form className="group-parent"  onSubmit={handleSubmit(onSubmit)}>
          <div className="rectangle-parent3">
            <input className="group-child5" placeholder="Enter Location"  {...register("locationName", { required: true })} />
            <div className="group-child6" />
          </div>
          <button type="submit" className="submit" >submit</button>
        </form>
      </div>
      <ToastContainer />

    </>
  );
};

export default Location;
