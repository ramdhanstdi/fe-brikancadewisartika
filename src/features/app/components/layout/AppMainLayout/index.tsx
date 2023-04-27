"use client";

import { FC, ReactNode, useState } from "react";
import AppPageGuard from "../../AppPagesGuard";
import { Navbar, Sidebar } from "./components";

interface AppMainLayoutProps {
  children: ReactNode;
}

const AppMainLayout: FC<AppMainLayoutProps> = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="min-h-[100vh] bg-zinc-100">
      <div className="bg-white shadow-sm">
        <Navbar onMenuButtonClick={() => setShowSideBar((prev) => !prev)} />
      </div>

      <div className="grid-template">
        <div className="md:col-span-2 ">
          <Sidebar open={showSideBar} />
        </div>
        <div className="md:mt-20 mt-10 lg:col-span-10 md:col-span-6 col-span-4 ">
          {children}
        </div>
      </div>
    </div>
  );
};

AppMainLayout.displayName = "AppMainLayout";

export default AppPageGuard(AppMainLayout);
