import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-linear-to-br from-white to-blue-900 font-sans text-gray-900">
      {/* Sidebar on Left */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar on Top */}
        <Topbar />

        {/* Main Content (Scrollable) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">{children}</main>
      </div>
    </div>
    // <div className="flex min-h-screen bg-gray-50 font-sans">
    //   <Sidebar />

    //   <div className="flex-1 flex flex-col">
    //     <Topbar />

    //     <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    //   </div>
    // </div>
  );
}

export default DashboardLayout;
