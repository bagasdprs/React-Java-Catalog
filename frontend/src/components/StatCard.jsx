import React from "react";

const StatCard = ({ title, value, trend, trendUp, icon: Icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-center text-sm">
        <span className={`font-medium px-2 py-0.5 rounded ${trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>{trend}</span>
      </div>
    </div>
  );
};

export default StatCard;
