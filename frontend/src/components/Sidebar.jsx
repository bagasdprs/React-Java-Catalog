import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col sticky top-0">
      {/* 1. LOGO */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="text-blue-600 font-bold text-xl flex items-center gap-2">
          {/* Icon Kotak dummy */}
          <span className="w-6 h-6 bg-blue-600 rounded"></span>
          InventoryPro
        </div>
      </div>

      {/* 2. MENU ITEMS */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {/* MENU DASHBOARD */}
        <Link to="/dashboard" className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive("/dashboard") ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}`}>
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* MENU PRODUCTS */}
        <Link to="/products" className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive("/products") ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}`}>
          <span className="font-medium">Products</span>
        </Link>

        {/* MENU ORDERS */}
        <Link to="/orders" className={`flex items-center px-4 py-3 rounded-lg transition-colors ${isActive("/orders") ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"}`}>
          <span className="font-medium">Orders</span>
        </Link>
      </nav>

      {/* 3. BOTTOM SECTION (Settings & User) */}
      <div className="p-4 border-t border-gray-100">
        <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-2">
          <span className="font-medium">Settings</span>
        </a>

        {/* Profile Card Kecil */}
        <div className="flex items-center gap-3 px-4 py-2 mt-2">
          <img src="https://placehold.co/40?text=JD" alt="User" className="w-10 h-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-semibold text-gray-700">Jane Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
