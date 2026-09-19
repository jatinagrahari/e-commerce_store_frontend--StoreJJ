import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

const OrderSuccess = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-background">
      <div className="w-full max-w-xl rounded-3xl bg-surface border border-border p-8 sm:p-12 text-center shadow-lg animate-fade-in relative overflow-hidden">
        {/* Confetti / background decoration could go here */}
        
        {/* Success Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-success/10 text-success mb-8">
          <CheckCircle2 className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Order Confirmed!
        </h1>

        <p className="mt-4 text-base text-muted">
          Thank you for your purchase. We've received your order and will begin processing it right away.
        </p>

        {/* Order Information */}
        <div className="mt-10 rounded-2xl bg-secondary/50 p-6 text-left border border-border/50">
          <div className="flex items-center gap-3 border-b border-border/50 pb-4 mb-4">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground">Order Details</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-sm font-medium text-muted">Order ID</span>
              <span className="font-mono text-sm font-semibold text-foreground bg-background px-3 py-1 rounded-md border border-border">
                {order._id}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-sm font-medium text-muted">Payment ID</span>
              <span className="font-mono text-sm font-semibold text-foreground bg-background px-3 py-1 rounded-md border border-border">
                {order.paymentId}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1">
              <span className="text-sm font-medium text-muted">Amount Paid</span>
              <span className="text-base font-bold text-success">
                ₹{order.totalAmount}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
          <Link
            to="/shop"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-surface px-6 py-3.5 font-semibold text-foreground transition hover:bg-secondary hover:border-muted focus:ring-2 focus:ring-primary/20"
          >
            Continue Shopping
          </Link>
          
          <Link
            to="/profile"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-md transition hover:opacity-90 focus:ring-2 focus:ring-primary/20"
          >
            View My Orders
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccess;
