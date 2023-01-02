/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const getAuthStatus = () => {
  return (
    (localStorage.getItem("user") || sessionStorage.getItem("user")) !== null
  );
};

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(() => {
    const userData =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (userData) {
      return JSON.parse(userData);
    }

    return {};
  });

  const isAuthenticated = useRef(getAuthStatus());

  const signIn = (isSessionLogIn, user) => {
    (isSessionLogIn ? sessionStorage : localStorage).setItem(
      "user",
      JSON.stringify(user)
    );
    setUser(user);
    isAuthenticated.current = true;
  };

  const signOut = () => {
    setUser({});
    isAuthenticated.current = false;
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    if (location.pathname === "/cart" || location.pathname === "/wishlist") {
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isAuthenticated: isAuthenticated.current,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
