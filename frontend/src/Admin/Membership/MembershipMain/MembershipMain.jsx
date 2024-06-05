import "./MembershipMain.css";
import lineArror from "../../../assets/admin/membership/membership/arrow.png";
import groupIcon from "../../../assets/admin/membership/membership/groupicon.png";
import group from "../../../assets/admin/membership/membership/group.png";
import checkMark from "../../../assets/admin/membership/membership/membershipNew/checkmark.png";
import next from "../../../assets/admin/membership/membership/membershipNew/next.png";
import previous from "../../../assets/admin/membership/membership/membershipNew/previous.png";
import newAdd from "../../../assets/admin/membership/membership/membershipNew/setting.png";
import preview from "../../../assets/admin/membership/membership/membershipNew/preview.png";
import { useNavigate } from "react-router-dom";
import dashboardContext from "../../admin";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const Membership = () => {
  const [activeMemberData, setActiveMemberData] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [renderApi, setRenderApi] = useState(false);
  const value = useContext(dashboardContext);
  const navigate = useNavigate();
  const handleNavigation = (navigationPath) => {
    navigate(`/${navigationPath}`);
  };
  const handleEditMembership = (navigatePath) => {
    value.setRenderManage(navigatePath);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration-paidVendor").then((res) => {
      setActiveMemberData(res.data);
    });
    axios.get("http://localhost:3000/get-membership").then((res) => {
      setMembershipData(res.data);
    });
  }, [renderApi]);
 
  const membershipRevenue = activeMemberData?.reduce((total, current) => {
    return total + Number(current.paymentValue);
  }, 0);
  const handleEditBtnClick = async (editItem, navigationPath) => {
    value.setMembershipData(editItem);
    value.setRenderManage(navigationPath);
  };
  const handleDeleteClick = async (deleteItem) => {
    setRenderApi(!renderApi);
    try {
      await axios.delete("http://localhost:3000/delete-membership", {
        data: { title: deleteItem.title },
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <div className="membershipnew-membershipMain">
        <div className="membershipnew-inner-membershipMain">
          <div className="group-parent-membershipMain">
            <div className="group-container-membershipMain">
              <div className="rectangle-wrapper-membershipMain">
                <div className="group-child-membershipMain" />
              </div>
              <div className="group-wrapper-membershipMain">
                <div className="group-div-membershipMain">
                  <div className="rectangle-parent-membershipMain">
                    <div className="group-item-membershipMain" />
                    <img
                      className="layer-3-icon-membershipMain"
                      alt=""
                      src={group}
                    />
                    <div className="active-members-membershipMain">
                      Active Members
                    </div>
                    <div className="div-membershipMain">
                      {activeMemberData?.length}
                    </div>
                    <button
                      className="view-all-members-parent-membershipMain"
                      onClick={() => handleEditMembership("activeMember")}
                    >
                      <span className="view-all-members-membershipMain">
                        View all members
                      </span>
                      <img
                        className="group-inner-membershipMain"
                        alt=""
                        src={lineArror}
                      />
                    </button>
                  </div>
                  <div className="rectangle-group-membershipMain">
                    <div className="rectangle-div-membershipMain" />
                    <div className="membership-revenue-membershipMain">
                      Membership revenue
                    </div>
                    <div className="div1-membershipMain">{`₹${membershipRevenue}`}</div>
                    <button
                      className="view-all-members-group-membershipMain"
                      onClick={() => handleEditMembership("membershipRevenue")}
                    >
                      <span className="view-all-members1-membershipMain">
                        View all members
                      </span>
                      <img
                        className="line-icon-membershipMain"
                        alt=""
                        src={lineArror}
                      />
                    </button>
                    <img
                      className="fi-10164350-icon-membershipMain"
                      alt=""
                      src={groupIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-container-membershipMain">
              <div className="group-child1-membershipMain" />
              <div className="group-parent1-membershipMain">
                <div className="edit-your-membership-parent-membershipMain">
                  <div className="edit-your-membership-membershipMain">
                    Edit your membership
                  </div>
                  <div className="make-changes-to-membershipMain">
                    Make changes to your membership plan, launch promotional
                    offers and more.
                  </div>
                </div>
                <div className="group-parent2-membershipMain">
                  <div className="rectangle-parent1-membershipMain">
                    <button
                      className="group-child2-membershipMain"
                      onClick={() => handleNavigation("paymentScreen")}
                    >
                      <span className="preview-membership-page-membershipMain">
                        Preview Membership page
                      </span>
                      <img
                        className="fi-2356572-icon-membershipMain"
                        alt=""
                        src={preview}
                      />
                    </button>
                  </div>
                  <div className="group-frame-membershipMain">
                    <div className="rectangle-parent2-membershipMain">
                      <button
                        className="group-child3-membershipMain"
                        onClick={() => handleEditMembership("editMembership")}
                      >
                        <div className="new-add-membership-membershipMain">
                          New Add Membership
                        </div>
                        <img
                          className="vector-icon-membershipMain"
                          alt=""
                          src={newAdd}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group-parent3-membershipMain">
                  <div className="fi-3661484-wrapper-membershipMain">
                    <div className="fi-3661484-membershipMain" />
                  </div>
                  <div className="rectangle-parent3-membershipMain">
                    <div className="group-child4-membershipMain" />
                    <div className="group-group-membershipMain">
                      <img
                        className="group-icon-membershipMain"
                        alt=""
                        src={previous}
                      />
                      <img
                        className="fi-3661482-icon-membershipMain"
                        alt=""
                        src={next}
                      />
                      <div className="group-parent4-membershipMain">
                        {membershipData.map((items, index) => {
                          return (
                            <div className="rectangle-parent4-membershipMain" key={index}>
                              <div className="group-child5-membershipMain" />
                              <div className="group-parent5-membershipMain">
                                <div className="rectangle-parent5-membershipMain">
                                  <div className="group-child6-membershipMain" />
                                  <div className="div2-membershipMain">
                                    <div className="free-packages-membershipMain">
                                      {items?.title}
                                    </div>
                                    <div className="free-3-container-membershipMain">
                                      <span className="free-3-container1-membershipMain">
                                        <span className="free-membershipMain">
                                          <span>
                                            {`${items?.discountPrice} / `}
                                            <s>{items?.price}</s>
                                          </span>
                                        </span>
                                        <span className="listing-membershipMain">
                                          <span className="span-membershipMain">{`  `}</span>
                                          <span>{`/ ${items?.listingNumber} Listing`}</span>
                                        </span>
                                      </span>
                                    </div>
                                    <img
                                      className="child-membershipMain"
                                      alt=""
                                      src={`${items.images[5]}`}
                                    />
                                  </div>
                                </div>
                                <div className="group-parent6-membershipMain">
                                  <div className="group-parent7-membershipMain">
                                    <button
                                      className="rectangle-parent6-membershipMain group-child7-membershipMain"
                                      onClick={() =>
                                        handleEditBtnClick(
                                          items,
                                          "editMembership"
                                        )
                                      }
                                    >
                                      <label className="edit-membership-membershipMain">
                                        Edit Membership
                                      </label>
                                    </button>
                                    <button
                                      className="rectangle-parent7-membershipMain group-child8-membershipMain"
                                      onClick={() => handleDeleteClick(items)}
                                    >
                                      <label className="delete-membershipMain">
                                        Delete
                                      </label>
                                    </button>
                                  </div>
                                  <div className="group-parent8-membershipMain">
                                    <div className="checkmark-circle-2-parent-membershipMain">
                                      <img
                                        className="checkmark-circle-2-icon-membershipMain"
                                        alt=""
                                        src={checkMark}
                                      />
                                      <img
                                        className="fi-2693507-icon-membershipMain"
                                        alt=""
                                        src={items.images[0]}
                                      />
                                      <label className="days-plan-validity-membershipMain">
                                        {items?.membershipdescription1}
                                      </label>
                                    </div>
                                    <div className="checkmark-circle-2-group-membershipMain">
                                      <img
                                        className="checkmark-circle-2-icon1-membershipMain"
                                        alt=""
                                        src={checkMark}
                                      />
                                      <img
                                        className="fi-2668384-icon-membershipMain"
                                        alt=""
                                        src={items.images[1]}
                                      />
                                      <label className="top-slot-listing-membershipMain">
                                        {items.membershipdescription2}
                                      </label>
                                    </div>
                                    <div className="checkmark-circle-2-container-membershipMain">
                                      <img
                                        className="checkmark-circle-2-icon2-membershipMain"
                                        alt=""
                                        src={checkMark}
                                      />
                                      <img
                                        className="fi-2889676-icon-membershipMain"
                                        alt=""
                                        src={items.images[2]}
                                      />
                                      <label className="privacy-of-your-membershipMain">
                                        {items.membershipdescription3}
                                      </label>
                                    </div>
                                    <div className="checkmark-circle-2-parent1-membershipMain">
                                      <img
                                        className="checkmark-circle-2-icon3-membershipMain"
                                        alt=""
                                        src={checkMark}
                                      />
                                      <img
                                        className="fi-870073-icon-membershipMain"
                                        alt=""
                                        src={items.images[3]}
                                      />
                                      <label className="relationship-manager-fast-membershipMain">
                                        {items.membershipdescription4}
                                      </label>
                                    </div>
                                    <div className="checkmark-circle-2-parent2-membershipMain">
                                      <img
                                        className="checkmark-circle-2-icon4-membershipMain"
                                        alt=""
                                        src={checkMark}
                                      />
                                      <img
                                        className="fi-1239608-icon-membershipMain"
                                        alt=""
                                        src={items.images[4]}
                                      />
                                      <label className="personal-field-assistant-membershipMain">
                                        {items.membershipdescription5}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
