import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", placeholder, className = "", ...props },
  ref,
) {
  const id = useId();

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20"
        {...props}
      />
    </div>
  );
});

export default Input;
