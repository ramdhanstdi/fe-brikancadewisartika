// React
import { useCallback } from "react";

// React Redux
import { useDispatch } from "react-redux";

// Next
import Link from "next/link";

// Component
import { AppBaseLabel } from "@/features/app/components/base";

// Slice
import { auth_logout } from "@/features/auth/redux/slice.auth";

// Hooks
import { useRouter } from "next/navigation";
import {
  FaDesktop,
  FaDoorOpen,
  FaListAlt,
  FaPencilAlt,
  FaUserAlt,
} from "react-icons/fa";

type Props = {
  open: boolean;
  setOpen(open: boolean): void;
  role: number;
};
const Sidebar = ({ open, role }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logout = useCallback(() => {
    dispatch(auth_logout());
    router.push("/auth/login");
  }, [dispatch]);
  return (
    <div
      className={`shadow-md flex flex-col justify-between bg-indigo-700 text-zinc-50 md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[100vh] h-full w-[300px] transition-transform .3s ease-in-out md:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="md:sticky  top-0 md:top-16 mt-2">
        {/* nav items */}
        <div className="py-2 flex flex-col h-[88vh] justify-between mt-4 p-4">
          <div className="flex flex-col gap-4">
            <Link className={`${role === 1 ? "block" : "hidden"}`} href="/">
              <AppBaseLabel
                size={"md"}
                className="item-center border-b-2 border-indigo-600 flex gap-3  hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                <FaDesktop size={24} />
                Monitoring
              </AppBaseLabel>
            </Link>
            <Link
              href="/inputdata"
              className={`${role !== 1 ? "block" : "hidden"}`}
            >
              <AppBaseLabel
                size={"md"}
                className="item-center border-b-2 border-indigo-600 flex gap-3 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                <FaPencilAlt size={24} />
                Input Data
              </AppBaseLabel>
            </Link>
            <Link href="/list">
              <AppBaseLabel
                size={"md"}
                className="item-center border-b-2 border-indigo-600 flex gap-3 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                <FaListAlt size={24} />
                Data List
              </AppBaseLabel>
            </Link>
            <Link
              className={`${role === 1 ? "block" : "hidden"}`}
              href="/register"
            >
              <AppBaseLabel
                size={"md"}
                className="item-center border-b-2 border-indigo-600 flex gap-3 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
              >
                <FaUserAlt size={24} />
                Register Account
              </AppBaseLabel>
            </Link>
          </div>
          <AppBaseLabel
            size={"md"}
            className="item-center bg-indigo-600 flex gap-3 hover:bg-indigo-200 hover:bg-indigo-200 p-2 hover:text-indigo-900 rounded-md"
            onClick={logout}
          >
            <FaDoorOpen size={24} />
            Logout
          </AppBaseLabel>
        </div>
      </nav>
    </div>
  );
};
export { Sidebar };
