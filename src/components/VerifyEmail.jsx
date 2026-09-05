import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resendOtp, verifyOtp } from "../admin/auth";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsCreated(true);
    try {
      const user = await verifyOtp(data.otp);
      toast.success(" Verification successfull");
      navigate("/");
    } catch (error) {
      setError(error.message);
      setIsCreated(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp();
      toast.success("Otp resent successfull");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#111111]">
            Verify Your Email
          </h1>

          <p className="text-[#6B7280] mt-2">
            Enter the OTP sent to your email address
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center py-4">{error}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#111111] mb-2">
              Verification Code
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF] transition text-center tracking-[0.5em]"
              {...register("otp", {
                required: "OTP is required",
                minLength: {
                  value: 6,
                  message: "OTP must be 6 digits",
                },
                maxLength: {
                  value: 6,
                  message: "OTP must be 6 digits",
                },
              })}
            />

            {errors.otp && (
              <p className="text-red-500 text-sm mt-2">{errors.otp.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3 rounded-lg transition"
            disabled={isCreated}
          >
            {isCreated ? "verifying..." : "Verify Email"}
          </button>
        </form>

        <p className="text-center text-sm text-[#6B7280] mt-6">
          Didn't receive the code?{" "}
          <button
            type="button"
            className="text-[#2563EB] font-medium hover:text-[#1D4ED8]"
            onClick={handleResendOtp}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
