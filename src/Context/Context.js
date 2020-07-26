import React, { createContext, useState } from "react";

export const ProductContext = createContext();
export const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={[cart, setCart]}>
      {props.children}
    </ProductContext.Provider>
  );
};
