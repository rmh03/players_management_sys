// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "./styles/Login.css";
import AppRouter from "./router/AppRouter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);