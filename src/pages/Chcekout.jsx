import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const cartData = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.userData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const total = () => {
    let totalPrice = 0;
    let totalDiscPrice = 0;
    cartData.map((item) => {
      totalPrice += item.product.price * item.quantity;
      totalDiscPrice += item.product.discountedPrice * item.quantity;
    });
    return { totalPrice, totalDiscPrice };
  };
  const { totalPrice, totalDiscPrice } = total();

  const onSubmit = async (data) => {
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
        name: "E-Commerce Store",
        description: "Order Payment",
        order_id: razorpayOrder.id,

        handler: async (paymentResponse) => {
          try {
            // 1. Verify Razorpay payment
            const verifyResponse = await axios.post(
              "/api/v1/payment/verify",
              paymentResponse,
            );

            console.log("Payment verification:", verifyResponse.data);

            // 2. Create your actual ecommerce order
            const orderResponse = await axios.post("/api/v1/orders/", {
              products: cartData.map((item) => ({
                productId: item.product._id,
                quantity: item.quantity,
              })),

              shippingAddress: data.shippingAddress,

              paymentId: paymentResponse.razorpay_payment_id,
            });

            console.log("Order created:", orderResponse.data);

            dispatch(clearCart());
            toast.success("Order Placed successfully");
            navigate("/order-success", {
              state: {
                order: orderResponse.data.data,
              },
            });
          } catch (error) {
            console.log("Order creation failed:", error);
          }
        },

        theme: {
          color: "#000000",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Checkout
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Complete Your Order
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Enter your shipping details to continue.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 lg:col-span-2"
        >
          {/* Contact Information */}
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                {...register("shippingAddress.fullName")}
              />

              <Input
                label="Mobile Number"
                type="tel"
                placeholder="Enter mobile number"
                {...register("shippingAddress.mobileNumber")}
              />
            </div>
          </section>

          {/* Shipping Address */}
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-6 text-xl font-semibold">Shipping Address</h2>

            <div className="space-y-5">
              <Input
                label="House Number"
                placeholder="House / Flat number"
                {...register("shippingAddress.houseNumber")}
              />

              <Input
                label="Street"
                placeholder="Street / Area"
                {...register("shippingAddress.street")}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  label="City"
                  placeholder="Enter city"
                  {...register("shippingAddress.city")}
                />

                <Input
                  label="Post Code"
                  placeholder="Enter post code"
                  {...register("shippingAddress.postCode")}
                />

                <Input
                  label="State"
                  placeholder="Enter state"
                  {...register("shippingAddress.state")}
                />

                <Input
                  label="Country"
                  placeholder="Enter country"
                  {...register("shippingAddress.country")}
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="mb-2 text-xl font-semibold">Payment</h2>

            <p className="text-sm text-gray-500">
              Secure payment will be available at the next step.
            </p>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "processing..." : "Pay Now"}
          </button>
        </form>

        {/* Order Summary */}
        {/* Order Summary */}
        <aside className="h-fit rounded-2xl border border-gray-200 p-6 lg:sticky lg:top-6">
          <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

          {/* Cart Items */}
          <div className="space-y-5 border-b border-gray-200 pb-5">
            {cartData.map((item) => (
              <div key={item.product._id} className="flex gap-4">
                {/* Product Image */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium">{item.product.name}</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <div className="flex justify-between mx-auto">
                    <p className="mt-1 font-semibold">
                      ₹{item.product.discountedPrice}
                    </p>
                    <p className="mt-1 font-semibold line-through">
                      ₹{item.product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <div className="flex gap-4">
                <span>₹{totalDiscPrice}</span>
                <span className="line-through">₹{totalPrice}</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>Free</span>
            </div>
          </div>

          {/* Total */}
          <div className="mt-5 flex justify-between border-t border-gray-200 pt-5 text-lg font-bold">
            <span>Total</span>
            <div className="flex gap-4">
              <span>₹{totalDiscPrice}</span>
              <span className="line-through">₹{totalPrice}</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
            Your order is securely processed and your payment information is
            protected.
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
