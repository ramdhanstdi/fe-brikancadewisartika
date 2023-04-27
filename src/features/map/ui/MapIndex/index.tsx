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
import {
  AppBaseButton,
  AppBaseCard,
  AppBaseInput,
  AppBaseLabel,
  AppBaseSelect,
} from "@/features/app/components";
import { Form, Formik } from "formik";

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

  const handleDragEnd = (e) => {
    const center = e.target.getLatLng();
    setPosition(center);
    setNewLat(center.lat);
    setNewLng(center.lng);
    console.log(center);
  };

  const customIcon = new Icon({
    iconSize: [30, 45],
    iconUrl: "./images/location.png",
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
}

const MapIndex: FC = () => {
  const optionConclustion = [
    { value: "edc", label: "Berminat EDC" },
    { value: "qris", label: "Berminat QRIS" },
    { value: "edc&qris", label: "Berminat EDC & QRIS" },
    { value: "followup", label: "Perlu Follow Up Kembali" },
  ];
  const optionRating = [
    { value: "sangatramai", label: "Sangat Ramai" },
    { value: "ramai", label: "Ramai" },
    { value: "cukupramai", label: "Cukup Ramai" },
    { value: "kurangramai", label: "Kurang Ramai" },
    { value: "tidakramai", label: "Tidak Ramai" },
  ];

  const initialValues = {};

  /**
   * @description handle Select Conclusion
   *
   * @return {void}
   */
  const onChangeConclusion = (event) => {
    setConclusion(event.target.value);
  };
  /**
   * @description handle Select Conclusion
   *
   * @return {void}
   */
  const onChangeRating = (event) => {
    setRating(event.target.value);
  };

  /**
   * @description handle on Submit
   *
   * @return {void}
   */
  const onSubmitForm = (values: typeof initialValues) => {
    console.log(values);
  };
  return (
    <AppBaseCard>
      <div className="w-full flex justify-center items-center">
        <div className="lg:w-[1000px] md:w-[700px] w-[400px] ">
          <AppBaseLabel size={"lg"} className="mb-3">
            Klik Map dan Geser Untuk Mengatur Koordinat
          </AppBaseLabel>
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
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        <Form>
          <AppBaseInput
            label="Nama Merchant"
            type="text"
            name="name_merchant"
          />
          <AppBaseInput label="Kategori" type="text" name="category" />
          <AppBaseInput label="Alamat Merchant" type="text" name="address" />
          <AppBaseSelect
            name="conclusion"
            label="Hasil Kunjungan"
            option={optionConclustion}
          />
          <AppBaseSelect
            name="rating"
            label="Rating Bintang"
            option={optionRating}
          />
          <AppBaseButton
            type="submit"
            variant="confirm"
            className="lg:mt-6 md:mt-5 mt-4 h-16 flex items-center"
            isLoading={false}
          >
            Simpan
          </AppBaseButton>
        </Form>
      </Formik>
    </AppBaseCard>
  );
};

export default MapIndex;
