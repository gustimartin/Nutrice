import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/productsApi";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import user from "./features/authSlice.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>
        <NavBar />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
