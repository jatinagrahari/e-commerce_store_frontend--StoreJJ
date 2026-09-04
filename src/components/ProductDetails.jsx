import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import Button from "../components/Button";
// import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data.data);
        setImage(data.data.images[0].url);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [id]);

  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    toast.success("Product added to cart");
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 5000);
  };

  return (
    <main className="bg-background text-foreground">
      {/* hero top section */}
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

          <span className="font-medium text-foreground">
            {product.category}
          </span>
        </div>
      </section>

      {/* product section */}

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* photos */}
          <div>
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary">
              <img
                src={image}
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
                {product.images?.map((imageData) => (
                  <button
                    key={imageData.url}
                    onClick={() => setImage(imageData.url)}
                    className={`overflow-hidden rounded-xl ${imageData.url === image ? `border-2 border-primary bg-secondary` : null} `}
                  >
                    <img
                      src={imageData.url}
                      alt={imageData.url}
                      className="aspect-square w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
                aria-label="Next image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-sm font-medium text-muted">{product.category}</p>

            {/* Product Name */}
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
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

              <span className="text-sm text-muted">
                ({product.totalNumberOfReviews})
              </span>

              <span className="text-muted">|</span>

              <span className="text-sm text-muted">200+ sold</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold">
                ₹{product.discountedPrice}
              </span>

              <span className="text-base text-muted line-through">
                ₹{product.price}
              </span>

              <span className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                {product.discount}% OFF
              </span>
            </div>

            <p className="mt-2 text-xs text-muted">Inclusive of all taxes</p>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-muted">
              {product.description}
            </p>

            <div className="my-6 border-t border-border" />

            {/* color */}
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

            {/* size */}
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

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-sm font-semibold">Quantity:</span>

              <div className="mt-3 inline-flex overflow-hidden rounded-md border border-border">
                <button
                  className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-primary"
                  aria-label="Decrease quantity"
                  onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : quantity
                  }
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="flex h-10 w-12 items-center justify-center border-x border-border text-sm font-medium">
                  {quantity}
                </span>

                <button
                  className="flex h-10 w-10 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-primary"
                  aria-label="Increase quantity"
                  onClick={() =>
                    quantity < 10 ? setQuantity(quantity + 1) : quantity
                  }
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* purchase cta */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Button type="primary" onClick={handleCart} disabled={isAdded}>
                {isAdded ? (
                  <Check className="mr-2 h-4 w-4" />
                ) : (
                  <ShoppingCart className="mr-2 h-4 w-4" />
                )}
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </Button>

              <Button type="outline">Buy Now</Button>
            </div>

            {/* shipping */}
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

      {/* product info */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-border">
            <button className="whitespace-nowrap border-b-2 border-primary px-7 py-5 text-sm font-semibold text-primary">
              Description
            </button>
          </div>

          {/* Content */}
          <div className="grid gap-8 p-7 lg:grid-cols-2 lg:p-10">
            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold">About this product</h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="rounded-xl bg-secondary p-6">
              {/* <div className="space-y-5">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* related products */}
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
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
