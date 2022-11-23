import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarApp from "../components/NavbarApp";
import AboutScreen from "../pages/AboutScreen";
import ErrorScreen from "../pages/ErrorScreen";
import HomeScreen from "../pages/HomeScreen";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
