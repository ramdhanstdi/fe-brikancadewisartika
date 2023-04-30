"use client";

import { cn } from "@/features/app/utils/twmerge.utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, useState } from "react";
import { FaEye } from "react-icons/fa";
import { PopUpDetail } from "../PopUpDetail";

const TableVariants = cva("w-full h-full");

interface TableProps
  extends HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof TableVariants> {
  data: {
    id: string;
    created_at: string;
    visit_date: string;
    name_merchant: string;
    lng: string;
    lat: string;
    profile_id: string;
    category: string;
    address: string;
    rating: string;
    conclusion: string;
    realitaion_date: string;
    url_image: string;
    grup_area: null;
    profile: {
      profile: [
        {
          fullname: string;
        }
      ];
    };
  }[];
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, data }, ref) => {
    const [isOpen, setOpen] = useState(false);
    const closeModal = () => {
      setOpen(false);
    };
    const openModal = () => {
      setOpen(true);
    };
    return (
      <>
        <div className={cn(TableVariants({ className }))}>
          {data?.length > 0 ? (
            data.map((column) => (
              <div
                key={column.id}
                className="border-2 bg-white flex m-2 p-5 rounded-md"
              >
                <div className="text-[16px] w-[175px]">
                  {column.grup_area || "Kosong"}
                </div>
                <div className="text-[16px] w-[175px]">
                  {column.profile.profile[0].fullname}
                </div>
                <div className="text-[16px] w-[185px]">
                  {column.name_merchant}
                </div>
                <div className="text-[16px] w-[205px]">
                  {new Date(column.visit_date).toLocaleDateString("id-ID")}
                </div>
                <div className="text-[16px] w-[200px]">{column.address}</div>
                <div className="text-[16px] w-[175px]">{column.conclusion}</div>
                <div className="text-[16px] w-[200px]">
                  {new Date(column.realitaion_date).toLocaleDateString("id-ID")}
                </div>
                <button
                  className="bg-slate-300 rounded-md p-2 hover:bg-slate-400 disabled:bg-slate-500 disabled:cursor-not-allowed active:bg-slate-500"
                  onClick={openModal}
                >
                  <FaEye size={16} />
                </button>
              </div>
            ))
          ) : (
            <div className="border-2 bg-white flex m-2 p-5 justify-center rounded-md">
              <div className="text-[24px] font-bold">Belum Ada Data</div>
            </div>
          )}
        </div>
        <PopUpDetail isOpen={isOpen} closeModal={closeModal} />
      </>
    );
  }
);

Table.displayName = "Table";

export { Table };
