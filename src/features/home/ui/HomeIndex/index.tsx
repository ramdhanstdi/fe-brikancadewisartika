"use client";

// React
import { FC } from "react";

// Leaflet
import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Component
import { AppBaseCard, AppBaseLabel } from "@/features/app/components/base";

function LocationMarker() {
  const DATA_DUMMY = [
    {
      nama: "Rizal",
      lat: -6.9,
      lng: 107.58,
      urlIcon:
        "https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2022/06/07182950/moh-rizal-BRI-scaled.jpg",
    },
    {
      nama: "Rizal",
      lat: -6.9231,
      lng: 107.58323,
      urlIcon: "https://fajar.co.id/wp-content/uploads/2022/08/Rizal-Ramli.jpg",
    },
    {
      nama: "Rizal",
      lat: -6.965755,
      lng: 107.563458,
      urlIcon:
        "https://images.saymedia-content.com/.image/t_share/MTc2MjYyNTAzNDI3NDgyNzk3/jose-rizals-animosity-towards-the-chinese.jpg",
    },
    {
      nama: "Rizal",
      lat: -6.123319,
      lng: 107.534218,
      urlIcon:
        "https://storage.nu.or.id/storage/post/16_9/mid/rizal-maula-pcinu-india_1675130840.webp",
    },
    {
      nama: "Rizal",
      lat: -6.34129,
      lng: 107.1233458,
      urlIcon:
        "https://accounting-feb.umy.ac.id/wp-content/uploads/2020/08/rizal-400x400.jpg",
    },
  ];

  return DATA_DUMMY.map((data) => {
    const customIcon = new Icon({
      iconSize: [30, 45],
      iconUrl: data.urlIcon,
    });

    return (
      <Marker position={[data.lat, data.lng]} icon={customIcon}>
        <Popup>
          <div className="text-[16px] font-bold">{data.nama}</div>
        </Popup>
      </Marker>
    );
  });
}

const HomeIndex: FC = () => {
  return (
    <AppBaseCard>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <AppBaseLabel size={"lg"}>
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
            <LocationMarker />
          </MapContainer>
        </div>
      </div>
    </AppBaseCard>
  );
};

export default HomeIndex;
