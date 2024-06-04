import ViewMoreIcon from "../../../assets/admin/vendordashboard/AddListing/AddListingDetail/viewMore.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import "./AddListingDetail.css";
import AddListingContext from "../AddListing";
import vendorDashboardContext from "../../VendorDashboardContext";
const AddListingDetail = () => {
  const value = useContext(AddListingContext);
  const vendorMansterpageContext = useContext(vendorDashboardContext);
  const [addListingDetailData, setAddListingDetailData] = useState([]);
  const [addMoreToggle, setAddMoreToggle] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setAddListingDetailData(data);
    let listingAddData = value.addListingData;
    let listingDataDetail = addListingDetailData;
    let allListingData = { ...listingAddData, ...listingDataDetail };
    const formData = new FormData();
    for (let i = 1; i <= 4; i++) {
      if (allListingData[`image${i}`]) {
        formData.append(`image${i}`, allListingData[`image${i}`][0]);
      }
    }
    formData.append("bedIcon", allListingData.bedIcon);
    formData.append("name",allListingData.name);
    formData.append("category", allListingData.category);
    formData.append("date", allListingData.date);
    formData.append("description", allListingData.description);
    formData.append("listingDescription", allListingData.listingDescription);
    formData.append("listingTitle", allListingData.listingTitle);
    formData.append("location", allListingData.location);
    formData.append("locationIcon", allListingData.locationIcon);
    formData.append("price", allListingData.price);
    formData.append("sizeIcon", allListingData.sizeIcon);
    formData.append("washbasinIcon", allListingData.washbasinIcon);
    try {
      const result = await axios.post(
        "http://localhost:3000/post-vendorListing",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      reset()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="listing-detail1-addListingDetail">
      <main className="rectangle-parent128-addListingDetail">
        <div className="frame-child147-addListingDetail" />
        <button
          className="listing11-addListingDetail"
          onClick={() => value.setRenderAddListing("addListing")}
        >
          <span className="listing12-addListingDetail">Listing</span>
        </button>
        <button
          className="location-detail1-addListingDetail"
          onClick={() => value.setRenderAddListing("addListingDetail")}
        >
          <span className="listing-detail2-addListingDetail">
            Listing Details
          </span>
        </button>
      </main>
      <form
        className="listing-detail-inner-addListingDetail"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="rectangle-parent129-addListingDetail">
          <div className="frame-child148-addListingDetail" />
          <div className="frame-parent166-addListingDetail">
            <div className="frame-parent167-addListingDetail">
              <div className="frame-wrapper91-addListingDetail">
                <input
                  type="file"
                  className="vector-parent4-addListingDetail"
                  {...register("image2", { required: true })}
                />
              </div>
              {addMoreToggle == false && (
                <button
                  className="add-1-group-addListingDetail"
                  onClick={() => setAddMoreToggle(!addMoreToggle)}
                >
                  <img
                    className="add-1-icon1-addListingDetail"
                    loading="lazy"
                    alt=""
                    src={ViewMoreIcon}
                  />
                  <div className="add-more-wrapper-addListingDetail">
                    <div className="add-more-addListingDetail">{`Add more `}</div>
                  </div>
                </button>
              )}
              {addMoreToggle == true && (
                <>
                  <div className="frame-wrapper91-addListingDetail">
                    <input
                      type="file"
                      className="vector-parent4-addListingDetail"
                      {...register("image3", { required: true })}
                    />
                  </div>
                  <div className="frame-wrapper91-addListingDetail">
                    <input
                      type="file"
                      className="vector-parent4-addListingDetail"
                      {...register("image4", { required: true })}
                    />
                  </div>
                </>
              )}
            </div>
            <input
              className="title10-addListingDetail"
              placeholder="Title Listing"
              type="text"
              defaultValue={
                vendorMansterpageContext.activeListingValue.location !== ""
                  ? vendorMansterpageContext.activeListingValue.location
                  : ""
              }
              {...register("listingTitle", { required: true })}
            />
          </div>
          <textarea
            className="frame-child149-addListingDetail"
            placeholder="Listing Description"
            rows={17}
            cols={67}
            defaultValue={
              vendorMansterpageContext.activeListingValue.listingDescription !== ""
                ? vendorMansterpageContext.activeListingValue.listingDescription
                : ""
            }
            {...register("listingDescription", { required: true })}
          />
          <button type="submit" className="homepage1-addListingDetail">
            <div className="rectangle-parent130-addListingDetail">
              <div className="frame-child150-addListingDetail" />
              <span className="submit3-addListingDetail">submit</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddListingDetail;
