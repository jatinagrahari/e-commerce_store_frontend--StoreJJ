import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111111]">Welcome Back</h1>
          <p className="text-[#6B7280] mt-2">Login to your Store JJ account</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#6B7280]">
              <input type="checkbox" className="accent-[#2563EB]" />
              Remember me
            </label>

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
          >
            Login
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
