import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { login as authLogin } from "../admin/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { ArrowRight, LogIn } from "lucide-react";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
      console.error(error);
      toast.error(error?.response?.data?.message || "Login failed. Please check your credentials.");
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
        <div className="text-center mb-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            <LogIn className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Welcome Back</h1>
          <p className="text-muted mt-3">Log in to your Store JJ account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <button
                type="button"
                className="text-xs font-semibold text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <p className="mt-1 text-xs text-error">{errors.password.message}</p>}
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
                Sign In
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border/50 pt-8">
          <p className="text-sm text-muted">
            New to Store JJ?{" "}
            <Link
              to="/signup"
              className="text-primary font-bold hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
