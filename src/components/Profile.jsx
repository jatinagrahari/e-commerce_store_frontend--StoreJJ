import React from "react";
import { User, Mail, Shield } from "lucide-react";

const Profile = ({ user, ordersCount = 0 }) => {
  return (
    <section className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back, {user?.name}
        </h2>
        <p className="mt-2 text-muted">
          Manage your profile, orders, addresses and account settings here.
        </p>
      </div>

      {/* Profile Information */}
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Profile Information
            </h2>
            <p className="mt-1 text-sm text-muted">
              Your personal information
            </p>
          </div>
          {/* Edit feature can be implemented later */}
          {/* <button className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition hover:bg-secondary">
            Edit Profile
          </button> */}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-secondary/30 p-4">
            <div className="rounded-full bg-secondary p-2 text-muted">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Full Name</p>
              <p className="mt-1 font-medium text-foreground">{user?.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-secondary/30 p-4">
            <div className="rounded-full bg-secondary p-2 text-muted">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
              <p className="mt-1 font-medium text-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-secondary/30 p-4">
            <div className="rounded-full bg-secondary p-2 text-muted">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Account Status</p>
              <p className="mt-1 font-medium text-success">Active</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <p className="text-sm font-medium text-muted">Total Orders</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{ordersCount}</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <p className="text-sm font-medium text-muted">Active Subscriptions</p>
          <p className="mt-2 text-3xl font-bold text-foreground">0</p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
          <p className="text-sm font-medium text-muted">Saved Addresses</p>
          <p className="mt-2 text-3xl font-bold text-foreground">0</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
