import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Plus, Edit2, Trash2 } from "lucide-react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dbProducts = await axios.get("/api/v1/products");
        setProducts(dbProducts.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-7xl animate-fade-in">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Products</h1>
            <p className="mt-1 text-sm text-muted">Manage your store products.</p>
          </div>
          <Link to={"/admin/add-product"}>
            <button className="flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition hover:bg-foreground/90">
              <Plus className="h-4 w-4" />
              Add Product
            </button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted">
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-muted">
                      No products found. Add some to get started.
                    </td>
                  </tr>
                ) : (
                  products.map((item) => (
                    <tr key={item._id} className="border-b border-border/50 transition-colors hover:bg-secondary/20">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-secondary/50">
                            <img
                              src={item.images?.[0]?.url || "https://placehold.co/100"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted font-mono mt-1">{item._id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-foreground">
                        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-bold text-foreground">₹{item.discountedPrice || item.price}</p>
                        {item.discount > 0 && (
                          <p className="text-xs text-muted line-through mt-0.5">
                            ₹{item.price}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-foreground">
                        {item.stock > 0 ? (
                          <span className="text-success">{item.stock} in stock</span>
                        ) : (
                          <span className="text-error">Out of stock</span>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <Link to={`/admin/edit-product/${item._id}`}>
                            <button className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                              <Edit2 className="h-3.5 w-3.5" />
                              Edit
                            </button>
                          </Link>

                          <button className="flex items-center gap-1.5 rounded-lg border border-error/20 bg-error/10 px-3 py-2 text-sm font-medium text-error transition-colors hover:bg-error/20">
                            <Trash2 className="h-3.5 w-3.5" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
