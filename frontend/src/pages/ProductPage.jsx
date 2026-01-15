import React from "react";
import { Link } from "react-router-dom";
import { Plus, Download, Filter, ArrowUpDown, Search, MoreHorizontal } from "lucide-react";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { products, productStats } from "../data/mockData";

function ProductPage() {
  return (
    <div className="space-y-6">
      {/* 1. HEADER PAGE */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Inventory</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your entire product catalog, track stock, and organize categories.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Export
          </button>
          <Link to="/products/add">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              <Plus size={18} />
              Add New Product
            </button>
          </Link>
        </div>
      </div>

      {/* 2. STATS CARDS (Reuse Component Kemarin) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* 3. MAIN TABLE SECTION */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* A. Toolbar (Tabs & Filters) */}
        <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4 items-center">
          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {["All", "Active", "Draft", "Archived"].map((tab, idx) => (
              <button key={tab} className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${idx === 0 ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                {tab}
              </button>
            ))}
          </div>

          {/* Filter & Sort Buttons */}
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              <ArrowUpDown size={16} />
              Sort
            </button>
          </div>
        </div>

        {/* B. Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <th className="p-4 w-10">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4">Product</th>
                <th className="p-4">SKU</th>
                <th className="p-4">Stock Status</th>
                <th className="p-4">Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>

                  {/* Kolom Product (Gambar + Nama) */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100 border border-gray-200" />
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-sm text-gray-600 font-mono">{product.sku}</td>

                  {/* Kolom Status (Pakai Component Baru) */}
                  <td className="p-4">
                    <StatusBadge status={product.stockStatus} />
                  </td>

                  <td className="p-4 text-sm font-medium text-gray-900">${product.price}</td>

                  <td className="p-4 text-center">
                    <button className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* C. Pagination Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 5 of 1,240 results</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">{"<"}</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">3</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">12</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
