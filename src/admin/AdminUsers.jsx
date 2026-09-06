import React from "react";

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Users</h1>
          <p className="mt-1 text-gray-500">Manage registered users.</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-sm text-gray-500">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                        J
                      </div>

                      <div>
                        <p className="font-medium text-gray-900">
                          Jatin Agrahari
                        </p>
                        <p className="text-sm text-gray-500">#USER-001</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-600">jatin@example.com</td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      User
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">01 Sep 2026</td>

                  <td className="px-6 py-5">
                    <button className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-600">
                        R
                      </div>

                      <div>
                        <p className="font-medium text-gray-900">
                          Rahul Sharma
                        </p>
                        <p className="text-sm text-gray-500">#USER-002</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-600">rahul@example.com</td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      User
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">28 Aug 2026</td>

                  <td className="px-6 py-5">
                    <button className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100">
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
