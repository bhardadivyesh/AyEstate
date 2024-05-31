import React, { useState } from 'react'
import MembershipRevenue from '../../MembershipRevenue/MembershipRevenue'
import MembershipRevenuePopup from '../../MembershipRevenuePopUp/MembershipRevenuePopUp'
import membershipRevenue from "../../MembershipRevenue"

const MembershipRevenueMain = () => {
    const [popUpToggle,setPopUpToggle] = useState(false)
    const [membershipMemberData,setMembershipMemberData] = useState([])
  return (
    <>
    <membershipRevenue.Provider value={{popUpToggle,membershipMemberData,setPopUpToggle,setMembershipMemberData}}>
        {popUpToggle == false && <MembershipRevenue />}
        {popUpToggle == true && <MembershipRevenuePopup />}
    </membershipRevenue.Provider>
    </>
  )
}

export default MembershipRevenueMain