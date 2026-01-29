import React from "react";

export const TextareaInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ placeholder, className, ...props }, ref) => (
  <textarea
    ref={ref}
    rows={5}
    {...props}
    placeholder={placeholder}
    className={`block w-full px-[18px] py-[18px] text-[16px] leading-[1.5] border border-gray-300 rounded-md shadow-sm placeholder-gray focus:outline-none focus:ring-gray-medium focus:border-gray-medium sm:text-sm resize-none ${className}`}
  />
));

TextareaInput.displayName = "Textarea";
