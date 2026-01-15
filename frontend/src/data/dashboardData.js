import { DollarSign, ShoppingBag, Package, AlertTriangle } from "lucide-react";

export const statsData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    trend: "+20.1% from last month",
    trendUp: true,
    icon: DollarSign,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Active Orders",
    value: "573",
    trend: "+12% from last month",
    trendUp: true,
    icon: ShoppingBag,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Total Products",
    value: "1,203",
    trend: "0.0% from last month",
    trendUp: true,
    icon: Package,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Low Stock Alerts",
    value: "12",
    trend: "-5% stock efficiency",
    trendUp: false,
    icon: AlertTriangle,
    color: "bg-orange-100 text-orange-600",
  },
];

export const salesData = [
  { name: "Mon", sales: 4000 },
  { name: "Tue", sales: 3000 },
  { name: "Wed", sales: 5000 },
  { name: "Thu", sales: 2780 },
  { name: "Fri", sales: 1890 },
  { name: "Sat", sales: 2390 },
  { name: "Sun", sales: 3490 },
];

export const recentActivity = [
  {
    id: 1,
    text: "New order #4920 placed",
    subtext: "2 mins ago",
    color: "bg-blue-500",
  },
  {
    id: 2,
    text: "Restock: Winter Jackets",
    subtext: "1 hour ago",
    color: "bg-green-500",
  },
  {
    id: 3,
    text: "Low stock warning (Blue Scarf)",
    subtext: "3 hours ago",
    color: "bg-orange-500",
  },
  {
    id: 4,
    text: "New Review Received",
    subtext: "5 hours ago",
    color: "bg-purple-500",
  },
];
