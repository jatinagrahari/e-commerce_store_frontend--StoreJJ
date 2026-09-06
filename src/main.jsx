import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  Home,
  Signup,
  Login,
  Verification,
  Shop,
  Checkout,
  OrderSuccess,
  Profile,
} from "./pages";
import App from "./App.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import {
  AddProduct,
  AdminDashboard,
  AdminProducts,
  AdminUsers,
  EditProduct,
} from "./admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/verify-email" element={<Verification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/profile" element={<Profile />} />
      {/* //admin routes */}

      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      <Route path="/admin/users" element={<AdminUsers />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
