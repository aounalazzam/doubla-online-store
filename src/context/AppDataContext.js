/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import React, { useState } from "react";

const getDataFromLocalStorage = (key) => {
  const cartProducts = localStorage.getItem(key);

  if (cartProducts) {
    return JSON.parse(cartProducts);
  }

  return {};
};

const AppDataContext = React.createContext({
  cart: getDataFromLocalStorage("cart"),
  wishlist: getDataFromLocalStorage("wish-list"),
});

function AppDataProvider({ children }) {
  const [cart, setCart] = useState(getDataFromLocalStorage("cart"));
  const [wishList, setWishList] = useState(getDataFromLocalStorage("wish-list"));

  const updateCart = (item, operation) => {
    setCart((cart) => {
      if (operation === "add") {
        return [...cart, item];
      }
      if (operation === "remove") {
        return [...cart].filter(cart.title !== item.title);
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateWishlist = (item, operation) => {
    setWishList((wishlist) => {
      if (operation === "add") {
        return [...wishlist, item];
      }
      if (operation === "remove") {
        return [...wishlist].filter(wishlist.title !== item.title);
      }
    });

    localStorage.setItem("wish-list", JSON.stringify(wishList));
  };

  return (
    <AppDataContext.Provider
      value={{ updateCart, updateWishlist, cart, wishList }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export { AppDataContext, AppDataProvider };
