import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import AddProductPage from "./pages/AddProductPage";
import CreateOrder from "./pages/CreateOrder";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        {/* Route 1: Kalau buka root (/), langsung lempar ke /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Route 2: Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route 3: Products */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/add" element={<AddProductPage />} />

        {/* Route 4: Orders */}
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/orders/create" element={<CreateOrder />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
