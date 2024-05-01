import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.css";
import CartIcon from "../shopping-cart-icon/cart-icon.component";
import ShoppingCart from "../shopping-cart/shopping-cart.component";
import { ShoppingCartContext } from "../../context/shopping-cart.context";
import { useContext } from "react";

const Navigation = () => {
  const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext);
  return (
    <>
      <div className="nav-bar">
        <Link className="nav-logo" to="/">
          <div>Empiricism LLP</div>
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/courses">
            Courses
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <ShoppingCart />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
