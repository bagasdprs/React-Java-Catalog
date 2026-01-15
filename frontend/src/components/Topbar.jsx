import React from "react";
import { useLocation } from "react-router-dom";

function Topbar() {
  const location = useLocation();
  const pathName = location.pathname.slice(1);
  const capitalizePath = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center text-sm">
        {location.pathname === "/dashboard" ? (
          <span className="font-bold text-gray-800 text-lg">Dashboard Overview</span>
        ) : (
          <>
            <span className="text-gray-500 mr-2">Dashboard</span>
            <span className="text-gray-400 mr-2">/</span>
            <span className="font-semibold text-gray-800 mr-2">{capitalizePath}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-64 pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search catalog..."
          />
        </div>

        <button className="p-2 text-gray-400 hover:text-gray-500 relative">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
      </div>
    </header>
  );
}

export default Topbar;
