import "./MembershipMain.css";
import lineArror from "../../../assets/admin/membership/membership/arrow.png"
import groupIcon from "../../../assets/admin/membership/membership/groupicon.png"
import group from "../../../assets/admin/membership/membership/group.png"
import freeIcon from "../../../assets/admin/membership/membership/membershipNew/free.png"
import gold from "../../../assets/admin/membership/membership/membershipNew/goldIcon.png"
import silver from "../../../assets/admin/membership/membership/membershipNew/silverIcon.png"
import discount from "../../../assets/admin/membership/membership/membershipNew/discount.png"
import checkMark from "../../../assets/admin/membership/membership/membershipNew/checkmark.png"
import days from "../../../assets/admin/membership/membership/membershipNew/day.png"
import topSlot from "../../../assets/admin/membership/membership/membershipNew/topSlot.png"
import privacy from "../../../assets/admin/membership/membership/membershipNew/privacy.png"
import relationaship from "../../../assets/admin/membership/membership/membershipNew/relationship.png"
import personal from "../../../assets/admin/membership/membership/membershipNew/personal.png"
import next from "../../../assets/admin/membership/membership/membershipNew/next.png"
import previous from "../../../assets/admin/membership/membership/membershipNew/previous.png"
import newAdd from "../../../assets/admin/membership/membership/membershipNew/setting.png"
import preview from "../../../assets/admin/membership/membership/membershipNew/preview.png"
import { useNavigate } from "react-router-dom";
import dashboardContext from "../../admin";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const Membership = () => {
  const [activeMemberData,setActiveMemberData] = useState([])
  console.log(activeMemberData);
  const value = useContext(dashboardContext);
  const navigate = useNavigate();
  const handleNavigation = (navigationPath) => {
    navigate(`/${navigationPath}`);
  };
  const handleEditMembership = (navigatePath) => {
    value.setRenderManage(navigatePath);
  };
  useEffect(()=>{
    axios.get('http://localhost:3000/get-Registration').then((res)=>{
      setActiveMemberData(res.data)
      console.log("call api");
    })
  },[])
  const membershipRevenue = activeMemberData?.reduce((total, current) => {
    return total + Number(current.paymentValue);
}, 0);
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
                  <img className="layer-3-icon-membershipMain" alt="" src={group} />
                  <div className="active-members-membershipMain">Active Members</div>
                  <div className="div-membershipMain">{activeMemberData?.length}</div>
                  <button className="view-all-members-parent-membershipMain" onClick={()=>handleEditMembership("activeMember")}>
                    <span className="view-all-members-membershipMain">View all members</span>
                    <img className="group-inner-membershipMain" alt="" src={lineArror} />
                  </button>
                </div>
                <div className="rectangle-group-membershipMain">
                  <div className="rectangle-div-membershipMain" />
                  <div className="membership-revenue-membershipMain">Membership revenue</div>
                  <div className="div1-membershipMain">{`₹${membershipRevenue}`}</div>
                  <button className="view-all-members-group-membershipMain" onClick={()=>handleEditMembership("membershipRevenue")}>
                    <span className="view-all-members1-membershipMain">View all members</span>
                    <img className="line-icon-membershipMain" alt="" src={lineArror} />
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
                <div className="edit-your-membership-membershipMain">Edit your membership</div>
                <div className="make-changes-to-membershipMain">
                  Make changes to your membership plan, launch promotional
                  offers and more.
                </div>
              </div>
              <div className="group-parent2-membershipMain">
                <div className="rectangle-parent1-membershipMain">
                  <button className="group-child2-membershipMain" onClick={()=>handleNavigation("paymentScreen")}>
                  <span className="preview-membership-page-membershipMain">Preview Membership page</span>
                  <img
                    className="fi-2356572-icon-membershipMain"
                    alt=""
                    src={preview}
                  />
                  </button>
                </div>
                <div className="group-frame-membershipMain">
                  <div className="rectangle-parent2-membershipMain">
                    <button className="group-child3-membershipMain" onClick={()=>handleEditMembership("editMembership")}>
                    <div className="new-add-membership-membershipMain">New Add Membership</div>
                    <img className="vector-icon-membershipMain" alt="" src={newAdd} />
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
                    <img className="group-icon-membershipMain" alt="" src={previous} />
                    <img
                      className="fi-3661482-icon-membershipMain"
                      alt=""
                      src={next}
                    />
                    <div className="group-parent4-membershipMain">
                      <div className="rectangle-parent4-membershipMain">
                        <div className="group-child5-membershipMain" />
                        <div className="group-parent5-membershipMain">
                          <div className="rectangle-parent5-membershipMain">
                            <div className="group-child6-membershipMain" />
                            <div className="div2-membershipMain">
                              <div className="free-packages-membershipMain">{`Free Packages `}</div>
                              <div className="free-3-container-membershipMain">
                                <span className="free-3-container1-membershipMain">
                                  <span className="free-membershipMain">
                                    <span>FREE</span>
                                  </span>
                                  <span className="listing-membershipMain">
                                    <span className="span-membershipMain">{`  `}</span>
                                    <span>/ 3 Listing</span>
                                  </span>
                                </span>
                              </div>
                              <img
                                className="child-membershipMain"
                                alt=""
                                src={freeIcon}
                              />
                            </div>
                          </div>
                          <div className="group-parent6-membershipMain">
                            <div className="group-parent7-membershipMain">
                              <div className="rectangle-parent6-membershipMain">
                                <div className="group-child7-membershipMain" />
                                <div className="edit-membership-membershipMain">
                                  Edit Membership
                                </div>
                              </div>
                              <div className="rectangle-parent7-membershipMain">
                                <div className="group-child8-membershipMain" />
                                <div className="delete-membershipMain">Delete</div>
                              </div>
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
                                  src={days}
                                />
                                <div className="days-plan-validity-membershipMain">
                                  10 Days plan validity
                                </div>
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
                                  src={topSlot}
                                />
                                <div className="top-slot-listing-membershipMain">
                                  Top slot listing for 5x more visicility
                                </div>
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
                                  src={privacy}
                                />
                                <div className="privacy-of-your-membershipMain">
                                  Privacy Of Your Phone Number
                                </div>
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
                                  src={relationaship}
                                />
                                <div className="relationship-manager-fast-membershipMain">
                                  Relationship Manager Fast Closure
                                </div>
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
                                  src={personal}
                                />
                                <div className="personal-field-assistant-membershipMain">
                                  Personal Field Assistant
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent8-membershipMain">
                        <div className="group-child9-membershipMain" />
                        <div className="group-parent9-membershipMain">
                          <div className="group-wrapper1-membershipMain">
                            <div className="rectangle-parent9-membershipMain">
                              <div className="group-child10-membershipMain" />
                              <div className="div3-membershipMain">
                                <div className="vector-parent-membershipMain">
                                  <img
                                    className="rectangle-icon-membershipMain"
                                    alt=""
                                    src={discount}
                                  />
                                  <div className="discont-membershipMain">2% Discont</div>
                                </div>
                                <div className="inner-membershipMain">
                                  <div className="silver-packages-wrapper-membershipMain">
                                    <div className="silver-packages-membershipMain">{`Silver Packages `}</div>
                                  </div>
                                </div>
                                <div className="listing-parent-membershipMain">
                                  <div className="listing1-membershipMain">
                                    <span className="listing-txt-membershipMain">
                                      <span className="span1-membershipMain">
                                        <span>₹1470</span>
                                      </span>
                                      <span className="listing2-membershipMain">
                                        <span className="span2-membershipMain">
                                          <span className="span3-membershipMain">{` `}</span>
                                        </span>
                                        <span>
                                          <span className="span4-membershipMain">{`1,500 `}</span>
                                          <span> / 10 Listing</span>
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <img
                                    className="group-child11-membershipMain"
                                    alt=""
                                    src="/line-66.svg"
                                  />
                                </div>
                                <img
                                  className="group-icon1-membershipMain"
                                  alt=""
                                  src={silver}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-parent10-membershipMain">
                            <div className="group-parent11-membershipMain">
                              <div className="rectangle-parent10-membershipMain">
                                <div className="group-child12-membershipMain" />
                                <div className="edit-membership1-membershipMain">
                                  Edit Membership
                                </div>
                              </div>
                              <div className="rectangle-parent11-membershipMain">
                                <div className="group-child13-membershipMain" />
                                <div className="delete1-membershipMain">Delete</div>
                              </div>
                            </div>
                            <div className="group-parent12-membershipMain">
                              <div className="checkmark-circle-2-parent3-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon5-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2693507-icon1-membershipMain"
                                  alt=""
                                  src={days}
                                />
                                <div className="days-plan-validity1-membershipMain">
                                  15 Days plan validity
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent4-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon6-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2668384-icon1-membershipMain"
                                  alt=""
                                  src={topSlot}
                                />
                                <div
                                  className="top-slot-listing1-membershipMain"
                                >
                                  Top slot listing for 5x more visicility
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent5-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon7-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2889676-icon1-membershipMain"
                                  alt=""
                                  src={privacy}
                                />
                                <div className="privacy-of-your1-membershipMain">
                                  Privacy Of Your Phone Number
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent6-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon8-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-870073-icon1-membershipMain"
                                  alt=""
                                  src={relationaship}
                                />
                                <div className="relationship-manager-fast1-membershipMain">
                                  Relationship Manager Fast Closure
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent7-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon9-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-1239608-icon1-membershipMain"
                                  alt=""
                                  src={personal}
                                />
                                <div className="personal-field-assistant1-membershipMain">
                                  Personal Field Assistant
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent12-membershipMain">
                        <div className="group-child14-membershipMain" />
                        <div className="group-parent13-membershipMain">
                          <div className="rectangle-parent13-membershipMain">
                            <div className="group-child15-membershipMain" />
                            <div className="wrapper-group-parent-membershipMain">
                              <div className="wrapper-group-membershipMain">
                                <img
                                  className="group-icon2-membershipMain"
                                  alt=""
                                  src={gold}
                                />
                              </div>
                              <div className="gold-packages-wrapper-membershipMain">
                                <div className="gold-packages-membershipMain">{`Gold Packages `}</div>
                              </div>
                              <div className="vector-group-membershipMain">
                                <img
                                  className="group-child16-membershipMain"
                                  alt=""
                                  src={discount}
                                />
                                <div className="discont1-membershipMain">2% Discont</div>
                              </div>
                              <div className="listing-group-membershipMain">
                                <div className="listing3-membershipMain">
                                  <span className="listing-txt1-membershipMain">
                                    <span className="span5-membershipMain">
                                      <span>₹2450</span>
                                    </span>
                                    <span className="listing4-membershipMain">
                                      <span className="span6-membershipMain">
                                        <span className="span7-membershipMain">{` `}</span>
                                      </span>
                                      <span>
                                        <span className="span8-membershipMain">{`2,500 `}</span>
                                        <span> / 25 Listing</span>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                                <img
                                  className="group-child17-membershipMain"
                                  alt=""
                                  src="/line-661.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-parent14-membershipMain">
                            <div className="group-parent15-membershipMain">
                              <div className="rectangle-parent14-membershipMain">
                                <div className="group-child18-membershipMain" />
                                <div className="edit-membership2-membershipMain">
                                  Edit Membership
                                </div>
                              </div>
                              <div className="rectangle-parent15-membershipMain">
                                <div className="group-child19-membershipMain" />
                                <div className="delete2-membershipMain">Delete</div>
                              </div>
                            </div>
                            <div className="group-parent16-membershipMain">
                              <div className="checkmark-circle-2-parent8-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon10-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2693507-icon2-membershipMain"
                                  alt=""
                                  src={days}
                                />
                                <div className="days-plan-validity2-membershipMain">
                                  25 Days plan validity
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent9-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon11-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2668384-icon2-membershipMain"
                                  alt=""
                                  src={topSlot}
                                />
                                <div
                                  className="top-slot-listing2-membershipMain"
                                >
                                  Top slot listing for 5x more visicility
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent10-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon12-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-2889676-icon2-membershipMain"
                                  alt=""
                                  src={privacy}
                                />
                                <div className="privacy-of-your2-membershipMain">
                                  Privacy Of Your Phone Number
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent11-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon13-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-870073-icon2-membershipMain"
                                  alt=""
                                  src={relationaship}
                                />
                                <div className="relationship-manager-fast2-membershipMain">
                                  Relationship Manager Fast Closure
                                </div>
                              </div>
                              <div className="checkmark-circle-2-parent12-membershipMain">
                                <img
                                  className="checkmark-circle-2-icon14-membershipMain"
                                  alt=""
                                  src={checkMark}
                                />
                                <img
                                  className="fi-1239608-icon2-membershipMain"
                                  alt=""
                                  src={personal}
                                />
                                <div className="personal-field-assistant2-membershipMain">
                                  Personal Field Assistant
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
