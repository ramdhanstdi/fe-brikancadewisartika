import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { Field } from "formik";
import { forwardRef, HTMLAttributes } from "react";

const AppBaseSelectVariants = cva(
  "w-full lg:h-[40px] h-[32px] text-slate-900 text-center lg:text-[20px] text-[16px] lg:border-2 border border-slate-600 rounded-md"
);

interface AppBaseSelectProps
  extends HTMLAttributes<AppBaseSelectProps>,
    VariantProps<typeof AppBaseSelectVariants> {
  option: { value: string; label: string }[];
  name: string;
  label: string;
}

const AppBaseSelect = forwardRef<HTMLSelectElement, AppBaseSelectProps>(
  ({ className, option, name, label }) => {
    return (
      <div className="py-2 my-2">
        <label className="lg:text-[20px] md:text-[16px] text-[12px] text-black mb-2 font-semibold">
          {label}
        </label>
        <Field
          as="select"
          name={name}
          id={name}
          className={cn(AppBaseSelectVariants({ className }))}
        >
          {option.map((data) => {
            return <option value={data.value}>{data.label}</option>;
          })}
        </Field>
      </div>
    );
  }
);

AppBaseSelect.displayName = "AppBaseSelect";

export { AppBaseSelect };
