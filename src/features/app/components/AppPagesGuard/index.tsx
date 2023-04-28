"use client";

// React
import { FC, ComponentType } from "react";

// Next
import { useRouter } from "next/navigation";

// Cookies
import { getCookie } from "cookies-next";

// Jwt
import jwt_decode from "jwt-decode";

// react-redux
import { useDispatch } from "react-redux";

// Slice
import { auth_logout } from "@/features/auth/redux/slice.auth";

type PageProps = { [key: string]: any };

const AppPageGuard = <P extends PageProps>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const AuthenticatedComponent: FC<P> = (props) => {
    let role = "";
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = getCookie("token"); // Check if token exists

    if (!isAuthenticated) {
      router.push("/auth/login");
      return null;
    }

    if (isAuthenticated) {
      const decoded = jwt_decode(isAuthenticated);
      const now = Math.floor(new Date().getTime() / 1000.0) + 25200;
      if (decoded.exp < now) {
        dispatch(auth_logout());
        router.push("/auth/login");
      }
      role = decoded.role;
    }

    return <WrappedComponent {...props} role={role} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthenticatedComponent;
};

export default AppPageGuard;
