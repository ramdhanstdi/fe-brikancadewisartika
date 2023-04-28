import * as Yup from "yup";

export const validationRegister = Yup.object().shape({
  fullname: Yup.string().required("Fullname tidak boleh kosong"),
  pn: Yup.string().required("PN tidak boleh kosong"),
  username: Yup.string().min(6).required("Username tidak boleh kosong"),
  password: Yup.string().required("Password tidak boleh kosong"),
  images: Yup.mixed().required("icon tidak boleh kosong"),
});
