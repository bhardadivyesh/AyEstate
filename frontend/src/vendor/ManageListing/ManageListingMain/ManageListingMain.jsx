import React, { useContext, useEffect, useState } from 'react'
import ActiveListing from '../ActiveListing/ActiveListing'
import PendingListing from '../PendingListing/PendingListing'
import RejectListing from '../RejectListing/RejectListing'
import manageListingContext from "../ManageListingContext"
import vendorDashboardContext from '../../VendorDashboardContext'

const ManageListingMain = () => {
  const value = useContext(vendorDashboardContext)
    const [manageListingRender,setManageListingRender] = useState("activeListing")
  return (
    <>
    <manageListingContext.Provider value={{manageListingRender,setManageListingRender}}>
    {manageListingRender == "activeListing" && <ActiveListing />}
    {manageListingRender == "pendingListing" && <PendingListing />}
    {manageListingRender == "rejectListing" && <RejectListing />}
    </manageListingContext.Provider>
    </>
  )
}

export default ManageListingMain