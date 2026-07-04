import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-[0] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b76f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-[#d9b76f] text-[#15120d] shadow-[0_18px_60px_rgba(217,183,111,0.25)] hover:bg-[#f0d898]",
        outline:
          "border border-white/30 bg-white/8 text-white backdrop-blur-xl hover:border-[#d9b76f]/70 hover:bg-[#d9b76f]/12",
        ghost: "text-white/84 hover:bg-white/10 hover:text-white",
        charcoal:
          "bg-[#15120d] text-[#f8f2e8] hover:bg-[#2a2418] shadow-[0_18px_45px_rgba(0,0,0,0.2)]",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
