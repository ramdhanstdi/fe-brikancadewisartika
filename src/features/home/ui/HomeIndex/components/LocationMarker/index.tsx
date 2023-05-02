"use client";

import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

const LocationMarker = ({ marker }) => {
  return marker.map((data) => {
    const customIcon = new Icon({
      iconSize: [30, 45],
      iconUrl: data.profile.profile[0].image_url,
    });
    return (
      <Marker key={data.id} position={[data.lat, data.lng]} icon={customIcon}>
        <Popup>
          <div className="text-[14px] font-bold">
            Merchant: {data.name_merchant}
          </div>
          RM: {data.profile.profile[0].fullname}
        </Popup>
      </Marker>
    );
  });
};

export { LocationMarker };
