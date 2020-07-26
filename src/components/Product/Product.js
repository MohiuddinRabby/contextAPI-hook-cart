import React, { useContext } from "react";
import { ProductContext } from "../../Context/Context";

const Product = (props) => {
  const { name, price, img } = props.products;
  const [cart, setCart] = useContext(ProductContext);
  const handleCart = () => {
    const items = { name: name, price: price };
    // console.log(items);
    setCart((prevCart) => [...prevCart, items]);
  };
  return (
    <section className="text-center">
      <img
        src={img}
        className="img-fluid"
        style={{ width: "100px", height: "100px" }}
        alt=""
      />
      <h5>{name}</h5>
      <h6>Price: {price}</h6>
      <button className="btn btn-primary btn-sm" onClick={handleCart}>
        Add to cart
      </button>
    </section>
  );
};

export default Product;
