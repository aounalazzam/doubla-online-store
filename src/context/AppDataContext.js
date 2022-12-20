/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import React, { useState } from "react";

const getDataFromLocalStorage = (key) => {
  const cartProducts = localStorage.getItem(key);

  if (cartProducts !== null) {
    return JSON.parse(cartProducts);
  }

  return [];
};

const AppDataContext = React.createContext({
  cart: null,
  wishlist: null,
});

function AppDataProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    getDataFromLocalStorage("wish-list")
  );
  const [cart, setCart] = useState(getDataFromLocalStorage("cart"));

  const updateCart = (item, operation) => {
    setCart((cart) => {
      let data;

      cart = cart || [];

      if (operation === "add") {
        data = [...cart, { ...item, quantity: 1 }];
      }

      if (operation === "remove") {
        data = cart.filter((prod) => prod.title !== item.title);
      }

      localStorage.setItem("cart", JSON.stringify(data));

      return data;
    });
  };

  const updateWishlist = (item, operation) => {
    setWishlist((wishlist) => {
      let data;

      wishlist = wishlist || [];

      if (operation === "add") {
        data = [...wishlist, item];
      }
      if (operation === "remove") {
        data = wishlist.filter((prod) => prod.title !== item.title);
      }

      localStorage.setItem("wish-list", JSON.stringify(wishlist));

      return data;
    });
  };

  return (
    <AppDataContext.Provider
      value={{ updateCart, updateWishlist, cart, wishlist }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export { AppDataContext, AppDataProvider };
