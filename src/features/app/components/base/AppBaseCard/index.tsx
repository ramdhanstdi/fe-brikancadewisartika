import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const AppBaseCardVariants = cva(
  " bg-slate-200 lg:p-10 p-5 lg:m-10 m-5  rounded-md"
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
