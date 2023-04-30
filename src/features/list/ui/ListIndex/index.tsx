"use client";

import {
  AppBaseCard,
  AppBaseDatePicker,
  AppBaseLabel,
} from "@/features/app/components";
import { FC, useCallback, useEffect, useState } from "react";
import { Table } from "./components";

import { useMerchant } from "@/features/merchant/hooks/merchant.hooks";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ListIndexProps {}

const ListIndex: FC<ListIndexProps> = () => {
  const [page, setPage] = useState(0);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const { getList, listData_merchant } = useMerchant();

  /**
   * @description handle get data list
   *
   * @return {void}
   */
  const getData = useCallback(async () => {
    await getList({
      params: {
        fromDate: fromDate.toISOString(),
        toDate: toDate.toISOString(),
        page: page,
      },
    }).unwrap();
  }, [fromDate, getList, page, toDate]);

  /**
   * @description handle onChange To Date
   *
   * @return {void}
   */
  const onChangeToDate = useCallback((date: any) => {
    setToDate(date);
    setPage(0);
  }, []);

  /**
   * @description handle onChange From Date
   *
   * @return {void}
   */
  const onChangeFromDate = useCallback((date: any) => {
    setFromDate(date);
    setPage(0);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <AppBaseCard>
      <AppBaseLabel size={"lg"} className="font-bold mb-7">
        List Data Merchant
      </AppBaseLabel>
      <div className="flex justify-between items-end ml-5">
        <div className="flex gap-3 items-start">
          <AppBaseLabel size={"md"}>
            Menampilkan: {listData_merchant?.results.length}
          </AppBaseLabel>
          <AppBaseLabel size={"md"}>
            dari {listData_merchant?.pageInfo.totalData} data
          </AppBaseLabel>
        </div>

        <div className="flex gap-5 items-center">
          <AppBaseDatePicker
            label="Dari Tanggal"
            date={fromDate}
            name="visit"
            onChange={onChangeFromDate}
          />
          <AppBaseDatePicker
            label="Sampai Tanggal"
            date={toDate}
            name="realisation"
            onChange={onChangeToDate}
          />
        </div>
      </div>
      <div className="m-3 p-5 bg-slate-300 rounded-md flex font-bold">
        <div className="text-[16px] w-[165px]">Grup Area</div>
        <div className="text-[16px] w-[165px]">Nama RM</div>
        <div className="text-[16px] w-[180px]">Nama Merchant</div>
        <div className="text-[16px] w-[200px]">Tanggal Kunjungan</div>
        <div className="text-[16px] w-[190px]">Alamat Merchant</div>
        <div className="text-[16px] w-[175px]">Hasil Kunjungan</div>
        <div className="text-[16px] w-[200px]">Realisasi</div>
      </div>
      <Table data={listData_merchant?.results} />
      <div className="flex gap-3 ml-3">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          disabled={page < 1}
          className="bg-slate-300 rounded-md p-3 hover:bg-slate-400 disabled:bg-slate-500 disabled:cursor-not-allowed active:bg-slate-500"
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={page >= listData_merchant?.pageInfo.totalPage}
          className="bg-slate-300 rounded-md p-3 hover:bg-slate-400 disabled:bg-slate-500 disabled:cursor-not-allowed active:bg-slate-500"
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </AppBaseCard>
  );
};

export default ListIndex;
