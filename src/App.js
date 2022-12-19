/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { CartPage } from "./pages/CartPage/CartPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export { App };
