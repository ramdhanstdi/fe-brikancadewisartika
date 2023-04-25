"use client";

// React
import { FC, useState } from "react";

// Leaf Css
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Leaflet
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [newLat, setNewLat] = useState(-6.9004405);
  const [newLng, setNewLng] = useState(107.5887222);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setNewLat(e.latlng.lat);
      setNewLng(e.latlng.lng);
    },
    dragend: (e) => {
      const center = e.target.getCenter();
      setNewLat(center.lat);
      setNewLng(center.lng);
    },
  });

  const customIcon = new Icon({
    iconSize: [30, 45],
    iconUrl: "./images/location.png",
  });

  return position === null ? null : (
    <Marker position={[newLat, newLng]} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapIndex: FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="lg:w-[1000px] md:w-[700px] w-[400px] ">
        <MapContainer
          center={[-6.9004405, 107.5887222]}
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
  );
};

export default MapIndex;
