import "./cart-icon.style.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } =
    useContext(ShoppingCartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const cartCount = cartItems.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
