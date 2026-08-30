import React from "react";

const Button = ({
  children,
  type = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",

    secondary:
      "border border-border bg-surface text-foreground hover:bg-secondary hover:text-primary",

    outline: "border border-primary text-primary hover:bg-secondary",

    danger: "bg-error text-white hover:bg-red-700",

    success: "bg-success text-white hover:bg-green-700",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[type]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
