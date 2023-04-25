import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, useMemo } from "react";

const buttonVariants = cva(
  "w-full pointer-events-auto flex gap-3 justify-center item-center h-auto text-center lg:text-[16px] text-[12px]  rounded-md",
  {
    variants: {
      variant: {
        default: "natural text-black",
        confirm: "confirm text-white",
        declined: "declined text-white",
      },
    },
  }
);

interface AppBaseButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  type: "button" | "submit" | "reset";
  isLoading: boolean;
}

const AppBaseButton = forwardRef<HTMLButtonElement, AppBaseButtonProps>(
  ({ className, variant, children, type, isLoading, ...props }, ref) => {
    const loading = useMemo(() => {
      if (variant === "default") {
        return "bg-yellow-500";
      }
      if (variant === "confirm") {
        return "bg-green-500";
      }
      return "bg-red-500";
    }, [variant]);

    return (
      <button
        type={type}
        ref={ref}
        {...props}
        className={cn(buttonVariants({ className, variant }))}
      >
        {isLoading && (
          <div className="animate-spin w-8 h-8 bg-gradient-to-r from-slate-400 to-slate-50 rounded-full flex items-center justify-center">
            <div className={`w-6 h-6 ${loading} rounded-full`}></div>
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default AppBaseButton;
