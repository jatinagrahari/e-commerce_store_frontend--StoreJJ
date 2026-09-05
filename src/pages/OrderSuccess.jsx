import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        {/* Success Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Order Placed Successfully
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your purchase. Your order has been successfully placed.
        </p>

        {/* Order Information */}
        {order && (
          <div className="mt-8 rounded-xl bg-gray-50 p-5 text-left">
            <div className="flex justify-between border-b border-gray-200 pb-3">
              <span className="text-sm text-gray-500">Order ID</span>

              <span className="text-sm font-medium text-gray-900">
                {order._id}
              </span>
            </div>

            <div className="flex justify-between pt-3">
              <span className="text-sm text-gray-500">Payment ID</span>

              <span className="text-sm font-medium text-gray-900">
                {order.paymentId}
              </span>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/orders"
            className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View My Orders
          </Link>

          <Link
            to="/shop"
            className="flex-1 rounded-xl border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
