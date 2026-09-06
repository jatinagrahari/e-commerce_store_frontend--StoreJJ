import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { login as authLogin } from "../admin/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.auth.status);

  const onSubmit = async (data) => {
    try {
      setIsCreated(true);
      const user = await authLogin(data.email, data.password);

      dispatch(login(user.data.data));
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      setIsCreated(false);
      throw error;
    }
  };

  useEffect(() => {
    if (userStatus) {
      navigate("/");
    }
  }, [userStatus, navigate]);

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111111]">Welcome Back</h1>

          <p className="text-[#6B7280] mt-2">Login to your Store JJ account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="text-[#2563EB] hover:text-[#1D4ED8] font-medium"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 rounded-lg transition"
            disabled={isCreated}
          >
            {isCreated ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-[#6B7280] mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#2563EB] font-medium hover:text-[#1D4ED8]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
