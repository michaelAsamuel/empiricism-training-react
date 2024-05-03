import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
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
  const item = cartItems.find((item) => item.id === productToRemove.id);

  if (item.quantity > 1) {
    return cartItems.map((item) => {
      return item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  } else {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
};

const clearItemFromCartImpl = (cartItems, prodToDelete) => {
  console.log("clearItemFromCartImpl", cartItems);
  return cartItems.filter((item) => item.id !== prodToDelete.id);
};

export const ShoppingCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addItemToCartImpl(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeItemFromCartImpl(cartItems, productToRemove));

  const clearItemFromCart = (prodToDelete) =>
    setCartItems(clearItemFromCartImpl(cartItems, prodToDelete));

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
