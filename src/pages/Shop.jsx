import React from "react";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.products.productsItems);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Shop
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">All Products</h1>
      </div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 space-y-6 md:block">
          <div>
            <h3 className="font-semibold">Categories</h3>
            <div className="mt-3 space-y-2 text-sm text-gray-600">
              <p>Fashion</p>
              <p>Shoes</p>
              <p>Electronics</p>
              <p>Accessories</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Price</h3>
            <input type="range" className="mt-4 w-full" />
          </div>
        </aside>

        {/* Products */}
        <section className="flex-1">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing all products</p>

            <select className="rounded-lg border px-3 py-2 text-sm">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Shop;
