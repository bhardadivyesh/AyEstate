import { useEffect, useState } from "react";
// import useHistory  from 'react-router-dom'; 
import "./Card.css";
import linkdin from "../../assets/aboutUs/team images/team icons/linkdin.png"
import x from "../../assets/aboutUs/team images/team icons/x.png"
import website from "../../assets/aboutUs/team images/team icons/website.png"

const Card = ({ teamData }) => {
  // const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([teamData]);
  }, [teamData]);
  const handleSocialMediaClick = (link) =>{
   window.open(link,'_black')
  }
  return (
    <div className="card-aboutCard">
    {data?.map((items, index) => {
        return (
          <div key={index}>
            {console.log()}
            <img
              className="photo-by-juan-ordonez-aboutCard"
              loading="lazy"
              alt=""
              src={`http://localhost:1337${teamData?.image?.url}`}
            />
            <div className="content23-aboutCard">
              <div className="title4-aboutCard">
                <div className="name-aboutCard">{teamData?.fullName}</div>
                <div className="job-title-aboutCard">{teamData?.position}</div>
              </div>
              <div className="blend-mode-aboutCard">{teamData?.description}</div>
            </div>
            <div className="social-icons-aboutCard">
              <img className="icon-linkedin-aboutCard" loading="lazy" alt="" src={linkdin} onClick={()=>handleSocialMediaClick(items.socialMedia)} />
              <img className="icon-x-aboutCard" alt="" src={x} />
              <img className="icon-dribble-aboutCard" alt="" src={website} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
