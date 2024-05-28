import "./MembershipMain.css";
import lineArror from "../../../assets/admin/membership/membership/arrow.png"
import groupIcon from "../../../assets/admin/membership/membership/groupicon.png"
import group from "../../../assets/admin/membership/membership/group.png"
import freeIcon from "../../../assets/admin/membership/membership/freeIcon.png"
import gold from "../../../assets/admin/membership/membership/gold.png"
import silver from "../../../assets/admin/membership/membership/silver.png"
import next from "../../../assets/admin/membership/membership/next.png"
import previous from "../../../assets/admin/membership/membership/previous.png"
import setting from "../../../assets/admin/membership/membership/setting.png"
import preview from "../../../assets/admin/membership/membership/preview.png"
import days from "../../../assets/admin/membership/membership/45days.png"
import topSlot from "../../../assets/admin/membership/membership/topSlot.png"
import privacy from "../../../assets/admin/membership/membership/privacy.png"
import relationShip from "../../../assets/admin/membership/membership/relationship.png"
import personalField from "../../../assets/admin/membership/membership/personal.png"
import rightTick from "../../../assets/admin/membership/membership/vector.png"
import backgroundImg from "../../../assets/admin/membership/membership/background.png"
import { useNavigate } from "react-router-dom";
import dashboardContext from "../../admin";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
const Membership = () => {
  const [activeMemberData,setActiveMemberData] = useState([])
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
    })
  },[])
  console.log(activeMemberData?.length);
  return (
    <>
      <div className="group-parent41-membershipMain-screen">
        <div className="rectangle-parent105-membershipMain-screen">
          <div className="group-child61-membershipMain-screen" />
          <div className="group-parent42-membershipMain-screen">
            <div className="group-wrapper13-membershipMain-screen">
              <div className="rectangle-parent106-membershipMain-screen">
                <div className="group-child62-membershipMain-screen" />
                <div className="group-parent43-membershipMain-screen">
                  <div className="edit-your-membership-parent1-membershipMain-screen">
                    <div className="edit-your-membership3-membershipMain-screen">
                      Edit your membership
                    </div>
                    <div className="make-changes-to3-membershipMain-screen">
                      Make changes to your membership plan, launch promotional
                      offers and more.
                    </div>
                  </div>
                  <div className="group-parent44-membershipMain-screen">
                    <button className="group-wrapper14-membershipMain-screen rectangle-parent107-membershipMain-screen group-child63-membershipMain-screen " onClick={()=>handleNavigation("paymentScreen")}>
                        <div className="preview-membership-page-container-membershipMain-screen">
                          <label className="preview-membership-page3-membershipMain-screen">Preview Membership page</label>
                          <img
                            className="fi-2356572-icon3-membershipMain-screen"
                            alt=""
                            src={preview}
                          />
                        </div>
                    </button>
                    <button className="rectangle-parent108-membershipMain-screen group-child64-membershipMain-screen " onClick={()=>handleEditMembership("editMembership")}>
                      <div className="new-add-membership-group-membershipMain-screen">
                        <label className="new-add-membership1-membershipMain-screen">
                          New Add Membership
                        </label>
                        <img
                          className="vector-icon18-membershipMain-screen"
                          alt=""
                          src={setting}
                        />
                      </div>
                    </button>
                  </div>
                  <div className="rectangle-parent109-membershipMain-screen">
                    <div className="group-child65-membershipMain-screen" />
                    <div className="group-parent45-membershipMain-screen">
                      <div className="group-wrapper15-membershipMain-screen">
                        <div className="gold-group-membershipMain-screen">
                          {/* <Gold /> */}
                          <div className="gold-membershipMain-screen">
                            <img
                              className="gold-child-membershipMain-screen"
                              alt=""
                              src={backgroundImg}
                            />
                            <div className="group-parent1-membershipMain-screen">
                              <div className="parent-membershipMain-screen">
                                <div className="div-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <div className="days-plan-validity-membershipMain-screen">
                                    45 Days plan validity
                                  </div>
                                  <img
                                    className="fi-2693507-icon-membershipMain-screen"
                                    alt=""
                                    src={days}
                                  />
                                </div>
                                <div className="fi-1828739-parent-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon1-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon-membershipMain-screen"
                                    alt=""
                                    src={topSlot}
                                  />
                                  <div className="top-slot-listing-membershipMain-screen">
                                    Top slot listing for 5x more visicility
                                  </div>
                                </div>
                                <div className="fi-1828739-group-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon2-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon1-membershipMain-screen"
                                    alt=""
                                    src={privacy}
                                  />
                                  <div className="privacy-of-your-membershipMain-screen">
                                    Privacy Of Your Phone Number
                                  </div>
                                </div>
                                <div className="fi-1828739-container-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon3-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon2-membershipMain-screen"
                                    alt=""
                                    src={relationShip}
                                  />
                                  <div className="relationship-manager-super-membershipMain-screen">
                                    Relationship Manager Super Fast Closure
                                  </div>
                                </div>
                                <div className="fi-1828739-parent1-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon4-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="vector-icon1-membershipMain-screen"
                                    alt=""
                                    src={personalField}
                                  />
                                  <div className="personal-field-assistant-membershipMain-screen">
                                    Personal Field Assistant
                                  </div>
                                </div>
                              </div>
                              <div className="div1-membershipMain-screen">
                                <div className="group-parent2-membershipMain-screen">
                                  <div className="rectangle-wrapper-membershipMain-screen">
                                    <div className="group-child1-membershipMain-screen" />
                                  </div>
                                  <div className="delete-membershipMain-screen">Delete</div>
                                </div>
                                <div className="rectangle-parent2-membershipMain-screen">
                                  <div className="group-child2-membershipMain-screen" />
                                  <div className="edit-membership-membershipMain-screen">
                                    Edit Membership
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="group-parent3-membershipMain-screen">
                              <div className="rectangle-frame-membershipMain-screen">
                                <div className="group-child3-membershipMain-screen" />
                              </div>
                              <div className="group-parent4-membershipMain-screen">
                                <div className="rectangle-parent3-membershipMain-screen">
                                  <div className="group-child4-membershipMain-screen" />
                                  <div className="discont-membershipMain-screen">2% Discont%</div>
                                </div>
                                <div className="wrapper-group-parent-membershipMain-screen">
                                  <div className="wrapper-group-membershipMain-screen">
                                    <img
                                      className="group-icon3-membershipMain-screen"
                                      alt=""
                                      src={gold}
                                    />
                                  </div>
                                  <div className="group-parent5-membershipMain-screen">
                                    <div className="inr-25-listing-parent-membershipMain-screen">
                                      <div className="inr-container-membershipMain-screen">
                                        <span className="inr-container1-membershipMain-screen">
                                          <span className="inr-membershipMain-screen">
                                            {" "}
                                            2,500 INR *
                                          </span>
                                          <span> / 25 Listing</span>
                                        </span>
                                      </div>
                                      <div className="group-wrapper2-membershipMain-screen">
                                        <div className="group-wrapper3-membershipMain-screen">
                                          <div className="vat-and-local-taxes-may-apply-wrapper-membershipMain-screen">
                                            <div className="vat-and-local-membershipMain-screen">
                                              VAT and local taxes may apply
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="billed-2450-membershipMain-screen">
                                        {" "}
                                        2,500 Billed - 2450
                                      </div>
                                    </div>
                                    <img
                                      className="line-icon-membershipMain-screen"
                                      alt=""
                                      src="/line-54.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* over */}
                          <div className="silver-parent-membershipMain-screen">
                            {/* <Silver /> */}
                            {/* silver over */}

                            <img
                              className="gold-child-membershipMain-screen"
                              alt=""
                              src={backgroundImg}
                            />
                            <div className="group-parent1-membershipMain-screen">
                              <div className="parent-membershipMain-screen">
                                <div className="div-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <div className="days-plan-validity-membershipMain-screen">
                                    45 Days plan validity
                                  </div>
                                  <img
                                    className="fi-2693507-icon-membershipMain-screen"
                                    alt=""
                                    src={days}
                                  />
                                </div>
                                <div className="fi-1828739-parent-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon1-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon-membershipMain-screen"
                                    alt=""
                                    src={topSlot}
                                  />
                                  <div className="top-slot-listing-membershipMain-screen">
                                    Top slot listing for 5x more visicility
                                  </div>
                                </div>
                                <div className="fi-1828739-group-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon2-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon1-membershipMain-screen"
                                    alt=""
                                    src={privacy}
                                  />
                                  <div className="privacy-of-your-membershipMain-screen">
                                    Privacy Of Your Phone Number
                                  </div>
                                </div>
                                <div className="fi-1828739-container-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon3-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon2-membershipMain-screen"
                                    alt=""
                                    src={relationShip}
                                  />
                                  <div className="relationship-manager-super-membershipMain-screen">
                                    Relationship Manager Super Fast Closure
                                  </div>
                                </div>
                                <div className="fi-1828739-parent1-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon4-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="vector-icon1-membershipMain-screen"
                                    alt=""
                                    src={personalField}
                                  />
                                  <div className="personal-field-assistant-membershipMain-screen">
                                    Personal Field Assistant
                                  </div>
                                </div>
                              </div>
                              <div className="div1-membershipMain-screen">
                                <div className="group-parent2-membershipMain-screen">
                                  <div className="rectangle-wrapper-membershipMain-screen">
                                    <div className="group-child1-membershipMain-screen" />
                                  </div>
                                  <div className="delete-membershipMain-screen">Delete</div>
                                </div>
                                <div className="rectangle-parent2-membershipMain-screen">
                                  <div className="group-child2-membershipMain-screen" />
                                  <div className="edit-membership-membershipMain-screen">
                                    Edit Membership
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="group-parent3-membershipMain-screen">
                              <div className="rectangle-frame-membershipMain-screen">
                                <div className="group-child3-membershipMain-screen" />
                              </div>
                              <div className="group-parent4-membershipMain-screen">
                                <div className="rectangle-parent3-membershipMain-screen">
                                  <div className="group-child4-membershipMain-screen" />
                                  <div className="discont-membershipMain-screen">2% Discont%</div>
                                </div>
                                <div className="wrapper-group-parent-membershipMain-screen">
                                  <div className="wrapper-group-membershipMain-screen">
                                    <img
                                      className="group-icon3-membershipMain-screen"
                                      alt=""
                                      src={silver}
                                    />
                                  </div>
                                  <div className="group-parent5-membershipMain-screen">
                                    <div className="inr-25-listing-parent-membershipMain-screen">
                                      <div className="inr-container-membershipMain-screen">
                                        <span className="inr-container1-membershipMain-screen">
                                          <span className="inr-membershipMain-screen">
                                            {" "}
                                            2,500 INR *
                                          </span>
                                          <span> / 25 Listing</span>
                                        </span>
                                      </div>
                                      <div className="group-wrapper2-membershipMain-screen">
                                        <div className="group-wrapper3-membershipMain-screen">
                                          <div className="vat-and-local-taxes-may-apply-wrapper-membershipMain-screen">
                                            <div className="vat-and-local-membershipMain-screen">
                                              VAT and local taxes may apply
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="billed-2450-membershipMain-screen">
                                        2,500 Billed - 2450
                                      </div>
                                    </div>
                                    <img
                                      className="line-icon-membershipMain-screen"
                                      alt=""
                                      src="/line-54.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="group-wrapper16-membershipMain-screen">
                            <div className="group-wrapper17-membershipMain-screen">
                              <div className="vat-and-local-taxes-may-apply-wrapper3-membershipMain-screen">
                                <div className="vat-and-local6-membershipMain-screen">
                                  VAT and local taxes may apply
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* </div> */}
                          {/* <FREE /> */}
                          <div className="free-membershipMain-screen">
                            <div className="free-child-membershipMain-screen" />
                            <div className="group-parent12-membershipMain-screen">
                              <div className="rectangle-parent6-membershipMain-screen">
                                <div className="group-child10-membershipMain-screen" />
                                <div className="div3-membershipMain-screen">
                                  <div className="free-3-container-membershipMain-screen">
                                    <span className="free-3-container1-membershipMain-screen">
                                      <span className="free1-membershipMain-screen">{` FREE `}</span>
                                      <span>/ 3 Listing</span>
                                    </span>
                                  </div>
                                  <div className="free3listing-membershipMain-screen">
                                    FREE*3LISTING
                                  </div>
                                  <img
                                    className="free-1-icon-membershipMain-screen"
                                    alt=""
                                    src={freeIcon}
                                  />
                                  <div className="inner-membershipMain-screen">
                                    <div className="group-wrapper5-membershipMain-screen">
                                      <div className="vat-and-local-taxes-may-apply-container-membershipMain-screen">
                                        <div className="vat-and-local2-membershipMain-screen">
                                          VAT and local taxes may apply
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="container-membershipMain-screen">
                                <div className="div4-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon10-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <div className="days-plan-validity2-membershipMain-screen">
                                    45 Days plan validity
                                  </div>
                                  <img
                                    className="fi-2693507-icon2-membershipMain-screen"
                                    alt=""
                                    src={days}
                                  />
                                </div>
                                <div className="fi-1828739-parent6-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon11-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon8-membershipMain-screen"
                                    alt=""
                                    src={topSlot}
                                  />
                                  <div className="top-slot-listing2-membershipMain-screen">
                                    Top slot listing for 5x more visicility
                                  </div>
                                </div>
                                <div className="fi-1828739-parent7-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon12-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon9-membershipMain-screen"
                                    alt=""
                                    src={privacy}
                                  />
                                  <div className="privacy-of-your2-membershipMain-screen">
                                    Privacy Of Your Phone Number
                                  </div>
                                </div>
                                <div className="fi-1828739-parent8-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon13-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="group-icon10-membershipMain-screen"
                                    alt=""
                                    src={relationShip}
                                  />
                                  <div className="relationship-manager-super2-membershipMain-screen">
                                    Relationship Manager Super Fast Closure
                                  </div>
                                </div>
                                <div className="fi-1828739-parent9-membershipMain-screen">
                                  <img
                                    className="fi-1828739-icon14-membershipMain-screen"
                                    alt=""
                                    src={rightTick}
                                  />
                                  <img
                                    className="vector-icon3-membershipMain-screen"
                                    alt=""
                                    src={personalField}
                                  />
                                  <div className="personal-field-assistant2-membershipMain-screen">
                                    Personal Field Assistant
                                  </div>
                                </div>
                              </div>
                              <div className="group-parent13-membershipMain-screen">
                                <div className="group-parent14-membershipMain-screen">
                                  <div className="rectangle-wrapper3-membershipMain-screen">
                                    <div className="group-child11-membershipMain-screen" />
                                  </div>
                                  <div className="edit-membership2-membershipMain-screen">
                                    Edit Membership
                                  </div>
                                </div>
                                <div className="rectangle-parent7-membershipMain-screen">
                                  <div className="group-child12-membershipMain-screen" />
                                  <div className="delete2-membershipMain-screen">Delete</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* free over */}
                        </div>
                      </div>
                      <img
                        className="fi-3661484-icon1-membershipMain-screen"
                        alt=""
                        src={previous}
                      />
                      <img
                        className="fi-3661482-icon1-membershipMain-screen"
                        alt=""
                        src={next}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-wrapper18-membershipMain-screen">
              <div className="group-wrapper19-membershipMain-screen">
                <div className="group-parent46-membershipMain-screen">
                  <div className="rectangle-parent110-membershipMain-screen">
                    <div className="group-child66-membershipMain-screen" />
                    <img className="layer-3-icon2-membershipMain-screen" alt="" src={group} />
                    <div className="active-members2-membershipMain-screen">Active Members</div>
                    <div className="div46-membershipMain-screen">{activeMemberData?.length}</div>
                    <button className="view-all-members-parent2-membershipMain-screen" onClick={()=>handleEditMembership("activeMember")}>
                      <span className="view-all-members4-membershipMain-screen">View all members</span>
                      <img
                        className="group-child67-membershipMain-screen"
                        alt=""
                        src={lineArror}
                      />
                    </button>
                  </div>
                  <div className="rectangle-parent111-membershipMain-screen">
                    <div className="group-child68-membershipMain-screen" />
                    <div className="membership-revenue4-membershipMain-screen">
                      Membership revenue
                    </div>
                    <div className="div47-membershipMain-screen">0</div>
                    <button className="view-all-members-parent3-membershipMain-screen" onClick={()=>handleEditMembership("membershipRevenue")}>
                      <span className="view-all-members5-membershipMain-screen">View all members</span>
                      <img
                        className="group-child69-membershipMain-screen"
                        alt=""
                        src={lineArror}
                      />
                    </button>
                    <img
                      className="fi-10164350-icon2-membershipMain-screen"
                      alt=""
                      src={groupIcon}
                    />
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
