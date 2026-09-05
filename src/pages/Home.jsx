import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  BadgeCheck,
  Tag,
  Star,
  Heart,
} from "lucide-react";

import {
  Button,
  ExclusiveOffer,
  CustomerSayCard,
  StoreStats,
} from "../components";
import heroImg from "../assets/heroImg.png";
import clothing from "../assets/clothing.png";
import electronics from "../assets/electronics.png";
import shoes from "../assets/shoes.png";
import assesories from "../assets/assesories.png";
import cart from "../assets/cart.png";
import discount from "../assets/discount.png";
import { ProductCard } from "../components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts as setProds } from "../store/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/v1/products");
        const data = res.data;
        dispatch(setProds(data.data));
        setProducts(data.data);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, []);

  return (
    <main className="bg-background text-foreground">
      {/* hero section */}
      <section className="mx-auto max-w-7xl px-6 pt-6">
        <div className="overflow-hidden rounded-2xl bg-secondary">
          <div className="grid min-h-[480px] items-center lg:grid-cols-2">
            {/* Hero Content */}
            <div className="px-8 py-14 sm:px-12 lg:px-14">
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                New Collection 2026
              </span>

              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Elevate Your
                <br />
                Everyday Style
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">
                Discover quality products crafted for comfort, style, and
                everyday living. Find something you'll love.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/shop">
                  <Button type="primary">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Button type="secondary">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative min-h-[340px] lg:min-h-[480px]">
              <img
                src={heroImg}
                alt="Latest collection"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* trust cards info */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
          {/* Free Shipping */}
          <div className="flex items-center gap-4 border-b border-border p-6 sm:border-r lg:border-b-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <Truck className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Free Shipping</h3>

              <p className="mt-1 text-xs text-muted">On orders over ₹999</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-4 border-b border-border p-6 lg:border-b-0 lg:border-r">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Secure Payment</h3>

              <p className="mt-1 text-xs text-muted">100% secure checkout</p>
            </div>
          </div>

          {/* Returns */}
          <div className="flex items-center gap-4 border-b border-border p-6 sm:border-r lg:border-b-0">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <RotateCcw className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">7 Days Return</h3>

              <p className="mt-1 text-xs text-muted">Easy returns & refunds</p>
            </div>
          </div>

          {/* Customer Support */}
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
              <Headphones className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-sm font-semibold">Customer Support</h3>

              <p className="mt-1 text-xs text-muted">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* shop by category */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Explore
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Shop by Category
            </h2>
          </div>

          <button className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover sm:flex">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {/*  Fashion */}
          <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={clothing}
                alt="Fashion"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Fashion</h3>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Shoes */}
          <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={shoes}
                alt="Shoes"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Shoes</h3>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          {/* electronics */}
          <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={electronics}
                alt="Shoes"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Electronics</h3>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Accessories */}
          <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={assesories}
                alt="Accessories"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">Accessories</h3>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* New Arrivals */}
          <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={cart}
                alt="New Arrivals"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold">New Arrivals</h3>

              <button className="mt-2 flex items-center gap-1 text-sm font-medium text-primary">
                Shop Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* featured section */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Latest
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Products
            </h2>
          </div>

          <button className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover sm:flex">
            View All
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* exclusive offer */}
      <ExclusiveOffer />

      {/* why shop with us */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Promise
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Why Shop With Us
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            We focus on quality products, fair prices, and a shopping experience
            you can rely on.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Quality Products */}
          <div className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <BadgeCheck className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-sm font-semibold">Quality Products</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Carefully selected products built to deliver quality and lasting
              value.
            </p>
          </div>

          {/* Great Prices */}
          <div className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <Tag className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-sm font-semibold">Great Prices</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Competitive pricing that gives you more value for every purchase.
            </p>
          </div>

          {/* Trendy Designs */}
          <div className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <Star className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-sm font-semibold">Trendy Designs</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Stay ahead with products that combine modern design and everyday
              functionality.
            </p>
          </div>

          {/* Loved by Customers */}
          <div className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <Heart className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-sm font-semibold">Loved by Customers</h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Your satisfaction matters to us from your first visit to every
              purchase.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
