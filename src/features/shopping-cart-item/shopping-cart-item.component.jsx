import "./shopping-cart-item.style.css";

const ShoppingCartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item">
        <div className="item-name">{name}</div>
        <div className="item-qty">{quantity}</div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
