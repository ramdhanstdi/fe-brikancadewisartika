import * as Yup from "yup";

export const validationInputData = Yup.object().shape({
  conclusion: Yup.string().required("Hasil Kunjungan belum di pilih"),
  grup_area: Yup.string().required("Grup area belum di pilih"),
  rating: Yup.string().required("Rating belum di pilih"),
  name_merchant: Yup.string().required("Nama Merchant tidak boleh kosong"),
  category: Yup.string().required("Kategoru tidak boleh kosong"),
  address: Yup.string().required("Alamat tidak boleh kosong"),
  images: Yup.mixed().required("Foto belum di pilih"),
});
