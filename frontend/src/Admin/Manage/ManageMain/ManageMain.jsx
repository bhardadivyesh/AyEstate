import React, { useContext, useEffect, useState } from "react";
import manageContext from "../Manage";
import Category from "../Category/Category";
import Location from "../Location/Location";

const ManageMain = () => {
  const [manageRenderState, setManageRenderState] = useState("Categories");
  return (
    <>
      <manageContext.Provider
        value={{ manageRenderState, setManageRenderState }}
      >
        {manageRenderState == "Categories" && <Category />}
        {manageRenderState == "Location" && <Location />}
      </manageContext.Provider>
    </>
  );
};

export default ManageMain;
