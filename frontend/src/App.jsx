import "./App.css";
import DetailPropertyMain from "./DetailProperty/DetailPropertyMain/DetailPropertyMain";
import Homepage from "./Home/HomePage/Homepage";
import ListingMain from "./Listings/ListingMain/ListingMain";
import AboutUsMain from "./AboutUs/AboutUsMain/AboutUsMain"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/context";
import { useState } from "react";
import ContactUsMain from "./ContactUs/ContactUsMain/ContactUsMain";
import FaqsMain from "./Faqs/FaqsMain/FaqsMain";
import BlogMain from "./Blog/BlogMain/BlogMain";
import BlogRecentArticles from "./Blogs/ResentArticals/ResentArticalsMain/BlogRecentArticles";
import BlogRecentlyArticlesDetailMain from "./BlogResentArticalDetail/BlogResentArticalDetailMain/BlogResentArticalDetailMain"
import AdminForm from "./AdminForm/AdminForm";
import Merge from "./Authentication/Merge/Merge";
import PaymentMain from "./paymentGateway/PaymentMain/PaymentMain";
import PaymentSuccess from "./paymentGateway/PaymentSuccess/PaymentSuccess";
import PaymentFail from "./paymentGateway/PaymentFail/PaymentFail";
import RequestUnderReview from "./paymentGateway/RequestUnderReview/RequestUnderReview";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Revenuecat from "./RevenueCat/Revenuecat";
import PaymentNew from "./paymentGateway/Payment/PaymentNew"
import Chart from "./Admin/Chart/Chart";
import VendorDashboard from "./vendor/VendorMasterPage/VendorMasterPage";
function App() {
  const [detailPropertyData,setDetailPropertyData] = useState([])
  const [resentArticalData,setResentArticalData] = useState([])
  const [signUpData,setSignUpData] = useState({})

  return (
    <>
      <MyContext.Provider value={{detailPropertyData,resentArticalData,signUpData,setDetailPropertyData,setResentArticalData,setSignUpData}}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="listing" element={<ListingMain />} />
            <Route path="detailProperty" element={<DetailPropertyMain />} />
            <Route path="aboutUs" element={<AboutUsMain />} />
            <Route path="/contact" element={<ContactUsMain />}/>
            <Route path="/faqs" element={<FaqsMain />}/>
            <Route path="/blog" element={<BlogMain />}/>
            <Route path="/resent-articals" element={<BlogRecentArticles />} />
            <Route path="/resent-artical-detail" element={<BlogRecentlyArticlesDetailMain />}/>
            <Route path="/form" element={<AdminForm />}/>
            <Route path="/" element={<Merge />}/>
            <Route path="/payment" element={<PaymentMain />}/>
            <Route path="/paymentSuccess" element={<PaymentSuccess />}/>
            <Route path="/paymentFail" element={<PaymentFail />}/>
            <Route path="/requestUnderReview" element={<RequestUnderReview />}/>
            <Route path="/revenueCat" element={<Revenuecat />}/>

            {/* admin routes */}
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/paymentScreen" element={<PaymentNew />}/>
            <Route path="/chart" element={<Chart />}/>
            {/* admin route over */}
            {/* Vendor route */}
            <Route path="/vendor-dashboard" element={<VendorDashboard />}/>
            {/* vendor Route over */}
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
