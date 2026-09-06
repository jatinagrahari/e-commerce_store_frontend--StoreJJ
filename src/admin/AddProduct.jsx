import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [created, setCreated] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register("images", {
      required: "At least one image is required",
    });
  }, [register]);

  const handleImages = (e) => {
    const newFiles = Array.from(e.target.files);
    const combined = [...imagePreviews.map((p) => p.file), ...newFiles];

    if (combined.length > 6) {
      setError("images", { message: "You can upload a maximum of 6 images" });
      return;
    }

    clearErrors("images");
    setValue("images", combined, { shouldValidate: true });

    const previews = combined.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImagePreviews(previews);
    e.target.value = ""; // reset input so picking the same file again still fires onChange
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((image) => {
        URL.revokeObjectURL(image.url);
      });
    };
  }, [imagePreviews]);

  const onSubmit = async (data) => {
    setCreated(true);
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("discount", data.discount);
    formData.append("stock", data.stock);
    formData.append("category", data.category);

    data.images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await axios.post("/api/v1/products", formData);
      toast.success("product created /added successfully");
      navigate("/shop");
    } catch (error) {
      setCreated(false);
      console.log(error.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add Product</h1>
          <p className="mt-1 text-gray-500">Add a new product to your store.</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl bg-white p-6 shadow-sm lg:p-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Product Name"
              placeholder="Enter product name"
              {...register("name", { required: "Product name is required" })}
            />

            <Input
              label="Price"
              type="number"
              placeholder="Enter price"
              {...register("price", { required: "Price is required" })}
            />

            <Input
              label="Discount"
              type="number"
              placeholder="Enter discount percentage"
              {...register("discount", { required: "Discount is required" })}
            />

            <Input
              label="Stock"
              type="number"
              placeholder="Enter stock quantity"
              {...register("stock", { required: "Stock is required" })}
            />

            <Input
              label="Category"
              placeholder="Enter category"
              {...register("category", { required: "Category is required" })}
            />

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>
              <textarea
                rows="5"
                placeholder="Enter product description"
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Images */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">
                Product Images
              </label>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImages}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />

              <p className="mt-2 text-sm text-gray-500">
                You can upload up to 6 images.
              </p>

              {errors.images && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.images.message}
                </p>
              )}
            </div>
          </div>

          {/* Image Preview */}
          {imagePreviews.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                Image Preview
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {imagePreviews.map((image, index) => (
                  <div
                    key={image.url}
                    className="overflow-hidden rounded-xl border border-gray-200"
                  >
                    <img
                      src={image.url}
                      alt={`Product ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            disabled={created}
          >
            {created ? "creating product" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
