import "./cart-icon.style.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  console.log("cart", isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">3</span>
    </div>
  );
};

export default CartIcon;
