import React from "react";

export const TextareaInput = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ placeholder, ...props }, ref) => (
  <textarea
    ref={ref}
    {...props}
    placeholder={placeholder}
    className="block w-full px-[18px] py-[18px] border-none rounded-xl bg-input placeholder-gray-medium focus:outline-none min-h-[114px] resize-none"
  />
));

TextareaInput.displayName = "Textarea";
