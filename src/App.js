/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { NavBar } from "./components/NavBar";
import { MainPage } from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
