import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import { ErrorMessage, Field } from "formik";

// Variant
const inputVariant = cva(
  " w-full lg:h-[40px] h-[32px] text-slate-900 text-center lg:text-base text-sm lg:border-2 border border-slate-600 rounded-md"
);

// Interface
interface AppBaseInputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  name: string;
  label: string;
  type: string;
}

// Component
const AppBaseInput = forwardRef<HTMLInputElement, AppBaseInputProps>(
  ({ className, name, label, type, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="py-2 my-2 relative">
        <label className="lg:text-[20px] md:text-[16px] text-[12px] text-black mb-2 font-semibold">
          {label}
        </label>
        <Field name={name} type={type} className={cn(inputVariant())} />
        <div className="w-full text-red-600 text-left absolute lg:text-[14px] text-[10px] ">
          <ErrorMessage name={name} />
        </div>
      </div>
    );
  }
);

AppBaseInput.displayName = "AppBaseInput";

export default AppBaseInput;
