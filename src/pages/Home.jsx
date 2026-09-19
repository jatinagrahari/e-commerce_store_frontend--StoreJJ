import React, { useEffect, useState } from "react";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts as setProds } from "../store/productSlice";
import { ProductCard } from "../components";

import heroImg from "../assets/heroImg.png";
import clothing from "../assets/clothing.png";
import electronics from "../assets/electronics.png";
import shoes from "../assets/shoes.png";
import assesories from "../assets/assesories.png";

const Home = () => {
  const [products, setProducts] = useState([]);
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
  }, [dispatch]);

  return (
    <main className="bg-background text-foreground">
      {/* 1. Hero Section - Editorial Full Width style */}
      <section className="relative w-full overflow-hidden bg-surface lg:h-[85vh] xl:h-[800px]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="New Collection"
            className="h-full w-full object-cover object-[80%_center] lg:object-center opacity-90"
          />
          {/* Elegant gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:w-2/3" />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 py-20 lg:px-8 lg:py-0">
          <div className="max-w-2xl animate-fade-in">
            <span className="mb-4 inline-block font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Discover Store JJ
            </span>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Design <br className="hidden sm:block" />
              meets <span className="text-muted">comfort.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              Explore our newest arrivals featuring elevated basics, premium materials, and timeless aesthetics.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-base font-bold text-background transition-transform hover:scale-105 active:scale-95"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="flex h-14 items-center justify-center rounded-full bg-secondary px-8 text-base font-bold text-foreground transition-colors hover:bg-border"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Highlighted Categories - Editorial Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Curated for you</h2>
            <p className="mt-2 text-muted">Shop our most popular categories.</p>
          </div>
          <Link
            to="/shop"
            className="group flex items-center text-sm font-bold text-foreground transition-colors hover:text-muted"
          >
            Explore all categories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Large Card */}
          <Link
            to="/shop?category=Fashion"
            className="group relative h-[400px] overflow-hidden rounded-3xl bg-secondary md:col-span-2 lg:col-span-2 lg:h-[500px]"
          >
            <img
              src={clothing}
              alt="Fashion"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                Trending
              </span>
              <h3 className="text-3xl font-bold text-white">Fashion & Apparel</h3>
            </div>
          </Link>

          {/* Regular Cards */}
          <div className="grid gap-6 md:grid-cols-1">
            <Link
              to="/shop?category=Shoes"
              className="group relative h-[240px] overflow-hidden rounded-3xl bg-secondary lg:h-[238px]"
            >
              <img
                src={shoes}
                alt="Shoes"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Footwear</h3>
              </div>
            </Link>

            <Link
              to="/shop?category=Electronics"
              className="group relative h-[240px] overflow-hidden rounded-3xl bg-secondary lg:h-[238px]"
            >
              <img
                src={electronics}
                alt="Electronics"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">Electronics</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trending Now</h2>
            <Link
              to="/shop?sort=new"
              className="group flex items-center text-sm font-bold text-foreground transition-colors hover:text-muted"
            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand Banner */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-foreground text-background">
          <div className="grid items-center lg:grid-cols-2">
            <div className="px-8 py-16 sm:px-16 lg:py-24">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Redefining the <br className="hidden sm:block" />
                modern wardrobe.
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground opacity-80">
                Quality shouldn't be a luxury. We're on a mission to provide beautifully crafted essentials at accessible prices.
              </p>
              
              <ul className="mt-10 space-y-4">
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/10 text-background">
                    <Star className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Premium Materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/10 text-background">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span className="font-medium">Ethically Crafted</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-64 lg:h-full">
              <img
                src={assesories}
                alt="Accessories collection"
                className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Store Features (Trust section) */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="mt-1 text-sm text-muted">On all orders over ₹999</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <RotateCcw className="h-7 w-7" />
              </div>
              <h3 className="font-bold">7 Days Return</h3>
              <p className="mt-1 text-sm text-muted">Hassle-free return policy</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-bold">Secure Payment</h3>
              <p className="mt-1 text-sm text-muted">100% secure checkout</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground">
                <Headphones className="h-7 w-7" />
              </div>
              <h3 className="font-bold">24/7 Support</h3>
              <p className="mt-1 text-sm text-muted">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
