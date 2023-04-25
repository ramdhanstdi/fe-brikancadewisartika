import * as Yup from "yup";

export const validationLogin = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email can't empty"),
  password: Yup.string().required("Password can't empty"),
});
