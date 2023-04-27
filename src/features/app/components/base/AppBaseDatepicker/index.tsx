import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";
import DatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";
const AppBaseDatePickerVariants = cva("w-auto h-[28px] p-5 ");

interface AppBaseDatePickerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AppBaseDatePickerVariants> {
  date: Date;
  label: string;
  name: string;
}

const AppBaseDatePicker = forwardRef<HTMLDivElement, AppBaseDatePickerProps>(
  ({ className, date, name, label, onChange, ...props }) => {
    return (
      <div className="w-[260px]">
        <div className="lg:text-[20px] md:text-[16px] text-[12px] text-[#2C3333] mb-2 font-semibold">
          {label}
        </div>
        <div
          {...props}
          className="item-center flex gap-2  bg-white w-full border-2 border-black rounded-md"
        >
          <div className="w-[220px]">
            <DatePicker
              name={name}
              className={cn(AppBaseDatePickerVariants({ className }))}
              selected={date}
              onChange={onChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="flex items-center">
            <FaCalendar size={20} />
          </div>
        </div>
      </div>
    );
  }
);

AppBaseDatePicker.displayName = "AppBaseDatePicker";

export { AppBaseDatePicker };
