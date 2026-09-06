import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const MyOrders = ({ orders }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/v1/products");
        const data = res.data;
        setProducts(data.data);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">My Orders</h2>

        <p className="mt-1 text-sm text-gray-500">
          View and track your recent orders.
        </p>
      </div>

      <div className="space-y-5">
        {orders.map((order) => (
          <div
            key={order._id}
            className="rounded-xl border border-gray-200 p-5"
          >
            {/* Order Header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="mt-1 font-medium text-gray-900">#{order._id}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="mt-1 font-medium text-gray-900">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="mt-1 font-semibold text-gray-900">
                  ₹{order.totalAmount}
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {order.orderStatus}
              </span>
            </div>

            {/* Products */}
            <div className="mt-5 space-y-4">
              {order.products.map((orderProduct) => {
                const product = products.find(
                  (product) => product._id === orderProduct.productId,
                );

                if (!product) return null;

                return (
                  <div key={orderProduct.productId} className="flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Quantity: {orderProduct.quantity}
                      </p>

                      <p className="mt-1 font-semibold text-gray-900">
                        ₹{product.discountedPrice}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
