import Product from "../Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Properties.css";
const Properties = () => {
  const [productData, setProductData] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/get-home").then((res) => {
      if (res.status == 200) {
        setProductData(res.data);
      }
    });
  }, []);
  return (
    <section className="section1-properties-homepage">
      <div className="div1-properties-homepage">
        <div className="div2-properties-homepage">
          <div className="div3-properties-homepage">Find</div>
          <div className="div4-properties-homepage">
            <h1 className="h1-1-properties-homepage">Properties</h1>
            <div className="div5-properties-homepage">
              Explore our curated list of properties and find your dream home.
            </div>
          </div>
        </div>
        <div className="div6-properties-homepage">
          {productData?.map((items, index) => {
            return (
              <Product
                key={index}
                placeholderImage={items.image}
                heading={items.productname}
                text={items.category}
                price={`$${items.price}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Properties;
