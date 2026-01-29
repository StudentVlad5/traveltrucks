import React from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: ButtonVariant;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = "button",
      className = "",
      isLoading,
      variant = "primary",
      disabled,
      ...props
    },
    ref,
  ) => {
    // Стилі для варіантів (ідентичні ButtonLink)
    const VARIANT_STYLES: Record<ButtonVariant, string> = {
      primary:
        "bg-accent-red hover:bg-accent-red-dark text-white border-transparent",
      secondary:
        "bg-transparent border border-gray-light hover:border-accent-red text-main",
    };

    // Базові класи (ідентичні ButtonLink)
    const commonClasses = `inline-flex w-fit justify-center items-center py-4 px-10 rounded-[200px] text-base font-medium leading-[1.5] tracking-[-0.01em] transition-all duration-200 min-h-14 cursor-pointer outline-none border ${VARIANT_STYLES[variant]} ${disabled || isLoading ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`;
    return (
      <button
        type={type}
        ref={ref}
        disabled={disabled || isLoading}
        className={commonClasses}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-current"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4 fill-none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
