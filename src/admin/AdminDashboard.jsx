import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        console.log(error);
      }
    };

    getAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>

          <p className="mt-1 text-gray-500">Overview of your store.</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Orders</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {data.totalOrders}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Products</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {data.totalProducts}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Users</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {data.totalUsers}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              ₹{data.totalRevenue.toLocaleString("en-IN")}
            </h2>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Store Management
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your store from here.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={() => navigate("/admin/add-product")}
              className="rounded-xl bg-blue-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Add Product
            </button>

            <button
              onClick={() => navigate("/admin/products")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Manage Products
            </button>

            <button
              onClick={() => navigate("/admin/orders")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Manage Orders
            </button>

            <button
              onClick={() => navigate("/admin/users")}
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Users Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
