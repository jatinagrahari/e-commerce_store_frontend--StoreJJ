import React from "react";
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity } from "../store/cartSlice";

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = () => {
    let totalPrice = 0;
    let totalDiscPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.product.price * item.quantity;
      totalDiscPrice += item.product.discountedPrice * item.quantity;
    });
    return { totalPrice, totalDiscPrice };
  };

  const { totalPrice, totalDiscPrice } = total();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-xl bg-surface shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} />

            <h2 className="text-xl font-semibold">Your Cart</h2>

            <span className="text-sm text-muted">({cartItems.length})</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-secondary"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[calc(100%-150px)] overflow-y-auto px-6 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingCart size={45} className="mb-4 text-muted" />

              <h3 className="text-lg font-semibold">Your cart is empty</h3>

              <p className="mt-2 text-sm text-muted">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <div
                  key={item.product._id}
                  className="flex gap-4 border-b border-border pb-5"
                >
                  {/* Product Image */}
                  <img
                    src={item.product.images?.[0]?.url}
                    alt={item.product.name}
                    className="h-24 w-20 rounded-lg object-cover"
                  />

                  {/* Product Info */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-medium">{item.product.name}</h3>

                        <p className="mt-1 text-sm text-muted">
                          ₹{item.product.discountedPrice}
                        </p>
                        <p className="mt-1 text-sm text-muted line-through">
                          ₹{item.product.price}
                        </p>
                      </div>

                      <button
                        className="text-muted hover:text-red-500"
                        onClick={() =>
                          dispatch(deleteFromCart({ product: item.product }))
                        }
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        className="rounded-md border border-border p-1 cursor-pointer"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              product: item.product,
                              quantity:
                                item.quantity > 1 ? item.quantity - 1 : 1,
                            }),
                          )
                        }
                      >
                        <Minus size={15} />
                      </button>

                      <span className="text-sm">{item.quantity}</span>
                      <button
                        className="rounded-md border border-border p-1 cursor-pointer"
                        onClick={() =>
                          dispatch(
                            updateQuantity({
                              product: item.product,
                              quantity:
                                item.quantity < 10 ? item.quantity + 1 : 10,
                            }),
                          )
                        }
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full border-t border-border bg-surface px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-muted">Subtotal</span>

              <span className="text-lg font-semibold">
                ₹{totalDiscPrice.toFixed(2)}
              </span>
              <span className="text-lg font-semibold line-through">
                ₹{totalPrice}
              </span>
            </div>

            <button className="w-full rounded-lg bg-primary py-3 font-medium text-white transition hover:opacity-90">
              View Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
