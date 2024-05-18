import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FrameComponent1.css";
import axios from "axios";
const FrameComponent1 = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1337/about-uses").then((res) => {
      setTeamData(res.data);
    });
  }, []);
  return (
    <section className="about-us-inner-aboutFrame1">
      <div className="frame-parent2-aboutFrame1">
        <div className="frame-wrapper-aboutFrame1">
          <div className="frame-parent3-aboutFrame1">
            <div className="label-wrapper-aboutFrame1">
              <button className="label1-aboutFrame1">
                <div className="label-title1-aboutFrame1">Our team</div>
              </button>
            </div>
            <h1 className="title5-aboutFrame1">meet our creative team</h1>
            <div className="subtitle2-aboutFrame1">
              Magna metus, adipiscing dictumst magna fringilla metus fermentum
              tristique. Enim vitae purus lectus augue maecenas
            </div>
          </div>
        </div>
        <div className="content24-aboutFrame1">
          {teamData.map((member, index) => {
            return <Card key={index} teamData={member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
