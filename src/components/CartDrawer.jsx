import React from "react";
import { createPortal } from "react-dom";
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/cartSlice";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const dispatch = useDispatch();

  const { totalPrice, totalDiscPrice } = cartItems.reduce(
    (acc, item) => {
      acc.totalPrice += (item.product.price || 0) * item.quantity;
      acc.totalDiscPrice += (item.product.discountedPrice || item.product.price || 0) * item.quantity;
      return acc;
    },
    { totalPrice: 0, totalDiscPrice: 0 }
  );

  const savings = totalPrice - totalDiscPrice;

  // Use createPortal to escape any containing blocks (like backdrop-filter in Nav)
  return createPortal(
    <>
      {/* Overlay */}
      <div 
        onClick={onClose} 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-[110] flex h-screen w-full max-w-[440px] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-3 text-foreground">
            <ShoppingCart size={22} />
            <h2 className="text-lg font-bold tracking-tight">Your Cart</h2>
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-primary">
              {cartItems.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted transition hover:bg-secondary hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-6 rounded-full bg-secondary p-6">
                <ShoppingCart size={40} className="text-muted" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Your cart is empty</h3>
              <p className="mt-2 max-w-[250px] text-sm text-muted">
                Looks like you haven't added anything yet. Explore our top categories!
              </p>
              <Link to="/shop" onClick={onClose}>
                <button className="mt-8 rounded-lg bg-foreground px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex gap-4 border-b border-border pb-6 last:border-0"
                >
                  {/* Product Image */}
                  <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary/50">
                    <img
                      src={item.product.images?.[0]?.url || "https://placehold.co/400"}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground line-clamp-2">
                          {item.product.name}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-baseline gap-2">
                          <span className="text-sm font-bold text-foreground">
                            ₹{item.product.discountedPrice || item.product.price}
                          </span>
                          {item.product.discount > 0 && (
                            <span className="text-xs text-muted line-through">
                              ₹{item.product.price}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        className="text-muted transition hover:text-error h-fit p-1"
                        onClick={() =>
                          dispatch(deleteFromCart({ product: item.product }))
                        }
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center rounded-lg border border-border">
                        <button
                          className="p-1.5 text-muted transition hover:bg-secondary hover:text-foreground disabled:opacity-50"
                          disabled={item.quantity <= 1}
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                product: item.product,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          className="p-1.5 text-muted transition hover:bg-secondary hover:text-foreground disabled:opacity-50"
                          disabled={item.quantity >= 10}
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                product: item.product,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border bg-surface px-6 py-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="space-y-3">
              {savings > 0 && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Total MRP</span>
                  <span className="font-medium line-through text-muted">₹{totalPrice.toFixed(2)}</span>
                </div>
              )}
              {savings > 0 && (
                <div className="flex items-center justify-between text-sm text-success">
                  <span>Discount</span>
                  <span className="font-medium">-₹{savings.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between pt-2 text-base font-bold text-foreground border-t border-border/50">
                <span>Subtotal</span>
                <span>₹{totalDiscPrice.toFixed(2)}</span>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-muted">
              Shipping and taxes calculated at checkout.
            </p>

            <Link to="/checkout" className="mt-4 block" onClick={onClose}>
              <button className="w-full rounded-xl bg-foreground py-3.5 text-sm font-semibold text-white transition hover:bg-primary active:scale-[0.98]">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </>,
    document.body
  );
};

export default CartDrawer;
