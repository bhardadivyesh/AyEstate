import Product from "../Product/Product";
import LuxuryVilla from "../assets/Luxury Villa.png"
// import ModernApartment from "../assets/Modern Apartment.png"
// import CozyCottage from "../assets/Cozy Cottage.png"
// import SpaciousCondo from "../assets/Spacious Condo.png"
// import LuxuryPenthouse from "../assets/LuxuryPenthouse.png"
// import LakefrontRepeat from "../assets/LakefrontRepeat.png"
// import CharmingBungalow from "../assets/Charming Bungalow.png"
// import LuxuryVilla2 from "../assets/Luxury Villa2.png"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Properties = () => {
  const [productData,setProductData] = useState()
  useEffect(() => {
    axios.get('http://localhost:1337/products')
      .then((res) => {
        setProductData(res.data)
      })
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
          {productData?.map((items,index)=>{
            console.log(items);
            return(
              <Product
              key={index}
              placeholderImage={LuxuryVilla}
              heading={items.productName}
              text={items.category}
              price={items.price}
            />
            )
          })}
        
          {/* <Product
            placeholderImage={ModernApartment}
            heading="Modern Apartment"
            text="City Center"
            price="$500,000"
          />
          <Product
            placeholderImage={CozyCottage}
            heading="Cozy Cottage"
            text="Mountain View"
            price="$300,000"
          />
          <Product
            placeholderImage={SpaciousCondo}
            heading="Spacious Condo"
            text="Beachfront"
            price="$700,000"
          />
          <Product
            placeholderImage={LuxuryPenthouse}
            heading="Luxury Penthouse"
            text="Downtown"
            price="$1,500,000"
          />
          <Product
            placeholderImage={LakefrontRepeat}
            heading="Lakefront Retreat"
            text="Lake View"
            price="$800,000"
          />
          <Product
            placeholderImage={CharmingBungalow}
            heading="Charming Bungalow"
            text="Garden View"
            price="$400,000"
          />
          <Product
            placeholderImage={LuxuryVilla2}
            heading="Luxury Villa"
            text="Oceanfront"
            price="$1,000,000"
          /> */}
        </div>
      </div>
    </section>
  );
};
export default Properties;