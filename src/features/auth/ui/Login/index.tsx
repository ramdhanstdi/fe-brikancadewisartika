import { FC, useEffect } from "react";
import { validationLogin } from "./schema.yup";
import { Formik, Form } from "formik";
import AppBaseInput from "@/features/app/components/base/AppBaseInput";
import AppBaseButton from "@/features/app/components/base/AppBaseButton";
import Image from "next/image";
import AppBaseLabel from "@/features/app/components/base/AppBaseLabel";
import Link from "next/link";
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
    email: "",
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
    <div className="grid-template items-center h-[96vh]">
      <div className="col-span-4 lg:order-1 order-2 p-2">
        <AppBaseLabel size={"lg"} className="font-bold">
          Login
        </AppBaseLabel>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationLogin}
        >
          {() => (
            <Form>
              <AppBaseInput type="text" name="email" label="Email" />
              <AppBaseInput type="password" name="password" label="Password" />
              <AppBaseButton
                type="submit"
                variant="confirm"
                className="lg:mt-6 md:mt-5 mt-4"
                isLoading={auth_isLoginLoading}
              >
                Login
              </AppBaseButton>
            </Form>
          )}
        </Formik>
        <AppBaseLabel className="lg:mt-8 mt-4" size={"md"}>
          Dont have account?
          <Link href={"/auth/register"} className="text-blue-500">
            Register here
          </Link>
        </AppBaseLabel>
      </div>
      <div className="lg:col-span-8 col-span-4 lg:order-2 order-1">
        <Image
          src="/login.svg"
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
