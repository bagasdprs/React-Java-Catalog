// src/data/mockData.js
import { Package, AlertTriangle, TrendingUp, Folder, ShoppingBag } from "lucide-react";

export const productStats = [
  {
    title: "Total Products",
    value: "1,240",
    trend: "+5.2%",
    trendUp: true,
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Low Stock Items",
    value: "15",
    trend: "+2.4%",
    trendUp: true, // Asumsi naik itu peringatan (bisa disesuaikan)
    icon: AlertTriangle,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Total Value",
    value: "$45,200",
    trend: "+12%",
    trendUp: true,
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Categories",
    value: "12",
    trend: "0%",
    trendUp: true,
    icon: Folder,
    color: "bg-purple-100 text-purple-600",
  },
];

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    sku: "WH-2024-BLK",
    stockStatus: "In Stock", // Nanti warna hijau
    stockQuantity: 120,
    stock: 55,
    price: 129.99,
    image: "https://placehold.co/100x100?text=Headphone",
  },
  {
    id: 2,
    name: "Ergonomic Mouse",
    category: "Accessories",
    sku: "EM-500-GRY",
    stockStatus: "Low Stock", // Nanti warna oranye
    stockQuantity: 5,
    stock: 5,
    price: 45.0,
    image: "https://placehold.co/100x100?text=Mouse",
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Office",
    sku: "LS-ALU-SIL",
    stockStatus: "In Stock",
    stockQuantity: 50,
    stock: 135,
    price: 39.99,
    image: "https://placehold.co/100x100?text=Stand",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Electronics",
    sku: "MK-RGB-104",
    stockStatus: "Out of Stock", // Nanti warna merah
    stockQuantity: 0,
    stock: 0,
    price: 89.5,
    image: "https://placehold.co/100x100?text=Keyboard",
  },
];

export const orderStats = [
  {
    title: "Revenue Today",
    value: "$4,290.00",
    trend: "+12% vs yesterday",
    trendUp: true,
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Active Shipments",
    value: "18",
    trend: "Processing",
    trendUp: true,
    icon: Package, // Pastikan import Package di atas
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Pending Orders",
    value: "5",
    trend: "Needs Action",
    trendUp: false,
    icon: AlertTriangle, // Pastikan import AlertTriangle di atas
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Completed Today",
    value: "142",
    trend: "+5%",
    trendUp: true,
    icon: ShoppingBag, // Tambahkan import ShoppingBag
    color: "bg-purple-100 text-purple-600",
  },
];

// 4. Data List Order
export const orders = [
  {
    id: "#ORD-7751",
    customer: "Jane Doe",
    email: "jane@example.com",
    avatar: "JD",
    date: "Oct 24, 2023",
    amount: "120.50",
    paymentStatus: "Paid",
    orderStatus: "Shipped",
  },
  {
    id: "#ORD-7752",
    customer: "John Smith",
    email: "john@example.com",
    avatar: "JS",
    date: "Oct 25, 2023",
    amount: "45.00",
    paymentStatus: "Pending",
    orderStatus: "Processing",
  },
  {
    id: "#ORD-7753",
    customer: "Alice Hall",
    email: "alice@tech.com",
    avatar: "AH",
    date: "Oct 25, 2023",
    amount: "210.00",
    paymentStatus: "Failed",
    orderStatus: "Cancelled",
  },
  {
    id: "#ORD-7754",
    customer: "Marcus Brown",
    email: "marcus@design.co",
    avatar: "MB",
    date: "Oct 26, 2023",
    amount: "88.25",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
  },
  {
    id: "#ORD-7755",
    customer: "Sarah Connor",
    email: "sarah@future.net",
    avatar: "SC",
    date: "Oct 27, 2023",
    amount: "350.00",
    paymentStatus: "Paid",
    orderStatus: "Processing",
  },
];
