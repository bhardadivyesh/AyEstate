import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AdminForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const imageData = await Promise.all(
        Object.keys(data).map(async (key) => {
          if (key.startsWith("image")) {
            const base64Image = await convertImageToBase64(data[key][0]);
            return { name: key, data: base64Image };
          }
          return null;
        })
      );
      const formData = []
      imageData.forEach((image) => {
        if (image) {
          formData[image.name] = image.data;
        }
      });
      console.log(formData);
      await axios.post("http://localhost:3000/post-listing", data);
      console.log("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const convertImageToBase64 = (file) => {
    if (!file) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <>
      <h1>Listing Page Add Data</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        {/* Image input fields */}
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index}>
            <label>{`Image ${index}:`}</label>
            <input
              {...register(`image${index}`, { required: true })}
              type="file"
              accept="image/*"
            />
            <br />
          </div>
        ))}
        <input type="submit" disabled={submitting} />
      </form>
    </>
  );
}