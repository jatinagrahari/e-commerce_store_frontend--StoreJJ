import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button, CartDrawer } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { logout as authLogout } from "../admin/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await authLogout();
    } catch (error) {
      console.error("Server logout failed", error);
    } finally {
      // Always log out locally even if the server returns 401
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-foreground">
          Store JJ
        </div>

        {/* Main Navigation */}
        <div>
          <ul className="hidden md:flex items-center gap-8 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-muted hover:text-primary"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted hover:text-primary"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted hover:text-primary"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Navigation */}
        <div>
          <div className="hidden md:flex items-center gap-6">
            <Button onClick={() => setIsCartOpen(true)}>
              <NavLink
                to=""
                className="flex gap-2 justify-center items-center text-sm font-medium transition-colors duration-200"
              >
                Cart{" "}
                <div>
                  <ShoppingCart width={"15px"} />{" "}
                </div>
              </NavLink>
              {cartItems.length > 0 && (
                <span className="relative -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </Button>

            {user ? (
              <>
                <Button type="secondary">
                  <NavLink
                    to="/profile"
                    className="text-sm font-medium  transition-colors duration-200 hover:text-primary"
                  >
                    Profile
                  </NavLink>
                </Button>
                {user.role === "admin" ? (
                  <Button type="outline">
                    <NavLink
                      to="/admin"
                      className="text-sm font-medium  transition-colors duration-200 hover:text-primary"
                    >
                      admin
                    </NavLink>
                  </Button>
                ) : null}
              </>
            ) : (
              <Button type="secondary">
                <NavLink
                  to="/login"
                  className="text-sm font-medium  transition-colors duration-200 hover:text-primary"
                >
                  Login
                </NavLink>
              </Button>
            )}
          </div>
        </div>

        {/* mobile hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-foreground transition-colors duration-200 hover:bg-secondary hover:text-primary md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen ? (
          <div className="absolute left-0 top-16 w-full animate-slide-down border-b border-border bg-surface px-6 py-5 shadow-sm md:hidden">
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(!isOpen)}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
            <div className="pt-10 flex flex-col gap-4">
              <Button type="primary" fullWidth>
                <NavLink
                  to="/shop"
                  className="flex justify-center items-center gap-2 text-sm font-medium transition-colors duration-200 "
                >
                  Cart{" "}
                  <div>
                    <ShoppingCart width={"15px"} />
                  </div>
                </NavLink>
                {cartItems.length > 0 && (
                  <span className="relative -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </Button>
              {user ? (
                <>
                  <Button type="secondary">
                    <NavLink
                      to="/profile"
                      className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
                    >
                      Profile {user.role === "admin" ? "admin" : null}
                    </NavLink>
                  </Button>
                  <Button type="secondary" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button type="secondary">
                  <NavLink
                    to="/login"
                    className="text-sm font-medium  transition-colors duration-200 hover:text-primary"
                  >
                    Login
                  </NavLink>
                </Button>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
