import edit from "../../../assets/admin/dashboard/edit.png";
import deleteImg from "../../../assets/admin/dashboard/delete.png";
import { useContext, useState } from "react";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

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
        console.log(res.data.message);
        toast(res.data.message);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-location").then((res) => {
      setLocationData(res.data);
    });
  }, []);
  console.log(locationData);
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
          <img className="line-icon" alt="" src="/line-28.svg" />
        </div>
        <div className="line-parent">
          <div className="line-div" />
          <div className="div">1</div>
          <div className="bandung">Bandung</div>
          <img className="bin-8-1" alt="" src={deleteImg} />
          <img className="edit-1-1" alt="" src={edit} />
        </div>

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
