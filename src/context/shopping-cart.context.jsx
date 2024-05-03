import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCartImpl: () => {},
});

const addItemToCartImpl = (cartItems, productToAdd) => {
  console.log("inside addItemToCartImpl");
  const isItemExisting = cartItems.find((item) => item.id === productToAdd.id);

  if (isItemExisting) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCartImpl = (cartItems, productToRemove) => {
  console.log("inside removeItemFromCartImpl");
  return cartItems.map((item) => {
    return item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

export const ShoppingCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItemToCartImpl(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeItemFromCartImpl(cartItems, productToRemove));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
