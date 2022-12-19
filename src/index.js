/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import "./index.css";
import "./utils/string.js";
import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      draggable
      rtl={false}
      theme="light"
      autoClose={5000}
      pauseOnFocusLoss
      newestOnTop={false}
      hideProgressBar={false}
      position="bottom-center"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
