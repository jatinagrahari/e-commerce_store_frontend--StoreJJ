import React from "react";

const CustomerReview = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Reviews
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Customer Reviews
            </h2>
          </div>

          <button className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">
            See all reviews
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Review Summary */}
        <div className="mt-8 grid gap-8 rounded-2xl border border-border bg-surface p-7 lg:grid-cols-[220px_1fr]">
          {/* Overall Rating */}
          <div className="text-center lg:border-r lg:border-border">
            <p className="text-5xl font-bold">4.8</p>

            <div className="mt-3 flex justify-center gap-0.5 text-yellow-500">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>

            <p className="mt-2 text-xs text-muted">Based on 124 reviews</p>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-3">
            {/* 5 Stars */}
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm">5</span>

              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[90%] rounded-full bg-primary" />
              </div>

              <span className="w-10 text-right text-xs text-muted">90%</span>
            </div>

            {/* 4 Stars */}
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm">4</span>

              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[7%] rounded-full bg-primary" />
              </div>

              <span className="w-10 text-right text-xs text-muted">7%</span>
            </div>

            {/* 3 Stars */}
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm">3</span>

              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[2%] rounded-full bg-primary" />
              </div>

              <span className="w-10 text-right text-xs text-muted">2%</span>
            </div>

            {/* 2 Stars */}
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm">2</span>

              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[1%] rounded-full bg-primary" />
              </div>

              <span className="w-10 text-right text-xs text-muted">1%</span>
            </div>

            {/* 1 Star */}
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm">1</span>

              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-0 rounded-full bg-primary" />
              </div>

              <span className="w-10 text-right text-xs text-muted">0%</span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {/* Review 1 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-0.5 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>

            <h3 className="mt-4 text-sm font-semibold">
              Excellent quality and very comfortable.
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Perfect fit and the material feels premium. Very happy with the
              purchase.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold">Rahul Sharma</p>

              <p className="mt-1 text-xs text-muted">Verified Buyer</p>
            </div>
          </div>

          {/* Review 2 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-0.5 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>

            <h3 className="mt-4 text-sm font-semibold">Really nice hoodie.</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              The fabric is soft and looks premium. The sizing was exactly right
              for me.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold">Priya Mehta</p>

              <p className="mt-1 text-xs text-muted">Verified Buyer</p>
            </div>
          </div>

          {/* Review 3 */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-0.5 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
            </div>

            <h3 className="mt-4 text-sm font-semibold">
              Loved the color and fit.
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              High-quality hoodie with a clean look. Would definitely recommend
              it.
            </p>

            <div className="mt-5">
              <p className="text-sm font-semibold">Arjun Verma</p>

              <p className="mt-1 text-xs text-muted">Verified Buyer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
