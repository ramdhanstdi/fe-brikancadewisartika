import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const AppBaseLabelVariant = cva("w-full text-center ", {
  variants: {
    size: {
      lg: "lg:text-[24px] md:text-[20px] text-[16px]",
      md: "lg:text-[20px] md:text-[16px] text-[12px]",
      sm: "lg:text-[16px] md:text-[12px] text-[8px]",
    },
  },
});

interface AppBaseLabelProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof AppBaseLabelVariant> {}

const AppBaseLabel = forwardRef<HTMLParagraphElement, AppBaseLabelProps>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(AppBaseLabelVariant({ className, size }))}
      >
        {children}
      </p>
    );
  }
);

AppBaseLabel.displayName = "AppBaseLabel";

export default AppBaseLabel;
