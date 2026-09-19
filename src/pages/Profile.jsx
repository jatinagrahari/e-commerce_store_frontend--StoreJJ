import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Profile as ProfileComp, MyOrders } from "../components";
import { logout as authLogout } from "../admin/auth";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { UserCircle, Package, LogOut, ChevronRight } from "lucide-react";

const Profile = () => {
  const user = useSelector((state) => state.auth.userData);
  const userStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userStatus) {
      navigate("/");
      return;
    }

    const getOrders = async () => {
      try {
        const response = await axios.get("/api/v1/orders/myorders");
        setOrders(response.data.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };

    getOrders();
  }, [userStatus, navigate]);

  const handleLogout = async () => {
    try {
      await authLogout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  const options = {
    profile: <ProfileComp user={user} ordersCount={orders.length} />,
    myOrders: <MyOrders orders={orders} />,
  };

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-foreground">My Account</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:items-start">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            {/* User */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                {user?.name?.[0]?.toUpperCase()}
              </div>
              <div>
                <h2 className="font-semibold text-foreground line-clamp-1">{user?.name}</h2>
                <p className="text-sm text-muted">{user?.email}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-secondary hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <UserCircle className="h-5 w-5" />
                  Profile Details
                </div>
                {activeTab === "profile" && <ChevronRight className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setActiveTab("myOrders")}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === "myOrders"
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-secondary hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5" />
                  My Orders
                </div>
                {activeTab === "myOrders" && <ChevronRight className="h-4 w-4" />}
              </button>

              <div className="my-4 border-t border-border" />

              <button
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-error transition hover:bg-error/10"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="animate-fade-in">
              {options[activeTab]}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
