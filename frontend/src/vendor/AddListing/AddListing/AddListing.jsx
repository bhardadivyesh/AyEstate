import "./AddListing.css";
import villaIcon from "../../../assets/admin/vendordashboard/AddListing/listing/villa.png"
import washbasinIcon from "../../../assets/admin/vendordashboard/AddListing/listing/washbasin.png"
import bedIcon from "../../../assets/admin/vendordashboard/AddListing/listing/bed.png"
import sizeIcon from "../../../assets/admin/vendordashboard/AddListing/listing/size.png"
import line from "../../../assets/admin/vendordashboard/AddListing/listing/Line 30.png"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AddListingContext from "../AddListing";
const AddListing = () => {
  const value = useContext(AddListingContext)
  const [location, setLocation] = useState([]);
  const [category,setCategory] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    value.setAddListingData(data)
    value.setRenderAddListing("addListingDetail")
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-category")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
      axios
      .get("http://localhost:3000/get-location")
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="addlisting-vendor-addListing">
      <main className="rectangle-parent-vendor-addListing">
        <div className="frame-child-vendor-addListing" />
        <button type="button" className="listing-vendor-addListing" onClick={()=>value.setRenderAddListing("addListing")}>
          <label className="listing1-vendor-addListing">Listing</label>
        </button>
        <button className="location-vendor-addListing" onClick={()=>value.setRenderAddListing("addListingDetail")}>
          <span className="location-detail-vendor-addListing">Listing Details</span>
        </button>
      </main>
      <div className="addlisting-inner-vendor-addListing">
        <form className="rectangle-group-vendor-addListing" onSubmit={handleSubmit(onSubmit)}>
          <div className="frame-item-vendor-addListing" />
          <div className="frame-parent-vendor-addListing">
            <div className="location-parent-vendor-addListing">
              <select className="location1-vendor-addListing" {...register("location",{required : true})}>
                <option value="">Select Location</option>
                {location.map((items, index) => (
                  <option key={index} value={items.locationName}>
                    {items.locationName}
                  </option>
                ))}
              </select>
              <input
                className="property-name-vendor-addListing"
                placeholder="Property name "
                type="text"
              />
              <div className="frame-group-vendor-addListing">
                <div className="rectangle-container-vendor-addListing">
                  <div className="frame-inner-vendor-addListing" />
                  <img
                    className="frame-icon-vendor-addListing"
                    loading="lazy"
                    alt=""
                    src={villaIcon}
                  />
                  <img
                    className="line-icon-vendor-addListing"
                    loading="lazy"
                    alt=""
                    src={line}
                  />
                 
                  <select className="villa-vendor-addListing" {...register("locationIcon",{register: true})}>
                    <option value="">Villa</option>
                    {location.map((items,index)=>(
                      <option key={index} value={items.locationName}>{items.locationName}</option>
                    ))}
                    </select>
                </div>
                <div className="group-div-vendor-addListing">
                  <div className="rectangle-div-vendor-addListing" />
                  <div className="frame-wrapper-vendor-addListing">
                    <div className="frame-container-vendor-addListing">
                      <div className="vector-wrapper-vendor-addListing">
                        <img
                          className="vector-icon-vendor-addListing"
                          alt=""
                          src={washbasinIcon}
                        />
                      </div>
                      <img
                        className="frame-child1-vendor-addListing"
                        alt=""
                        src={line}
                      />
                    </div>
                  </div>
                  <input type="number" className="div-vendor-addListing" placeholder="3" {...register("washbasinIcon",{required : true})}/>
                </div>
              </div>
            </div>
            <div className="category-parent-vendor-addListing">
              <select className="category-vendor-addListing" {...register("category",{required: true})}>
                <option value="">Select Category</option>  
                {category.map((items, index) => (
                  <option key={index} value={items.category}>
                    {items.category}
                  </option>
                ))}               
              </select>
              <div className="products-price-parent-vendor-addListing">
                <div className="products-price-vendor-addListing">
                  <div className="products-price-child-vendor-addListing" />
                  <input type="number" className="products-price1-vendor-addListing" placeholder="Products price" {...register("price",{required:true})}/>       
                </div>
                <div className="rectangle-parent1-vendor-addListing">
                  <div className="frame-child2-vendor-addListing" />
                  <input type="date" className="div1-vendor-addListing" {...register("date",{required : true})} />
                </div>
              </div>
              <div className="frame-div-vendor-addListing">
                <div className="rectangle-parent2-vendor-addListing">
                  <div className="frame-child3-vendor-addListing" />
                  <div className="vector-container-vendor-addListing">
                    <img
                      className="vector-icon1-vendor-addListing"
                      loading="lazy"
                      alt=""
                      src={bedIcon}
                    />
                  </div>
                  <div className="vector-frame-vendor-addListing">
                    <img
                      className="frame-child4-vendor-addListing"
                      loading="lazy"
                      alt=""
                      src={line}
                    />
                  </div>
                  <input type="number" className="div2-vendor-addListing" placeholder="3" {...register("bedIcon",{required : true})}/>
                </div>
                <div className="rectangle-parent3-vendor-addListing">
                  <div className="frame-child5-vendor-addListing" />
                  <div className="frame-wrapper1-vendor-addListing">
                    <div className="frame-parent1-vendor-addListing">
                      <div className="frame-frame-vendor-addListing">
                        <img
                          className="frame-icon1-vendor-addListing"
                          loading="lazy"
                          alt=""
                          src={sizeIcon}
                        />
                      </div>
                      <img
                        className="frame-child6-vendor-addListing"
                        loading="lazy"
                        alt=""
                        src={line}
                      />
                    </div>
                  </div>
                  <input type="text" className="m2-vendor-addListing" placeholder="1400m2" {...register("sizeIcon",{required : true})}/>
                </div>
              </div>
            </div>
          </div>
          <textarea
            className="group-textarea-vendor-addListing"
            placeholder="Sort description"
            rows={11}
            cols={68}
            {...register("description",{required : true})}
          />
          <div className="frame-wrapper2-vendor-addListing">
            <div className="frame-parent2-vendor-addListing">
              <input type="file" className="rectangle-parent4-vendor-addListing" {...register("image1",{required : true})}/>
              <button type="submit" className="rectangle-parent6-vendor-addListing" >
                <span className="next-vendor-addListing">Next</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
