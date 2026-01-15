import React from "react";
import ProductForm from "../components/ProductForm";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

function AddProductPage() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Page Header */}
      <div className="mb-6">
        <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-4 text-sm font-medium">
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
        <p className="text-gray-500 mt-1">Fill in the details below to list a new item in your store.</p>
      </div>

      {/* Main Form Component */}
      <ProductForm />
    </div>
  );
}

export default AddProductPage;
