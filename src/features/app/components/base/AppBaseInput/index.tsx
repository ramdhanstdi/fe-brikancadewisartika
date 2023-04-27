"use client";

import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, useCallback, useState } from "react";
import { ErrorMessage, Field } from "formik";
import { FaEye } from "react-icons/fa";

// Variant
const inputVariant = cva(
  " w-full lg:h-[40px] h-[32px] text-slate-900 text-center lg:text-[20px] text-[16px] lg:border-2 rounded-md"
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
  ({ className, name, placeholder, label, type, ...props }, ref) => {
    const [see, setSee] = useState(false);
    const onClickSee = useCallback(() => {
      setSee(!see);
    }, [see]);
    return (
      <div ref={ref} {...props} className="py-2 my-2 relative">
        <label className="lg:text-[20px] md:text-[16px] text-[12px] text-[#2C3333] mb-2 font-semibold">
          {label}
        </label>
        <div className="flex items-center gap-3 border-2 border-[#2A2A2A] rounded-md p-1">
          <Field
            name={name}
            type={!see ? type : "text"}
            placeholder={placeholder}
            className={cn(inputVariant())}
          />
          {type === "password" && (
            <FaEye
              className="hover:cursor-pointer"
              size={30}
              onClick={onClickSee}
            />
          )}
        </div>
        <div className="w-full text-red-600 text-left absolute lg:text-[14px] text-[10px] ">
          <ErrorMessage name={name} />
        </div>
      </div>
    );
  }
);

AppBaseInput.displayName = "AppBaseInput";

export { AppBaseInput };
