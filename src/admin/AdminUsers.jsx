import React from "react";
import { Users2, Trash2, Mail } from "lucide-react";

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-7xl animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Users2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Users</h1>
          </div>
          <p className="mt-2 text-sm text-muted">Manage registered users.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-border/50 transition-colors hover:bg-secondary/20">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                        J
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          Jatin Agrahari
                        </p>
                        <p className="text-xs font-mono text-muted mt-0.5">#USER-001</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Mail className="h-4 w-4 text-muted" />
                      jatin@example.com
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                      User
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-muted">01 Sep 2026</td>

                  <td className="px-6 py-5">
                    <button className="flex items-center gap-1.5 rounded-lg border border-error/20 bg-error/10 px-3 py-2 text-sm font-medium text-error transition-colors hover:bg-error/20">
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </td>
                </tr>

                <tr className="transition-colors hover:bg-secondary/20">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                        R
                      </div>

                      <div>
                        <p className="font-semibold text-foreground">
                          Rahul Sharma
                        </p>
                        <p className="text-xs font-mono text-muted mt-0.5">#USER-002</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Mail className="h-4 w-4 text-muted" />
                      rahul@example.com
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                      User
                    </span>
                  </td>

                  <td className="px-6 py-5 text-sm text-muted">28 Aug 2026</td>

                  <td className="px-6 py-5">
                    <button className="flex items-center gap-1.5 rounded-lg border border-error/20 bg-error/10 px-3 py-2 text-sm font-medium text-error transition-colors hover:bg-error/20">
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
