import { useEffect, useState } from "react";
import "./Card.css";
import linkdin from "../../assets/aboutUs/team images/team icons/linkdin.png"
import x from "../../assets/aboutUs/team images/team icons/x.png"
import website from "../../assets/aboutUs/team images/team icons/website.png"

const Card = ({ teamData }) => {
  console.log(teamData.position);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([teamData]);
  }, [teamData]);
  return (
    <div className="card">
    {data?.map((items, index) => {
        return (
          <div key={index}>
            <img
              className="photo-by-juan-ordonez"
              loading="lazy"
              alt=""
              src={`http://localhost:1337${teamData?.image?.url}`}
            />
            <div className="content23">
              <div className="title4">
                <div className="name">{teamData?.fullName}</div>
                <div className="job-title">{teamData?.position}</div>
              </div>
              <div className="blend-mode">{teamData?.description}</div>
            </div>
            <div className="social-icons">
              <img className="icon-linkedin" loading="lazy" alt="" src={linkdin} />
              <img className="icon-x" alt="" src={x} />
              <img className="icon-dribble" alt="" src={website} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
