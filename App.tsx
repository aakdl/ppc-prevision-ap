import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Activities from "./pages/Activities";

export default function App() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <BrowserRouter>
      {isAuthenticated && <Header />}
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/activities" element={<PrivateRoute><Activities /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}