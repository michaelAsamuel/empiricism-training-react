import "./checkout-item.style.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/shopping-cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, quantity } = cartItem;
  const { addItemToCart, clearItemFromCart, removeItemFromCart } =
    useContext(ShoppingCartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
