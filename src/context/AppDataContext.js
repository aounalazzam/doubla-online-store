/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import React, { useState } from "react";

const getDataFromLocalStorage = (key, defaultValue) => {
  const cartProducts = localStorage.getItem(key);

  if (cartProducts !== null) {
    return JSON.parse(cartProducts);
  }

  return defaultValue;
};

const AppDataContext = React.createContext();

function AppDataProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    getDataFromLocalStorage("wish-list", [])
  );
  const [cart, setCart] = useState(getDataFromLocalStorage("cart", []));

  const emptyCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
  };

  const updateCart = (item, operation) => {
    let data;

    if (operation === "add") {
      data = [...cart, { ...item, quantity: 1 }];
    }

    if (operation === "update") {
      data = cart.map((prod) => {
        if (prod.title === item.title) {
          return item;
        }

        return prod;
      });
    }

    if (operation === "remove") {
      data = cart.filter((prod) => prod.title !== item.title);
    }

    localStorage.setItem("cart", JSON.stringify(data));

    setCart(data);
  };

  const updateWishlist = (item, operation) => {
    let data;

    if (operation === "add") {
      data = [...wishlist, item];
    }

    if (operation === "update") {
      data = wishlist.map((prod) => {
        if (prod.title === item.title) {
          return item;
        }

        return prod;
      });
    }

    if (operation === "remove") {
      data = wishlist.filter((prod) => prod.title !== item.title);
    }

    localStorage.setItem("wish-list", JSON.stringify(data));

    setWishlist(data);
  };

  return (
    <AppDataContext.Provider
      value={{ emptyCart, updateCart, updateWishlist, cart, wishlist }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export { AppDataContext, AppDataProvider };
