import ViewMoreIcon from "../../../assets/admin/vendordashboard/AddListing/AddListingDetail/viewMore.png";
import { useForm } from "react-hook-form";

import { useContext, useState } from "react";
import "./AddListingDetail.css";
import AddListingContext from "../AddListing";
const AddListingDetail = () => {
  const value = useContext(AddListingContext);
  const [addListingDetailData,setAddListingDetailData] = useState([])
  const [addMoreToggle, setAddMoreToggle] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setAddListingDetailData(data)
  }
  let listingAddData = value.addListingData;
  let listingDataDetail = addListingDetailData
  let allListingData = {...listingAddData,...listingDataDetail}
  console.log(allListingData);

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
            Listing detail
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
              placeholder="title listing"
              type="text"
              {...register("listingTitle", { required: true })}
            />
          </div>
          <textarea
            className="frame-child149-addListingDetail"
            placeholder="Listing description"
            rows={17}
            cols={67}
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
