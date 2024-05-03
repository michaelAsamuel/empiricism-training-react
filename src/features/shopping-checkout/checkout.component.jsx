import "./checkout.style.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import CheckoutItem from "../shopping-checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const cartTotal = cartItems.reduce(
    (acc, cartItems) => acc + cartItems.quantity,
    0
  );
  return (
    <div className="checkout-container">
      <h1> Checkout</h1>
      <div className="checkout-header">
        <span className="name">Course Name</span>
        <span className="quantity">Qty</span>
        <div className="remove-button"> Del</div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="checkout-total"> Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
