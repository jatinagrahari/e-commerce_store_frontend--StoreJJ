import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Users, Package, ShoppingCart, IndianRupee, Plus, Settings, Users2, LayoutDashboard } from "lucide-react";

const AdminDashboard = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalRevenue: 0,
    orders: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const getAnalytics = async () => {
      try {
        const res = await axios.get("/api/v1/analytics");
        setData(res.data.data);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      }
    };

    getAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-7xl animate-fade-in">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin Dashboard</h1>
            </div>
            <p className="mt-2 text-sm text-muted">Monitor and manage your Store JJ store.</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">Total Orders</p>
                <h2 className="text-2xl font-bold text-foreground">{data.totalOrders}</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-500/10 p-3 text-purple-500">
                <Package className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">Total Products</p>
                <h2 className="text-2xl font-bold text-foreground">{data.totalProducts}</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-500">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">Total Users</p>
                <h2 className="text-2xl font-bold text-foreground">{data.totalUsers}</h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-amber-500/10 p-3 text-amber-500">
                <IndianRupee className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">Total Revenue</p>
                <h2 className="text-2xl font-bold text-foreground">
                  ₹{data.totalRevenue?.toLocaleString("en-IN") || 0}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="mt-10 rounded-3xl border border-border bg-surface p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-foreground">Store Management</h2>
            <p className="mt-1 text-sm text-muted">Quick actions to manage your inventory and users.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => navigate("/admin/add-product")}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Plus className="h-6 w-6" />
              </div>
              <span className="font-semibold text-foreground">Add Product</span>
            </button>

            <button
              onClick={() => navigate("/admin/products")}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Package className="h-6 w-6" />
              </div>
              <span className="font-semibold text-foreground">Manage Products</span>
            </button>

            <button
              onClick={() => navigate("/admin/orders")}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Settings className="h-6 w-6" />
              </div>
              <span className="font-semibold text-foreground">Manage Orders</span>
            </button>

            <button
              onClick={() => navigate("/admin/users")}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Users2 className="h-6 w-6" />
              </div>
              <span className="font-semibold text-foreground">Users Directory</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
