import Product from "../Product/Product";
import { useEffect, useState } from "react";
import axios from "axios";
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
    <section
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "80px 64px",
        boxSizing: "border-box",
        minHeight: "1610px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Sora",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "80px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "150%",
              fontWeight: "600",
            }}
          >
            Find
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "24px",
              fontSize: "48px",
            }}
          >
            <h1
              style={{
                margin: "0",
                alignSelf: "stretch",
                position: "relative",
                fontSize: "inherit",
                lineHeight: "58px",
                fontWeight: "700",
                fontFamily: "inherit",
              }}
            >
              Properties
            </h1>
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: "18px",
                lineHeight: "150%",
                fontFamily: "Sora",
                fontWeight: "normal",
              }}
            >
              Explore our curated list of properties and find your dream home.
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "64px 30.7px",
            minHeight: "1110px",
            fontSize: "18px",
          }}
        >
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
