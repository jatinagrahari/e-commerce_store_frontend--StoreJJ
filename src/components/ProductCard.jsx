import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to the product details page
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  // Safe image fallback
  const productImageUrl = product?.images?.[0]?.url || "https://placehold.co/400?text=No+Image";

  return (
    <Link to={`/products/${product._id}`} className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Product Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary/30">
        <img
          src={productImageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 rounded-md bg-error px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Category */}
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-1.5">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="line-clamp-1 text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1.5">
          <div className="flex items-center">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-[13px] font-medium text-foreground">
              {(product.rating || 4.5).toFixed(1)}
            </span>
          </div>
          <span className="text-[12px] text-muted">
            ({product.totalNumberOfReviews || 0})
          </span>
        </div>

        {/* Spacer to push price and button to bottom */}
        <div className="flex-1" />

        {/* Price */}
        <div className="mt-3.5 flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            ₹{product.discountedPrice || product.price}
          </span>
          {product.discount > 0 && (
            <span className="text-sm font-medium text-muted line-through">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-primary hover:text-white active:scale-[0.98]"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
