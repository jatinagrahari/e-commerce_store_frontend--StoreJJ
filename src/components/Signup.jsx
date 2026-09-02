import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111111]">Create Account</h1>

          <p className="text-[#6B7280] mt-2">Join Store JJ today</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 rounded-lg transition"
          >
            Create Account
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
