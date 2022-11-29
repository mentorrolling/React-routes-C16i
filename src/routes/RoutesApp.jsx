import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";
import ProductoScreen from "../pages/ProductoScreen";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        {/* rutas  */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/product/:id" element={<ProductoScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
