import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navigate = useNavigate( )
  const handleContactBtnClick = ()=>{
    navigate("/contact")
  }
  return (
    <header className="navigation-bar6">
      <div className="branching-logic">
        <h1 className="ayestate5">AyEstate</h1>
      </div>
      <nav className="image-handler-wrapper">
        <nav className="image-handler">
          <Link className="home3" to="/home" >Home</Link>
          <Link className="listings5" to="/listing">Listings</Link>
          <Link className="blog5" to="/blog">Blog</Link>
          <Link className="about-us6" to="/aboutus">About Us</Link>
        </nav>
      </nav>
      <div className="connector" onClick={handleContactBtnClick}>
        <div className="button26" >
          <button className="detail-information7" >Contact Us</button>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
