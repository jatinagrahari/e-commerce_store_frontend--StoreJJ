import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
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
import ProductCard from "../components/ProductCard";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const allProducts = useSelector((state) => state.products.productsItems) || [];

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data.data);
        if (data.data?.images?.length > 0) {
          setImage(data.data.images[0].url);
        }
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [id]);

  const handleCart = () => {
    if (!product) return;
    dispatch(addToCart({ product, quantity }));
    toast.success("Product added to cart");
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p._id !== product._id)
    .slice(0, 5);

  return (
    <main className="bg-background text-foreground">
      {/* breadcrumbs */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="cursor-pointer transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="cursor-pointer transition-colors hover:text-primary">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/shop?category=${product.category}`} className="cursor-pointer transition-colors hover:text-primary">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground line-clamp-1">{product.name}</span>
        </div>
      </section>

      {/* product section */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* photos */}
          <div className="flex flex-col gap-4 lg:flex-row-reverse">
            {/* Main Image */}
            <div className="group relative flex-1 overflow-hidden rounded-2xl bg-secondary/50">
              <img
                src={image || "https://placehold.co/600x600?text=No+Image"}
                alt={product.name}
                className="aspect-square h-full w-full object-cover"
              />
              {product.discount > 0 && (
                <span className="absolute left-5 top-5 rounded-md bg-error px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 overflow-x-auto lg:w-24 lg:flex-col lg:overflow-visible">
              {product.images?.map((img) => (
                <button
                  key={img.url}
                  onClick={() => setImage(img.url)}
                  className={`relative shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                    img.url === image ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    alt="Thumbnail"
                    className="aspect-square w-20 object-cover lg:w-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* product info */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-sm font-semibold text-foreground">
                  {(product.rating || 4.5).toFixed(1)}
                </span>
              </div>
              <span className="text-sm text-muted">
                ({product.totalNumberOfReviews || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-3">
              <span className="text-4xl font-bold tracking-tight text-foreground">
                ₹{product.discountedPrice || product.price}
              </span>
              {product.discount > 0 && (
                <span className="mb-1 text-lg text-muted line-through">
                  ₹{product.price}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-muted">Inclusive of all taxes</p>

            <p className="mt-6 text-base leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="my-8 border-t border-border" />

            {/* Quantity */}
            <div>
              <span className="text-sm font-semibold text-foreground">Quantity</span>
              <div className="mt-3 inline-flex overflow-hidden rounded-lg border border-border">
                <button
                  className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex h-11 w-12 items-center justify-center border-x border-border text-sm font-medium">
                  {quantity}
                </span>
                <button
                  className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => quantity < 10 && setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Purchase CTA */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Button type="primary" onClick={handleCart} disabled={isAdded} className="h-12 text-base">
                {isAdded ? <Check className="mr-2 h-5 w-5" /> : <ShoppingCart className="mr-2 h-5 w-5" />}
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-4 rounded-xl border border-border bg-surface p-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-6 w-6 text-muted" />
                <div>
                  <h3 className="text-xs font-semibold text-foreground">Free Shipping</h3>
                  <p className="text-[11px] text-muted">On orders over ₹999</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="h-6 w-6 text-muted" />
                <div>
                  <h3 className="text-xs font-semibold text-foreground">7 Days Return</h3>
                  <p className="text-[11px] text-muted">Easy returns & refund</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-6 w-6 text-muted" />
                <div>
                  <h3 className="text-xs font-semibold text-foreground">Secure Payment</h3>
                  <p className="text-[11px] text-muted">100% safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* related products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
