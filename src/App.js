/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishListPage } from "./pages/WishListPage/WishListPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export { App };
