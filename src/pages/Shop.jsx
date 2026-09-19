import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components";
import { useSelector } from "react-redux";
import { Filter, X } from "lucide-react";

const Shop = () => {
  const products = useSelector((state) => state.products.productsItems) || [];
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const currentCategory = searchParams.get("category") || "All";
  const currentSort = searchParams.get("sort") || "newest";

  const categories = ["All", "Fashion", "Shoes", "Electronics", "Accessories"];

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (e) => {
    const sort = e.target.value;
    searchParams.set("sort", sort);
    setSearchParams(searchParams);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter
    if (currentCategory !== "All") {
      result = result.filter(
        (p) => p.category?.toLowerCase() === currentCategory.toLowerCase()
      );
    }

    // Sort
    if (currentSort === "price-low-high") {
      result.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
    } else if (currentSort === "price-high-low") {
      result.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
    } else if (currentSort === "discount") {
      result.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    } else {
      // newest (default fallback) - assuming newer products are added last or have higher _id
      result.reverse(); 
    }

    return result;
  }, [products, currentCategory, currentSort]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Explore
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {currentCategory === "All" ? "All Products" : currentCategory}
          </h1>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="md:hidden flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium"
        >
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="flex gap-10">
        {/* Desktop Sidebar */}
        <aside className="hidden w-56 shrink-0 space-y-8 md:block">
          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Categories</h3>
            <div className="space-y-3 text-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`block w-full text-left transition-colors ${
                    currentCategory === cat
                      ? "font-semibold text-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Mobile Filters Drawer */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-surface p-6 shadow-xl animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold text-foreground">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 -mr-2">
                  <X className="h-5 w-5 text-muted" />
                </button>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-4 text-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        handleCategoryChange(cat);
                        setIsMobileFiltersOpen(false);
                      }}
                      className={`block w-full text-left transition-colors ${
                        currentCategory === cat
                          ? "font-semibold text-primary"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Section */}
        <section className="flex-1 min-w-0">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-muted">
              Showing <span className="font-semibold text-foreground">{filteredAndSortedProducts.length}</span> products
            </p>

            <select
              value={currentSort}
              onChange={handleSortChange}
              className="w-full sm:w-auto rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
            >
              <option value="newest">Newest First</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>

          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
              {filteredAndSortedProducts.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-24 text-center">
              <div className="rounded-full bg-secondary p-4 mb-4">
                <Filter className="h-8 w-8 text-muted" />
              </div>
              <h3 className="text-lg font-bold text-foreground">No products found</h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                Try selecting a different category or adjusting your filters.
              </p>
              <button
                onClick={() => handleCategoryChange("All")}
                className="mt-6 font-medium text-primary hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Shop;
