import React from "react";
import { ArrowRight } from "lucide-react";

import Button from "./Button";

const ExclusiveOffer = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="relative overflow-hidden rounded-2xl bg-secondary">
        <div className="grid min-h-[300px] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10 px-8 py-12 sm:px-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Exclusive Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Up to 30% Off
            </h2>

            <p className="mt-3 max-w-md text-muted">
              Discover amazing deals on selected products. Limited-time offers
              you don't want to miss.
            </p>

            <div className="mt-6">
              <Button type="primary">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Offer Image */}
          <div className="relative min-h-[280px]">
            <img
              src="/images/promotion.jpg"
              alt="Exclusive collection offer"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffer;
