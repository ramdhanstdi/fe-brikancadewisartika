import AppBaseLabel from "@/features/app/components/base/AppBaseLabel";
import Link from "next/link";
import React from "react";
type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div
      className={`flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[100vh] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="md:sticky top-0 md:top-16">
        {/* nav items */}
        <div className="py-2 flex flex-col gap-2">
          <AppBaseLabel
            size={"md"}
            className="hover:bg-indigo-200 p-2 hover:text-indigo-900"
          >
            <Link href="/map">Map</Link>
          </AppBaseLabel>
          <AppBaseLabel
            size={"md"}
            className="hover:bg-indigo-200 p-2 hover:text-indigo-900"
          >
            <Link href="/List">List</Link>
          </AppBaseLabel>
        </div>
      </nav>
    </div>
  );
};
export { Sidebar };
