import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  return (
    <main className="bg-background text-foreground">
      {/* =========================================================
          BREADCRUMB
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="cursor-pointer transition-colors hover:text-primary">
            Home
          </span>

          <ChevronRight className="h-4 w-4" />

          <span className="cursor-pointer transition-colors hover:text-primary">
            Shop
          </span>

          <ChevronRight className="h-4 w-4" />

          <span className="cursor-pointer transition-colors hover:text-primary">
            Men
          </span>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-foreground">Classic Hoodie</span>
        </div>
      </section>

      {/* =========================================================
          PRODUCT MAIN SECTION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* =====================================================
              PRODUCT GALLERY
          ====================================================== */}
          <div>
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary">
              <img
                src="/images/products/classic-hoodie.jpg"
                alt="Classic Hoodie"
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Wishlist */}
              <button
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-primary"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>

              {/* New Arrival */}
              <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                New Arrival
              </span>
            </div>

            {/* Thumbnail Images */}
            <div className="mt-5 flex items-center gap-3">
              <button
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="grid flex-1 grid-cols-4 gap-3">
                <button className="overflow-hidden rounded-xl border-2 border-primary bg-secondary">
                  <img
                    src="/images/products/classic-hoodie.jpg"
                    alt="Classic Hoodie front"
                    className="aspect-square w-full object-cover"
                  />
                </button>

                <button className="overflow-hidden rounded-xl border border-border bg-secondary transition-colors hover:border-primary">
                  <img
                    src="/images/products/classic-hoodie-back.jpg"
                    alt="Classic Hoodie back"
                    className="aspect-square w-full object-cover"
                  />
                </button>

                <button className="overflow-hidden rounded-xl border border-border bg-secondary transition-colors hover:border-primary">
                  <img
                    src="/images/products/classic-hoodie-detail.jpg"
                    alt="Classic Hoodie detail"
                    className="aspect-square w-full object-cover"
                  />
                </button>

                <button className="overflow-hidden rounded-xl border border-border bg-secondary transition-colors hover:border-primary">
                  <img
                    src="/images/products/classic-hoodie-fabric.jpg"
                    alt="Classic Hoodie fabric"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              </div>

              <button
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
                aria-label="Next image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* =====================================================
              PRODUCT INFORMATION
          ====================================================== */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-sm font-medium text-muted">Men's Fashion</p>

            {/* Product Name */}
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Classic Hoodie
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-0.5 text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>

              <span className="text-sm font-medium">4.8</span>

              <span className="text-sm text-muted">(124 reviews)</span>

              <span className="text-muted">|</span>

              <span className="text-sm text-muted">200+ sold</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold">₹2,499</span>

              <span className="text-base text-muted line-through">₹3,099</span>

              <span className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                20% OFF
              </span>
            </div>

            <p className="mt-2 text-xs text-muted">Inclusive of all taxes</p>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-muted">
              A timeless hoodie designed for everyday comfort. Made with premium
              cotton blend fabric that feels soft, looks great, and keeps you
              warm all day long.
            </p>

            <div className="my-6 border-t border-border" />

            {/* =================================================
                COLOR
            ================================================== */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Color:</span>

                <span className="text-sm text-muted">Navy Blue</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                {/* Selected */}
                <button
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary p-0.5"
                  aria-label="Navy Blue"
                >
                  <span className="h-full w-full rounded-full bg-blue-950" />
                </button>

                {/* Black */}
                <button
                  className="h-8 w-8 rounded-full border border-border bg-black transition-all hover:scale-110"
                  aria-label="Black"
                />

                {/* Gray */}
                <button
                  className="h-8 w-8 rounded-full border border-border bg-gray-400 transition-all hover:scale-110"
                  aria-label="Gray"
                />

                {/* White */}
                <button
                  className="h-8 w-8 rounded-full border border-border bg-white transition-all hover:scale-110"
                  aria-label="White"
                />

                {/* Olive */}
                <button
                  className="h-8 w-8 rounded-full border border-border bg-green-900 transition-all hover:scale-110"
                  aria-label="Olive"
                />
              </div>
            </div>

            {/* =================================================
                SIZE
            ================================================== */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Size:</span>

                <button className="text-xs font-medium text-primary hover:text-primary-hover">
                  Size Guide
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button className="flex h-10 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-4 text-sm font-medium transition-all hover:border-primary hover:text-primary">
                  S
                </button>

                <button className="flex h-10 min-w-11 items-center justify-center rounded-md border-2 border-primary bg-secondary px-4 text-sm font-medium text-primary">
                  M
                </button>

                <button className="flex h-10 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-4 text-sm font-medium transition-all hover:border-primary hover:text-primary">
                  L
                </button>

                <button className="flex h-10 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-4 text-sm font-medium transition-all hover:border-primary hover:text-primary">
                  XL
                </button>

                <button className="flex h-10 min-w-11 items-center justify-center rounded-md border border-border bg-surface px-4 text-sm font-medium transition-all hover:border-primary hover:text-primary">
                  XXL
                </button>
              </div>
            </div>

            {/* =================================================
                QUANTITY
            ================================================== */}
            <div className="mt-6">
              <span className="text-sm font-semibold">Quantity:</span>

              <div className="mt-3 inline-flex overflow-hidden rounded-md border border-border">
                <button
                  className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-primary"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="flex h-10 w-12 items-center justify-center border-x border-border text-sm font-medium">
                  1
                </span>

                <button
                  className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-primary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* =================================================
                PURCHASE BUTTONS
            ================================================== */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Button type="primary">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>

              <Button type="outline">Buy Now</Button>
            </div>

            {/* =================================================
                SHIPPING BENEFITS
            ================================================== */}
            <div className="mt-7 grid gap-3 rounded-xl bg-secondary p-5 sm:grid-cols-3">
              {/* Shipping */}
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xs font-semibold">Free Shipping</h3>

                  <p className="mt-1 text-[11px] leading-4 text-muted">
                    On orders over ₹999
                  </p>
                </div>
              </div>

              {/* Returns */}
              <div className="flex items-start gap-3">
                <RotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xs font-semibold">7 Days Easy Return</h3>

                  <p className="mt-1 text-[11px] leading-4 text-muted">
                    Easy returns & refund
                  </p>
                </div>
              </div>

              {/* Payment */}
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <div>
                  <h3 className="text-xs font-semibold">Secure Payment</h3>

                  <p className="mt-1 text-[11px] leading-4 text-muted">
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT INFORMATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-border">
            <button className="whitespace-nowrap border-b-2 border-primary px-7 py-5 text-sm font-semibold text-primary">
              Description
            </button>

            <button className="whitespace-nowrap px-7 py-5 text-sm font-medium text-muted transition-colors hover:text-primary">
              Specifications
            </button>

            <button className="whitespace-nowrap px-7 py-5 text-sm font-medium text-muted transition-colors hover:text-primary">
              Shipping & Returns
            </button>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-7 lg:grid-cols-2 lg:p-10">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold">About this product</h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                The Classic Hoodie is your go-to layer for any season. Crafted
                from a premium cotton blend, it offers the perfect balance of
                comfort, durability, and style. Whether you're heading out or
                staying in, this hoodie has you covered.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Soft and breathable cotton blend fabric
                </li>

                <li className="flex items-center gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Adjustable drawstring hood
                </li>

                <li className="flex items-center gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Ribbed cuffs and hem for a snug fit
                </li>

                <li className="flex items-center gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Kangaroo pocket for convenience
                </li>

                <li className="flex items-center gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  Available in multiple colors and sizes
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div className="rounded-xl bg-secondary p-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted">Material</span>

                  <span className="text-sm font-medium">
                    80% Cotton, 20% Polyester
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted">Fit</span>

                  <span className="text-sm font-medium">Regular Fit</span>
                </div>

                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-sm text-muted">Pattern</span>

                  <span className="text-sm font-medium">Solid</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted">Care</span>

                  <span className="text-right text-sm font-medium">
                    Machine wash cold
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CUSTOMER REVIEWS
      ========================================================= */}
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

      {/* =========================================================
          RELATED PRODUCTS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              You May Like
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              You May Also Like
            </h2>
          </div>

          <button className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Product Cards */}
        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {/* DATA NEEDED:
              Replace these with related products from backend.
          */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
