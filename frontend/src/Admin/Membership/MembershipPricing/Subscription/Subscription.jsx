import "./Subscription.css";
import plusIcon from "../../../../assets/admin/membership/pricing/group.png";
import vector from "../../../../assets/admin/membership/pricing/Vector.png";
import priceLogo from "../../../../assets/admin/membership/pricing/gold.png";
import { useContext, useState } from "react";
import membershipPriceContext from "../MembershipPricing";
import { useForm } from "react-hook-form";
import axios from "axios";
import dashboardContext from "../../../admin";

const Subscription = () => {
  const value = useContext(membershipPriceContext);
  const membershipValue = useContext(dashboardContext);
  const [showMore, setShowMore] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let priceData = value.pricingDetail;
    let allData = { ...data, ...priceData };
    const formData = new FormData();
    for (let i = 1; i <= 6; i++) {
      if (allData[`image${i}`]) {
        formData.append(`image${i}`, allData[`image${i}`][0]);
      }
    }
    formData.append("name", allData.name);
    formData.append("price", allData.price);
    formData.append("discount", allData.discount);
    formData.append("discountPrice", allData.discountPrice);
    formData.append("listingNumber", allData.listingNumber);
    formData.append("membershipdescription1", allData.membershipdescription1);
    formData.append("membershipdescription2", allData.membershipdescription2);
    formData.append("membershipdescription3", allData.membershipdescription3);
    formData.append("membershipdescription4", allData.membershipdescription4);
    formData.append("membershipdescription5", allData.membershipdescription5);
    formData.append("title", allData.title);
    try {
      const result = await axios.post(
        "http://localhost:3000/post-membership",
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
  const handleAddMoreBenefitClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="subscription3">
      <main className="group-main">
        <div className="frame-child74" />
        <h1 className="subscription4">Membership Detail</h1>
        <div className="pitch-membership">
          <div className="pitch-membership-offerings1">
            Pitch membership offerings to prospective members
          </div>
        </div>
      </main>
      <div className="subscription-inner">
        <div className="rectangle-parent67">
          <div className="frame-child75" />
          <div className="frame-parent44">
            <form className="frame-parent49" onSubmit={handleSubmit(onSubmit)}>
              <div className="frame-parent50">
                <div className="rectangle-parent73">
                  <input
                    type="file"
                    className="rectangle-textarea"
                    {...register("image1", { required: true })}
                  />
                  {errors.image1 && (
                    <span style={{ color: "#d92323" }}>Enter Image 1</span>
                  )}
                  <div className="rectangle-parent74">
                    <input
                      type="text"
                      className="frame-child82"
                      placeholder="Membership Detail"
                      defaultValue={
                        membershipValue.membershipData.membershipdescription1 !=
                          "" &&
                        membershipValue.membershipData.membershipdescription1
                      }
                      {...register("membershipdescription1", {
                        required: true,
                      })}
                    />
                    {errors.membershipdescription1 && (
                      <span style={{ color: "#d92323" }}>
                        This field is required
                      </span>
                    )}
                    <div className="vector-wrapper2">
                      <img className="vector-icon10" alt="" src={vector} />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent75">
                  <input
                    type="file"
                    className="frame-child83"
                    {...register("image2", { required: true })}
                  />
                  {errors.image2 && (
                    <span style={{ color: "#d92323" }}>
                      This field is required
                    </span>
                  )}
                  <div className="rectangle-parent76">
                    <input
                      type="text"
                      className="frame-child84"
                      placeholder="Membership Detail"
                      defaultValue={
                        membershipValue.membershipData.membershipdescription2 !=
                          "" &&
                        membershipValue.membershipData.membershipdescription2
                      }
                      {...register("membershipdescription2", {
                        required: true,
                      })}
                    />
                    {errors.membershipdescription2 && (
                      <span style={{ color: "#d92323" }}>
                        This field is required
                      </span>
                    )}
                    <div className="vector-wrapper3">
                      <img className="vector-icon11" alt="" src={vector} />
                    </div>
                  </div>
                </div>
                <div className="rectangle-parent77">
                  <input
                    type="file"
                    className="frame-child85"
                    {...register("image3", { required: true })}
                  />
                  {errors.image3 && (
                    <span style={{ color: "#d92323" }}>
                      This field is required
                    </span>
                  )}
                  <div className="rectangle-parent78">
                    <input
                      type="text"
                      className="frame-child86"
                      placeholder="Membership Detail"
                      defaultValue={
                        membershipValue.membershipData.membershipdescription3 !=
                          "" &&
                        membershipValue.membershipData.membershipdescription3
                      }
                      {...register("membershipdescription3", {
                        required: true,
                      })}
                    />
                    {errors.membershipdescription3 && (
                      <span style={{ color: "#d92323" }}>
                        This field is required
                      </span>
                    )}
                    <div className="vector-wrapper4">
                      <img className="vector-icon12" alt="" src={vector} />
                    </div>
                  </div>
                </div>
                <div className="frame-parent51">
                  <div className="rectangle-parent79">
                    <input
                      type="file"
                      className="frame-child87"
                      {...register("image4", { required: true })}
                    />
                    {errors.image4 && (
                      <span style={{ color: "#d92323" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      className="frame-child88"
                      type="text"
                      placeholder="Membership Detail"
                      defaultValue={
                        membershipValue.membershipData.membershipdescription4 !=
                          "" &&
                        membershipValue.membershipData.membershipdescription4
                      }
                      {...register("membershipdescription4", {
                        required: true,
                      })}
                    />
                    {errors.membershipdescription4 && (
                      <span style={{ color: "#d92323" }}>
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="vector-wrapper5">
                    <img
                      className="vector-icon13"
                      loading="lazy"
                      alt=""
                      src={vector}
                    />
                  </div>
                </div>
                {showMore && (
                  <div className="frame-parent51">
                    <div className="rectangle-parent79">
                      <input
                        type="file"
                        className="frame-child87"
                       
                        {...register("image5", { required: true })}
                      />
                      {errors.image5 && (
                        <span style={{ color: "#d92323" }}>
                          This field is required
                        </span>
                      )}
                      <input
                        className="frame-child88"
                        type="text"
                        placeholder="Membership Detail"
                        defaultValue={
                          membershipValue.membershipData
                            .membershipdescription5 != "" &&
                          membershipValue.membershipData.membershipdescription5
                        }
                        {...register("membershipdescription5", {
                          required: true,
                        })}
                      />
                      {errors.membershipdescription5 && (
                        <span style={{ color: "#d92323" }}>
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="vector-wrapper5">
                      <img
                        className="vector-icon13"
                        loading="lazy"
                        alt=""
                        src={vector}
                      />
                    </div>
                  </div>
                )}
              </div>
              <button
                className="frame-parent52"
                type="button"
                onClick={handleAddMoreBenefitClick}
              >
                <img
                  className="frame-child89"
                  loading="lazy"
                  alt=""
                  src={plusIcon}
                />
                <div className="add-benefit">
                  <div className="add-more-benefit">Add more Benefit</div>
                </div>
              </button>
              <button className="rectangle-parent117" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
