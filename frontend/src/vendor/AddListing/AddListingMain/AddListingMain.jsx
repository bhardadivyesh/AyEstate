import React, { useState } from 'react'
import AddListing from '../AddListing/AddListing'
import AddListingDetail from '../AddListingDetail/AddListingDetail'
import AddListingContext from '../AddListing'

const AddListingMain = () => {
  const [renderAddListing,setRenderAddListing] = useState("addListing")
  const [addListingData,setAddListingData] = useState([])
  return (
    <>
    <AddListingContext.Provider value={{renderAddListing,addListingData,setRenderAddListing,setAddListingData}}>
      {renderAddListing == "addListing" && <AddListing />}
      {renderAddListing == "addListingDetail" && <AddListingDetail />}
   </AddListingContext.Provider>
   </>
  )
}

export default AddListingMain