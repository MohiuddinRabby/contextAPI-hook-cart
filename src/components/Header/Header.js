import React, { useContext } from "react";
import { ProductContext } from "../../Context/Context";

const Header = () => {
  const [cart, setCart] = useContext(ProductContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Total Price - {totalPrice} Cart - {cart.length}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
