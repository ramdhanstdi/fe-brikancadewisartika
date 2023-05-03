"use client";

// React
import { FC, useEffect, useState } from "react";

// Schema Yup
import { validationInputData } from "@/features/merchant/ui/MerchantIndex/schema.map";

// Formik
import { Form, Formik } from "formik";

// Leaflet
import { MapContainer, TileLayer } from "react-leaflet";

// Components
import {
  AppBaseButton,
  AppBaseCard,
  AppBaseDatePicker,
  AppBaseInput,
  AppBaseLabel,
  AppBaseSelect,
} from "@/features/app/components";
import { LocationMarker } from "@/features/merchant/ui/MerchantIndex/components";

// Custom Hooks
import { useMerchant } from "@/features/merchant/hooks/merchant.hooks";

// Constant
import {
  optionConclustion,
  optionRating,
  optioGrupArea,
} from "@/features/merchant/constants";

// next
import { useSearchParams, useRouter } from "next/navigation";

const EditListIndex: FC = () => {
  const navigation = useSearchParams();
  const { push } = useRouter();
  const dataQueryParam = new URLSearchParams(navigation).get("data");
  const { updateMerchant, update_loading } = useMerchant();
  const [position, setPosition] = useState(null);
  const [image, setImage] = useState();
  const [imageURL, setImageUrl] = useState("");

  const initialValues = JSON.parse(dataQueryParam);

  const [dateVisit, setDateVisit] = useState(
    new Date(initialValues?.visit_date)
  );
  const [dateRealisation, setDateRealisation] = useState(
    new Date(initialValues?.realitaion_date)
  );
  const [newLat, setNewLat] = useState(initialValues.lat);
  const [newLng, setNewLng] = useState(initialValues.lng);
  /**
   * @description handle change image
   *
   * @return {void}
   */
  const onChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  /**
   * @description handle on Submit
   *
   * @return {void}
   */
  const onSubmitForm = async (values: typeof initialValues) => {
    if (image) {
      const formData = new FormData();
      formData.append("id", initialValues.id);
      formData.append("images", image);
      formData.append("grup_area", values.grup_area);
      formData.append("name_merchant", values.name_merchant);
      formData.append("category", values.category);
      formData.append("address", values.address);
      formData.append("conclusion", values.conclusion);
      formData.append("rating", values.rating);
      formData.append("lng", newLng.toString());
      formData.append("lat", newLat.toString());
      formData.append("visit_date", dateVisit.getTime());
      formData.append("realitaion_date", dateRealisation.getTime());

      await updateMerchant({ body: formData }).unwrap();
      push("/list");
    }
  };

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);
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
            <LocationMarker
              newLat={newLat}
              newLng={newLng}
              position={position}
              setNewLat={setNewLat}
              setNewLng={setNewLng}
              setPosition={setPosition}
            />
          </MapContainer>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validationSchema={validationInputData}
      >
        <Form>
          <div className="grid-template">
            <div className="lg:col-start-2 lg:col-span-5 col-span-4">
              <AppBaseInput
                label="Nama Merchant"
                type="text"
                name="name_merchant"
                placeholder="Input Merchant"
              />
              <AppBaseInput
                label="Kategori"
                type="text"
                name="category"
                placeholder="Input Kategori"
              />
              <AppBaseInput
                label="Alamat Merchant"
                type="text"
                name="address"
                placeholder="Input Alamat"
              />
              <AppBaseSelect
                name="conclusion"
                label="Pilih Hasil Kunjungan"
                option={optionConclustion}
              />
              <AppBaseSelect
                name="rating"
                label="Pilih Rating Bintang"
                option={optionRating}
              />
              <AppBaseSelect
                name="grup_area"
                label="Pilih Grup Area"
                option={optioGrupArea}
              />
              <AppBaseDatePicker
                label="Tanggal Kunjungan"
                date={dateVisit}
                name="visit"
                onChange={(date) => setDateVisit(date)}
              />
              <AppBaseDatePicker
                label="Tanggal Realisasi"
                date={dateRealisation}
                name="realisation"
                onChange={(date) => setDateRealisation(date)}
              />
            </div>
            <div className="flex flex-col items-center gap-5 justify-center order-1 lg:order-2 lg:col-start-8 col-span-4 ">
              <AppBaseLabel color="text-[#2C3333]" size={"lg"}>
                Upload Ulang foto
              </AppBaseLabel>
              <div className="w-[180px] h-[320px] flex items-center bg-slate-300">
                <img src={imageURL || "/images/defaultphoto.jpg"} alt="photo" />
              </div>
              <AppBaseInput
                type="file"
                name="images"
                className="h-16"
                onChange={onChangeImage}
              />
              <AppBaseButton
                type="submit"
                variant="confirm"
                className="lg:mt-6 md:mt-5 mt-4 h-16 flex items-center"
                isLoading={update_loading}
              >
                Simpan
              </AppBaseButton>
            </div>
          </div>
        </Form>
      </Formik>
    </AppBaseCard>
  );
};

export default EditListIndex;
