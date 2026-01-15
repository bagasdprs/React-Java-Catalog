import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import StatCard from "../components/StatCard";
import { statsData, salesData, recentActivity } from "../data/dashboardData";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* 1. Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back, Bagas</h1>
          <p className="text-gray-500 mt-1">Here is your store overview for today.</p>
        </div>
      </div>

      {/* 2. Stats Grid (4 Kotak Atas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* 3. Main Content Grid (Chart + Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KIRI: Sales Chart (Makan 2 kolom) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Sales Overview</h3>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2 outline-none">
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Daily</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} prefix="$" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }} />
                <Area type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KANAN: Recent Activity (Makan 1 kolom) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
            <button className="text-blue-600 text-sm hover:underline">View All</button>
          </div>

          <div className="space-y-6 relative">
            {/* Garis Vertikal (Timeline Line) */}
            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-gray-100"></div>

            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 relative z-10">
                <div className={`w-5 h-5 rounded-full border-2 border-white shadow-sm shrink-0 ${activity.color}`}></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
