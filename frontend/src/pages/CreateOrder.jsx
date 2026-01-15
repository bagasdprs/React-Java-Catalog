import React, { useState } from "react";
import { Search, ShoppingCart, Trash2, Plus, Minus, User, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/mockData";

function CreateOrder() {
  // --- STATE MANAGEMENT ---
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]); // Array cart items

  // 1. FILTER PRODUCT
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // 2. LOGIC ADD TO CART (Complex State Logic)
  const addToCart = (product) => {
    // Check if product already in cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Validate Stock
      if (existingItem.qty >= product.stock) {
        alert("Stock not sufficient!");
        return;
      }
      // If exists, just update the QTY (Immutability Pattern)
      setCart(cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      // If not exists, add new object with qty: 1
      if (product.stock === 0) {
        alert("Out of Stock!");
        return;
      }
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // 3. LOGIC UPDATE QTY (+ / -)
  const updateQty = (id, amount) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQty = item.qty + amount;
          // Prevent qty from becoming 0 or exceeding stock
          if (newQty < 1) return item;
          if (newQty > item.stock) {
            alert("Max stock reached");
            return item;
          }
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  // 4. LOGIC REMOVE ITEM (Filter Pattern)
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // 5. MATH CALCULATION (Derived State / .reduce)
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-2rem)] gap-6">
      {/* --- KIRI: PRODUCT CATALOG --- */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header & Search */}
        <div className="mb-6">
          <Link to="/orders" className="text-gray-500 hover:text-blue-600 text-sm flex items-center mb-4">
            <ChevronLeft size={16} className="mr-1" /> Back to Orders
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Create New Order</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid (Scrollable) */}
        <div className="flex-1 overflow-y-auto pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => addToCart(product)}
                className={`bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group ${product.stock === 0 ? "opacity-50 grayscale pointer-events-none" : ""}`}
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  {product.stock === 0 && <span className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold text-sm">Out of Stock</span>}
                </div>
                <h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-blue-600 font-bold">${product.price}</span>
                  <span className="text-xs text-gray-500">Stock: {product.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- KANAN: CART SUMMARY (Sticky) --- */}
      <div className="w-full lg:w-96 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col h-full">
        {/* Customer Info (Dummy) */}
        <div className="p-5 border-b border-gray-100 bg-gray-50 rounded-t-xl">
          <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 cursor-pointer hover:border-blue-400 transition-colors">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Walk-in Customer</p>
              <p className="text-xs text-gray-500">Add customer details</p>
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-2">
              <ShoppingCart size={48} className="opacity-20" />
              <p>Cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img src={item.image} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">${item.price}</p>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:bg-gray-100 text-gray-600">
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-sm font-medium">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:bg-gray-100 text-gray-600">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-gray-800 ml-auto">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 self-start mt-1">
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Totals & Checkout */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 rounded-b-xl space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Tax (11%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button disabled={cart.length === 0} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            Process Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
