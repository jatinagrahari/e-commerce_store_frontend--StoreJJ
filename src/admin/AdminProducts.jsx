import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    (async () => {
      const dbProducts = await axios.get("/api/v1/products");
      setProducts(dbProducts.data.data);
    })();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <p className="mt-1 text-gray-500">Manage your store products.</p>
          </div>
          <Link to={"/admin/add-product"}>
            <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
              Add Product
            </button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-sm text-gray-500">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item) => (
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">{item._id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-gray-600">{item.category}</td>

                    <td className="px-6 py-5">
                      <p className="font-medium">₹{item.discountedPrice}</p>
                      <p className="text-sm text-gray-400 line-through">
                        ₹{item.price}
                      </p>
                    </td>

                    <td className="px-6 py-5 text-gray-600">{item.stock}</td>

                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <Link to={`/admin/edit-product/${item._id}`}>
                          <button className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100">
                            Edit
                          </button>
                        </Link>

                        <button className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
