import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useState } from "react";
import { createAccount } from "../admin/auth";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Signup = () => {
  const [error, setError] = useState(null);
  const [isCreated, setIsCreated] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("password must match");
      return;
    }
    setError(null);

    try {
      setIsCreated(true);
      const user = await createAccount(data.name, data.email, data.password);
      const response = user.data.data;
      toast.success("signed up success! please verify email");
      dispatch(login(response));
      navigate("/signup/verify-email");
      setIsCreated(false);
    } catch (error) {
      setError(error.response?.data?.message || "something went wrong");
      setIsCreated(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111111]">Create Account</h1>

          <p className="text-[#6B7280] mt-2">Join Store JJ today</p>
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center py-4">{error}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            {...register("name", {
              required: "Name is required",
            })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
            })}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
            })}
          />

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 rounded-lg transition"
            disabled={isCreated}
          >
            {isCreated ? "Signing up..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-[#6B7280] mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#2563EB] font-medium hover:text-[#1D4ED8]"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
