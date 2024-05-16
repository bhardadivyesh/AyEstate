import React, { useContext, useEffect, useState } from "react";
import edit from "../../../assets/admin/dashboard/edit.png";
import deleteImg from "../../../assets/admin/dashboard/delete.png";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const value = useContext(manageContext);
  const handleFilterClick = (manageRenderState) => {
    value.setManageRenderState(manageRenderState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:3000/post-category", data)
      .then((res) => {
        console.log(res.data.message);
        toast(res.data.message);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-category").then((res) => {
      setCategoryData(res.data);
    });
  }, []);
  console.log(categoryData);
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
          <div className="categories-id">Categories-id</div>
          <div className="categories-name">Categories name</div>
          <div className="action">Action</div>
          <img className="line-icon" alt="" src="/line-28.svg" />
        </div>
        <table className="line-parent">
          <tbody>
            {categoryData.map((items, index) => {
              return (
                <tr key={index}>
                  {console.log(items.category)}
                  <td className="div">{index}</td>
                  <td className="bandung">{items.category}</td>
                  <td>
                    <img className="bin-8-1" alt="" src={deleteImg} />
                  </td>
                  <td>
                    <img className="edit-1-1" alt="" src={edit} />
                  </td>
                  <td className="line-div"></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <form className="group-parent" onSubmit={handleSubmit(onSubmit)}>
          <div className="rectangle-parent3">
            <input
              className="group-child5"
              placeholder="Enter Category"
              {...register("category", { required: true })}
            />
          </div>
          <button type="submit" className="submit group-child6">
            submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Category;
