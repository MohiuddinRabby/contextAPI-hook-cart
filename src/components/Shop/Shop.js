import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Shop = () => {
  const data = fakeData;
  const [products, setProducts] = useState(data);
  return (
    <div className="container py-5">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 py-3" key={product.id}>
            <Product products={product}></Product>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
