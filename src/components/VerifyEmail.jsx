import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resendOtp, verifyOtp } from "../admin/auth";
import { MailCheck, ArrowRight } from "lucide-react";

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
      await verifyOtp(data.otp);
      toast.success("Verification successful!");
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || error.message || "Failed to verify OTP.");
    } finally {
      setIsCreated(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      await resendOtp();
      toast.success("OTP resent successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="w-full max-w-md bg-surface/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl p-8 sm:p-10 relative z-10 animate-fade-in">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            <MailCheck className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Verify Your Email
          </h1>
          <p className="text-muted mt-3">
            Enter the 6-digit verification code sent to your email address
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl bg-error/10 p-3 text-center text-sm font-medium text-error border border-error/20">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Verification Code
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="• • • • • •"
              className="w-full px-4 py-4 rounded-xl border border-border bg-background outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-center tracking-[1em] text-xl font-bold text-foreground placeholder:tracking-[0.5em] placeholder:text-muted/50 placeholder:font-normal"
              {...register("otp", {
                required: "OTP is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "OTP must be exactly 6 digits",
                },
              })}
            />

            {errors.otp && (
              <p className="text-error text-xs font-medium mt-2 text-center">{errors.otp.message}</p>
            )}
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
                Verify Email
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-border/50 pt-8">
          <p className="text-sm text-muted">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="text-primary font-bold hover:underline"
              onClick={handleResendOtp}
            >
              Resend OTP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
