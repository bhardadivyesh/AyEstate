import "./FrameComponent2.css";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import priceLogo from "../../../../assets/admin/membership/pricing/priceImage.png";
import line from "../../../../assets/admin/membership/pricing/line.png";
import MembershipPriceContext from "../MembershipPricing";
import axios from "axios";

const FrameComponent2 = () => {
  const value = useContext(MembershipPriceContext);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const price = watch("price");
  const discount = watch("discount");

  let discountedValue = price;
  useEffect(() => {
    if (discount) {
      const discountPriceValue = (price * discount) / 100;
      discountedValue = price - discountPriceValue;
    }
    setValue("discountPrice", discountedValue);
  }, [price, discount, setValue]);

  const handleDiscountChange = (newDiscount) => {
    setValue("discount", newDiscount);
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("http://localhost:3000/post-membershipPriceDetail", data);
      console.log('API call response:', response.data);
      // Reset form or handle success
      reset();
    } catch (error) {
      console.error("There was an error creating the membership price detail!", error);
    }
    value.setPricingDetail(data);
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="membership-pricing-child-membership-pricing-Frame2">
      <div className="rectangle-parent89-membership-pricing-Frame2">
        <div className="frame-child115-membership-pricing-Frame2" />
        <div className="frame-wrapper45-membership-pricing-Frame2">
          <div className="pricing-group-membership-pricing-Frame2">
            <h1 className="pricing2-membership-pricing-Frame2">Pricing</h1>
            <div className="change-subscription-pricing-an-wrapper-membership-pricing-Frame2">
              <div className="change-subscription-pricing-membership-pricing-Frame2">
                Change subscription pricing and add discounts
              </div>
            </div>
          </div>
        </div>
        <form
          className="rectangle-parent90-membership-pricing-Frame2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="frame-child116-membership-pricing-Frame2" />
          <div className="frame-parent78-membership-pricing-Frame2">
            <div className="frame-parent79-membership-pricing-Frame2">
              <div className="trang-ch">
                <input
                  type="file"
                  className="input-file"
                  // {...register("logoImage", { required: true })}
                />
                <section className="rectangle-parent81">
                  <div className="frame-child91" />
                  <button className="rectangle-parent82">
                    <div className="frame-child92" />
                    <img className="icon6" alt="" src={priceLogo} />
                  </button>
                  <img
                    className="frame-child93"
                    loading="lazy"
                    alt=""
                    src={priceLogo}
                  />
                  <input
                    type="number"
                    className="div36"
                    placeholder="Enter Price "
                    {...register("price", { required: true })}
                  />
                </section>
              </div>
              {errors.price && (
                <span style={{ color: "red" }}>Enter Price</span>
              )}
              <div className="frame-wrapper46-membership-pricing-Frame2">
                <div className="rectangle-parent91-membership-pricing-Frame2">
                  <input
                    type="checkbox"
                    className="frame-child118-membership-pricing-Frame2"
                    checked={isChecked}
                    onChange={handleChange}
                  />
                  <div className="set-dicount-wrapper-membership-pricing-Frame2">
                    <div className="set-dicount-membership-pricing-Frame2">
                      Set dicount
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {isChecked && (
              <div className="rectangle-parent92-membership-pricing-Frame2">
                <div className="frame-child119-membership-pricing-Frame2" />
                <div className="rectangle-parent93-membership-pricing-Frame2">
                  <div className="frame-child120-membership-pricing-Frame2" />
                  <div className="discount-membership-pricing-Frame2">
                    Discount
                  </div>
                </div>
                <div className="frame-wrapper47-membership-pricing-Frame2">
                  <div className="frame-parent80-membership-pricing-Frame2">
                    <div className="rectangle-wrapper8-membership-pricing-Frame2">
                      <input
                        className="frame-child121-membership-pricing-Frame2"
                        type="number"
                        {...register("discount", {
                          required: true,
                          min: 0,
                          max: 100,
                        })}
                      />
                    </div>
                    {errors.discount && (
                      <span style={{ color: "red" }}>
                        Enter Discount between 1 to 100
                      </span>
                    )}
                    <div className="frame-parent81-membership-pricing-Frame2">
                      <div className="frame-parent82-membership-pricing-Frame2">
                        <div className="frame-wrapper48-membership-pricing-Frame2">
                          <div className="group-parent20-membership-pricing-Frame2">
                            <button
                              type="button"
                              className="group1-membership-pricing-Frame2 group-child42-membership-pricing-Frame2"
                              onClick={() => handleDiscountChange(10)}
                            >
                              <span className="user-membership-pricing-Frame2">
                                10%
                              </span>
                            </button>
                            <button
                              type="button"
                              className="rectangle-parent94-membership-pricing-Frame2 frame-child122-membership-pricing-Frame2"
                              onClick={() => handleDiscountChange(25)}
                            >
                              <span className="div40-membership-pricing-Frame2">
                                25%
                              </span>
                            </button>
                            <button
                              type="button"
                              className="rectangle-parent95-membership-pricing-Frame2 frame-child123-membership-pricing-Frame2"
                              onClick={() => handleDiscountChange(50)}
                            >
                              <span className="find-mentor-membership-pricing-Frame2">
                                50%
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="you-will-be-membership-pricing-Frame2">
                          You will be providing a discout
                        </div>
                      </div>
                      <button
                        type="button"
                        className="rectangle-parent96-membership-pricing-Frame2 frame-child124-membership-pricing-Frame2"
                        onClick={() => handleDiscountChange(75)}
                      >
                        <span className="rupam-banik-membership-pricing-Frame2">
                          75%
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="swe-nothing-inc-parent-membership-pricing-Frame2">
                  <input
                    className="swe-nothing-inc-membership-pricing-Frame2"
                    type="text"
                    readOnly
                    value={discountedValue}
                    {...register("discountPrice", { required: true })}
                  />
                  <div className="rectangle-parent97-membership-pricing-Frame2">
                    <div className="frame-child125-membership-pricing-Frame2" />
                    <div className="discount-price-membership-pricing-Frame2">
                      Discounted Price
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="sign-up-page-membership-pricing-Frame2">
            <section className="rectangle-parent11-membership-pricing-Frame2">
              <div className="frame-child20-membership-pricing-Frame2" />
              <div className="listing-number-membership-pricing-Frame2">
                Listing Number
              </div>
              <img
                className="frame-child21-membership-pricing-Frame2"
                loading="lazy"
                alt=""
                src={line}
              />
              <input
                type="number"
                className="number-item-membership-pricing-Frame2"
                placeholder="enter listing number"
                {...register("listingNumber", { required: true })}
              />
            </section>
          </div>
          {errors.listingNumber && (
            <span style={{ color: "red" }}>Enter Listing Number</span>
          )}
          <div className="frame-wrapper50-membership-pricing-Frame2">
            <button
              type="submit"
              className="rectangle-parent99-membership-pricing-Frame2"
            >
              <span className="save-membership-pricing-Frame2">Save</span>
            </button>
          </div>
        </form>
        {console.log("frame component call")}
      </div>
    </div>
  );
};

export default FrameComponent2;
