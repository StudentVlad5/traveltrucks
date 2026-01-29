import React from "react";
import Link, { LinkProps } from "next/link";

type LinkVariant = "primary" | "secondary";

// Поєднуємо пропси Next.js Link та стандартні атрибути <a>
type ButtonLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  variant?: LinkVariant;
  disabled?: boolean;
};

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, className = "", variant = "primary", disabled, href, ...props },
    ref,
  ) => {
    const VARIANT_STYLES: Record<LinkVariant, string> = {
      primary: "bg-accent-red hover:bg-accent-red-dark text-white",
      secondary:
        "bg-transparent border border-gray-light hover:border-accent-red text-main",
    };

    const commonClasses = `
      inline-flex w-fit justify-center items-center py-4 px-10 rounded-[200px]
      text-base font-medium leading-[1.5] tracking-[-0.01em] transition-all duration-200 m-h-14;
      ${VARIANT_STYLES[variant]}
      ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
      ${className}
    `;

    return (
      <Link
        href={disabled ? "#" : href}
        ref={ref}
        className={commonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

ButtonLink.displayName = "ButtonLink";
