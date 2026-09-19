import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Package, Clock, CheckCircle2, Truck, XCircle } from "lucide-react";

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "delivered":
      return "bg-success/10 text-success border-success/20";
    case "processing":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "shipped":
      return "bg-purple-500/10 text-purple-500 border-purple-500/20";
    case "cancelled":
      return "bg-error/10 text-error border-error/20";
    default:
      return "bg-secondary text-foreground border-border";
  }
};

const getStatusIcon = (status) => {
  switch (status?.toLowerCase()) {
    case "delivered":
      return <CheckCircle2 className="h-4 w-4 mr-1" />;
    case "processing":
      return <Clock className="h-4 w-4 mr-1" />;
    case "shipped":
      return <Truck className="h-4 w-4 mr-1" />;
    case "cancelled":
      return <XCircle className="h-4 w-4 mr-1" />;
    default:
      return null;
  }
};

const MyOrders = ({ orders = [] }) => {
  const allProducts = useSelector((state) => state.products.productsItems) || [];

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground">Order History</h2>
          <p className="mt-1 text-sm text-muted">
            Track, return, or repurchase items
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 rounded-full bg-secondary p-4 text-muted">
            <Package className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold text-foreground">No orders yet</h3>
          <p className="mt-2 text-sm text-muted max-w-sm">
            When you place an order, it will appear here so you can track its status.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md"
            >
              {/* Order Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface/50 p-5 sm:flex-nowrap">
                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Order Placed</p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Total</p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Order ID</p>
                    <p className="mt-1 font-mono text-sm font-medium text-foreground">
                      #{order._id.substring(order._id.length - 8)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className={`flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-sm ${getStatusColor(order.orderStatus)}`}>
                    {getStatusIcon(order.orderStatus)}
                    {order.orderStatus}
                  </span>
                </div>
              </div>

              {/* Products */}
              <div className="p-5 sm:p-6 space-y-5">
                {order.products.map((orderProduct) => {
                  const product = allProducts.find(
                    (p) => p._id === orderProduct.productId,
                  );

                  if (!product) return null;

                  return (
                    <div key={orderProduct.productId} className="flex gap-5">
                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-secondary/50">
                        <img
                          src={product.images?.[0]?.url || "https://placehold.co/200"}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div>
                          <h3 className="font-semibold text-foreground line-clamp-2 sm:text-lg">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-muted">
                            Qty: {orderProduct.quantity}
                          </p>
                        </div>
                        <div className="flex items-end gap-2">
                          <p className="font-bold text-foreground">
                            ₹{product.discountedPrice || product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
