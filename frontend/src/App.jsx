import "./App.css";
import DetailPropertyMain from "./DetailProperty/DetailPropertyMain/DetailPropertyMain";
import Homepage from "./Home/HomePage/Homepage";
import ListingMain from "./Listings/ListingMain/ListingMain";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/context";
import { useState } from "react";
function App() {
  const [detailPropertyData,setDetailPropertyData] = useState([])
  return (
    <>
      <MyContext.Provider value={{detailPropertyData,setDetailPropertyData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="listing" element={<ListingMain />} />
            <Route path="detailProperty" element={<DetailPropertyMain />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
