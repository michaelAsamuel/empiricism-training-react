import "./shopping-cart.style.css";
import ShoppingCartItem from "../shopping-cart-item/shopping-cart-item.component";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  console.log("render cart");
  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(ShoppingCartContext);
  console.log("cart checkout", cartItems);

  const cartTotal = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navigate = useNavigate();
  const checkoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-item-header">
        <div className="shopping-cart-title"> Shopping Cart </div>
        <div className="item-name">Item Desctiption</div>
        <div className="item-qty">Qty</div>
      </div>

      {cartItems.map((item) => (
        <ShoppingCartItem key={item.id} cartItem={item} />
      ))}

      <div className="shopping-cart-item-header">
        <div className="item-name">Total</div>
        <div className="item-qty">{cartTotal}</div>
      </div>
      <br />
      <button onClick={checkoutHandler}> Checkout</button>
    </div>
  );
};

export default ShoppingCart;
