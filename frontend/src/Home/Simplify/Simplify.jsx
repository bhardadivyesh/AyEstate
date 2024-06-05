import Column from "../Column/Column";
import placeholderImage1 from "../../assets/Placeholder Image1.png";
import placeholderImage2 from "../../assets/Placeholder Image2.png";
import placeholderImage3 from "../../assets/Placeholder Image3.png";
import "./Simplify.css";

const Simplify = () => {
  return (
    <div className="div1-Simplify-homepage">
      <div className="div2-Simplify-homepage">
        <div className="div3-Simplify-homepage">
          <div className="div4-Simplify-homepage">
            <div className="div5-Simplify-homepage">
              <div className="div6-Simplify-homepage">Simplify</div>
            </div>
            <h1 className="h1-1-Simplify-homepage">
              Streamline Your Property Buying or Selling Process
            </h1>
          </div>
          <div className="div7-Simplify-homepage">
            Our website provides a step-by-step guide to help you seamlessly
            navigate the process of buying or selling property. From finding the
            perfect property to closing the deal, we've got you covered.
          </div>
        </div>
      </div>
      <div className="div8-Simplify-homepage">
        <div className="div9-Simplify-homepage">
          <Column
            placeholderImage={placeholderImage1}
            heading="Find Your Dream"
            heading2="Property"
            text="Browse through a wide selection of properties"
            text2="that match your preferences and requirements."
          />
          <Column
            placeholderImage={placeholderImage2}
            heading="Connect with Trusted"
            heading2="Agents"
            text="Our platform connects you with experienced and "
            text2="reliable real estate agents who will guide you"
            text3="through the process."
          />
          <Column
            placeholderImage={placeholderImage3}
            heading="Negotiate and Close the"
            heading2="Deal"
            text="Our experts will assist you in negotiating the best"
            text2="terms and ensuring a smooth closing process."
          />
        </div>
        <div className="div10-Simplify-homepage" />
      </div>
    </div>
  );
};

export default Simplify;
