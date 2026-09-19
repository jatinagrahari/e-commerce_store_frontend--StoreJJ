import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PackagePlus, UploadCloud, X, ArrowRight } from "lucide-react";

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

  const removeImage = (indexToRemove) => {
    const newPreviews = imagePreviews.filter((_, index) => index !== indexToRemove);
    setImagePreviews(newPreviews);
    const files = newPreviews.map(p => p.file);
    setValue("images", files, { shouldValidate: true });
    if (files.length === 0) {
      setError("images", { message: "At least one image is required" });
    }
  };

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
      toast.success("Product added successfully!");
      navigate("/shop");
    } catch (error) {
      setCreated(false);
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="mx-auto max-w-4xl animate-fade-in">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <PackagePlus className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Add Product</h1>
            <p className="mt-1 text-sm text-muted">Create a new product listing in your store.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl border border-border bg-surface p-6 shadow-sm lg:p-10"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <Input
                label="Product Name"
                placeholder="Enter product name"
                {...register("name", { required: "Product name is required" })}
              />
              {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
            </div>

            <div>
              <Input
                label="Base Price (₹)"
                type="number"
                placeholder="0.00"
                {...register("price", { required: "Price is required", min: 0 })}
              />
              {errors.price && <p className="mt-1 text-xs text-error">{errors.price.message}</p>}
            </div>

            <div>
              <Input
                label="Discount (%)"
                type="number"
                placeholder="0"
                {...register("discount", { 
                  required: "Discount is required",
                  min: { value: 0, message: "Discount cannot be negative" },
                  max: { value: 100, message: "Discount cannot exceed 100%" }
                })}
              />
              {errors.discount && <p className="mt-1 text-xs text-error">{errors.discount.message}</p>}
            </div>

            <div>
              <Input
                label="Stock Quantity"
                type="number"
                placeholder="0"
                {...register("stock", { required: "Stock is required", min: 0 })}
              />
              {errors.stock && <p className="mt-1 text-xs text-error">{errors.stock.message}</p>}
            </div>

            <div>
              <Input
                label="Category"
                placeholder="e.g. Electronics, Clothing"
                {...register("category", { required: "Category is required" })}
              />
              {errors.category && <p className="mt-1 text-xs text-error">{errors.category.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Description
              </label>
              <textarea
                rows="5"
                placeholder="Detailed product description..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="mt-1 text-xs text-error">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Images */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-foreground">
                Product Images
              </label>

              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImages}
                  className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                <div className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background py-10 text-center transition-colors peer-hover:border-primary peer-hover:bg-primary/5">
                  <UploadCloud className="mb-3 h-10 w-10 text-muted" />
                  <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                  <p className="mt-1 text-xs text-muted">SVG, PNG, JPG or GIF (max 6 images)</p>
                </div>
              </div>

              {errors.images && (
                <p className="mt-2 text-xs font-medium text-error">
                  {errors.images.message}
                </p>
              )}
            </div>
          </div>

          {/* Image Preview */}
          {imagePreviews.length > 0 && (
            <div className="mt-8 rounded-xl border border-border/50 bg-background p-4">
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Selected Images ({imagePreviews.length}/6)
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {imagePreviews.map((image, index) => (
                  <div
                    key={image.url}
                    className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-surface"
                  >
                    <img
                      src={image.url}
                      alt={`Preview ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-error group-hover:opacity-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-foreground px-8 py-3.5 font-bold text-background transition-all hover:bg-foreground/90 active:scale-95 disabled:opacity-70"
              disabled={created}
            >
              {created ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
              ) : (
                <>
                  Create Product
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
