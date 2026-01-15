import React from "react";
import { Download, Filter, Search, Eye, MoreHorizontal, Calendar, Plus } from "lucide-react";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { orders, orderStats } from "../data/mockData";
import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <div className="space-y-6">
      {/* 1. HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage and track your customer sales and shipments.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Export CSV
          </button>
          <Link to="/orders/create">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
              <Plus size={18} />
              Create Order
            </button>
          </Link>
        </div>
      </div>

      {/* 2. STATS CARDS (POSISI BARU: DI ATAS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {orderStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* 3. MAIN TABLE SECTION */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* Toolbar (Tabs, Search, Date Filter) */}
        <div className="p-4 border-b border-gray-200 flex flex-col lg:flex-row justify-between gap-4 items-center">
          {/* Left: Tabs */}
          <div className="flex w-full lg:w-auto gap-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
            {["All Orders", "Pending", "Completed", "Cancelled"].map((tab, idx) => (
              <button key={tab} className={`px-4 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-all ${idx === 0 ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                {tab}
                {idx === 0 && <span className="ml-2 bg-gray-200 px-1.5 py-0.5 rounded-full text-xs">1,240</span>}
              </button>
            ))}
          </div>

          {/* Right: Search & Date */}
          <div className="flex w-full lg:w-auto gap-2">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search order ID or customer..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white">
              <Calendar size={18} />
              <span className="hidden sm:inline">Oct 2023</span>
            </button>
            <button className="p-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 bg-white">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <th className="p-4 w-10">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Total</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="p-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>

                  <td className="p-4 font-medium text-blue-600 hover:underline">{order.id}</td>

                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">{order.avatar}</div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 text-sm text-gray-600">{order.date}</td>
                  <td className="p-4 text-sm font-bold text-gray-900">${order.amount}</td>

                  <td className="p-4">
                    <StatusBadge status={order.paymentStatus} />
                  </td>
                  <td className="p-4">
                    <StatusBadge status={order.orderStatus} />
                  </td>

                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="p-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <span>Showing 1 to 5 of 1,240 orders</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
