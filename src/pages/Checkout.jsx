import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import { ShieldCheck, ShoppingCart } from "lucide-react";

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const cartData = useSelector((state) => state.cart.cartItems) || [];
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalPrice, totalDiscPrice } = cartData.reduce(
    (acc, item) => {
      acc.totalPrice += (item.product.price || 0) * item.quantity;
      acc.totalDiscPrice += (item.product.discountedPrice || item.product.price || 0) * item.quantity;
      return acc;
    },
    { totalPrice: 0, totalDiscPrice: 0 }
  );

  const savings = totalPrice - totalDiscPrice;

  const onSubmit = async (data) => {
    if (cartData.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/api/v1/payment/order", {
        amount: totalDiscPrice,
      });

      const razorpayOrder = response.data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_API_KEY,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: "Store JJ Store",
        description: "Order Payment",
        order_id: razorpayOrder.id,
        handler: async (paymentResponse) => {
          try {
            // 1. Verify Razorpay payment
            await axios.post("/api/v1/payment/verify", paymentResponse);

            // 2. Create your actual ecommerce order
            const orderResponse = await axios.post("/api/v1/orders/", {
              products: cartData.map((item) => ({
                productId: item.product._id,
                quantity: item.quantity,
              })),
              shippingAddress: data.shippingAddress,
              paymentId: paymentResponse.razorpay_payment_id,
            });

            dispatch(clearCart());
            toast.success("Order Placed successfully");
            navigate("/order-success", {
              state: {
                order: orderResponse.data.data,
              },
            });
          } catch (error) {
            console.error("Order creation failed:", error);
            toast.error("Failed to verify payment or create order.");
          }
        },
        theme: {
          color: "#0f172a",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Failed to initialize payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (cartData.length === 0) {
    return (
      <main className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 rounded-full bg-secondary p-6">
          <ShoppingCart className="h-12 w-12 text-muted" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Your Cart is Empty</h1>
        <p className="mt-4 max-w-sm text-base text-muted">
          Looks like you haven't added anything to your cart yet. Let's get you back to shopping.
        </p>
        <Link to="/shop" className="mt-8 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Checkout
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
          Complete Your Order
        </h1>
        <p className="mt-2 text-sm text-muted">
          Enter your shipping details to securely complete your purchase.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 lg:col-span-2"
        >
          {/* Contact Information */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">Contact Information</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  {...register("shippingAddress.fullName", { required: "Full name is required" })}
                />
                {errors.shippingAddress?.fullName && (
                  <p className="mt-1 text-xs text-error">{errors.shippingAddress.fullName.message}</p>
                )}
              </div>

              <div>
                <Input
                  label="Mobile Number"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  {...register("shippingAddress.mobileNumber", { 
                    required: "Mobile number is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Invalid mobile number" }
                  })}
                />
                {errors.shippingAddress?.mobileNumber && (
                  <p className="mt-1 text-xs text-error">{errors.shippingAddress.mobileNumber.message}</p>
                )}
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">Shipping Address</h2>

            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Input
                    label="House Number"
                    placeholder="House / Flat / Block number"
                    {...register("shippingAddress.houseNumber", { required: "House number is required" })}
                  />
                  {errors.shippingAddress?.houseNumber && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.houseNumber.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="Street"
                    placeholder="Street / Area / Landmark"
                    {...register("shippingAddress.street", { required: "Street is required" })}
                  />
                  {errors.shippingAddress?.street && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.street.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Input
                    label="City"
                    placeholder="Enter city"
                    {...register("shippingAddress.city", { required: "City is required" })}
                  />
                  {errors.shippingAddress?.city && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.city.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="Post Code"
                    placeholder="6-digit pin code"
                    {...register("shippingAddress.postCode", { 
                      required: "Post code is required",
                      pattern: { value: /^[0-9]{6}$/, message: "Invalid post code" }
                    })}
                  />
                  {errors.shippingAddress?.postCode && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.postCode.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="State"
                    placeholder="Enter state"
                    {...register("shippingAddress.state", { required: "State is required" })}
                  />
                  {errors.shippingAddress?.state && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.state.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    label="Country"
                    placeholder="Enter country"
                    defaultValue="India"
                    {...register("shippingAddress.country", { required: "Country is required" })}
                  />
                  {errors.shippingAddress?.country && (
                    <p className="mt-1 text-xs text-error">{errors.shippingAddress.country.message}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          <button
            type="submit"
            className="w-full flex items-center justify-center rounded-xl bg-foreground px-5 py-4 font-bold text-background transition hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                Processing...
              </span>
            ) : (
              "Pay Securely with Razorpay"
            )}
          </button>
        </form>

        {/* Order Summary Sidebar */}
        <aside className="h-fit rounded-2xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-foreground">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-5 border-b border-border pb-6 max-h-[350px] overflow-y-auto pr-2">
            {cartData.map((item) => (
              <div key={item.product._id} className="flex gap-4">
                {/* Product Image */}
                <div className="h-20 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary/50 border border-border/50">
                  <img
                    src={item.product.images?.[0]?.url || "https://placehold.co/100"}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground line-clamp-1">{item.product.name}</h3>
                    <p className="mt-0.5 text-xs text-muted">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-end gap-2">
                    <p className="text-sm font-bold text-foreground">
                      ₹{item.product.discountedPrice || item.product.price}
                    </p>
                    {item.product.discount > 0 && (
                      <p className="text-[11px] line-through text-muted">
                        ₹{item.product.price}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Calculations */}
          <div className="mt-6 space-y-3 text-sm">
            {savings > 0 && (
              <div className="flex justify-between">
                <span className="text-muted">Total MRP</span>
                <span className="font-medium text-muted line-through">₹{totalPrice.toFixed(2)}</span>
              </div>
            )}
            {savings > 0 && (
              <div className="flex justify-between text-success">
                <span>Discount</span>
                <span className="font-medium">-₹{savings.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted">Shipping</span>
              <span className="font-medium text-success">Free</span>
            </div>
          </div>

          {/* Total */}
          <div className="mt-6 flex justify-between border-t border-border pt-6">
            <span className="text-lg font-bold text-foreground">Total</span>
            <span className="text-xl font-bold text-foreground">₹{totalDiscPrice.toFixed(2)}</span>
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl bg-secondary/50 p-4 text-sm text-muted">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <p className="leading-relaxed text-xs">
              Your order is securely processed. We don't store your payment information on our servers.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
