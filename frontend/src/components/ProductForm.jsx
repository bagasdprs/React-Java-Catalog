import React, { useState } from "react";
import { Upload, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const navigate = useNavigate();

  // State sederhana untuk preview gambar (Visual only)
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="p-8 space-y-8">
        {/* SECTION 1: GENERAL INFO */}
        <section>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            General Information
          </h3>

          <div className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input
                type="text"
                placeholder="e.g., Leather Weekend Bag"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                {/* Simple Toolbar Dummy */}
                <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex gap-3 text-gray-500 text-sm font-bold">
                  <button className="hover:text-gray-800">B</button>
                  <button className="italic hover:text-gray-800">I</button>
                  <button className="underline hover:text-gray-800">U</button>
                </div>
                <textarea rows="4" placeholder="Describe your product..." className="w-full px-4 py-3 outline-none resize-none text-gray-700 placeholder-gray-400"></textarea>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* SECTION 2: PRICING & INVENTORY (GRID LAYOUT) */}
        <section>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
            Pricing & Inventory
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SKU */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
              <input type="text" placeholder="e.g., BAG-001" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input type="number" placeholder="0.00" className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Office">Office</option>
                <option value="Clothing">Clothing</option>
              </select>
            </div>

            {/* Stock Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
              <input type="number" placeholder="e.g., 100" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* SECTION 3: MEDIA UPLOAD (CATCHY PART) */}
        <section>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
            Product Media
          </h3>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors relative cursor-pointer group">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange} />

            {imagePreview ? (
              <div className="relative inline-block">
                <img src={imagePreview} alt="Preview" className="h-48 rounded-lg shadow-md object-cover" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setImagePreview(null);
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="text-blue-500" size={32} />
                </div>
                <p className="text-gray-900 font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-gray-500 text-sm">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 rounded-b-xl flex justify-end gap-3">
        <button onClick={() => navigate("/products")} className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Save Draft</button>
        <button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
          <Plus size={18} />
          Publish Product
        </button>
      </div>
    </div>
  );
}

export default ProductForm;
