import React from "react";
import { Users, BadgeCheck, Star, Headphones } from "lucide-react";

const StoreStats = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid overflow-hidden rounded-2xl bg-secondary sm:grid-cols-2 lg:grid-cols-4">
        {/* Customers */}
        <div className="p-7 text-center">
          <Users className="mx-auto h-6 w-6 text-primary" />

          <p className="mt-3 text-3xl font-bold text-primary">10K+</p>

          <p className="mt-2 text-sm font-medium text-foreground">
            Happy Customers
          </p>
        </div>

        {/* Products */}
        <div className="border-border p-7 text-center sm:border-l">
          <BadgeCheck className="mx-auto h-6 w-6 text-primary" />

          <p className="mt-3 text-3xl font-bold text-primary">500+</p>

          <p className="mt-2 text-sm font-medium text-foreground">Products</p>
        </div>

        {/* Reviews */}
        <div className="border-border p-7 text-center lg:border-l">
          <Star className="mx-auto h-6 w-6 text-primary" />

          <p className="mt-3 text-3xl font-bold text-primary">98%</p>

          <p className="mt-2 text-sm font-medium text-foreground">
            Positive Reviews
          </p>
        </div>

        {/* Support */}
        <div className="border-border p-7 text-center sm:border-l">
          <Headphones className="mx-auto h-6 w-6 text-primary" />

          <p className="mt-3 text-3xl font-bold text-primary">24/7</p>

          <p className="mt-2 text-sm font-medium text-foreground">
            Customer Support
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreStats;
