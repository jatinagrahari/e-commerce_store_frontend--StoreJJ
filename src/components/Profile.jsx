import React from "react";

const Profile = ({ user }) => {
  return (
    <section>
      {/* Welcome Card */}
      <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user?.name}
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your profile, orders, addresses and account settings.
        </p>
      </div>

      {/* Profile Information */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Profile Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your personal information
            </p>
          </div>

          <button className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="mt-1 font-medium text-gray-900">{user?.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="mt-1 font-medium text-gray-900">{user?.email}</p>
          </div>

          {/* <div>
                  <p className="text-sm text-gray-500">Mobile Number</p>
                  <p className="mt-1 font-medium text-gray-900">9876543210</p>
                </div> */}

          <div>
            <p className="text-sm text-gray-500">Account Status</p>
            <p className="mt-1 font-medium text-green-600">Active</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">0</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Pending Orders</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">0</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Saved Addresses</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">0</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
