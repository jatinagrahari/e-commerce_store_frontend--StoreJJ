import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Profile as ProfileComp, MyOrders } from "../components";
import { logout as authLogout } from "../admin/auth";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

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
        throw error;
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
      throw error;
    }
  };

  const options = {
    profile: <ProfileComp user={user} />,
    myOrders: <MyOrders orders={orders} />,
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">My Account</h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* User */}
            <div className="mb-6 flex items-center gap-4 border-b border-gray-200 pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-xl font-semibold text-gray-700">
                {user?.name?.[0]?.toUpperCase()}
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">{user?.name}</h2>

                <p className="text-sm text-gray-500">My Account</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeTab === "profile"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Profile
              </button>

              <button
                onClick={() => setActiveTab("myOrders")}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeTab === "myOrders"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                My Orders
              </button>

              {/* Future tabs */}

              {/* 
              <button
                className="w-full rounded-xl px-4 py-3 text-left text-sm
                font-medium text-gray-600 hover:bg-gray-100"
              >
                Addresses
              </button>

              <button
                className="w-full rounded-xl px-4 py-3 text-left text-sm
                font-medium text-gray-600 hover:bg-gray-100"
              >
                Account Settings
              </button>
              */}

              <button
                className="mt-4 w-full rounded-xl px-4 py-3 text-left
                text-sm font-medium text-red-600 transition hover:bg-red-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">{options[activeTab]}</main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
