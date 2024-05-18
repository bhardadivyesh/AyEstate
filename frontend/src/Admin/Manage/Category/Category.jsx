import React, { useContext, useEffect, useState } from "react";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import line from "../../../assets/admin/manage/line.png";
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
        toast(res.data.message);
      });
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-category").then((res) => {
      setCategoryData(res.data);
    });
  }, []);
  const handleEditButton = (editItem) =>{
    console.log(editItem);
  }
  const handleDeleteClick = (deleteItem) =>{
    console.log(deleteItem.category);
    let categoryName = deleteItem.category;
   axios.delete('http://localhost:3000/delete-category',{ data: { category: categoryName } }).then((res)=>{
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
          <div className="categories-id">Categories-id</div>
          <div className="categories-name">Categories name</div>
          <div className="action">Action</div>
          <img className="line-icon" alt="" src={line} />
        </div>
        <table className="line-parent">
          <tbody>
            {categoryData.map((items, index) => {
              return (
                <tr key={index} className="tableRow">
                  <td className="categoryIndex">{index + 1}</td>
                  <td className="categoryName">{items.category}</td>
                  <td className="editIcon" >
                    <FontAwesomeIcon icon={faPenToSquare} className="iconEdit" onClick={()=>handleEditButton(items)}/>
                  </td>
                  <td className="deleteIcon centerImages" >
                    <FontAwesomeIcon icon={faTrash} className="iconDelete" onClick={()=>handleDeleteClick(items)}/>
                  </td>
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
