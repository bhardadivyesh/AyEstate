import { useEffect, useState } from "react";
import axios from "axios";
import "./ActiveMemberMain.css";

const ActiveMemberMain = () => {
  const [activeMember, setActiveMember] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/get-Registration").then((res) => {
      setActiveMember(res.data);
    });
  }, []);

  return (
    <div className="membership-revenue3-activeMember-Main">
      <main className="rectangle-parent95-activeMember-Main">
        <div className="frame-child112-activeMember-Main" />
        <section className="rectangle-parent96-activeMember-Main">
          <div className="frame-child113-activeMember-Main" />
          <header className="frame-parent54-activeMember-Main">
            <div className="id-wrapper-activeMember-Main">
              <a className="id1-activeMember-Main">Id</a>
            </div>
            <div className="name-wrapper-activeMember-Main">
              <a className="name-activeMember-Main">Name</a>
            </div>
            <div className="company-name-wrapper-activeMember-Main">
              <div className="company-name-activeMember-Main">Company name</div>
            </div>
            <div className="email-wrapper-activeMember-Main">
              <a className="email-activeMember-Main">Email</a>
            </div>
            <div className="membership-wrapper-activeMember-Main">
              <div className="membership-activeMember-Main">Membership</div>
            </div>
          </header>
          <div className="ollcf-activeMember-Main" />
          <table>
            <tbody className="table-container-activeMember-Main">
              {activeMember.map((items, index) => {
                return (
                  <>
                  {console.log(items)}
                    <tr className="table-row-activeMember-Main" key={index}>
                      <td className="row-id-activeMember-Main">{index + 1}</td>
                      <td className="row-name-activeMember-Main">{items.name}</td>
                      <td className="row-company-activeMember-Main">{items.company}</td>
                      <td className="row-email-activeMember-Main">{items.email}</td>
                      <td className="row-membership-type-activeMember-Main">{`₹${items.paymentValue}`}</td>
                    </tr>
                    <div className="line-activeMember-Main" />
                  </>
                );
              })}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default ActiveMemberMain;
