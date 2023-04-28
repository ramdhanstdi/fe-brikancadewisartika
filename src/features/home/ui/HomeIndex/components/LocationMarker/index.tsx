"use client";

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

const LocationMarker = ({ marker }) => {
  return marker.map((data) => {
    const customIcon = new Icon({
      iconSize: [30, 45],
      iconUrl: "/images/location.png",
    });
    return (
      <Marker position={[data.lat, data.lng]} icon={customIcon}>
        <Popup>
          <div className="text-[16px] font-bold">
            {data.profile.profile[0].fullname}
          </div>
        </Popup>
      </Marker>
    );
  });
};

export { LocationMarker };
