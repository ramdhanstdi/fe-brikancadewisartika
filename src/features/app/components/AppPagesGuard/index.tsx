"use client";

import { FC, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

type PageProps = { [key: string]: any };

const AppPageGuard = <P extends PageProps>(
  WrappedComponent: ComponentType<P>
): FC<P> => {
  const AuthenticatedComponent: FC<P> = (props) => {
    const router = useRouter();
    const isAuthenticated = !!getCookie("token"); // Check if token exists

    if (!isAuthenticated) {
      router.push("/auth/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthenticatedComponent;
};

export default AppPageGuard;
