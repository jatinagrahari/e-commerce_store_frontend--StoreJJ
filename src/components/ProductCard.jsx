import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <Link to={`/products/${product._id}`}>
        <div className="relative aspect-square overflow-hidden bg-background">
          <img
            src={product.image}
            alt="Product"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          <span className="absolute left-4 top-4 rounded-full bg-success px-3 py-1 text-xs font-semibold text-white">
            20% OFF
          </span>

          {/* Wishlist
          <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-muted shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-error">
            <Heart className="h-4 w-4" />
          </button> */}
        </div>

        {/* Product Information */}
        <div className="p-5">
          {/* Category */}
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="mt-2 line-clamp-1 text-base font-semibold text-foreground">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-1">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </div>

            <span className="ml-1 text-xs text-muted">
              ({product.totalNumberOfReviews})
            </span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">₹2,499</span>

            <span className="text-sm text-muted line-through">
              {product.price}
            </span>
          </div>

          {/* Add To Cart */}
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-hover active:bg-primary-active">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
