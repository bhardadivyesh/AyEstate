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
import SignIn from "./Authentication/SignIn/SignIn";
import SignUp from "./Authentication/SignUp/SignUp";
import PaymentMain from "./paymentGateway/PaymentMain/PaymentMain";
function App() {
  const [detailPropertyData,setDetailPropertyData] = useState([])
  const [resentArticalData,setResentArticalData] = useState([])
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [registered, setRegistered] = useState(false);
  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };
  // const handleRegistration = () => {
  //   setRegistered(true);
  // };
  return (
    <>
      <MyContext.Provider value={{detailPropertyData,resentArticalData,setDetailPropertyData,setResentArticalData}}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<SignIn handleLogin={handleLogin} />}/> */}
            {/* <Route path="/signUp" element={<SignUp handleRegistration={handleRegistration} />} /> */}
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
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
