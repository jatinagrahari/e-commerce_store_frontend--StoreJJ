import React from "react";
import { Star } from "lucide-react";

const CustomerSayCard = () => {
  return (
    <div className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Rating */}
      <div className="flex gap-1 text-yellow-500">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
      </div>

      {/* Review */}
      <p className="mt-5 text-sm leading-6 text-muted">
        "The products were exactly as described and the overall shopping
        experience was smooth and simple."
      </p>

      {/* Customer */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-foreground">Rahul Sharma</h3>

        <p className="mt-1 text-xs text-muted">Verified Customer</p>
      </div>
    </div>
  );
};

export default CustomerSayCard;
