import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import type { Size, Variant } from "./types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Show the loader animation
   * @default false
   */
  loading?: boolean;
  size?: Size;
  variant?: Variant;
}

const buttonVariants = cva(
  "open-sans border-border-01 focus-visible:outline-outer-focus-border disabled:bg-disabled-background-color disabled:text-disabled-content-color rounded-full border border-solid font-semibold text-black focus-visible:outline-offset-2 disabled:cursor-not-allowed",
  {
    defaultVariants: {
      size: "standard",
      variant: "default",
    },
    variants: {
      size: {
        large: "px-6 py-2 text-base leading-5",
        small: "px-2 py-1 text-xs leading-4",
        standard: "px-4 py-1 text-sm leading-6",
      },
      variant: {
        alt: "",
        borderless: "",
        default:
          "bg-interactive-content-01 shadow-elevation-01 hover:bg-interactive-content-02 focus-visible:bg-interactive-content-02 active:bg-interactive-content-03 enabled:active:shadow-elevation-pressed border-none text-white dark:bg-black",
        outline:
          "enabled:hover:outline-gradient-hover enabled:active:outline-gradient-active text-interactive-content-03 enabled:border-interactive-content-01 focus-visible:outline-offset-4",
        primary: "",
      },
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children = "Button", className, loading, size, variant, ...props },
    ref,
  ) => {
    return (
      <button
        className={buttonVariants({ className, size, variant })}
        ref={ref}
        {...props}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
