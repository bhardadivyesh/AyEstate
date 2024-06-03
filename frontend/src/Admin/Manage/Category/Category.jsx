import React, { useContext, useEffect, useState } from "react";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import line from "../../../assets/admin/manage/line.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [renderComponent, setRenderComponent] = useState(false);
  const value = useContext(manageContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    axios
      .get("http://localhost:3000/get-category")
      .then((res) => setCategoryData(res.data))
      .catch((error) => toast.error("Failed to fetch categories."));
      console.log("get api call");
  }, [renderComponent]);
  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        const response = await axios.put(`http://localhost:3000/put-category/${currentCategory.category}`, data);
        toast.success(response.data.message);
        setCategoryData((prevData) =>
          prevData.map((item) =>
            item._id === currentCategory._id ? { ...item, category: data.category } : item
          )
        );
      } else {
        const response = await axios.post("http://localhost:3000/post-category", data);
        toast.success(response.data.message);
        setCategoryData((prevData) => [...prevData, response.data.category]);
      }
      reset();
      setIsEditing(false);
      setCurrentCategory(null);
      setRenderComponent(!renderComponent);
    } catch (error) {
      toast.error("Operation failed.");
    }
  };
  const handleEditButton = (editItem) => {
    setIsEditing(true);
    setCurrentCategory(editItem);
    reset({ category: editItem.category });
  };
  const handleDeleteClick = async (deleteItem) => {
    try {
      const response = await axios.delete("http://localhost:3000/delete-category", { data: { category: deleteItem.category } });
      toast.success(response.data.message);
      setCategoryData((prevData) => prevData.filter((item) => item._id !== deleteItem._id));
      setRenderComponent(!renderComponent);
    } catch (error) {
      toast.error("Failed to delete category.");
    }
  };
  const handleFilterClick = (manageRenderState) => {
    value.setManageRenderState(manageRenderState);
  };
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
            {categoryData?.map((items, index) => (
              <tr key={index} className="tableRow">
                <td className="categoryIndex">{index + 1}</td>
                <td className="categoryName">{items?.category}</td>
                <td className="editIcon">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="iconEdit"
                    onClick={() => handleEditButton(items)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="iconDelete"
                    onClick={() => handleDeleteClick(items)}
                  />
                </td>
              </tr>
            ))}
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
            {isEditing ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
export default Category;