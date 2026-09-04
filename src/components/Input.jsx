import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", placeholder, className = "", ...props },
  ref,
) {
  const id = useId();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        {...props}
      />
    </div>
  );
});

export default Input;
