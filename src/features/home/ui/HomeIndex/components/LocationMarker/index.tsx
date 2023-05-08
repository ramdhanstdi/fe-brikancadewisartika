"use client";

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import defaultMap from "../../../../../../../public/images/location.png";

const LocationMarker = ({ marker }) => {
  console.log(marker);

  return marker.map((data) => {
    // Bg condition
    const bgConclution = () => {
      if (data.conclusion.includes("Follow")) return "bg-yellow-500";
      if (data.conclusion.includes("Tidak")) return "bg-red-500";
      return "bg-green-500";
    };

    // Format Date
    const dateFormated = () => {
      const weekday = [
        "Minggu ",
        "Senin ",
        "Selasa ",
        "Rabu ",
        "Kamis ",
        "Jumat ",
        "Sabtu ",
      ];
      const date = new Date(data.visit_date);
      const day = weekday[date.getDay()];
      return day + date.toLocaleDateString("id-ID");
    };
    const customIcon = new Icon({
      iconSize: [30, 45],
      iconUrl: data.profile.profile[0].image_url || defaultMap,
    });
    return (
      <Marker key={data.id} position={[data.lat, data.lng]} icon={customIcon}>
        <Popup>
          <div className={`${bgConclution()} w-full rounded-md p-2`}>
            <div
              className={`${
                bgConclution() === "bg-yellow-500"
                  ? "text-[#232323]"
                  : "text-[#fafafa]"
              }`}
            >
              {data.conclusion}
            </div>
          </div>
          <div className="text-[14px] font-bold">
            Merchant: {data.name_merchant}
          </div>
          <div>RM: {data.profile.profile[0].fullname}</div>
          Visit: {dateFormated()}
        </Popup>
      </Marker>
    );
  });
};

export { LocationMarker };
