import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const AppBaseCardVariants = cva(
  " bg-slate-200 lg:p-5 p-3 lg:m-5 m-3  rounded-md shadow-md"
);
interface AppBaseCardProps
  extends HTMLAttributes<AppBaseCardProps>,
    VariantProps<typeof AppBaseCardVariants> {}

const AppBaseCard = forwardRef<HTMLCanvasElement, AppBaseCardProps>(
  ({ className, children }, ref) => {
    return (
      <div className={cn(AppBaseCardVariants({ className }))}>{children}</div>
    );
  }
);

AppBaseCard.displayName = "AppBaseCard";

export { AppBaseCard };
