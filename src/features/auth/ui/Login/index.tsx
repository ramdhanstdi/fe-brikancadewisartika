import { FC } from "react";
import { validationLogin } from "./schema.yup";
import { Formik, Form } from "formik";
import AppBaseInput from "@/features/app/components/base/AppBaseInput";
import AppBaseButton from "@/features/app/components/base/AppBaseButton";
import Image from "next/image";
import AppBaseLabel from "@/features/app/components/base/AppBaseLabel";
import { useAuth } from "../../hooks/auth.hooks";
import { useDispatch } from "react-redux";
import { set_auth } from "../../redux/slice.auth";
import { useRouter } from "next/navigation";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // Custom Hook
  const { auth_login, auth_isLoginLoading } = useAuth();

  /**
   * @description Initial values formik
   *
   * @return {void}
   */
  const initialValues = {
    username: "",
    password: "",
  };

  /**
   * @description handle onSubmit
   *
   * @return {void}
   */
  const onSubmit = async (values: typeof initialValues) => {
    const response = await auth_login({ body: values }).unwrap();
    dispatch(set_auth(response.results));
    router.push("/");
  };

  return (
    <div className="grid-template items-center md:h-[96vh]">
      <div className="col-span-4 lg:order-1 order-2 p-2">
        <AppBaseLabel
          size={"lg"}
          className="font-bold flex flex-col justify-center items-center gap-4"
        >
          <img
            src="/images/bri-merchant.png"
            alt="logo"
            className="md:h-[100px] h-[60px]"
          />
          Selamat datang di website <br /> BRI Merchant Kanca Dewi Sartika
          <br />
          Silahkan Login untuk melanjutkan
        </AppBaseLabel>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationLogin}
        >
          {() => (
            <Form>
              <AppBaseInput
                type="text"
                name="username"
                label="Username"
                className="h-16"
              />
              <AppBaseInput
                type="password"
                name="password"
                label="Password"
                className="h-16"
              />
              <AppBaseButton
                type="submit"
                variant="confirm"
                className="lg:mt-6 md:mt-5 mt-4 h-16 flex items-center"
                isLoading={auth_isLoginLoading}
              >
                Login
              </AppBaseButton>
            </Form>
          )}
        </Formik>
      </div>
      <div className="lg:col-span-8 col-span-4 lg:order-2 order-1 md:h-full max-h-[400px] lg:-mt-44">
        <Image
          src="/images/login.svg"
          alt="loginimage"
          width={700}
          height={500}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
};

export default Login;
