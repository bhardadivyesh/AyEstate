import { useContext, useState, useEffect } from "react";
import manageContext from "../Manage";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import line from "../../../assets/admin/manage/line.png"

const Location = () => {
  const [locationData, setLocationData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
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
      .get("http://localhost:3000/get-location")
      .then((res) => setLocationData(res.data))
      .catch((error) => toast.error("Failed to fetch locations."));
  }, [renderComponent]);

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        const response = await axios.put(`http://localhost:3000/put-location/${currentLocation.locationName}`, data);
        toast.success(response.data.message);
        setLocationData((prevData) =>
          prevData.map((item) =>
            item._id === currentLocation._id ? { ...item, locationName: data.locationName } : item
          )
        );
      } else {
        const response = await axios.post("http://localhost:3000/post-location", data);
        toast.success(response.data.message);
        setLocationData((prevData) => [...prevData, response.data.location]);
      }
      reset();
      setIsEditing(false);
      setCurrentLocation(null);
      setRenderComponent(!renderComponent);
    } catch (error) {
      toast.error("Operation failed.");
    }
  };

  const handleEditButton = (editItem) => {
    setIsEditing(true);
    setCurrentLocation(editItem);
    reset({ locationName: editItem.locationName });
  };

  const handleDeleteClick = async (deleteItem) => {
    try {
      const response = await axios.delete("http://localhost:3000/delete-location", { data: { locationName: deleteItem.locationName } });
      toast.success(response.data.message);
      setLocationData((prevData) => prevData.filter((item) => item._id !== deleteItem._id));
      setRenderComponent(!renderComponent);
    } catch (error) {
      toast.error("Failed to delete location.");
    }
  };

  const handleFilterClick = (manageRenderState) => {
    value.setManageRenderState(manageRenderState);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleFilterClick("Categories")}
        className="rectangle-div categories1"
      >
        Categories
      </button>
      <button
        type="button"
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
            {locationData?.map((item, index) => (
              <tr key={index} className="tableRow">
                <td className="locationIndex">{index + 1}</td>
                <td className="locationName">{item?.locationName}</td>
                <td className="editIcon">
                  <FontAwesomeIcon icon={faPenToSquare} className="iconEdit" onClick={() => handleEditButton(item)} />
                  <FontAwesomeIcon icon={faTrash} className="iconDelete" onClick={() => handleDeleteClick(item)} />
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
        <form className="group-parent" onSubmit={handleSubmit(onSubmit)}>
          <div className="rectangle-parent3">
            <input className="group-child5" placeholder="Enter Location" {...register("locationName", { required: true })} />
            <div className="group-child6" />
          </div>
          <button type="submit" className="submit">
            {isEditing ? "Update" : "Submit"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Location;
