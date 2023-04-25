import AppBaseLabel from "@/features/app/components/base/AppBaseLabel";
import { auth_logout } from "@/features/auth/redux/slice.auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Sidebar = ({ open }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    dispatch(auth_logout());
    router.push("/");
  }, [dispatch]);
  return (
    <div
      className={`flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[100vh] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="md:sticky  top-0 md:top-16 mt-2">
        {/* nav items */}
        <div className="py-2 flex flex-col h-[88vh] justify-between mt-4 p-4">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <AppBaseLabel
                size={"md"}
                className="bg-indigo-600 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                Monitoring
              </AppBaseLabel>
            </Link>
            <Link href="/inputdata">
              <AppBaseLabel
                size={"md"}
                className="bg-indigo-600 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                Input Data
              </AppBaseLabel>
            </Link>
            <Link href="/List">
              <AppBaseLabel
                size={"md"}
                className="bg-indigo-600 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                Data List
              </AppBaseLabel>
            </Link>
            <Link href="/List">
              <AppBaseLabel
                size={"md"}
                className="bg-indigo-600 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                Register Account
              </AppBaseLabel>
            </Link>
          </div>
          <AppBaseLabel
            size={"md"}
            className="bg-indigo-600 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
            onClick={logout}
          >
            Logout
          </AppBaseLabel>
        </div>
      </nav>
    </div>
  );
};
export { Sidebar };
