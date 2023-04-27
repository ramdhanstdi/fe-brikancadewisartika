"use client";

// React
import { FC, useEffect, useState } from "react";

// Formik
import { Formik, Form } from "formik";

// Schema
import { validationRegister } from "./schema.register";

// Component
import {
  AppBaseButton,
  AppBaseCard,
  AppBaseInput,
  AppBaseLabel,
} from "@/features/app/components/base";

// Custom Hook
import { useRegister } from "../../hooks/register.hooks";

interface RegisterIndexProps {}

const RegisterIndex: FC<RegisterIndexProps> = () => {
  const { register, register_loading } = useRegister();
  const [image, setImage] = useState();
  const [imageURL, setImageUrl] = useState("");
  const initialValues = {
    fullname: "",
    username: "",
    password: "",
    images: "",
  };

  /**
   * @description handle change image
   *
   * @return {void}
   */
  const onChangeImage = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  /**
   * @description handle onsubmit
   *
   * @return Promise {void}
   */
  const onSubmit = (values: typeof initialValues) => {
    if (image) {
      const formData = new FormData();
      formData.append("images", image);
      formData.append("fullname", values.fullname);
      formData.append("pn", values.pn);
      formData.append("username", values.username);
      formData.append("password", values.password);
      register({ body: formData }).unwrap();
    }
  };
  return (
    <AppBaseCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationRegister}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="grid-template">
              <div className="lg:col-span-5 order-2 lg:order-1 col-span-4">
                <AppBaseInput
                  type="text"
                  name="fullname"
                  label="Name RM"
                  className="h-16"
                  placeholder="Input Fullname"
                />
                <AppBaseInput
                  type="text"
                  name="pn"
                  label="PN"
                  className="h-16"
                  placeholder="Input PN"
                />
                <AppBaseInput
                  type="text"
                  name="username"
                  label="Username"
                  className="h-16"
                  placeholder="Input Username"
                />
                <AppBaseInput
                  type="password"
                  name="password"
                  label="Password"
                  className="h-16"
                  placeholder="Input Password"
                />

                <AppBaseButton
                  type="submit"
                  variant="confirm"
                  className="lg:mt-6 md:mt-5 mt-4 h-16 flex items-center"
                  isLoading={register_loading}
                >
                  Register
                </AppBaseButton>
              </div>
              <div className="flex flex-col items-center gap-5 justify-center order-1 lg:order-2 lg:col-start-8 col-span-4 ">
                <AppBaseLabel size={"lg"}>
                  Icon user ini di dalam maps akan di tampilkan seperti ini
                </AppBaseLabel>
                <div className="w-[60px] h-[90px]">
                  <img src={imageURL || "/images/location.png"} alt="photo" />
                </div>
                <AppBaseInput
                  type="file"
                  name="images"
                  className="h-16"
                  onChange={onChangeImage}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </AppBaseCard>
  );
};

export default RegisterIndex;
