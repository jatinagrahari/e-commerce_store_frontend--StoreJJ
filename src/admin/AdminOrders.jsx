import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package, Eye } from "lucide-react";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Attempt to fetch orders if an endpoint exists, otherwise use empty state
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/v1/orders/admin"); // Adjust if endpoint differs
        if (res.data?.data) {
          setOrders(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-7xl animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Package className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Orders</h1>
          </div>
          <p className="mt-2 text-sm text-muted">Manage and track customer orders.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted">
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-muted">
                      <div className="flex items-center justify-center">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                      </div>
                    </td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-16 text-center text-muted">
                      <Package className="mx-auto mb-4 h-12 w-12 text-border" />
                      <p className="text-base font-medium text-foreground">No orders found</p>
                      <p className="mt-1 text-sm">When customers place orders, they will appear here.</p>
                    </td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order._id} className="border-b border-border/50 transition-colors hover:bg-secondary/20">
                      <td className="px-6 py-5">
                        <p className="font-mono text-sm text-foreground">{order._id.substring(0, 10)}...</p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-foreground">{order.user?.name || 'Guest'}</p>
                        <p className="text-xs text-muted">{order.user?.email || 'N/A'}</p>
                      </td>
                      <td className="px-6 py-5 text-sm text-foreground">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-5 font-bold text-foreground">
                        ?{order.totalPrice?.toLocaleString("en-IN") || 0}
                      </td>
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                          {order.status || 'Processing'}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <button className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
