/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { SignInPage } from "./pages/AuthPage/SignInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishListPage } from "./pages/WishListPage/WishListPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
