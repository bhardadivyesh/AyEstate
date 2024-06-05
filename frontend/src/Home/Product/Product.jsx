import "./Product.css";
const Product = ({ placeholderImage, heading, text, price }) => {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(numericPrice);
  return (
    <div className="div1-product-homepage">
      {placeholderImage && (
        <img
          className="img1-product-homepage"
          alt=""
          src={`data:image/jpeg;base64,${placeholderImage}`}
        />
      )}
      <div className="div2-product-homepage">
        <div className="div3-product-homepage">
          <div className="div4-product-homepage">{heading}</div>
          <div className="div5-product-homepage">{text}</div>
        </div>
        <div className="div6-product-homepage">{formattedPrice}</div>
      </div>
      <button className="btn1-product-homepage">
        <div className="div7-product-homepage">View Details</div>
      </button>
    </div>
  );
};
export default Product;
