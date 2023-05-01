import { Icon } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = ({
  position,
  setPosition,
  newLat,
  setNewLat,
  newLng,
  setNewLng,
}: any) => {
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

  const handleDragEnd = (e) => {
    const center = e.target.getLatLng();
    setPosition(center);
    setNewLat(center.lat);
    setNewLng(center.lng);
    console.log(center);
  };

  const customIcon = new Icon({
    iconSize: [30, 45],
    iconUrl: "/images/location.png",
  });

  return position === null ? null : (
    <Marker
      position={[newLat, newLng]}
      draggable
      eventHandlers={{ dragend: handleDragEnd }}
      icon={customIcon}
    >
      <Popup>Lokasi disimpan</Popup>
    </Marker>
  );
};

export { LocationMarker };
