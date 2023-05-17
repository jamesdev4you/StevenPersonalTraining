import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./pages_components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
