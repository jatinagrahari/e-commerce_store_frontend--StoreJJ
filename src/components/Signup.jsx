import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { useState, useEffect } from "react";
import { createAccount } from "../admin/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { ArrowRight, UserPlus } from "lucide-react";

const Signup = () => {
  const [error, setError] = useState(null);
  const [isCreated, setIsCreated] = useState(false);
  const userStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords must match");
      return;
    }
    setError(null);

    try {
      setIsCreated(true);
      const user = await createAccount(data.name, data.email, data.password);
      const response = user.data.data;
      toast.success("Account created! Please verify your email.");
      dispatch(login(response));
      navigate("/signup/verify-email");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsCreated(false);
    }
  };

  useEffect(() => {
    if (userStatus) {
      navigate("/");
    }
  }, [userStatus, navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-full max-w-md bg-surface/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl p-8 sm:p-10 relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            <UserPlus className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Create Account</h1>
          <p className="text-muted mt-3">Join Store JJ today for an exclusive experience</p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-error/10 p-3 text-center text-sm font-medium text-error border border-error/20">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && <p className="mt-1 text-xs text-error">{errors.name.message}</p>}
          </div>

          <div>
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && <p className="mt-1 text-xs text-error">{errors.email.message}</p>}
          </div>

          <div>
            <Input
              label="Password"
              type="password"
              placeholder="Create a password (min 6 characters)"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className="mt-1 text-xs text-error">{errors.password.message}</p>}
          </div>

          <div>
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
            />
            {errors.confirmPassword && <p className="mt-1 text-xs text-error">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-foreground hover:bg-foreground/90 text-background font-bold py-3.5 rounded-xl transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            disabled={isCreated}
          >
            {isCreated ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-background border-t-transparent" />
            ) : (
              <>
                Create Account
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border/50 pt-8">
          <p className="text-sm text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-bold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
