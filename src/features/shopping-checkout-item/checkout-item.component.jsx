import "./checkout-item.style.css";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <span className="name">{name}</span>
      <span className="qty">{quantity}</span>
      <div className="remove-button"> &#10005;</div>
    </div>
  );
};

export default CheckoutItem;
