import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import PopUp from "../PopUp/PopUp";

export default function AdminForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let i = 1; i <= 5; i++) {
      if (data[`image${i}`]) {
        console.log(`image${i}`, data[`image${i}`][0]);
        formData.append(`image${i}`, data[`image${i}`][0]);
      }
    }

    console.log(data.image[1]);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("bed", data.bed);
    formData.append("category", data.category);
    formData.append("location", data.location);
    formData.append("size", data.size);
    formData.append("washbasin", data.washbasin);
    try {
      const result = await axios.post(
        "http://localhost:3000/post-listing",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [popUpState,setPopUsState] = useState(false)
  const handlePopUp = () =>{
    setPopUsState(true)
  }

  return (
    <>
      <h1>Listing Page Add Data</h1>
      <button type="submit" onClick={handlePopUp}>PopUpButton</button>
      {/* <PopUp /> */}
      {popUpState && <PopUp state={{popUpState}} /> }
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <label>Name:</label>
        <input {...register("name", { required: true })} type="text" />
        <br />
        <label>Price:</label>
        <input {...register("price", { required: true })} type="number" />
        <br />
        <label>Description:</label>
        <textarea {...register("description", { required: true })} />
        <br />
        <label>Bed:</label>
        <input {...register("bed", { required: true })} type="number" />
        <br />
        <label>Category:</label>
        <select {...register("category", { required: true })}>
          <option value="">Select a category</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="Hotel">Hotel</option>
          <option value="Real Estate">Real Estate</option>
        </select>
        <br />
        <label>Location:</label>
        <select {...register("location", { required: true })}>
          <option value="">Select a location</option>
          <option value="Bandung">Bandung</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Bali">Bali</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Medan">Medan</option>
          <option value="Jogja">Jogja</option>
        </select>
        <br />
        <label>Size:</label>
        <select {...register("size", { required: true })}>
          <option value="">Select a size</option>
          <option value="1400m2">1400m2</option>
          <option value="1200m2">1200m2</option>
          <option value="1000m2">1000m2</option>
        </select>
        <br />
        <label>Washbasin:</label>
        <input {...register("washbasin", { required: true })} type="number" />
        <br />
        {/* Five file input fields */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <label>Image {index}:</label>
            <input
              {...register(`image${index}`)} 
              type="file"
              accept="image/*"
            />
            <br />
          </div>
        ))}
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
