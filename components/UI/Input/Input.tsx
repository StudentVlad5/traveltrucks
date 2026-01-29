import React, { useState } from "react";
import { CloseEye, OpenEye } from "../Icons/icons";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, type, className, autoComplete, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    const togglePasswordVisibility = () => {
      setShowPassword((prevShow) => !prevShow);
    };

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1 relative">
          <input
            id={id}
            ref={ref}
            type={inputType}
            autoComplete={autoComplete}
            {...props}
            className={`block w-full px-[18px] py-[18px] text-[16px] leading-[1.5] border border-gray-300 rounded-md shadow-sm placeholder-gray focus:outline-none focus:ring-gray-medium focus:border-gray-medium sm:text-sm bg-inputs ${className}`}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <OpenEye /> : <CloseEye />}
            </button>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
