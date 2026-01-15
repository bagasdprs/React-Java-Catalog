import React from "react";

const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      // SUCCESS (Green)
      case "In Stock":
      case "Paid":
      case "Delivered":
        return "bg-green-100 text-green-700 border-green-200";

      // WARNING (Orange/Yellow)
      case "Low Stock":
      case "Pending":
      case "Processing":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";

      // DANGER (Red)
      case "Out of Stock":
      case "Failed":
        return "bg-red-100 text-red-700 border-red-200";

      // INFO (Blue)
      case "Shipped":
        return "bg-blue-100 text-blue-700 border-blue-200";

      // NEUTRAL (Gray)
      case "Cancelled":
        return "bg-gray-100 text-gray-700 border-gray-200";

      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyle(status)}`}>{status}</span>;
};

export default StatusBadge;
