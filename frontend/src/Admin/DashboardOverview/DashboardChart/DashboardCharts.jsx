import './DashboardCharts.css';
import chart1 from "../../../assets/admin/DashboardChart/chart1.png"
import totalRevenue from "../../../assets/admin/DashboardChart/totalRevenue.png"
import paidVendor from "../../../assets/admin/DashboardChart/paidVendor.png"
import freeVendor from "../../../assets/admin/DashboardChart/freeVendor.png"
import rightArrow from "../../../assets/admin/DashboardChart/rightArrow.png"
import { useContext, useEffect, useState } from 'react';
import vector from "../../../assets/admin/DashboardChart/Vector.png"
import axios from 'axios';
import dashboardContext from '../../admin';
const  DashboardCharts= () => {
  const value = useContext(dashboardContext)
  const [activeMemberData,setActiveMemberData] = useState()
  const [listingData,setListingData] = useState([])
  const [freeVendorData,setFreeVendorData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration-paidVendor").then((res) => {
      setActiveMemberData(res.data);
    });
    axios.get('http://localhost:3000/get-vendorListing').then((res)=>{
      setListingData(res.data)
    })
    axios.get("http://localhost:3000/get-Registration-freeVendor").then((res)=>{
      setFreeVendorData(res.data)
    })
  }, []);
  const membershipRevenueTotal = activeMemberData?.reduce((total, current) => {

    return total + Number(current.paymentValue);
  }, 0);
  const handleNavigation = (navigationPath) =>{
   value.setRenderManage(navigationPath);
  }
  let activeListing = listingData.filter(items => items.status == "active")
  let rejectListing = listingData.filter(items => items.status == "reject")
  let pendingListing = listingData.filter(items => items.status == "pending")
  return (
    <div className="group-parent-dashboard-charts">
      <div className="group-container-dashboard-charts">
        <div className="rectangle-wrapper-dashboard-charts">
          <div className="group-child-dashboard-charts" />
        </div>
        <div className="group-div-dashboard-charts">
          <div className="active-listing-parent-dashboard-charts">
            <div className="active-listing-dashboard-charts">
              <div className="active-listing-child-dashboard-charts" />
              <div className="active-listing-inner-dashboard-charts">
                <div className="group-parent1-dashboard-charts">
                  <div className="group-parent2-dashboard-charts">
                    <div className="group-parent3-dashboard-charts">
                      <div className="line-parent-dashboard-charts">
                        <div className="group-item-dashboard-charts" />
                        <div className="div-dashboard-charts">16/04</div>
                      </div>
                      <div className="line-group-dashboard-charts">
                        <div className="group-inner-dashboard-charts" />
                        <div className="div1-dashboard-charts">17/04</div>
                      </div>
                      <div className="line-container-dashboard-charts">
                        <div className="line-div-dashboard-charts" />
                        <div className="div2-dashboard-charts">18/04</div>
                      </div>
                      <div className="line-parent1-dashboard-charts">
                        <div className="group-child1-dashboard-charts" />
                        <div className="div3-dashboard-charts">19/04</div>
                      </div>
                      <div className="line-parent2-dashboard-charts">
                        <div className="group-child2-dashboard-charts" />
                        <div className="div4-dashboard-charts">20/04</div>
                      </div>
                      <div className="line-parent3-dashboard-charts">
                        <div className="group-child3-dashboard-charts" />
                        <div className="div5-dashboard-charts">21/04</div>
                      </div>
                      <div className="line-parent4-dashboard-charts">
                        <div className="group-child4-dashboard-charts" />
                        <div className="div6-dashboard-charts">22/04</div>
                      </div>
                    </div>
                    <div className="group-parent4-dashboard-charts">
                      <div className="k-parent-dashboard-charts">
                        <div className="k-dashboard-charts">4k</div>
                        <div className="group-child5-dashboard-charts" />
                      </div>
                      <div className="k-group-dashboard-charts">
                        <div className="k1-dashboard-charts">5k</div>
                        <div className="group-child6-dashboard-charts" />
                      </div>
                      <div className="k-container-dashboard-charts">
                        <div className="k2-dashboard-charts">6k</div>
                        <div className="group-child7-dashboard-charts" />
                      </div>
                      <div className="k-parent1-dashboard-charts">
                        <div className="k3-dashboard-charts">3k</div>
                        <div className="group-child8-dashboard-charts" />
                      </div>
                      <div className="k-parent2-dashboard-charts">
                        <div className="k4-dashboard-charts">2k</div>
                        <div className="group-child9-dashboard-charts" />
                      </div>
                      <div className="k-parent3-dashboard-charts">
                        <div className="k5-dashboard-charts">1k</div>
                        <div className="group-child10-dashboard-charts" />
                      </div>
                      <div className="parent-dashboard-charts">
                        <div className="div7-dashboard-charts">0</div>
                        <div className="group-child11-dashboard-charts" />
                      </div>
                    </div>
                    <img className="vector-icon-dashboard-charts" alt="" src={chart1} />
                  </div>
                  <div className="group-parent5-dashboard-charts">
                    <div className="active-listing-group-dashboard-charts">
                      <div className="active-listing1-dashboard-charts">Active listing</div>
                      <div className="group-dashboard-charts">
                        <div className="div8-dashboard-charts">{activeListing?.length}</div>
                        <div className="active-listing-container-dashboard-charts">
                          <div className="active-listing2-dashboard-charts">Active listing</div>
                          <div className="rectangle-div-dashboard-charts" />
                        </div>
                      </div>
                    </div>
                    <div className="group-wrapper-dashboard-charts">
                      <div className="rectangle-parent-dashboard-charts">
                        <div className="group-child12-dashboard-charts" />
                        <div className="march-2022-dashboard-charts">March 2022</div>
                        <img
                          className="vector-icon1-dashboard-charts"
                          alt=""
                          src={vector}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reject-listing-dashboard-charts">
              <div className="reject-listing-child-dashboard-charts" />
              <div className="group-parent6-dashboard-charts">
                <div className="group-parent7-dashboard-charts">
                  <div className="group-parent8-dashboard-charts">
                    <div className="line-parent5-dashboard-charts">
                      <div className="group-child13-dashboard-charts" />
                      <div className="div9-dashboard-charts">16/04</div>
                    </div>
                    <div className="line-parent6-dashboard-charts">
                      <div className="group-child14-dashboard-charts" />
                      <div className="div10-dashboard-charts">17/04</div>
                    </div>
                    <div className="line-parent7-dashboard-charts">
                      <div className="group-child15-dashboard-charts" />
                      <div className="div11-dashboard-charts">18/04</div>
                    </div>
                    <div className="line-parent8-dashboard-charts">
                      <div className="group-child16-dashboard-charts" />
                      <div className="div12-dashboard-charts">19/04</div>
                    </div>
                    <div className="line-parent9-dashboard-charts">
                      <div className="group-child17-dashboard-charts" />
                      <div className="div13-dashboard-charts">20/04</div>
                    </div>
                    <div className="line-parent10-dashboard-charts">
                      <div className="group-child18-dashboard-charts" />
                      <div className="div14-dashboard-charts">21/04</div>
                    </div>
                    <div className="line-parent11-dashboard-charts">
                      <div className="group-child19-dashboard-charts" />
                      <div className="div15-dashboard-charts">22/04</div>
                    </div>
                  </div>
                  <div className="group-parent9-dashboard-charts">
                    <div className="k-parent4-dashboard-charts">
                      <div className="k6-dashboard-charts">4k</div>
                      <div className="group-child20-dashboard-charts" />
                    </div>
                    <div className="k-parent5-dashboard-charts">
                      <div className="k7-dashboard-charts">5k</div>
                      <div className="group-child21-dashboard-charts" />
                    </div>
                    <div className="k-parent6-dashboard-charts">
                      <div className="k8-dashboard-charts">6k</div>
                      <div className="group-child22-dashboard-charts" />
                    </div>
                    <div className="k-parent7-dashboard-charts">
                      <div className="k9-dashboard-charts">3k</div>
                      <div className="group-child23-dashboard-charts" />
                    </div>
                    <div className="k-parent8-dashboard-charts">
                      <div className="k10-dashboard-charts">2k</div>
                      <div className="group-child24-dashboard-charts" />
                    </div>
                    <div className="k-parent9-dashboard-charts">
                      <div className="k11-dashboard-charts">1k</div>
                      <div className="group-child25-dashboard-charts" />
                    </div>
                    <div className="container-dashboard-charts">
                      <div className="div16-dashboard-charts">0</div>
                      <div className="group-child26-dashboard-charts" />
                    </div>
                  </div>
                  <img className="group-child27-dashboard-charts" alt="" src={chart1} />
                </div>
                <div className="group-frame-dashboard-charts">
                  <div className="group-parent10-dashboard-charts">
                    <div className="group-parent11-dashboard-charts">
                      <div className="reject-listing-parent-dashboard-charts">
                        <div className="reject-listing1-dashboard-charts">{`Reject listing `}</div>
                        <div className="parent1-dashboard-charts">
                          <div className="div17-dashboard-charts">{rejectListing?.length}</div>
                          <div className="reject-listing-group-dashboard-charts">
                            <div className="reject-listing2-dashboard-charts">
                              Reject listing
                            </div>
                            <div className="group-child28-dashboard-charts" />
                          </div>
                        </div>
                      </div>
                      <div className="group-child29-dashboard-charts" />
                      <div className="march-20221-dashboard-charts">March 2022</div>
                    </div>
                    <img className="vector-icon2-dashboard-charts" alt="" src={vector} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pending-listing-dashboard-charts">
              <div className="pending-listing-child-dashboard-charts" />
              <div className="group-parent12-dashboard-charts">
                <div className="group-parent13-dashboard-charts">
                  <div className="group-parent14-dashboard-charts">
                    <div className="line-parent12-dashboard-charts">
                      <div className="group-child30-dashboard-charts" />
                      <div className="div18-dashboard-charts">16/04</div>
                    </div>
                    <div className="line-parent13-dashboard-charts">
                      <div className="group-child31-dashboard-charts" />
                      <div className="div19-dashboard-charts">17/04</div>
                    </div>
                    <div className="line-parent14-dashboard-charts">
                      <div className="group-child32-dashboard-charts" />
                      <div className="div20-dashboard-charts">18/04</div>
                    </div>
                    <div className="line-parent15-dashboard-charts">
                      <div className="group-child33-dashboard-charts" />
                      <div className="div21-dashboard-charts">19/04</div>
                    </div>
                    <div className="line-parent16-dashboard-charts">
                      <div className="group-child34-dashboard-charts" />
                      <div className="div22-dashboard-charts">20/04</div>
                    </div>
                    <div className="line-parent17-dashboard-charts">
                      <div className="group-child35-dashboard-charts" />
                      <div className="div23-dashboard-charts">21/04</div>
                    </div>
                    <div className="line-parent18-dashboard-charts">
                      <div className="group-child36-dashboard-charts" />
                      <div className="div24-dashboard-charts">22/04</div>
                    </div>
                  </div>
                  <div className="group-parent15-dashboard-charts">
                    <div className="k-parent10-dashboard-charts">
                      <div className="k12-dashboard-charts">4k</div>
                      <div className="group-child37-dashboard-charts" />
                    </div>
                    <div className="k-parent11-dashboard-charts">
                      <div className="k13-dashboard-charts">5k</div>
                      <div className="group-child38-dashboard-charts" />
                    </div>
                    <div className="k-parent12-dashboard-charts">
                      <div className="k14-dashboard-charts">6k</div>
                      <div className="group-child39-dashboard-charts" />
                    </div>
                    <div className="k-parent13-dashboard-charts">
                      <div className="k15-dashboard-charts">3k</div>
                      <div className="group-child40-dashboard-charts" />
                    </div>
                    <div className="k-parent14-dashboard-charts">
                      <div className="k16-dashboard-charts">2k</div>
                      <div className="group-child41-dashboard-charts" />
                    </div>
                    <div className="k-parent15-dashboard-charts">
                      <div className="k17-dashboard-charts">1k</div>
                      <div className="group-child42-dashboard-charts" />
                    </div>
                    <div className="parent2-dashboard-charts">
                      <div className="div25-dashboard-charts">0</div>
                      <div className="group-child43-dashboard-charts" />
                    </div>
                  </div>
                  <img className="group-child44-dashboard-charts" alt="" src={chart1} />
                </div>
                <div className="group-parent16-dashboard-charts">
                  <div className="pending-listing-parent-dashboard-charts">
                    <div className="pending-listing1-dashboard-charts">Pending listing</div>
                    <div className="parent3-dashboard-charts">
                      <div className="div26-dashboard-charts">{pendingListing?.length}</div>
                      <div className="pending-listing-group-dashboard-charts">
                        <div className="pending-listing2-dashboard-charts">Pending listing</div>
                        <div className="group-child45-dashboard-charts" />
                      </div>
                    </div>
                  </div>
                  <div className="group-wrapper1-dashboard-charts">
                    <div className="rectangle-group-dashboard-charts">
                      <div className="group-child46-dashboard-charts" />
                      <div className="march-20222-dashboard-charts">March 2022</div>
                      <img className="vector-icon3-dashboard-charts" alt="" src={vector} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="total-revenue-parent-dashboard-charts">
            <div className="total-revenue-dashboard-charts">
              <div className="total-revenue-child-dashboard-charts" />
              <div className="group-parent17-dashboard-charts">
                <img
                  className="group-icon-dashboard-charts"
                  alt=""
                  src={totalRevenue}
                />
                <div className="total-revenue-group-dashboard-charts">
                  <div className="total-revenue1-dashboard-charts">Total Revenue</div>
                  <div className="div27-dashboard-charts">{`₹${membershipRevenueTotal}`}</div>
                  <button className="view-all-detail-parent-dashboard-charts" onClick={()=>handleNavigation("membershipRevenue")}>
                    <span className="view-all-detail-dashboard-charts">View all Details</span>
                    <img className="line-icon-dashboard-charts" alt="" src={rightArrow} />
                  </button>
                </div>
              </div>
            </div>
            <div className="paid-vendrs-dashboard-charts">
              <div className="paid-vendrs-child-dashboard-charts" />
              <div className="total-vendors-icon-parent-dashboard-charts">
                <img
                  className="total-vendors-icon-dashboard-charts"
                  alt=""
                  src={paidVendor}
                />
                <div className="paid-vendrs-parent-dashboard-charts">
                  <div className="paid-vendrs1-dashboard-charts">Paid Vendors</div>
                  <div className="div28-dashboard-charts">{activeMemberData?.length}</div>
                  <button className="view-all-detail-group-dashboard-charts" onClick={()=>handleNavigation("vendor")}>
                    <span className="view-all-detail1-dashboard-charts">View all Details</span>
                    <img className="group-child47-dashboard-charts" alt="" src={rightArrow} />
                  </button>
                </div>
              </div>
            </div>
            <div className="free-revenue-dashboard-charts">
              <div className="free-revenue-child-dashboard-charts" />
              <div className="group-parent18-dashboard-charts">
                <img
                  className="group-child48-dashboard-charts"
                  alt=""
                  src={freeVendor}
                />
                <div className="free-revenue-parent-dashboard-charts">
                  <div className="free-revenue1-dashboard-charts">Free Vendor</div>
                  <div className="div29-dashboard-charts">{freeVendorData?.length}</div>
                  <button className="view-all-detail-container-dashboard-charts">
                    <span className="view-all-detail2-dashboard-charts">View all Details</span>
                    <img className="group-child49-dashboard-charts" alt="" src={rightArrow} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
