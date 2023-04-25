import * as Yup from "yup";

export const validationLogin = Yup.object().shape({
  username: Yup.string().required("Username can't empty"),
  password: Yup.string().required("Password can't empty"),
});
