"use client";

// React
import { FC, useCallback, useEffect, useState } from "react";

// Leaflet
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component
import {
  AppBaseCard,
  AppBaseDatePicker,
  AppBaseLabel,
} from "@/features/app/components/base";
import { LocationMarker } from "./components";

// Custom Hooks
import { useMerchant } from "@/features/merchant/hooks/merchant.hooks";

// Cookies
import { getCookie } from "cookies-next";

// Jwt
import jwt_decode from "jwt-decode";
import { useRouter } from "next/navigation";

const HomeIndex: FC = () => {
  // const [dateMonitoriong, setDateMonitoring] = useState(new Date());
  const token = getCookie("token");
  const router = useRouter();
  const decoded = jwt_decode(token);
  const { getMonitoring, data_monitoring } = useMerchant();

  /**
   * @description handle get data monitoring
   *
   * @return {void}
   */
  const getData = useCallback(async () => {
    await getMonitoring({}).unwrap();
  }, [getMonitoring]);

  /**
   * @description handle change date
   *
   * @return {void}
   */
  // const onChangeDate = useCallback((date) => {
  //   setDateMonitoring(date);
  // }, []);

  useEffect(() => {
    getData();
    if (decoded.role === 0) {
      router.push("/list");
    }
  }, [decoded.role, getData, router]);

  return (
    <AppBaseCard className="!m-5">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <AppBaseLabel size={"lg"} className="font-bold text-[#2A2A2A]">
          MONITORING RM KANCA DEWI SARTIKA
        </AppBaseLabel>
        <div className="xl:w-[1200px] lg:w-[1000px] md:w-[500px] w-[350px] ">
          <MapContainer
            center={[-6.9, 107.58]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data_monitoring && (
              <LocationMarker marker={data_monitoring.results} />
            )}
          </MapContainer>
        </div>
        {/* <AppBaseDatePicker
          label="Pilih Tanggal"
          date={dateMonitoriong}
          name="monitoring"
          onChange={onChangeDate}
        /> */}
      </div>
    </AppBaseCard>
  );
};

export default HomeIndex;
